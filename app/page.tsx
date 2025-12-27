import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Honor Their Memory with
            <span className="block text-rose-600 mt-2">Beautiful Obituaries</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Create heartfelt, professional obituaries in minutes with AI assistance. 
            Celebrate your loved one's life with a tribute that truly captures their spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/create"
              className="px-8 py-4 bg-rose-600 text-white text-lg font-semibold rounded-lg hover:bg-rose-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Create an Obituary
            </Link>
            <a 
              href="#how-it-works"
              className="px-8 py-4 bg-white text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Why Choose Our AI Obituary Maker?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Creating a meaningful tribute shouldn't be stressful. We make it simple, thoughtful, and beautiful.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-rose-600">AI</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Writing</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI helps craft beautiful, personalized obituaries that capture the essence 
                of your loved one's life story with dignity and grace.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">5m</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick & Easy</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete the simple form in just 5 minutes. Our intuitive interface guides you 
                through each step, making the process smooth and stress-free.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">∞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Customizable</h3>
              <p className="text-gray-600 leading-relaxed">
                Edit every word to perfection. Choose from multiple tones and styles, then 
                personalize the final result to match your vision exactly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Three simple steps to create a beautiful tribute
          </p>

          <div className="space-y-12 md:space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 bg-rose-600 text-white rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold">1</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Share Their Story</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Fill out our thoughtfully designed form with details about your loved one. 
                  Include their personal information, family, career highlights, hobbies, and 
                  what made them special. The more you share, the more personalized the result.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold">2</span>
              </div>
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">AI Creates the Tribute</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our AI analyzes the information and crafts a beautiful, heartfelt obituary 
                  in seconds. Choose from formal, casual, celebratory, or spiritual tones to 
                  match your preferences and honor their memory appropriately.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0 w-24 h-24 bg-purple-600 text-white rounded-2xl flex items-center justify-center">
                <span className="text-4xl font-bold">3</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Review & Share</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Review the generated obituary and make any edits you'd like. When you're 
                  satisfied, easily copy, download, or print the final version to share with 
                  family, friends, and funeral homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Trusted by Families Everywhere
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Helping families honor their loved ones with dignity and care
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "This tool was a blessing during a difficult time. It helped us create a 
                  beautiful tribute to my father that captured his spirit perfectly."
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Sarah M.</p>
                <p className="text-sm text-gray-500">California</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "I was struggling to find the right words. This AI helped me express 
                  everything I wanted to say about my grandmother in a way that honored her memory."
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Michael R.</p>
                <p className="text-sm text-gray-500">Texas</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  "Simple, respectful, and incredibly helpful. The ability to customize the 
                  tone made all the difference. Highly recommend to anyone in need."
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">Jennifer L.</p>
                <p className="text-sm text-gray-500">New York</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-rose-600 to-rose-700">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create a Beautiful Tribute?
          </h2>
          <p className="text-xl text-rose-100 mb-10 leading-relaxed">
            Join thousands of families who have honored their loved ones with our AI-powered obituary maker. 
            Start creating a meaningful tribute today.
          </p>
          <Link 
            href="/create"
            className="inline-block px-10 py-5 bg-white text-rose-600 text-lg font-bold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Get Started Now
          </Link>
          <p className="text-rose-100 mt-6 text-sm">
            Free to use • No account required • Takes just 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <p className="text-lg mb-2">
              Created with care to help families honor their loved ones
            </p>
            <p className="text-sm">
              Powered by OpenAI • Built with Next.js & Tailwind CSS
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs">
                © {new Date().getFullYear()} AI Obituary Maker. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
