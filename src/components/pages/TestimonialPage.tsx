"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion";
import HeroSection from "../HeroSection";

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "Eshita",
      role: "Verified Customer",
      image: "/images/reviews/rev1.png",
      quote:
        "The All-in-One mix is perfect for parties. Everyone loves the variety. Will definitely keep ordering! It's become a staple at all our family gatherings and everyone always asks where we got it from.",
    },
    {
      id: 2,
      name: "Bidappa Bolthanda",
      role: "Verified Customer",
      image: "/images/reviews/rev2.png",
      quote:
        "YummFeast namkeen is my go-to snack! Super crunchy, full of flavor, and always fresh. Perfect for every mood — once you start, you just can’t stop kudos to the Yumm Feast team for making such brilliant snacks!",
    },
    {
      id: 3,
      name: "Sohini Dutta",
      role: "Verified Customer",
      image: "/images/reviews/rev3.png",
      quote:
        "Yummfeast snacks have made a significant difference in my snacking habits. They're tasty, well-packaged, and satisfy my cravings without feeling too heavy. I've recommended them to all my friends and family.",
    },
    {
      id: 4,
      name: "Priya Sinha",
      role: "Verified Customer",
      image: "/images/reviews/rev4.png",
      quote:
        " I've tried many similar snacks from other brands, but none compare to the quality and taste I get from Yummfeast. Their Palak Paneer is the best I've ever had - perfectly spiced and always fresh.",
    },
    {
      id: 5,
      name: "Saniya Verma",
      role: "Verified Customer",
      image: "/images/reviews/rev5.png",
      quote:
        "I’ve been buying Yummfeast products since 2020, and I can confidently say they maintain consistent taste and hygiene. It’s one of the few brands I trust for my family’s snacks.",
    },
    {
      id: 6,
      name: "Vachan Chopra",
      role: "Verified Customer",
      image: "/images/reviews/rev6.png",
      quote:
        "I love the Chinese Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai! The packaging keeps them fresh for a long time, and the price is very reasonable.",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation example
    if (!name || !email || !product || !rating || !feedback) {
      alert("Please fill out all fields.");
      return;
    }

    console.log({ name, email, product, rating, feedback });
    alert("Thank you for your feedback! We appreciate your input.");

    // Reset form
    setName("");
    setEmail("");
    setProduct("");
    setRating(0);
    setFeedback("");
  };

  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/testimonial/left.png",
    image2: "/images/banners/testimonial/right.png"
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with brush stroke background */}
      <HeroSection banner={bannerData} />

      {/* Testimonials Grid with organic effects */}
      <section className="py-16 relative"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          minHeight: "100vh",
          opacity: 1,
        }}>
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
                whileHover={{ y: -10 }}
              >
                <div className="relative">
                  <Card className="h-full border-gray relative z-10">
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
                      <blockquote className="text-md italic mb-6 flex-grow relative p-4">
                        <span className="relative z-10">
                          "{testimonial.quote}"
                        </span>

                        {/* Handwritten underline effect */}
                        <svg
                          className="absolute -bottom-2 left-0 w-full"
                          height="6"
                          viewBox="0 0 100 6"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M0,3 C20,1 40,5 60,3 S80,1 100,3"
                            stroke="#F29C1F"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="1,3"
                            opacity="0.3"
                          />
                        </svg>
                      </blockquote>
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 relative">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover relative z-10"
                          />
                        </div>
                        <div>
                          <p className="font-normal">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with paint brush background */}
      <section className="py-8 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="w-[120%] h-[120%] bg-[url('/images/pattern.svg')] opacity-10"
            animate={{ x: [-20, 0], y: [-20, 0] }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block">
              <h2 className="text-3xl font-normal text-white mb-2 px-4">
                Share Your Experience
              </h2>
            </div>
            <p className="text-xl text-white">
              We value your feedback. Let us know about your experience with our
              products.
            </p>
          </div>
        </div>

        {/* feedback form */}

        <div className="py-12">
          <div className="container max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-red-400 to-orange-400"></div>
                <CardContent className="p-8 bg-gradient-to-br from-white to-orange-50">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-normal">Your Name 👋</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-normal">Email Address 📧</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                        />
                      </div>
                    </div>

                    {/* Product */}
                    <div className="space-y-2">
                      <Label htmlFor="product" className="text-gray-700 font-normal">Product 🍟</Label>
                      <select
                        id="product"
                        required
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="flex h-12 w-full rounded-lg border-2 border-orange-200 focus:border-orange-400 bg-white px-3 py-2 text-sm"
                      >
                        <option value="" disabled>Select a product</option>
                        <option value="rings">Yummfeast Rings</option>
                        <option value="pasta">Yummfeast Pasta</option>
                        <option value="allinone">Yummfeast All-in-One</option>
                        <option value="chatpata">Yummfeast Chatpata Mix</option>
                        <option value="aloobhujia">Yummfeast Aloo Bhujia</option>
                        <option value="cornpuffs">Yummfeast Corn Puffs</option>
                      </select>
                    </div>

                    {/* Rating */}
                    <div className="space-y-2">
                      <Label htmlFor="rating" className="text-gray-700 font-normal">Rating ⭐</Label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((starValue) => (
                          <Button
                            key={starValue}
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="p-1"
                            onClick={() => setRating(starValue)}
                          >
                            <Star
                              className={`w-6 h-6 ${starValue <= rating ? "fill-yellow-500 text-yellow-500" : ""}`}
                            />
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Feedback */}
                    <div className="space-y-2">
                      <Label htmlFor="feedback" className="text-gray-700 font-normal">Your Feedback 📝</Label>
                      <Textarea
                        id="feedback"
                        placeholder="Please share your experience with our product..."
                        rows={5}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-normal py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Submit Feedback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
