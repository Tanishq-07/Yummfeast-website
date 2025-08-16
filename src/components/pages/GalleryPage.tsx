"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Goa Trip",
      image: "/images/gallery/pic1.png",
      category: "Trip",
    },
    {
      id: 2,
      title: "Goa Trip",
      image: "/images/gallery/pic2.png",
      category: "Trip",
    },
    {
      id: 3,
      title: "Goa Trip",
      image: "/images/gallery/pic3.png",
      category: "Trip",
    },
    {
      id: 4,
      title: "Manali Trip",
      image: "/images/gallery/pic4.png",
      category: "Trip",
    },
    {
      id: 5,
      title: "Manali Trip",
      image: "/images/gallery/pic5.png",
      category: "Trip",
    },
    {
      id: 6,
      title: "Manali Trip",
      image: "/images/gallery/pic6.png",
      category: "Trip",
    },
    {
      id: 7,
      title: "Siliguri Event",
      image: "/images/gallery/pic7.jpg",
      category: "Event",
    },
    {
      id: 8,
      title: "Siliguri Event",
      image: "/images/gallery/pic8.jpg",
      category: "Event",
    },
    {
      id: 9,
      title: "Warehouse",
      image: "/images/gallery/pic9.jpg",
      category: "Facilities",
    },
    {
      id: 10,
      title: "Cordelia Cruise",
      image: "/images/gallery/pic10.jpg",
      category: "Event",
    },
    {
      id: 11,
      title: "Cordelia Cruise",
      image: "/images/gallery/pic11.jpg",
      category: "Event",
    },
    {
      id: 12,
      title: "Cordelia Cruise",
      image: "/images/gallery/pic12.jpg",
      category: "Event",
    },
    {
      id: 13,
      title: "Laboratory",
      image: "/images/gallery/pic13.jpg",
      category: "Facilities",
    },
    {
      id: 14,
      title: "Laboratory",
      image: "/images/gallery/pic14.jpg",
      category: "Facilities",
    },
    {
      id: 15,
      title: "Laboratory",
      image: "/images/gallery/pic15.jpg",
      category: "Facilities",
    },
  ]

  const [filter, setFilter] = useState("all")

  const filteredGallery = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

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
              Yummfeast's Gallery
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A visual journey through our products, facilities, and company events! 📸
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

      {/* Gallery Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setFilter}>
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Trip">Trips</TabsTrigger>
              <TabsTrigger value="Facilities">Facilities</TabsTrigger>
              <TabsTrigger value="Event">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="p-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <h3 className="font-normal text-xl mb-2">{item.title}</h3>
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
