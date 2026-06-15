# Installation & Deployment Guide

## System Requirements

- **Node.js**: 18.17 or later (download from https://nodejs.org)
- **npm**: 9.6+ or yarn/pnpm
- **Git** (optional, for version control)
- **A code editor** (VS Code recommended)

---

## Local Installation

### Step 1: Install Node.js

Download and install Node.js from https://nodejs.org (LTS version recommended)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Extract Project Files

Extract all files to your desired location.

### Step 3: Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

This will install all required packages (takes 2-5 minutes depending on internet speed).

### Step 4: Create Image Folder Structure

```bash
mkdir -p public/images/properties/{ayat,ayat-villa,legehare,cmc,bole-atlas,bole-atlas-villa,teklehaimanot,hayehulet,hayehulet-res}
```

### Step 5: Add Your Images

Place your property images in the created folders.

### Step 6: Update Property Data

Edit `src/lib/properties.ts` with your property information.

### Step 7: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

### Build the Project

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Test Production Build Locally

```bash
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Deployment Options

### Option 1: Vercel (Recommended - Easy)

Vercel is optimized for Next.js and offers free hosting.

#### Via Dashboard:
1. Go to https://vercel.com
2. Sign up with GitHub, GitLab, or Bitbucket
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

#### Via CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Pros**: Free, automatic deployments, custom domain support
**Cons**: Limited free tier resources

---

### Option 2: Netlify

Another popular static hosting option.

1. Go to https://netlify.com
2. Click "Add new site"
3. Choose "Import an existing project"
4. Connect your Git repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Deploy

**Pros**: Free tier, good performance
**Cons**: Limited monthly bandwidth on free tier

---

### Option 3: Self-Hosted (VPS)

For platforms like DigitalOcean, AWS, Linode, etc.

#### Prerequisites:
- Ubuntu/Linux VPS
- Node.js installed
- PM2 or similar process manager

#### Deployment Steps:

```bash
# SSH into your server
ssh root@your_server_ip

# Clone your repository
git clone your-repo-url
cd gift-real-estate

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "gift-real-estate" -- start

# Save PM2 configuration
pm2 startup
pm2 save
```

#### With Nginx (Recommended):

```bash
# Install Nginx
apt update
apt install nginx

# Create Nginx config
sudo nano /etc/nginx/sites-available/giftrealestateeth.com
```

Add this config:
```nginx
server {
    listen 80;
    server_name giftrealestateeth.com www.giftrealestateeth.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/giftrealestateeth.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Setup SSL (Free with Let's Encrypt):

```bash
apt install certbot python3-certbot-nginx
sudo certbot --nginx -d giftrealestateeth.com -d www.giftrealestateeth.com
```

---

### Option 4: Docker Deployment

Create a `Dockerfile` in your project root:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app
COPY . .

# Build
RUN npm run build

# Expose port
EXPOSE 3000

# Start
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t gift-real-estate .
docker run -p 3000:3000 gift-real-estate
```

---

## Domain Setup

### For Vercel:
1. In Vercel dashboard, go to Settings
2. Add your domain
3. Update DNS records (Vercel provides instructions)

### For Netlify:
1. In Netlify dashboard, go to Domain settings
2. Add custom domain
3. Update DNS or point nameservers

### For Self-Hosted:
Point your domain's A record to your server's IP address.

---

## Environment Configuration

Create `.env.local` in project root:

```
NEXT_PUBLIC_COMPANY_NAME=Gift Real Estate
NEXT_PUBLIC_PHONE=+251 921878641
NEXT_PUBLIC_EMAIL=giftrealestateofficialmd@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Performance Optimization

### Image Optimization
- Compress images before uploading (use https://tinypng.com or similar)
- Keep file size under 1-2 MB per image
- Use WebP format when possible

### Caching
- Vercel automatically handles caching
- For self-hosted, configure Nginx caching:

```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Database (Future)
- Connect to a database for dynamic property management
- MongoDB, PostgreSQL, or Firebase recommended

---

## Monitoring & Maintenance

### For Vercel:
- Check Analytics in dashboard
- Monitor bandwidth usage
- Set up email alerts

### For Self-Hosted:
```bash
# Monitor with PM2
pm2 monit

# Check logs
pm2 logs gift-real-estate

# Restart after updates
pm2 restart gift-real-estate
```

---

## Updating Your Site

### Local Updates:
```bash
# Make changes
# Test locally
npm run dev

# Build and test
npm run build
npm start

# If using Git
git add .
git commit -m "Update properties"
git push

# Vercel auto-deploys, or manually deploy
vercel --prod
```

### Keeping Node.js Updated:
```bash
node --version
# Download latest from nodejs.org

npm update          # Update packages
npm audit fix       # Fix vulnerabilities
```

---

## Troubleshooting Deployment

### "Port already in use"
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
npm run dev
```

### "npm: command not found"
- Node.js not installed properly
- Restart terminal after installation
- Add to PATH if needed

### Images not loading
- Check file paths are correct
- Ensure images exist in `public/` folder
- Rebuild: `npm run build`

### Slow performance
- Compress images
- Enable CDN (Cloudflare)
- Check for memory issues: `top` command

---

## Security Checklist

- ✅ Update Node.js and npm regularly
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Use HTTPS (SSL certificate)
- ✅ Set strong passwords for admin accounts
- ✅ Configure firewall rules
- ✅ Regular backups of property data
- ✅ Monitor for suspicious activity

---

## Backup & Recovery

### Backup your data:
```bash
# Backup project folder
cp -r gift-real-estate gift-real-estate-backup

# Backup to remote storage
git push origin main  # If using Git
```

### Restore from backup:
```bash
rm -rf gift-real-estate
cp -r gift-real-estate-backup gift-real-estate
cd gift-real-estate
npm install
npm run dev
```

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Node.js Docs**: https://nodejs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Troubleshoot**: Check README.md in project

---

**Deployment successful? Congratulations! 🎉**

Your Gift Real Estate website is now live!
