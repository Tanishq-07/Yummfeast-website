"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"

export default function FeedbackPage() {
  return (
    <div>
      {/* Hero Section */}
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
              Share Your Feedback
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We value your opinion and are constantly striving to improve our products and services.! 📝
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

      {/* Feedback Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    window.alert("Thank you for your feedback! We appreciate your input.")
                  }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product</Label>
                    <select
                      id="product"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a product</option>
                      <option value="rings">Yummfeast Rings</option>
                      <option value="pasta">Yummfeast Pasta</option>
                      <option value="allinone">Yummfeast All-in-One</option>
                      <option value="chatpata">Yummfeast Chatpata Mix</option>
                      <option value="aloobhujia">Yummfeast Aloo Bhujia</option>
                      <option value="cornpuffs">Yummfeast Corn Puffs</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating">Rating</Label>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Button key={star} variant="ghost" size="sm" className="p-1">
                          <Star className="w-6 h-6" />
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="feedback">Your Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Please share your experience with our product..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {/* <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4">What Others Are Saying</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Read feedback from our valued customers.</p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Rahul Sharma",
                  role: "Verified Customer",
                  quote:
                    "Yummfeast Rings are my kids' favorite snack. The quality is outstanding and the taste is unmatched.",
                },
                {
                  name: "Priya Patel",
                  role: "Verified Customer",
                  quote:
                    "I love the Pasta snacks from Yummfeast. They're perfectly seasoned and always fresh. My go-to evening snack with chai!",
                },
                {
                  name: "Amit Verma",
                  role: "Verified Customer",
                  quote:
                    "The All-in-One mix is perfect for parties. Everyone loves the variety and the authentic flavors. Will definitely keep ordering!",
                },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-red-500 text-red-500" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xl italic mb-6">"{testimonial.quote}"</blockquote>
                    <div>
                      <p className="font-normal">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </section> */}
    </div>
  )
}
