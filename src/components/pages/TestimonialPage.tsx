"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "Eshita",
      role: "Verified Customer",
      image:
        "/images/reviews/rev1.png",
      quote:
        "The All-in-One mix is perfect for parties. Everyone loves the variety. Will definitely keep ordering! It's become a staple at all our family gatherings and everyone always asks where we got it from.",
    },
    {
      id: 2,
      name: "Bidappa Bolthanda",
      role: "Verified Customer",
      image:
        "/images/reviews/rev2.png",
      quote:
        "YummFeast namkeen is my go-to snack! Super crunchy, full of flavor, and always fresh. Perfect for every mood — once you start, you just can’t stop kudos to the Yumm Feast team for making such brilliant snacks!",
    },
    {
      id: 3,
      name: "Sohini Dutta",
      role: "Verified Customer",
      image:
        "/images/reviews/rev3.png",
      quote:
        "Yummfeast snacks have made a significant difference in my snacking habits. They're tasty, well-packaged, and satisfy my cravings without feeling too heavy. I've recommended them to all my friends and family.",
    },
    {
      id: 4,
      name: "Priya Sinha",
      role: "Verified Customer",
      image:
        "/images/reviews/rev4.png",
      quote:
        " I've tried many similar snacks from other brands, but none compare to the quality and taste I get from Yummfeast. Their Palak Paneer is the best I've ever had - perfectly spiced and always fresh.",
    },
    {
      id: 5,
      name: "Saniya Verma",
      role: "Verified Customer",
      image:
        "/images/reviews/rev5.png",
      quote:
        "I’ve been buying Yummfeast products since 2020, and I can confidently say they maintain consistent taste and hygiene. It’s one of the few brands I trust for my family’s snacks.",
    },
    {
      id: 6,
      name: "Vachan Chopra",
      role: "Verified Customer",
      image:
        "/images/reviews/rev6.png",
      quote:
        "I love the Chinese Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai! The packaging keeps them fresh for a long time, and the price is very reasonable.",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with brush stroke background */}
      <section className="relative overflow-hidden  bg-red-600 py-16">
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/10"></div>
        <motion.div
          className="absolute top-8 left-6 md:top-12 md:left-28 text-5xl md:text-6xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          🤤
        </motion.div>
        <motion.div
          className="absolute top-10 right-6 md:top-20 md:right-28 text-5xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          🔥
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-20 md:left-1/4 text-4xl"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          🎉
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-20 md:right-1/3 text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          😋
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-normal mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hear From Our Happy Customers!
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The true flavor of Yummfeast lies in the smiles of our customers! 👬
            </motion.p>
            <motion.div
              className="flex justify-center gap-4 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            </motion.div>
          </div>
        </div>
      </section>  

      {/* Testimonials Grid with organic effects */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={index < 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
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
                            <Star key={star} className="w-5 h-5 fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-md italic mb-6 flex-grow relative p-4">
                        <span className="relative z-10">"{testimonial.quote}"</span>

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
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
      <section className="py-16 bg-red-600 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl font-normal text-white mb-6 px-4">Share Your Experience</h2>
            </div>
            <p className="text-xl text-white mb-8">
              We value your feedback. Let us know about your experience with our products.
            </p>
            <div className="transition-transform duration-100 hover:scale-[1.03]">
            <div className="bg-red-500 text-white text-lg font-normal w-56 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
              Submit Testimonial
              <div className="absolute -bottom-1 left-0 w-56 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
