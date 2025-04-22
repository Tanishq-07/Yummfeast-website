"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Yummfeast</h1>
            <p className="text-xl text-muted-foreground">
              Learn about our journey, mission, and the values that drive us to deliver delicious snacks.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded with a simple mission: to create high-quality snacks that bring joy to people's lives. What
                started as a small operation has grown into a trusted brand known for excellence and authentic flavors.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've expanded our product line while maintaining our commitment to quality and customer
                satisfaction. Our team has grown, but our core values remain the same.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve customers nationwide, providing them with delicious snacks they can enjoy
                day after day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476606063_1177710887068982_3817646695977720307_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ajYboOWLg7cQ7kNvwEdbvxD&_nc_oc=AdklzTY2L384x_1ycB0KBoFXuMdaSIP-A9j_lrv3SfD0uI98zH1Vk_trfgUdjGCgZ5AKLFelnO6sMsn7JiM1ZgJa&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=nb9pWRsbrpD_JlLBH73DjQ&oh=00_AfFSsMAkgYByrZtyak9eTlmvNr-lJ-BOUVMhNAYux_ySFg&oe=680D4429" alt="Our Story" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from product development to customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on quality. Every product undergoes rigorous testing to ensure it meets our high standards.",
              },
              {
                title: "Innovation",
                description:
                  "We're constantly exploring new flavors and technologies to improve our products and processes.",
              },
              {
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. Their satisfaction is our ultimate measure of success.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The dedicated professionals who work tirelessly to bring you the best snacks and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO & Founder", image: "https://scontent-bom2-4.xx.fbcdn.net/v/t39.30808-6/476119589_1177710600402344_6422702384071220138_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5WYxTg2h6t8Q7kNvwHFNm-p&_nc_oc=Adn96Pq_5HT1zCMhtt9yIgSmhEJn6u7WlasLcBTFiqFJ8v7ribrKh8LbOWWxfag1u4RB39790afzcLBy5QoZCisn&_nc_zt=23&_nc_ht=scontent-bom2-4.xx&_nc_gid=CkvgjoNOE4EMVJQbVFr3ww&oh=00_AfH_fTuxrM0HPC65eC9Mhi5vTL0qFYlelDEEpz5UdA0pvg&oe=680D143D" },
              { name: "Sunita Sharma", role: "Head of Product", image: "https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476606063_1177710887068982_3817646695977720307_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ajYboOWLg7cQ7kNvwEdbvxD&_nc_oc=AdklzTY2L384x_1ycB0KBoFXuMdaSIP-A9j_lrv3SfD0uI98zH1Vk_trfgUdjGCgZ5AKLFelnO6sMsn7JiM1ZgJa&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=nb9pWRsbrpD_JlLBH73DjQ&oh=00_AfFSsMAkgYByrZtyak9eTlmvNr-lJ-BOUVMhNAYux_ySFg&oe=680D4429" },
              { name: "Vikram Singh", role: "Lead Food Technologist", image: "https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476220994_1178332727006798_5662711533049553514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=o-iWFFWOtj8Q7kNvwH2fzBz&_nc_oc=AdmNTngOWUnnhk2leJgf1Qj9tcpnL3jWv0Tq7nLq6ZCgng0VTibHMm9JwRrdnY7eqmtzKC-Jgud15JGai4PJWmfj&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=oqptLsgmZpscRgFLTvI4vA&oh=00_AfF4Vxhksqre_aQEX9JE_DpC20OYsVr34puOfG1kq3eIhQ&oe=680D41D8" },
              { name: "Priya Patel", role: "Marketing Director", image: "https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/476225073_1177710587069012_3206584660443027825_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cvMoGVfiJgoQ7kNvwErbEKO&_nc_oc=Adkk5X8pE6Gdz_hsCEFDbim5Xki7zsC3wgqnLV_4mG8yJKvXrYULHHmPnwcMEBfqbsjrvMhajcSToRADV_b_c-Vn&_nc_zt=23&_nc_ht=scontent-bom1-2.xx&_nc_gid=IW9ZG7zTKJt9bkXHJmihhQ&oh=00_AfEt9hqiBQD4YATJjHVmPzj-OMI0tIGdtkFJLRBLn_yo3Q&oe=680D340A" },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px]">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
