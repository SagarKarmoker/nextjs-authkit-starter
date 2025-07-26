# Next.js AuthKit Starter

A modern authentication starter template for Next.js, featuring secure user management and a clean, extensible codebase. Built and maintained by [SagarKarmoker](https://github.com/SagarKarmoker).

## 📦 Available Versions

This starter template comes in two versions to suit different database preferences:

- **`main` branch**: MongoDB integration with Mongoose ODM
- **`prisma` branch**: PostgreSQL integration with Prisma ORM

---

> **You are currently viewing the [`main` branch] — this is the MongoDB version.**
>
> For the Prisma/PostgreSQL version, switch to the [`prisma` branch].

---

## 🚀 Features

- **Next.js 13+ App Router**: Leverages the latest Next.js features for performance and scalability.
- **Authentication Kit**: Modular authentication flow, ready for social and custom providers.
- **MongoDB Integration**: User data stored securely with Mongoose ODM.
- **API Route Structure**: Organized API endpoints for authentication and webhooks.
- **Dashboard Example**: Protected dashboard page for authenticated users.
- **Reusable Components**: Includes a customizable Navbar and global styles.
- **TypeScript**: Full type safety across the stack.
- **ESLint & Prettier**: Code quality and formatting enforced out of the box.

## 🏗️ Project Structure

```
nextjs-authkit-starter/
├── app/                # Next.js app directory (pages, API routes)
│   ├── api/            # API endpoints (e.g., webhooks)
│   ├── auth/           # Authentication pages and callbacks
│   └── dashboard/      # Example protected dashboard
├── components/         # Reusable React components
├── lib/                # Utility libraries (e.g., Mongoose connection)
├── models/             # Mongoose models (User)
├── public/             # Static assets
├── middleware.ts       # Auth middleware
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) instance (local or cloud) — *for this MongoDB version*

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SagarKarmoker/nextjs-authkit-starter.git
   cd nextjs-authkit-starter
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MongoDB `MONGODB_URI` and any authentication secrets.
   - For Prisma/PostgreSQL version, use `DATABASE_URL` instead of `MONGODB_URI`.

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🔐 Authentication

- Built-in authentication flow with extensible provider support.
- User data is securely stored in MongoDB via Mongoose ODM (this version).
- Example protected routes (e.g., `/dashboard`).

## 🧩 Customization

- Add new authentication providers in `app/auth/`.
- Extend the `User` model in `models/User.model.ts` (this version) or `prisma/schema.prisma` (Prisma version).
- Customize UI components in `components/`.

## 🧪 Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npm run lint` – Run ESLint

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 🔄 Switching Between Versions

To switch between MongoDB and PostgreSQL versions:

1. **For MongoDB version**: Checkout the `main` branch
   ```bash
   git checkout main
   ```

2. **For PostgreSQL version**: Checkout the `prisma` branch
   ```bash
   git checkout prisma
   ```

## 📄 License

This project is licensed under the MIT License.

---

> Built with ❤️ by [SagarKarmoker](https://github.com/SagarKarmoker)