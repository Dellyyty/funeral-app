import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ObituaryFormData } from '@/types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const formData: ObituaryFormData = await request.json();

    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured' },
        { status: 500 }
      );
    }

    // Build the prompt
    const prompt = buildObituaryPrompt(formData);

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: `You are a professional obituary writer with years of experience crafting meaningful, respectful, and heartfelt obituaries. Your writing is compassionate, dignified, and celebrates the life of the deceased while providing comfort to the bereaved.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    const obituaryText = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      text: obituaryText,
      generatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Error generating obituary:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate obituary' },
      { status: 500 }
    );
  }
}

function buildObituaryPrompt(data: ObituaryFormData): string {
  const {
    firstName,
    middleName,
    lastName,
    maidenName,
    nickname,
    birthDate,
    deathDate,
    birthPlace,
    deathPlace,
    parents,
    spouse,
    children,
    siblings,
    grandchildren,
    education,
    career,
    military,
    hobbies,
    achievements,
    organizations,
    serviceDate,
    serviceLocation,
    serviceDetails,
    specialMessage,
    tone = 'formal',
  } = data;

  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  const displayName = nickname ? `${fullName} "${nickname}"` : fullName;

  let prompt = `Write a ${tone} obituary for ${displayName}`;
  
  if (maidenName) {
    prompt += ` (née ${maidenName})`;
  }
  
  prompt += `.

**Basic Information:**
- Born: ${birthDate}${birthPlace ? ` in ${birthPlace}` : ''}
- Passed away: ${deathDate}${deathPlace ? ` in ${deathPlace}` : ''}

`;

  if (parents || spouse || children || siblings || grandchildren) {
    prompt += `**Family:**\n`;
    if (parents) prompt += `- Parents: ${parents}\n`;
    if (spouse) prompt += `- Spouse: ${spouse}\n`;
    if (children) prompt += `- Children: ${children}\n`;
    if (siblings) prompt += `- Siblings: ${siblings}\n`;
    if (grandchildren) prompt += `- Grandchildren: ${grandchildren}\n`;
    prompt += '\n';
  }

  if (education || career || military) {
    prompt += `**Life & Career:**\n`;
    if (education) prompt += `- Education: ${education}\n`;
    if (career) prompt += `- Career: ${career}\n`;
    if (military) prompt += `- Military Service: ${military}\n`;
    prompt += '\n';
  }

  if (hobbies || achievements || organizations) {
    prompt += `**Interests & Achievements:**\n`;
    if (hobbies) prompt += `- Hobbies: ${hobbies}\n`;
    if (achievements) prompt += `- Achievements: ${achievements}\n`;
    if (organizations) prompt += `- Organizations: ${organizations}\n`;
    prompt += '\n';
  }

  if (serviceDate || serviceLocation || serviceDetails) {
    prompt += `**Service Information:**\n`;
    if (serviceDate) prompt += `- Date: ${serviceDate}\n`;
    if (serviceLocation) prompt += `- Location: ${serviceLocation}\n`;
    if (serviceDetails) prompt += `- Details: ${serviceDetails}\n`;
    prompt += '\n';
  }

  if (specialMessage) {
    prompt += `**Special Message/Notes:**\n${specialMessage}\n\n`;
  }

  prompt += `Please write a complete, well-structured obituary that:
1. Opens with the announcement of passing
2. Celebrates their life and accomplishments
3. Mentions surviving family members
4. Includes service information if provided
5. Ends with a meaningful closing statement
6. Maintains a ${tone} tone throughout
7. Is approximately 300-500 words

Format the obituary in clear paragraphs without using markdown headers.`;

  return prompt;
}
