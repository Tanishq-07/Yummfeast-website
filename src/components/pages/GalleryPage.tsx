"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Product Showcase",
      image: "/gallery-product1.png",
      category: "products",
    },
    {
      id: 2,
      title: "Manufacturing Process",
      image: "/gallery-facility1.png",
      category: "facilities",
    },
    {
      id: 3,
      title: "Team Building Event",
      image: "/gallery-team1.png",
      category: "team",
    },
    {
      id: 4,
      title: "Quality Testing",
      image: "/gallery-facility2.png",
      category: "facilities",
    },
    {
      id: 5,
      title: "Product Development",
      image: "/gallery-product2.png",
      category: "products",
    },
    {
      id: 6,
      title: "Customer Appreciation Day",
      image: "/gallery-event1.png",
      category: "events",
    },
    {
      id: 7,
      title: "Warehouse Operations",
      image: "/gallery-facility3.png",
      category: "facilities",
    },
    {
      id: 8,
      title: "Product Launch Event",
      image: "/gallery-event2.png",
      category: "events",
    },
    {
      id: 9,
      title: "Team Meeting",
      image: "/gallery-team2.png",
      category: "team",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredGallery = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground">
              A visual journey through our products, facilities, and company events.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-5 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 1, scale:1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true,amount: 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-white/80 capitalize">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
