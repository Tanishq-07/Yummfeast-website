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
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/468422498_18049262201502000_6926184055011270435_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=L5E4D1K_OaIQ7kNvwGcMo4D&_nc_oc=AdltoQKX9sAPK9zYGTq_oCQ2ZIqu9eIjWebgxOigIVdF4pyNrZOxMOoKZSrGv2bn6Twa1A38jaILXnZBurJF7Kr5&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=QEqWSGsdxIczri-hwjueRQ&oh=00_AfF8JE5x2Iqb6VnPCKc9mmOTytoErRzCvQu7zJWkjvRCHw&oe=680D12DB",
      description: "Crunchy rings with a burst of tangy masala flavor",
    },
    {
      id: 2,
      name: "Yummfeast Pasta",
      price: "₹15",
      category: "chips",
      image: "https://scontent-bom2-1.xx.fbcdn.net/v/t51.75761-15/484296481_18062049956502000_5202190244912784351_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bBPYsHq5YREQ7kNvwHRbjoH&_nc_oc=AdlsagV4v-Cc-DdNxxjOn2YiAjfUodjcKB1KdI7nPxLE_SxsB92UF6sqStnyYQkPjlwJ3_Mmd5Bo_zLlXUmWU3Uf&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=QcrWpFDNRQrp2m54k-L_9g&oh=00_AfG1JKYPQLOVvEUCNGxfZN6wEEgfa-0bITE0AWmvia0soA&oe=680D10D8",
      description: "Crispy pasta snacks with Italian herbs seasoning",
    },
    {
      id: 3,
      name: "Yummfeast All-in-One",
      price: "₹20",
      category: "namkeen",
      image: "https://scontent-bom1-2.xx.fbcdn.net/v/t51.75761-15/491468617_18065125247502000_1149868952402854465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kgaL_GKWRoMQ7kNvwFg_GOo&_nc_oc=Adm_Vgu1FK_aJE65mzEE0Jr3iwENkfijb2wCdwYoFzWVANO8FTEjIClX5q2-ZDto3w4p0wUifZz2anY75Hio24iR&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=riWHqGIbEyfis2eXlW8CAQ&oh=00_AfG5QVx3140ImkLLhDajGX8KKnQG0x9GwdnlAttlx9G4QA&oe=680D2DAB",
      description: "A delightful mix of various namkeen for the perfect snack time",
    },
    {
      id: 4,
      name: "Yummfeast Chatpata Mix",
      price: "₹25",
      category: "namkeen",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t51.75761-15/490510046_18065287943502000_4855848620494398094_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=iYeL2r3fHwMQ7kNvwEqQ1Gb&_nc_oc=AdlsuKtJP7t3DYXLqjo8-y8POr-UI9yrkOMf2cbhtzjbDD22FxYtmw3mY3r9PQt4IKxebmx5612w56_pT-gWlPzZ&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=5PsMj8sgbIbnD5jWjHfPYg&oh=00_AfHr8zX1eCj7xQZrK4lwi7Yv_lWzxYYh-B1tXb9cPjuQZA&oe=680D1579",
      description: "Spicy and tangy mix that will tantalize your taste buds",
    },
    {
      id: 5,
      name: "Yummfeast Aloo Bhujia",
      price: "₹15",
      category: "namkeen",
      image: "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486656603_18063371231502000_3260484252073249947_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XBfzNMHPwbwQ7kNvwGWpv7L&_nc_oc=Adk514ECWmw91qZ-1uN6T93bcgCfecIKxirjcm4Ye8Wu83m8UDq3P1YstzLVTpIvKATU61inQYbrEctt8YfkNVMM&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=fE6e6yFDZh0xfn9HQpQuNg&oh=00_AfHTo_Iy5NfIVSk7DLrtfbTuVPVpjgPdQaEIR4U135mgYQ&oe=680D35A6",
      description: "Classic potato noodles with a perfect blend of spices",
    },
    {
      id: 6,
      name: "Yummfeast Corn Puffs",
      price: "₹10",
      category: "fryums",
      image: "https://scontent-bom2-3.xx.fbcdn.net/v/t51.75761-15/486016793_18062776019502000_2146009678516366812_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=oziAvh_UA0QQ7kNvwFYE_Dq&_nc_oc=AdlAW-sJwvjN6fy2YoILMEmEJSOh3yU-WzgRzHNcnob89w-5kO7YhbItq3ro3NJuYCeC7WDjCCqRHeJ_df3QuFey&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=o4vaCFPUdG4Xop8tHptM7g&oh=00_AfGwI3FM55ksiV863pPCL-DTjYEe69mVRxdeLnEriiAZwA&oe=680D1ED5",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12 mt-4">
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
      {/* <section className="py-16 bg-red-600">
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
      </section> */}
    </div>
  )
}
