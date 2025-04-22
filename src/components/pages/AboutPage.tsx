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
              <img src="/factory-image.png" alt="Our Story" className="w-full h-full object-cover" />
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
              { name: "Rajesh Kumar", role: "CEO & Founder", image: "/team-member1.png" },
              { name: "Sunita Sharma", role: "Head of Product", image: "/team-member2.png" },
              { name: "Vikram Singh", role: "Lead Food Technologist", image: "/team-member3.png" },
              { name: "Priya Patel", role: "Marketing Director", image: "/team-member4.png" },
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
