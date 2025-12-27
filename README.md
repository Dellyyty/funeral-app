# AI Obituary Maker

A beautiful, AI-powered obituary generator built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. This application helps families create heartfelt, professional obituaries with the assistance of OpenAI's GPT-4.

![AI Obituary Maker](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)

## Features

✨ **AI-Powered Generation** - Uses OpenAI GPT-4 to create meaningful, personalized obituaries

🎨 **Beautiful UI** - Modern, clean interface built with shadcn/ui components

📝 **Comprehensive Form** - Organized tabs for personal info, family, career, and service details

🎭 **Multiple Tones** - Choose from formal, casual, celebratory, or spiritual writing styles

✏️ **Edit & Customize** - Edit the generated text to add personal touches

📋 **Easy Sharing** - Copy to clipboard, download as text, or print directly

📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI**: OpenAI API (GPT-4)
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Date Formatting**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone or navigate to the project directory**

```bash
cd "ai obituary maker form"
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your OpenAI API key:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Fill in the form** - Complete the required fields (name, birth date, death date) and add as much detail as you'd like
2. **Choose a tone** - Select the writing style that best fits your needs
3. **Generate** - Click the "Generate Obituary with AI" button
4. **Review & Edit** - Read the generated obituary and make any desired changes
5. **Share** - Copy, download, or print the final obituary

## Project Structure

```
├── app/
│   ├── api/
│   │   └── generate-obituary/
│   │       └── route.ts          # OpenAI API endpoint
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Main page
│   └── globals.css               # Global styles
├── components/
│   ├── ui/                       # shadcn/ui components
│   ├── obituary-form.tsx         # Main form component
│   └── obituary-preview.tsx      # Preview & edit component
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── validations.ts            # Zod schemas
├── types/
│   └── index.ts                  # TypeScript types
└── public/                       # Static assets
```

## API Routes

### POST `/api/generate-obituary`

Generates an obituary using OpenAI's GPT-4 model.

**Request Body:**
```typescript
{
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  // ... other optional fields
  tone: 'formal' | 'casual' | 'celebratory' | 'spiritual';
}
```

**Response:**
```typescript
{
  text: string;
  generatedAt: string;
}
```

## Customization

### Changing the AI Model

Edit `app/api/generate-obituary/route.ts`:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini', // Change to 'gpt-4' or other models
  // ...
});
```

### Adjusting the Tone

Modify the tone options in `lib/validations.ts` and update the form accordingly.

### Styling

The project uses Tailwind CSS and shadcn/ui. Customize:
- Colors: Edit `app/globals.css`
- Components: Modify files in `components/ui/`
- Layout: Update `app/page.tsx` and `app/layout.tsx`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This app can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

Remember to set the `OPENAI_API_KEY` environment variable in your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- AI powered by [OpenAI](https://openai.com/)

---

Made with ❤️ to help families honor their loved ones
