import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import prisma from "@/lib/prisma";

function secureCompare(a: string, b: string): boolean {
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export async function POST(req: NextRequest) {
    const rawBody = await req.text();

    const signatureHeader = req.headers.get("workos-signature");
    const secret = process.env.WORKOS_WEBHOOK_SECRET;

    if (!signatureHeader || !secret) {
        return NextResponse.json(
            { error: "Missing signature or secret" },
            { status: 400 }
        );
    }

    // Parse signature header
    const signatureParts = signatureHeader
        .split(",")
        .reduce((acc: Record<string, string>, part) => {
            const [key, value] = part.trim().split("=");
            if (key && value) {
                acc[key] = value;
            }
            return acc;
        }, {});

    const timestamp = signatureParts["t"];
    const v1Signature = signatureParts["v1"];

    if (!timestamp || !v1Signature) {
        return NextResponse.json(
            { error: "Malformed signature header" },
            { status: 400 }
        );
    }

    const payloadToSign = `${timestamp}.${rawBody}`;
    const computedSignature = crypto
        .createHmac("sha256", secret)
        .update(payloadToSign, "utf8")
        .digest("hex");

    if (!secureCompare(computedSignature, v1Signature)) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const payload = JSON.parse(rawBody);

    if (payload.event === "user.created") {
        const userData = payload.data;

        console.log("✅ Webhook verified. User Created:", userData);

        await prisma.user.create({
            data: {
                workosId: userData.id,
                email: userData.email,
                firstName: userData.first_name,
                lastName: userData.last_name
            }
        });

        return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
}