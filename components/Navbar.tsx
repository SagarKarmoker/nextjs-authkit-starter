"use client";
import { useAuth } from '@workos-inc/authkit-nextjs/components';
import Link from 'next/link';

export default function Navbar() {
    const { user } = useAuth();

    return (
        <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition">
                    MyApp
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                    About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                    Contact
                </Link>
            </div>
            <div>
                {user ? (
                    <Link
                        href="/dashboard"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <Link
                        href="/auth"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}
