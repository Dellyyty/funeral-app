# 🔧 Deployment Fix - OpenAI API Key Issue

## Problem
The deployment was failing with this error:
```
Error: Missing credentials. Please pass an `apiKey`, or set the `OPENAI_API_KEY` environment variable.
```

## Root Cause
The OpenAI client was being instantiated at the **module level** (when the file loads), which happens during the **build process**. Environment variables are not available during build time in most deployment platforms.

## Solution Applied ✅

### Changed: `app/api/generate-obituary/route.ts`

**Before (❌ Broken):**
```typescript
import OpenAI from 'openai';

// This runs at build time - NO environment variables available!
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  // Use openai here...
}
```

**After (✅ Fixed):**
```typescript
import OpenAI from 'openai';

export async function POST(request: NextRequest) {
  // Validate API key first
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key is not configured' },
      { status: 500 }
    );
  }

  // Initialize OpenAI client at RUNTIME - environment variables available!
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Use openai here...
}
```

## Why This Works

1. **Build Time vs Runtime**:
   - Build time: Code is compiled, no environment variables
   - Runtime: Code executes on server, environment variables available

2. **Lazy Initialization**:
   - OpenAI client is now created when the API route is called
   - Environment variables are available at this point

3. **No Performance Impact**:
   - OpenAI client creation is very fast
   - Happens only when needed

## Deployment Steps

### 1. Commit and Push Changes
```bash
git add app/api/generate-obituary/route.ts
git commit -m "Fix: Move OpenAI client initialization to runtime"
git push origin main
```

### 2. Deploy to Your Platform

#### For Google Cloud Run (Your Current Platform)
The build should now succeed. Make sure your environment variable is set:
```bash
gcloud run services update funeral-app \
  --set-env-vars OPENAI_API_KEY=your-api-key-here
```

#### For Vercel (Recommended Alternative)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key
4. Deploy

#### For Netlify
1. Push to GitHub
2. Import project in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variable in Netlify dashboard

## Verification

After deployment, test the API:
```bash
curl -X POST https://your-app-url.com/api/generate-obituary \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "birthDate": "1950-01-01",
    "deathDate": "2024-12-27",
    "tone": "formal"
  }'
```

Expected response:
```json
{
  "text": "John Doe, age 74, passed away on December 27, 2024...",
  "generatedAt": "2024-12-27T..."
}
```

## Common Deployment Issues & Solutions

### Issue 1: "OpenAI API key is not configured"
**Solution**: Add `OPENAI_API_KEY` to your deployment platform's environment variables

### Issue 2: Build still fails
**Solution**: 
1. Clear build cache
2. Ensure all dependencies are in `package.json`
3. Check Node.js version (should be 18+)

### Issue 3: API works locally but not in production
**Solution**: 
1. Verify environment variable is set in production
2. Check deployment logs for errors
3. Ensure API key has sufficient credits

## Best Practices for Environment Variables

### ✅ DO:
- Initialize clients inside request handlers
- Validate environment variables at runtime
- Use different keys for dev/staging/prod
- Keep API keys in environment variables

### ❌ DON'T:
- Initialize clients at module level
- Hardcode API keys in code
- Commit `.env.local` to git
- Share API keys publicly

## Additional Optimizations (Optional)

### 1. Add Connection Pooling
```typescript
// Create a singleton pattern for better performance
let openaiClient: OpenAI | null = null;

function getOpenAIClient() {
  if (!openaiClient) {
    openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openaiClient;
}

export async function POST(request: NextRequest) {
  const openai = getOpenAIClient();
  // Use openai...
}
```

### 2. Add Retry Logic
```typescript
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  maxRetries: 3, // Retry failed requests
  timeout: 30000, // 30 second timeout
});
```

### 3. Add Rate Limiting
```bash
npm install @upstash/ratelimit @upstash/redis
```

## Testing Checklist

- [ ] Local development works (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variable is set in deployment platform
- [ ] API endpoint responds correctly
- [ ] Error handling works (test with invalid API key)
- [ ] All 4 tone options work
- [ ] Copy, download, print features work

## Support

If you continue to have issues:

1. **Check Build Logs**: Look for specific error messages
2. **Verify API Key**: Test it directly with OpenAI's API
3. **Check Credits**: Ensure your OpenAI account has credits
4. **Review Documentation**: 
   - [Next.js Deployment](https://nextjs.org/docs/deployment)
   - [OpenAI API Docs](https://platform.openai.com/docs)

## Summary

✅ **Fixed**: OpenAI client now initializes at runtime, not build time
✅ **Result**: Deployment should succeed
✅ **Next Step**: Commit changes and redeploy

---

**Last Updated**: December 27, 2024
**Status**: Ready for Deployment
