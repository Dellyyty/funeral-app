# Quick Start Guide

Get your AI Obituary Maker running in 5 minutes!

## Prerequisites
- Node.js 18+ installed
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

## Setup (3 Steps)

### 1. Install Dependencies
```bash
npm install
```
*(Already done if you see node_modules folder)*

### 2. Add Your API Key
Edit `.env.local` and replace with your actual OpenAI API key:
```env
OPENAI_API_KEY=sk-your-actual-api-key-here
```

### 3. Start the Server
```bash
npm run dev
```

## That's It! 🎉

Open your browser to: **http://localhost:3000**

## Using the Application

1. **Fill in the form** - Start with the Personal tab (required fields marked with *)
2. **Add details** - Switch between tabs to add family, career, and service information
3. **Choose a tone** - Select from 4 writing styles in the Service tab
4. **Generate** - Click the "Generate Obituary with AI" button
5. **Review & Edit** - Make any changes to the generated text
6. **Export** - Copy, download, or print your obituary

## Form Tabs

| Tab | What to Include |
|-----|----------------|
| **Personal** | Name, birth/death dates, places |
| **Family** | Parents, spouse, children, siblings, grandchildren |
| **Life & Career** | Education, career, military, hobbies, achievements |
| **Service** | Memorial details, special messages, tone |

## Tone Options

- **Formal & Traditional** - Classic, respectful obituary style
- **Casual & Warm** - Friendly, conversational tone
- **Celebratory & Uplifting** - Focuses on celebrating life
- **Spiritual & Reflective** - Includes spiritual elements

## Tips for Best Results

✅ **Do:**
- Fill in as many fields as possible for richer content
- Use complete sentences in text areas
- Be specific about achievements and hobbies
- Include meaningful details about relationships

❌ **Don't:**
- Leave required fields empty (First Name, Last Name, Birth Date, Death Date)
- Use abbreviations without context
- Forget to select a tone

## Troubleshooting

**Problem:** "OpenAI API key is not configured"
- **Solution:** Make sure `.env.local` exists with your API key

**Problem:** Generation fails
- **Solution:** Check your OpenAI account has credits

**Problem:** Port 3000 in use
- **Solution:** Run `PORT=3001 npm run dev` instead

## Cost

Each obituary costs less than **$0.001** (a fraction of a penny) using GPT-4o-mini.

## Need More Help?

- 📖 Full documentation: [README.md](README.md)
- 🔧 Detailed setup: [SETUP.md](SETUP.md)
- ✅ Project info: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

---

**Ready to create beautiful obituaries with AI!** ❤️
