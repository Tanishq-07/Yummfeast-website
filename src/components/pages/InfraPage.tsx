"use client"

import { motion } from "framer-motion"

export default function InfraPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Infrastructure</h1>
            <p className="text-xl text-muted-foreground">
              Discover the state-of-the-art facilities and technology that power our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Modern Manufacturing Facilities</h2>
              <p className="text-muted-foreground mb-4">
                Our state-of-the-art manufacturing facilities span over 50,000 square feet and are equipped with the
                latest technology and machinery. This allows us to maintain strict quality control standards and ensure
                consistent product excellence.
              </p>
              <p className="text-muted-foreground mb-4">
                We've invested in advanced automation systems that work alongside our skilled craftspeople, combining
                the precision of technology with the irreplaceable human touch that makes our snacks special.
              </p>
              <p className="text-muted-foreground">
                All our facilities adhere to the highest food safety and hygiene standards, reflecting our commitment to
                quality and responsible manufacturing practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img src="/factory-floor.png" alt="Manufacturing Facility" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cutting-Edge Technology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The advanced technologies that enable us to deliver superior snacks consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Quality Control",
                description:
                  "Our AI-powered quality control systems inspect every product with precision that exceeds human capability, ensuring only perfect items reach our customers.",
              },
              {
                title: "Sustainable Energy",
                description:
                  "Our facilities are powered by 60% renewable energy, with solar panels and energy-efficient systems reducing our carbon footprint.",
              },
              {
                title: "Smart Inventory Management",
                description:
                  "Our inventory system uses predictive analytics to optimize stock levels, reducing waste and ensuring we can fulfill orders promptly.",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{tech.title}</h3>
                <p className="text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img src="/distribution-network.png" alt="Distribution Network" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold mb-6">Nationwide Distribution Network</h2>
              <p className="text-muted-foreground mb-4">
                Our sophisticated distribution network spans across the country, with strategically located warehouses
                that ensure fast delivery to any location. This infrastructure allows us to deliver products to most
                retailers within 2-3 business days.
              </p>
              <p className="text-muted-foreground mb-4">
                We partner with reliable shipping providers and have implemented real-time tracking systems, giving our
                customers visibility into their order status from warehouse to store.
              </p>
              <p className="text-muted-foreground">
                Our logistics team continuously optimizes routes and processes to reduce delivery times while
                maintaining our commitment to environmentally responsible practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
