# Kupennia Cleaning Services

A professional cleaning business website built with Next.js, TypeScript, and Tailwind CSS for Harare, Zimbabwe.

## Features

- 🏠 **Homepage** - Attractive hero section with service highlights
- 🧹 **Services Page** - Detailed information about all cleaning services
- 📖 **About Page** - Company story and values
- 📞 **Contact Page** - Contact form and business information
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful, professional design
- ⚡ **Fast Performance** - Built with Next.js for optimal speed

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
└── public/             # Static assets
```

## Customization

### Update Contact Information

Edit the contact information in:
- `app/contact/page.tsx` - Contact page details
- `components/Footer.tsx` - Footer contact info
- `app/page.tsx` - Homepage contact CTA

### Update Services

Modify services in:
- `app/services/page.tsx` - Services listing
- `app/page.tsx` - Homepage service highlights

### Styling

The project uses Tailwind CSS. Customize colors in `tailwind.config.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## License

This project is private and proprietary.

