"use client";

import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Verified Customer",
      image: "/customer1.png",
      quote:
        "Yummfeast Rings are my kids' favorite snack. The quality is outstanding and the taste is unmatched. We've been loyal customers for years and have never been disappointed. The crunchiness and flavor are perfect!",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Verified Customer",
      image: "/customer2.png",
      quote:
        "I love the Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai! The packaging keeps them fresh for a long time, and the price is very reasonable for the quality.",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Verified Customer",
      image: "/customer3.png",
      quote:
        "The All-in-One mix is perfect for parties. Everyone loves the variety and the authentic flavors. Will definitely keep ordering! It's become a staple at all our family gatherings and everyone always asks where we got it from.",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Verified Customer",
      image: "/customer4.png",
      quote:
        "Yummfeast snacks have made a significant difference in my snacking habits. They're tasty, well-packaged, and satisfy my cravings without feeling too heavy. I've recommended them to all my friends and family.",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Verified Customer",
      image: "/customer5.png",
      quote:
        "The customer service is as impressive as the products themselves. When I had an issue with my bulk order, the team went above and beyond to make it right. That kind of service is rare these days.",
    },
    {
      id: 6,
      name: "Ananya Desai",
      role: "Verified Customer",
      image: "/customer6.png",
      quote:
        "I've tried many similar snacks from other brands, but none compare to the quality and taste I get from Yummfeast. Their Aloo Bhujia is the best I've ever had - perfectly spiced and always fresh.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Customer Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our customers have to
              say about their experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={
                  index < 3
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                animate={index < 3 ? { opacity: 1, scale: 1 } : undefined}
                whileInView={index >= 3 ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="group cursor-pointer"
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-5 h-5 fill-red-500 text-red-500"
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Experience</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We value your feedback. Let us know about your experience with our
              products.
            </p>
            <Button
              size="lg"
              onClick={() => (window.location.href = "/feedback")}
            >
              Submit a Testimonial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
