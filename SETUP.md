# Setup Guide - AI Obituary Maker

This guide will help you set up and run the AI Obituary Maker application.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
  - Check your version: `node --version`
  - Download from: https://nodejs.org/

- **npm** (comes with Node.js)
  - Check your version: `npm --version`

- **OpenAI API Key**
  - Sign up at: https://platform.openai.com/
  - Create an API key at: https://platform.openai.com/api-keys
  - Note: You'll need to add credits to your OpenAI account to use the API

## Installation Steps

### 1. Navigate to the Project Directory

```bash
cd "ai obituary maker form"
```

### 2. Install Dependencies

All dependencies are already installed, but if you need to reinstall them:

```bash
npm install
```

This will install:
- Next.js 14
- React & React DOM
- TypeScript
- Tailwind CSS
- shadcn/ui components
- OpenAI SDK
- React Hook Form
- Zod (validation)
- date-fns
- Lucide React (icons)

### 3. Configure Environment Variables

1. **Copy the example environment file:**

```bash
cp .env.example .env.local
```

2. **Edit `.env.local` and add your OpenAI API key:**

```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

⚠️ **Important:** 
- Never commit your `.env.local` file to version control
- Keep your API key secure and private
- The `.gitignore` file is already configured to exclude `.env.local`

### 4. Start the Development Server

```bash
npm run dev
```

The application will start at: **http://localhost:3000**

## Usage

1. **Open your browser** and navigate to `http://localhost:3000`

2. **Fill in the form** with information about the deceased:
   - **Personal Tab**: Basic information (name, dates, places)
   - **Family Tab**: Family members and relationships
   - **Life & Career Tab**: Education, career, hobbies, achievements
   - **Service Tab**: Memorial service details and tone selection

3. **Select a tone** for the obituary:
   - Formal & Traditional
   - Casual & Warm
   - Celebratory & Uplifting
   - Spiritual & Reflective

4. **Click "Generate Obituary with AI"** to create the obituary

5. **Review and edit** the generated text if needed

6. **Copy, download, or print** the final obituary

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your `OPENAI_API_KEY` environment variable in Vercel's project settings
4. Deploy!

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

**Remember to set the `OPENAI_API_KEY` environment variable on your deployment platform!**

## Troubleshooting

### Issue: "OpenAI API key is not configured"

**Solution:** Make sure you've created a `.env.local` file with your API key:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### Issue: API requests failing

**Possible causes:**
1. Invalid API key
2. Insufficient credits in your OpenAI account
3. Network connectivity issues

**Solution:** 
- Verify your API key is correct
- Check your OpenAI account balance at https://platform.openai.com/account/billing
- Check your internet connection

### Issue: Port 3000 already in use

**Solution:** Either:
1. Stop the process using port 3000
2. Or run on a different port:
```bash
PORT=3001 npm run dev
```

### Issue: Module not found errors

**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

## Development Tips

### Hot Reload

The development server supports hot reload. Changes to your code will automatically refresh the browser.

### Checking Logs

- **Browser Console**: Press F12 to open developer tools
- **Terminal**: Watch the terminal where you ran `npm run dev` for server-side logs

### Modifying the AI Model

To use a different OpenAI model, edit `app/api/generate-obituary/route.ts`:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // Change this to your preferred model
  // ...
});
```

Available models:
- `gpt-4o-mini` (default, cost-effective)
- `gpt-4o` (more capable)
- `gpt-4-turbo`
- `gpt-4`

## Cost Considerations

The application uses OpenAI's API, which charges per token:

- **gpt-4o-mini**: ~$0.15 per 1M input tokens, ~$0.60 per 1M output tokens
- **gpt-4o**: ~$2.50 per 1M input tokens, ~$10.00 per 1M output tokens

Each obituary generation typically uses:
- Input: 500-1000 tokens
- Output: 300-500 tokens

Estimated cost per obituary:
- **gpt-4o-mini**: $0.0005 - $0.001 (less than a penny)
- **gpt-4o**: $0.005 - $0.01 (about a penny)

## Support

If you encounter any issues:

1. Check this setup guide
2. Review the main [README.md](README.md)
3. Check the [Next.js documentation](https://nextjs.org/docs)
4. Check the [OpenAI API documentation](https://platform.openai.com/docs)

## Next Steps

Once your application is running:

1. Test all form fields and tabs
2. Try generating obituaries with different tones
3. Test the edit, copy, download, and print features
4. Customize the styling if desired
5. Deploy to production when ready

---

Happy building! 🚀
