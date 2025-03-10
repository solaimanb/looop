# Next.js Starter Template

A professional, production-ready starter template for Next.js projects with TypeScript, Tailwind CSS, shadcn/ui, NextAuth.js, Prisma, and more.

## Features

- ⚡ Next.js 14 with App Router
- 🔒 Authentication with NextAuth.js
- 🎨 UI Components with shadcn/ui
- 💅 Styling with Tailwind CSS
- 📦 State Management with Zustand
- 🗃️ Database with Prisma & PostgreSQL
- ✨ Type Safety with TypeScript
- 📝 Linting with ESLint
- 💖 Code Formatting with Prettier
- 🐶 Git Hooks with Husky
- 🧪 Testing with Jest & React Testing Library

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nextjs-starter-template.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the environment variables:
   ```bash
   cp .env.example .env
   ```

4. Set up your database and update the DATABASE_URL in .env

5. Generate Prisma Client:
   ```bash
   npm run prisma:generate
   ```

6. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

7. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/                    # App router pages and API routes
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── ...                # Other pages
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   └── ...               # Other components
├── lib/                   # Utility functions and shared logic
├── hooks/                 # Custom React hooks
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run format` - Format code with Prettier

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.