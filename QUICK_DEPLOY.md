# 🚀 Quick Deploy Guide - Fixed Version

## What Was Fixed
✅ **OpenAI client now initializes at runtime** (not build time)
✅ **Deployment error resolved**

## Deploy Now (3 Steps)

### Step 1: Commit the Fix
```bash
git add .
git commit -m "Fix: Move OpenAI initialization to runtime for deployment"
git push origin main
```

### Step 2: Set Environment Variable

#### Google Cloud Run (Your Current Platform)
```bash
gcloud run services update funeral-app \
  --set-env-vars OPENAI_API_KEY=sk-proj-your-key-here \
  --region us-central1
```

Or via Cloud Console:
1. Go to Cloud Run console
2. Select your service
3. Click "Edit & Deploy New Revision"
4. Add environment variable:
   - Name: `OPENAI_API_KEY`
   - Value: `sk-proj-...` (your key)
5. Deploy

#### Alternative: Deploy to Vercel (Easier)
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add OPENAI_API_KEY

# Deploy to production
vercel --prod
```

### Step 3: Test
Visit your deployed URL and test the form!

## That's It! 🎉

Your app should now deploy successfully.

---

## Need Help?

### Build Still Failing?
1. Check that you committed the changes: `git status`
2. Verify the fix is in your code: `cat app/api/generate-obituary/route.ts | grep "const openai"`
   - Should see it INSIDE the POST function, not at the top
3. Clear build cache and try again

### API Not Working After Deploy?
1. Verify environment variable is set
2. Check your OpenAI API key is valid
3. Ensure your OpenAI account has credits

### Quick Test Command
```bash
# Replace YOUR_DEPLOYED_URL with your actual URL
curl -X POST https://YOUR_DEPLOYED_URL/api/generate-obituary \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "birthDate": "1950-01-01",
    "deathDate": "2024-12-27",
    "tone": "formal"
  }'
```

Expected: JSON response with generated obituary text

---

**Status**: ✅ Ready to Deploy
**Time to Deploy**: ~5 minutes
