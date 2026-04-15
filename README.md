# Portfolio Dev

A modern, interactive portfolio website built with React, Vite, Three.js, and Framer Motion.

## Features

- 🚀 **Fast Performance**: Built with Vite for lightning-fast dev experience and optimized production builds
- 🎨 **Smooth Animations**: Framer Motion for beautiful animations and transitions
- 🌐 **3D Elements**: Three.js integration for interactive 3D components
- 📨 **Contact Form**: Integrated backend with email notifications via Resend
- 🎯 **Responsive Design**: Mobile-first responsive design
- ⚡ **Code Splitting**: Optimized chunk splitting for faster load times
- 🛡️ **Bot Protection**: Honeypot field and rate limiting on contact form

## Tech Stack

- **Frontend**: React 19, Vite 8, Framer Motion, Three.js, Lucide React Icons
- **Backend**: Node.js, Express, Resend (email service)
- **Deployment**: Render (backend), Vercel/Netlify/Render (frontend)

## Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

### Development

```bash
# Terminal 1: Start frontend dev server (port 5173)
npm run dev

# Terminal 2: Start backend server (port 5000)
cd server
npm run dev
```

Visit http://localhost:5173 in your browser.

### Build for Production

```bash
npm run build
```

Production files go to `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── components/        # React components (Hero, About, Contact, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # CSS stylesheets
│   ├── assets/           # Images and 3D models
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── server/              # Backend server
│   ├── index.js        # Express server
│   └── .env           # Environment variables
├── public/            # Static files
├── vite.config.js    # Vite configuration
└── PRODUCTION_DEPLOYMENT.md  # Deployment guide

```

## Environment Variables

### Frontend
- `.env.development` - Dev environment (localhost:5000)
- `.env.production` - Production environment (Render backend)

### Backend

Create `server/.env`:
```
PORT=5000
RESEND_API_KEY=<your-resend-api-key>
OWNER_EMAIL=<your-email>
SENDER_EMAIL=<sender-email>
CORS_ORIGIN=<frontend-url>
```

## Deployment

**See [PRODUCTION_DEPLOYMENT.md](./PRODUCTION_DEPLOYMENT.md) for complete deployment instructions.**

Quick options:
- **Vercel**: `npm install -g vercel` then `vercel --prod`
- **Netlify**: `npm install -g netlify-cli` then `netlify deploy --prod --dir=dist`
- **Render**: Push to GitHub and create Static Site

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Performance Optimizations

- ✅ Code splitting: React, Three.js, and Framer Motion in separate chunks
- ✅ Minified with Terser
- ✅ Gzip compression
- ✅ No source maps in production
- ✅ Lazy loading of 3D components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
