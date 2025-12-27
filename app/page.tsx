"use client";

import { useState } from "react";
import { Heart, Sparkles, Users, Clock, Shield, ArrowRight, CheckCircle, Star } from "lucide-react";
import { ObituaryForm } from "@/components/obituary-form";
import { ObituaryPreview } from "@/components/obituary-preview";
import { GeneratedObituary } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [generatedObituary, setGeneratedObituary] = useState<GeneratedObituary | null>(null);

  const handleReset = () => {
    setGeneratedObituary(null);
    setShowForm(false);
  };

  const handleGetStarted = () => {
    setShowForm(true);
  };

  if (generatedObituary) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <ObituaryPreview obituary={generatedObituary} onReset={handleReset} />
        </div>
      </main>
    );
  }

  if (showForm) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="text-center mb-8">
            <Button
              onClick={() => setShowForm(false)}
              variant="outline"
              className="mb-4"
            >
              ← Back to Home
            </Button>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Obituary</h1>
            <p className="text-gray-600">Fill in the details below and let AI help craft a beautiful tribute</p>
          </div>
          <ObituaryForm onGenerate={setGeneratedObituary} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-rose-100 p-3 rounded-full">
                <Heart className="h-12 w-12 text-rose-500" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Obituary Maker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Create a beautiful, heartfelt obituary with the help of AI. Honor your loved ones with
              a professionally crafted tribute that captures their spirit and legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="text-lg px-8 py-3"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Create Obituary Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Obituary Maker?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes it easy to create meaningful obituaries that truly honor your loved ones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>AI-Powered Writing</CardTitle>
                <CardDescription>
                  Advanced AI crafts personalized, heartfelt obituaries based on the details you provide.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle>Quick & Easy</CardTitle>
                <CardDescription>
                  Complete the process in minutes with our guided form and professional templates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-500" />
                </div>
                <CardTitle>Professional Quality</CardTitle>
                <CardDescription>
                  Generate obituaries that read like they were written by professional memorial writers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating a beautiful obituary is simple with our step-by-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Fill in Details</h3>
              <p className="text-gray-600">
                Provide information about your loved one's life, achievements, and personality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Generates</h3>
              <p className="text-gray-600">
                Our AI analyzes your input and crafts a personalized, professional obituary.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Edit & Share</h3>
              <p className="text-gray-600">
                Review, edit, and download your obituary to share with family and friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Families trust us to help create meaningful tributes during difficult times.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "This tool helped us create a beautiful obituary for our father. The AI captured his personality perfectly and saved us hours of work during a difficult time."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Used for father's obituary</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I was struggling to find the right words, but the AI-generated obituary was exactly what we needed. Professional, heartfelt, and personal."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-500">Used for mother's obituary</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Create a Beautiful Tribute?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of families who have honored their loved ones with our AI-powered obituary maker.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="text-lg px-8 py-3"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-rose-400 mr-2" />
                <span className="text-xl font-bold">AI Obituary Maker</span>
              </div>
              <p className="text-gray-400 mb-4">
                Creating meaningful obituaries with the help of AI to honor the lives and legacies of our loved ones.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-gray-400">
                <li>AI-Powered Writing</li>
                <li>Professional Templates</li>
                <li>Easy Editing</li>
                <li>Multiple Formats</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              Created with care to help families honor their loved ones.
            </p>
            <p className="mt-2">
              Powered by OpenAI • Built with Next.js & shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
