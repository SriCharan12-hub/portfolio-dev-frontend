# Production Deployment Guide

## Overview
This portfolio app consists of:
- **Frontend**: React + Vite (deployed to hosting service)
- **Backend**: Node.js + Express (deployed on Render)

## Current Deployment Status

### Backend
- **Status**: ✅ Live on Render
- **URL**: https://portfolio-dev-backend-dvr0.onrender.com
- **Key Features**:
  - Contact form email via Resend
  - Rate limiting (10 requests per 15 minutes)
  - Bot protection with honeypot field
  - CORS configured for production

### Frontend
- **Build Output**: `./dist` folder ready for deployment
- **Optimizations**:
  - Code splitting (vendor-react, vendor-motion, vendor-three)
  - Minified with Terser
  - Gzipped assets
  - No source maps in production

## Deployment Steps

### 1. Frontend Hosting Options

#### Option A: Vercel (Recommended - easiest)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel --prod
```

#### Option B: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Option C: GitHub Pages
Update package.json with your repo:
```bash
npm run build
# Commit dist/ folder or use GitHub Actions
```

#### Option D: Render (same as backend)
1. Push code to GitHub
2. Create new Static Site on Render
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### 2. Environment Variables

After deploying frontend, update backend CORS setting on Render:

1. Go to Render Dashboard → Backend Service
2. Environment → Add Variable:
   - **Key**: `CORS_ORIGIN`
   - **Value**: Your frontend URL (e.g., `https://yourportfolio.com`)

### 3. Verify Production Setup

```bash
# Test from local machine
curl -X POST https://your-backend-url/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

Expected response:
```json
{ "message": "Message sent successfully!" }
```

## Build & Local Testing

### Build for Production
```bash
npm run build
```

This creates the `dist/` folder with optimized assets.

### Preview Production Build Locally
```bash
npm run preview
```

### Development Mode (with hot reload)
```bash
npm run dev
```

## Important Files

- **Frontend Config**: `vite.config.js`
- **Environment**: `.env.production`, `.env.development`
- **Backend**: `server/index.js`
- **Backend Env**: `server/.env`

## Production Checklist

- [ ] Backend deployed on Render with environment variables set
- [ ] Frontend built with `npm run build`
- [ ] Frontend deployed to hosting service
- [ ] CORS_ORIGIN updated in backend for frontend URL
- [ ] Contact form tested end-to-end
- [ ] Hero and 3D components loading correctly
- [ ] Performance optimized (check dist/ file sizes)
- [ ] No console errors in production

## Troubleshooting

### Contact Form Not Working
1. Check browser Network tab for failed requests
2. Verify CORS_ORIGIN in backend matches frontend URL
3. Check Render logs for backend errors
4. Ensure Resend API key is valid

### 3D Models Not Loading
1. Check public folder is deployed
2. Verify asset paths in components
3. Check browser DevTools Network tab

### Slow Page Load
- Check dist/ file sizes (especially vendor-three)
- Consider lazy loading 3D components
- Use CDN for static assets if needed

## Performance Optimization Tips

1. **Images**: Optimize and convert to WebP
2. **3D Models**: Compress GLB files
3. **Code Splitting**: Already configured via vite.config.js
4. **Lazy Loading**: Load 3D components only when visible

## Next Steps
1. Deploy frontend (choose platform above)
2. Update CORS_ORIGIN in Render backend
3. Test contact form end-to-end
4. Monitor performance and errors
5. Set up analytics (Google Analytics, etc.)
