"use client"

import { motion } from "framer-motion"

export default function InfraPage() {
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
              Modern Manufacturing Facilities
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the state-of-the-art facilities and technology that power our operations.! 🚛
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
              <h2 className="text-3xl font-normal text-red-600 mb-6">Modern Manufacturing Facilities</h2>
              <p className="text-muted-foreground mb-4">
                Our modern manufacturing facilities cover over 100,000 square feet and are equipped with the 
                latest machinery to ensure efficient and high-volume production. This setup allows us to maintain 
                strict quality control and deliver products that meet our high standards, every single time.
              </p>
              <p className="text-muted-foreground mb-4">
                We combine automated systems with the expertise of skilled workers, ensuring each product is 
                crafted with precision while retaining the authenticity and care that set our snacks apart.
              </p>
              <p className="text-muted-foreground">
                All our units follow strict hygiene and food safety protocols, and we’re proud to be a ZED Gold 
                Certified facility—recognizing our commitment to zero defects, zero environmental impact, and 
                responsible manufacturing practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              {/* <img src="/images/infra1.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" /> */}
              <video
                src="/videos/vid1.mp4"
                controls
                muted
                loop
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
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

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4 text-white">Cutting-Edge Technology</h2>
            <p className="max-w-2xl mx-auto text-white">
              The advanced technologies that enable us to deliver superior snacks consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Production Lines",
                description:
                  "Our well-maintained, high-capacity machinery enables us to manufacture consistently high-quality snacks while maintaining efficiency at scale.",
              },
              {
                title: "Semi-Automated Processes",
                description:
                  "We use a combination of automated equipment and human oversight to ensure the perfect balance of consistency, safety, and traditional flavor.",
              },
              {
                title: "ZED Gold Certified Quality Standards",
                description:
                  "Our processes are aligned with ZED Gold certification, ensuring we follow best practices in quality management.",
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
                <h3 className="font-normal text-xl mb-3 text-red-500">{tech.title}</h3>
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
              <img src="/images/infra2.jpeg" alt="Distribution Network" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-normal text-orange-600 mb-6">Robust Regional Distribution Network</h2>
              <p className="text-muted-foreground mb-6">
                At Ambey Food Products, our strength lies in our robust regional distribution network, primarily 
                spanning across Bihar and strategically expanding into neighboring areas. With our strategically 
                located distribution points, we ensure efficient and fast delivery of our fresh snacks to your shelves.
              </p>
              <p className="text-muted-foreground mb-6">
                This infrastructure allows us to deliver products to most super-stockist and dealers within our primary 
                markets ensuring freshness and consistent availability.
              </p>
              <p className="text-muted-foreground">
                We have our own fleet and we also partner with reliable logistics providers who understand the nuances of 
                the regional terrain, and we've implemented tracking systems that give our partners visibility into their 
                order status from our facility in Darbhanga directly to their stores.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
