"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Product Showcase",
      image: "https://scontent-bom2-3.xx.fbcdn.net/v/t39.30808-6/481207983_1043320161160281_1385616589257813580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gzy5d958y70Q7kNvwH_dlu1&_nc_oc=AdmVoppPXbUw1i22zcA8M_Qe-grPyLwxXgQYS2SofXFjGs9d0zdYIAvWA6xKWBxtutcWbjo5TLw30Sebwqq7lPpm&_nc_zt=23&_nc_ht=scontent-bom2-3.xx&_nc_gid=dCmEQUCPyEwl3vlKcq1fPg&oh=00_AfEHlx2jBZFVO8gydRHhUa7E1arkI_6ARq4IAJy6aVjKWw&oe=680D250A",
      category: "products",
    },
    {
      id: 2,
      title: "Manufacturing Process",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/476153190_1177710750402329_7772605444743931878_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1NgyYD_IpqkQ7kNvwEcVf7H&_nc_oc=AdnFffyEFEv5JhIh8DjhEWCkuYSr1LIne7CsP_CjdSfFfgP1YZrYtHCoRrkVK0kUJ9IH0EzNq9RFrDhXJDSoDeJP&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=Mdy8m4y_oDw1UByft6IRkw&oh=00_AfETfOtoi_X3Qf3OjsLVIS8e5XOpdlGgyIEGt8ihl7TMrQ&oe=680D46E3",
      category: "facilities",
    },
    {
      id: 3,
      title: "Team Building Event",
      image: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/482068835_1042703414555289_851605443751928780_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Als3BpHQwx8Q7kNvwG3FSP_&_nc_oc=Adlqtwtd9TzSp0H6567zMk0mbYLtM6vJ_niYd29gg5YdqAvl57mjbHkF7dHbjutRE1wdM2AIaAJFBbp9FvVYXgDK&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=NhFShPF0DMJ0uUIqN3Srsg&oh=00_AfHIuecRvCqktOSbPZNIwpmSC2e8rVwecV2T4J8bY1D68Q&oe=680D1C8F",
      category: "team",
    },
    {
      id: 4,
      title: "Quality Testing",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/476447117_1179910136849057_447730439503410945_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wlTu8fEpO3gQ7kNvwFqZVpP&_nc_oc=Adkz9VizixN4OId4Y9i7rS_SfLXyWj1GpDby-X2bTAC6pYro8S92g6U1QrD6TPkcH7Jg86TdYHeDUS0AdjHSApLL&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=isvNI1mNp149HSrXbd0f0Q&oh=00_AfGBQStp5sno_sZ07yZwSmUSvNn9zDLVxDlIaObG_loXnA&oe=680D280D",
      category: "facilities",
    },
    {
      id: 5,
      title: "Product Development",
      image: "https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476220994_1178332727006798_5662711533049553514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o-iWFFWOtj8Q7kNvwH2fzBz&_nc_oc=AdmNTngOWUnnhk2leJgf1Qj9tcpnL3jWv0Tq7nLq6ZCgng0VTibHMm9JwRrdnY7eqmtzKC-Jgud15JGai4PJWmfj&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=oqptLsgmZpscRgFLTvI4vA&oh=00_AfF4Vxhksqre_aQEX9JE_DpC20OYsVr34puOfG1kq3eIhQ&oe=680D41D8",
      category: "products",
    },
    {
      id: 6,
      title: "Customer Appreciation Day",
      image: "https://scontent-bom2-1.xx.fbcdn.net/v/t39.30808-6/476456222_1177710590402345_8618694926812591375_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9z2PL5qdclAQ7kNvwHk0yKN&_nc_oc=AdkWj9ZCO5KXELlII3hfsD5lGedm6ufjCg1W6HXsq2h8LSGq0Kifx-I57NAZ8MXsGfx16TuP9mEVssTfh_p3UjjB&_nc_zt=23&_nc_ht=scontent-bom2-1.xx&_nc_gid=Go9wM0N01HIi06GxHAui8g&oh=00_AfEkHdKGWtOk_JYDsyzeO39fM1Y-zzO8jGoPwiWqP0XQjA&oe=680D2C78",
      category: "events",
    },
    {
      id: 7,
      title: "Warehouse Operations",
      image: "https://scontent-bom2-2.xx.fbcdn.net/v/t39.30808-6/480994681_1042703967888567_7929800678858174280_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SR4xZto6PUQQ7kNvwHoJ4P_&_nc_oc=AdlAx6AUsk_XeNxQVQg87IHKGym4YFCvOBtG2r9JCxgCII_8d9jYWtq8d2f4wmKb7hoaty5mgKfEuKw8kfLsvAGs&_nc_zt=23&_nc_ht=scontent-bom2-2.xx&_nc_gid=o7EcHANCojhiTRU3N0HlTQ&oh=00_AfFQumvYykRY857OKNnjPtrb4kc_hcx5LmsstpP4pgbziA&oe=680D25FE",
      category: "facilities",
    },
    {
      id: 8,
      title: "Product Launch Event",
      image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/470554608_1145327803640624_4709105577387738266_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rZjMGg7KUZ8Q7kNvwEvacV5&_nc_oc=Adk3HHW7a7AI654FFivqTmb3PhtcphrDC0kz9YNJC-NULVTxN6zOz8k3l8LSUgeNxeCw6vnjY1A48eIBjCTmjRSw&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=7wqfjPfY2nLVctciX-RPnA&oh=00_AfG2Gv1SvT67i24NFMESjZ5j2h5-YcPc9F4d72WAfpCI0A&oe=680D1EF6",
      category: "events",
    },
    {
      id: 9,
      title: "Team Meeting",
      image: "https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476606063_1177710887068982_3817646695977720307_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ajYboOWLg7cQ7kNvwEdbvxD&_nc_oc=AdklzTY2L384x_1ycB0KBoFXuMdaSIP-A9j_lrv3SfD0uI98zH1Vk_trfgUdjGCgZ5AKLFelnO6sMsn7JiM1ZgJa&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=nb9pWRsbrpD_JlLBH73DjQ&oh=00_AfFSsMAkgYByrZtyak9eTlmvNr-lJ-BOUVMhNAYux_ySFg&oe=680D4429",
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
