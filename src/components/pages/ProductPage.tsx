"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  const [category, setCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Yummfeast Rings",
      price: "₹10",
      category: "chips",
      image: "/rings-packet.png",
      description: "Crunchy rings with a burst of tangy masala flavor",
    },
    {
      id: 2,
      name: "Yummfeast Pasta",
      price: "₹15",
      category: "chips",
      image: "/pasta-packet.png",
      description: "Crispy pasta snacks with Italian herbs seasoning",
    },
    {
      id: 3,
      name: "Yummfeast All-in-One",
      price: "₹20",
      category: "namkeen",
      image: "/allinone-packet.png",
      description: "A delightful mix of various namkeen for the perfect snack time",
    },
    {
      id: 4,
      name: "Yummfeast Chatpata Mix",
      price: "₹25",
      category: "namkeen",
      image: "/chatpata-packet.png",
      description: "Spicy and tangy mix that will tantalize your taste buds",
    },
    {
      id: 5,
      name: "Yummfeast Aloo Bhujia",
      price: "₹15",
      category: "namkeen",
      image: "/aloobhujia-packet.png",
      description: "Classic potato noodles with a perfect blend of spices",
    },
    {
      id: 6,
      name: "Yummfeast Corn Puffs",
      price: "₹10",
      category: "fryums",
      image: "/cornpuffs-packet.png",
      description: "Light and airy corn puffs with a cheesy flavor",
    },
  ]

  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-muted-foreground">
              Explore our range of delicious snacks designed to satisfy your cravings.
            </p>
          </div>
        </div>
      </section>

      {/* Product Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" onValueChange={setCategory}>
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="chips">Chips</TabsTrigger>
              <TabsTrigger value="namkeen">Namkeen</TabsTrigger>
              <TabsTrigger value="fryums">Fryums</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 1, y: 0 }}
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
                    <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{product.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.alert(`${product.name} details coming soon!`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-8">Contact our team for bulk orders or to inquire about our full product range.</p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-white/90"
              onClick={() => (window.location.href = "mailto:info@yummfeast.in")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
