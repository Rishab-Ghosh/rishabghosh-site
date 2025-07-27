# Rishab Ghosh - Personal Website

A modern, responsive personal website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling with dark mode support
- 📱 **Responsive design** that works on all devices
- 🌙 **Dark mode** with system preference detection
- ⚛️ **TypeScript** for type safety
- 🚀 **Fast performance** with optimized builds

## Pages

- **Home** (`/`) - Hero section and overview
- **About** (`/about`) - Personal information and skills
- **Projects** (`/projects`) - Project showcase
- **Contact** (`/contact`) - Contact information and form

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rishabghosh-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
rishabghosh-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Layout.tsx         # Main layout wrapper
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Colors and Styling
The website uses Tailwind CSS with a custom color scheme. You can modify the colors in `tailwind.config.ts`.

### Content
Update the content in each page component to match your personal information:
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content
- `app/projects/page.tsx` - Projects showcase
- `app/contact/page.tsx` - Contact information

### Dark Mode
The website includes automatic dark mode detection and a manual toggle. The theme preference is saved in localStorage.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect that you're using Next.js and set up the optimal build settings for you

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - UI library

## License

This project is open source and available under the [MIT License](LICENSE). 