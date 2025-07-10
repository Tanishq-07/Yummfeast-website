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
      {/* Background splatter effects */}
      <div className="absolute top-[15%] right-[5%] w-64 h-64 opacity-10 z-0 rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4299E1"
            d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29C74.8,-14.8,77.2,0.5,74.1,14.8C71,29.1,62.5,42.4,50.8,51.2C39.1,60,24.2,64.3,9.2,67.1C-5.8,69.9,-21,71.2,-34.9,66.5C-48.8,61.8,-61.5,51.1,-68.1,37.4C-74.7,23.7,-75.2,7,-71.9,-8.1C-68.6,-23.2,-61.4,-36.7,-50.5,-46.5C-39.6,-56.3,-24.9,-62.4,-9.4,-65.1C6.1,-67.8,30.7,-74.1,42.8,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-[40%] left-[8%] w-72 h-72 opacity-10 z-0 -rotate-12">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#F29C1F"
            d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Hero Section with brush stroke background */}
      <section className="relative bg-blue-50 py-16 overflow-hidden">
        {/* Brush stroke background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <filter id="brushTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
              <feDisplacementMap in="SourceGraphic" scale="5" />
            </filter>
            <rect width="100%" height="100%" filter="url(#brushTexture)" fill="#4299E1" />
          </svg>
        </div>

        {/* Ink blob decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F29C1F"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4299E1"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              {/* Organic blob behind the text */}
              <svg
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width="120%"
                height="140"
                viewBox="0 0 400 140"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#4299E1"
                />
                {/* Grunge brush effect on the blob */}
                <filter id="grunge" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="10"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#4299E1"
                  filter="url(#grunge)"
                  opacity="0.4"
                />
              </svg>

              <h1 className="text-4xl font-normal px-8 py-4">Customer Testimonials</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our customers have to say about their experiences.
            </p>
          </div>
        </div>

        {/* Paint brush stroke at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity=".8"
              className="fill-white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Testimonials Grid with organic effects */}
      <section className="py-16 relative">
        {/* Paint splatter background */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5 z-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 opacity-5 z-0 rotate-45">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

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
                  {/* SVG Mask/Clip Path for card */}
                  <div
                    className="absolute inset-0 bg-white shadow-md"
                    style={{
                      clipPath: "polygon(3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%, 0% 3%)",
                    }}
                  ></div>

                  {/* Grunge brush texture overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <filter id="grunge-texture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
                        <feDisplacementMap in="SourceGraphic" scale="10" />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#grunge-texture)" fill="#000000" />
                    </svg>
                  </div>

                  {/* Quote marks */}
                  <div className="absolute top-6 left-6 opacity-10">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 20L10 0H20L15 20H5L10 40H0L0 20Z" fill="#4299E1" />
                      <path d="M20 20L30 0H40L35 20H25L30 40H20L20 20Z" fill="#4299E1" />
                    </svg>
                  </div>

                  <Card className="h-full border-gray relative z-10">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-center mb-4">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-lg italic mb-6 flex-grow relative">
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
                          {/* Ink blob frame for avatar */}
                          <svg
                            className="absolute top-0 left-0 w-full h-full -z-10"
                            viewBox="0 0 200 200"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="#F29C1F"
                              d="M47.3,-73.2C60.9,-66.2,71.3,-52.3,77.4,-37.1C83.4,-21.9,85.1,-5.3,81.5,9.4C77.9,24.1,69,36.9,58.1,47.4C47.2,57.9,34.3,66.1,20.1,70.7C5.9,75.3,-9.6,76.3,-23.9,72.5C-38.2,68.7,-51.3,60.1,-62.5,48.5C-73.7,36.9,-83,22.3,-85.2,6.5C-87.4,-9.3,-82.5,-26.3,-72.6,-39.1C-62.7,-51.9,-47.8,-60.5,-33.4,-67C-19,-73.5,-5,-77.9,9.7,-78.1C24.4,-78.3,33.7,-80.2,47.3,-73.2Z"
                              transform="translate(100 100)"
                            />
                          </svg>
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

                  {/* Paint splatter accent */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-70 z-20">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill={index % 2 === 0 ? "#4299E1" : "#F29C1F"}
                        d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29C74.8,-14.8,77.2,0.5,74.1,14.8C71,29.1,62.5,42.4,50.8,51.2C39.1,60,24.2,64.3,9.2,67.1C-5.8,69.9,-21,71.2,-34.9,66.5C-48.8,61.8,-61.5,51.1,-68.1,37.4C-74.7,23.7,-75.2,7,-71.9,-8.1C-68.6,-23.2,-61.4,-36.7,-50.5,-46.5C-39.6,-56.3,-24.9,-62.4,-9.4,-65.1C6.1,-67.8,30.7,-74.1,42.8,-65.2Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with paint brush background */}
      <section className="py-16 bg-blue-50 relative overflow-hidden">
        {/* Brush stroke texture background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <filter id="brushTextureCTA">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
              <feDisplacementMap in="SourceGraphic" scale="10" />
            </filter>
            <rect width="100%" height="100%" filter="url(#brushTextureCTA)" fill="#4299E1" />
          </svg>
        </div>

        {/* Paint splatter decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#F29C1F"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-72 h-72 opacity-20">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4299E1"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              {/* Cartoon stroke frame */}
              <svg
                className="absolute -top-4 -left-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] -z-10"
                viewBox="0 0 300 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M10,10 Q30,5 60,10 T120,15 Q150,5 180,10 T240,15 Q270,5 290,10 Q295,30 290,50 Q270,55 240,50 T180,45 Q150,55 120,50 T60,45 Q30,55 10,50 Q5,30 10,10 Z"
                  fill="none"
                  stroke="#4299E1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
              <h2 className="text-3xl font-normal mb-6 px-4">Share Your Experience</h2>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              We value your feedback. Let us know about your experience with our products.
            </p>
            <Button
              size="lg"
              onClick={() => (window.location.href = "/feedback")}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Submit a Testimonial</span>
              <motion.span
                className="absolute inset-0 bg-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </div>
        </div>

        {/* Paint brush stroke at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Cartoon stroke divider at bottom */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full" height="100" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C30,30 70,0 100,10" stroke="#F29C1F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0,10 C30,20 70,5 100,10" stroke="#4299E1" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0,10 C30,15 70,10 100,10" stroke="#F29C1F" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
