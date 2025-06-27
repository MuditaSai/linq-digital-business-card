# LINQ - Digital Business Card

> Create beautiful, shareable digital business cards that work seamlessly with Apple Wallet. Connect with others instantly and track your networking success.

## 🚀 Project Overview

LINQ is a modern digital business card platform built with Next.js 15, TypeScript, and Tailwind CSS. This project enables users to create customizable digital business cards, share them via QR codes or URLs, and track engagement analytics.

### ✨ Key Features (Planned)

- 🎨 **Customizable Templates** - Multiple professional card designs
- 📱 **Apple Wallet Integration** - Add cards directly to Apple Wallet
- 📊 **Privacy-First Analytics** - Track card views and link clicks
- 🔗 **Instant Sharing** - QR codes, URLs, and vCard export
- 🌐 **PWA Support** - Works offline and installable
- 🎯 **No Account Required** - Create cards without registration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Vercel KV / Redis (planned)
- **Analytics**: Privacy-focused tracking (planned)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MuditaSai/linq-digital-business-card.git
   cd linq-digital-business-card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🚀 Deployment

This project is configured for automatic deployment on Vercel:

- **Production**: Deploys automatically on pushes to `main` branch
- **Preview**: Generates preview URLs for pull requests
- **CI/CD**: GitHub Actions run tests and checks on every commit

### Manual Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel --prod`

## 🌍 Environment Variables

See `.env.example` for required environment variables. Key variables:

- `NEXT_PUBLIC_APP_URL` - Your application URL
- `DATABASE_URL` - Database connection (for future features)
- `PASSKIT_API_KEY` - Apple Wallet integration (for future features)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using Next.js and TypeScript**
