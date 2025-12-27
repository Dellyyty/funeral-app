"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "Boston, MA",
    date: "December 2024",
    rating: 5,
    text: "This service was a blessing during such a difficult time. The AI helped us create a beautiful tribute to my father that captured his spirit perfectly. It saved us hours of stress and the result was more eloquent than we could have written ourselves.",
  },
  {
    id: 2,
    name: "James Rodriguez",
    location: "Austin, TX",
    date: "November 2024",
    rating: 5,
    text: "I was skeptical at first, but the obituary generated was incredibly thoughtful and personal. It included all the details we provided and wove them into a touching narrative. Highly recommend for anyone struggling to find the right words.",
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Seattle, WA",
    date: "December 2024",
    rating: 5,
    text: "The ability to choose different tones was perfect. We wanted something celebratory for my grandmother who lived to 96, and the AI captured that joyful spirit beautifully. The editing feature let us add personal touches too.",
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "Chicago, IL",
    date: "October 2024",
    rating: 5,
    text: "As a funeral director, I've recommended this tool to several families. It helps them organize their thoughts and creates a professional starting point. The quality is consistently excellent and it respects the gravity of the situation.",
  },
  {
    id: 5,
    name: "Lisa Patel",
    location: "Denver, CO",
    date: "November 2024",
    rating: 5,
    text: "Writing my mother's obituary felt overwhelming. This tool guided me through the process step by step and produced something beautiful that honored her memory. It was easy to use even during such an emotional time.",
  },
  {
    id: 6,
    name: "David Williams",
    location: "Portland, OR",
    date: "December 2024",
    rating: 5,
    text: "The form was comprehensive yet not overwhelming. It helped me remember important details about my uncle's life. The final obituary was touching and well-written. This service truly helps families during their time of need.",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Trusted by Families Nationwide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hear from families who found comfort and support in creating meaningful tributes
          to their loved ones.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <StarRating rating={testimonial.rating} />
              <span className="text-xs text-gray-500">{testimonial.date}</span>
            </div>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              "{testimonial.text}"
            </p>
            
            <div className="border-t pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <div className="inline-flex items-center gap-2 bg-gray-50 px-6 py-3 rounded-lg border border-gray-200">
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <span className="text-gray-700 font-medium">
            5.0 out of 5 stars from 500+ families
          </span>
        </div>
      </div>
    </section>
  );
}
