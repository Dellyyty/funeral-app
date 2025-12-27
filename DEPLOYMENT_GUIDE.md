# 🚀 AI Obituary Maker - Deployment Guide

## Quick Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- OpenAI API key

---

## Step 1: Push to GitHub

Your code is already in a Git repository. Push it to GitHub:

```bash
# If you haven't already created a remote repository
git remote add origin https://github.com/YOUR_USERNAME/ai-obituary-maker.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Add Environment Variable**:
```bash
vercel env add OPENAI_API_KEY
```
Then paste your OpenAI API key when prompted.

5. **Deploy to Production**:
```bash
vercel --prod
```

### Option B: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: .next
5. Add Environment Variable:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key
6. Click "Deploy"

---

## Step 3: Verify Deployment

1. Visit your deployed URL (e.g., `https://your-app.vercel.app`)
2. Test the form with sample data
3. Generate an obituary to verify API connection
4. Test all features (copy, download, print, edit)

---

## Environment Variables

### Required
- `OPENAI_API_KEY` - Your OpenAI API key

### How to Get OpenAI API Key
1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up or log in
3. Go to API Keys section
4. Create new secret key
5. Copy and save it securely

---

## Cost Estimation

### OpenAI API Costs (GPT-4o-mini)
- **Input**: $0.150 per 1M tokens
- **Output**: $0.600 per 1M tokens

**Estimated cost per obituary**: $0.01 - $0.03

**Example**: 1000 obituaries/month ≈ $10-30/month

### Vercel Hosting
- **Free Tier**: 
  - 100 GB bandwidth
  - Unlimited deployments
  - Perfect for personal/small projects

---

## Custom Domain (Optional)

### Add Custom Domain in Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your domain (e.g., `obituarymaker.com`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL certificate

---

## Monitoring & Analytics

### Built-in Vercel Analytics
```bash
npm i @vercel/analytics
```

Add to `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Performance Optimization

### Already Implemented
- ✅ Next.js 14 App Router
- ✅ Server-side API routes
- ✅ Optimized images
- ✅ Code splitting
- ✅ TypeScript for type safety

### Additional Optimizations
1. **Enable Caching** (if needed):
```typescript
export const revalidate = 3600; // Cache for 1 hour
```

2. **Add Rate Limiting** (recommended for production):
```bash
npm install @upstash/ratelimit @upstash/redis
```

---

## Security Best Practices

### Already Implemented
- ✅ API key in environment variables
- ✅ Server-side API calls only
- ✅ Input validation with Zod
- ✅ No sensitive data in client

### Additional Security (Optional)
1. **Add CORS headers** in `next.config.ts`
2. **Implement rate limiting** to prevent abuse
3. **Add authentication** if needed
4. **Monitor API usage** in OpenAI dashboard

---

## Troubleshooting

### Common Issues

**1. "OpenAI API key is not configured"**
- Solution: Add `OPENAI_API_KEY` to Vercel environment variables
- Redeploy after adding

**2. "Failed to generate obituary"**
- Check OpenAI API key is valid
- Verify API key has credits
- Check OpenAI API status

**3. Build fails on Vercel**
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility
- Review build logs for specific errors

**4. Slow API responses**
- Normal for GPT-4o-mini (10-15 seconds)
- Consider upgrading to GPT-4o for faster responses
- Add loading indicators (already implemented)

---

## Maintenance

### Regular Tasks
1. **Monitor API usage** - Check OpenAI dashboard monthly
2. **Update dependencies** - Run `npm update` quarterly
3. **Review error logs** - Check Vercel logs weekly
4. **Backup data** - If you add database features

### Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

---

## Scaling Considerations

### If Traffic Grows
1. **Upgrade Vercel Plan** - Pro plan for higher limits
2. **Implement Caching** - Cache common requests
3. **Add Rate Limiting** - Prevent abuse
4. **Consider Database** - Store generated obituaries
5. **Add CDN** - For static assets

---

## Support & Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [OpenAI API Docs](https://platform.openai.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [OpenAI Community](https://community.openai.com)

---

## Post-Deployment Checklist

- [ ] Application deployed successfully
- [ ] Custom domain configured (if applicable)
- [ ] Environment variables set
- [ ] Test all features in production
- [ ] Monitor initial API usage
- [ ] Set up error tracking (optional)
- [ ] Add analytics (optional)
- [ ] Share with users!

---

## Success Metrics

Track these metrics to measure success:
1. **Number of obituaries generated**
2. **Most popular tone option**
3. **Average generation time**
4. **User engagement** (copy, download, print usage)
5. **API costs vs. budget**

---

**Deployment Status**: Ready for Production ✅

**Estimated Setup Time**: 15-30 minutes

**Recommended Platform**: Vercel (optimized for Next.js)
