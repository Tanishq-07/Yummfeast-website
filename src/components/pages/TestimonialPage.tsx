"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialPage() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=",
      quote:
        "Yummfeast Rings are my kids' favorite snack. The quality is outstanding and the taste is unmatched. We've been loyal customers for years and have never been disappointed. The crunchiness and flavor are perfect!",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/2149706485/photo/indian-or-latin-confident-middle-age-male-entrepreneur-businessman-holding-mobile-cell-phone.jpg?s=612x612&w=0&k=20&c=SZNcl4wlrMF9GPwyPOxI3H-pMUDYGsiJ5FCNco3MHMk=",
      quote:
        "I love the Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai! The packaging keeps them fresh for a long time, and the price is very reasonable for the quality.",
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/1408199912/photo/close-up-image-of-indian-man-outdoors-on-apartment-balcony-posing-in-front-of-pest-control.jpg?s=612x612&w=0&k=20&c=UDoZDF-F6V9wSljTp0ur3eQFBnXI4F7GW4xR5167N60=",
      quote:
        "The All-in-One mix is perfect for parties. Everyone loves the variety and the authentic flavors. Will definitely keep ordering! It's become a staple at all our family gatherings and everyone always asks where we got it from.",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/1309955330/photo/businessman-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=lKAuvJFF1wN8jUM2STmrnLvQzcYFUpZeHXBBQsFyq3E=",
      quote:
        "Yummfeast snacks have made a significant difference in my snacking habits. They're tasty, well-packaged, and satisfy my cravings without feeling too heavy. I've recommended them to all my friends and family.",
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=612x612&w=0&k=20&c=CncNUTbw6mzGsbojks2Vt0kV85N_pQaI3zaSkBQJFTc=",
      quote:
        "The customer service is as impressive as the products themselves. When I had an issue with my bulk order, the team went above and beyond to make it right. That kind of service is rare these days.",
    },
    {
      id: 6,
      name: "Ananya Desai",
      role: "Verified Customer",
      image:
        "https://media.istockphoto.com/id/1473470359/photo/senior-man-on-wheelchair-at-park-and-shownig-thumb-up.jpg?s=612x612&w=0&k=20&c=W6JlOuCAQE5rS2AMs7yWc3yKzUWJNx4_Rv0GWme2rn4=",
      quote:
        "I've tried many similar snacks from other brands, but none compare to the quality and taste I get from Yummfeast. Their Aloo Bhujia is the best I've ever had - perfectly spiced and always fresh.",
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
          className="absolute top-10 left-10 text-6xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          🍿
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-5xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          🥨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/4 text-4xl"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          🥜
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-1/3 text-5xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          🍪
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-normal mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Customer Testimonials
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Don't just take our word for it. Here's what our customers have to say about their experiences.! 👬
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
