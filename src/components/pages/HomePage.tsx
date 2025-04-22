"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

interface HomePageProps {
  navigateTo: (page: string) => void;
}

export default function HomePage({ navigateTo }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-red-600 h-[70vh] flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                #ab tummy bole <span className="text-yellow-300">yummy</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Snack with a Smile: Bringing Joy through Delicious Chips,
                Fryums, and Flavorful Namkeens!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90 font-bold shadow-lg border-2 border-white"
                  onClick={() => navigateTo("product")}
                >
                  Explore Products
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-white/90 font-bold shadow-lg border-2 border-white"
                  onClick={() => navigateTo("about")}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      className="w-full h-[80px]"
    >
      <path
        d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        className="fill-white"
      ></path>
    </svg>
  </div>
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Delicious Snacks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular snacks that customers love. Quality and
              taste guaranteed in every bite!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Yummfeast Rings",
                description:
                  "Crunchy rings with a burst of tangy masala flavor",
                image: "/rings-packet.png",
                price: "₹10",
              },
              {
                name: "Yummfeast Pasta",
                description: "Crispy pasta snacks with Italian herbs seasoning",
                image: "/pasta-packet.png",
                price: "₹15",
              },
              {
                name: "Yummfeast All-in-One",
                description:
                  "A delightful mix of various namkeen for the perfect snack time",
                image: "/allinone-packet.png",
                price: "₹20",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  <div className="aspect-square bg-blue-50 relative overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-xl mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{product.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigateTo("product")}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => navigateTo("product")}>
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Yummfeast</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on delivering exceptional quality and taste in
              every pack of our snacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description:
                  "All our snacks are made with the finest ingredients for authentic taste and crunch.",
              },
              {
                title: "Hygienic Processing",
                description:
                  "Our state-of-the-art facilities ensure the highest standards of hygiene and quality control.",
              },
              {
                title: "Value for Money",
                description:
                  "We offer generous portions at affordable prices so you get more joy in every pack.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-red-600 font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say.
            </p>
          </div>

          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Rahul Sharma",
                  role: "Verified Customer",
                  quote:
                    "Yummfeast Rings are my kids' favorite snack. The quality is outstanding and the taste is unmatched. We've been loyal customers for years!",
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
                          <Star
                            key={star}
                            className="w-5 h-5 fill-red-500 text-red-500"
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-xl italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigateTo("testimonial")}
            >
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Yummfeast Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have made Yummfeast
              their favorite snack brand.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-white/90"
              onClick={() => navigateTo("product")}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
