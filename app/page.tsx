"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { ObituaryForm } from "@/components/obituary-form";
import { ObituaryPreview } from "@/components/obituary-preview";
import { GeneratedObituary } from "@/types";

export default function Home() {
  const [generatedObituary, setGeneratedObituary] = useState<GeneratedObituary | null>(null);

  const handleReset = () => {
    setGeneratedObituary(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-rose-500 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900">AI Obituary Maker</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create a beautiful, heartfelt obituary with the help of AI. Fill in the details below,
            and we'll craft a meaningful tribute to honor your loved one's memory.
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          {generatedObituary ? (
            <ObituaryPreview obituary={generatedObituary} onReset={handleReset} />
          ) : (
            <ObituaryForm onGenerate={setGeneratedObituary} />
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 mt-12 pb-8">
          <p>
            Created with care to help families honor their loved ones.
          </p>
          <p className="mt-2">
            Powered by OpenAI • Built with Next.js & shadcn/ui
          </p>
        </footer>
      </div>
    </main>
  );
}
