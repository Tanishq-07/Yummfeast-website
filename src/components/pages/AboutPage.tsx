import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with enhanced effects */}
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
        <div className="relative inset-0 bg-black/10"></div>
        <motion.div
          className="absolute top-8 left-6 md:top-12 md:left-28 text-5xl md:text-6xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
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
              About Yummfeast
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Learn about our journey, mission, and the values that drive us to
              deliver delicious snacks! 👬
            </motion.p>
            <motion.div
              className="flex justify-center gap-4 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Our Story with distressed border */}
      <section className="py-16 relative">
        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-normal mb-6 relative text-red-600 inline-block">
                Our Story
                {/* Handwritten underline effect */}
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C20,0 40,10 60,5 S80,0 100,5"
                    stroke="#FF6B6B"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-muted-foreground mb-4">
                Established in 2019, Ambey Food Products, a unit of Micro Commercials Pvt. Ltd., set out with a simple
                mission — to deliver delicious, high-quality snacks under the vibrant brand name Yummfeast.
              </p>
              <p className="text-muted-foreground mb-4">
                In just a short span, Yummfeast has become a favorite among children and families alike, thanks to its commitment 
                to flavor, freshness, and consistency. Our snacks — from crispy chips to savory namkeen and fryums — are made using 
                carefully selected ingredients in our state-of-the-art, fully automated facility located in Darbhanga, Bihar, India.
              </p>
              <p className="text-muted-foreground">
                With a strong and growing distribution network across Bihar, Jharkhand, West Bengal and Uttar Pradesh, Yummfeast 
                continues to reach more snack lovers every day. Behind the brand’s steady rise are four visionary directors — Mr. 
                Manish Pansari, Mr. Ajay Pansari, Mr. Dipak Pansari, and Mr. Lakshman Pansari — whose leadership and passion for 
                quality are driving Yummfeast toward becoming a household name in the world of snacks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative z-10">
                <img
                  src="images/about1.png"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision with brush stroke divider */}
      <section className="relative overflow-hidden  bg-red-600 py-8">
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
        <div className="bg-red-600 pt-10 pb-16">
          <div className="container mx-auto px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-white mb-4 relative inline-block">
                Our Vision
                {/* Cartoon stroke underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C10,10 30,2 50,5 S80,10 100,5"
                    stroke="#F29C1F"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-white max-w-2xl mx-auto">
                Where we’re headed and what we stand for.
              </p>
            </div>

            <div className="w-88">
              {[
                {
                  title: "Spreading smiles, one snack at a time.",
                  description:
                    "To become one of India’s most loved and trusted snack brands by delivering joyful, flavorful experiences that bring people together — one pack at a time.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10">
                    <h3 className="font-normal text-xl mb-3 text-red-500 text-center">{value.title}</h3>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-8"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="pt-10 pb-16">
          <div className="container mx-auto px-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-normal text-red-600 mb-4 relative inline-block">
                Our Mission
                {/* Cartoon stroke underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C10,10 30,2 50,5 S80,10 100,5"
                    stroke="#F29C1F"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Where we’re headed and what we stand for.
              </p>
            </div>

            <div className="w-88">
              {[
                {
                  title: "Crafted to delight, made to munch.",
                  description:
                    "We are on a mission to create high-quality, exciting snacks using fresh ingredients, innovative recipes, and cutting-edge technology — reaching every corner of India through strong distribution and delightful taste.",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-red-600 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10">
                    <h3 className="font-normal text-xl mb-3 text-white text-center">{value.title}</h3>
                    <p className="text-white text-center">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with ink blob frames */}
      <section className="bg-red-600 py-16 relative">
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white font-normal text-red-600 mb-4 relative inline-block">
              Meet Our Team
              {/* Handwritten underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 C30,2 50,8 100,5"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              The dedicated professionals who work tirelessly to bring you the best snacks and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "CEO & Founder",
                image:
                  "https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw=",
              },
              {
                name: "Sunita Sharma",
                role: "Head of Product",
                image:
                  "https://media.istockphoto.com/id/2149706485/photo/indian-or-latin-confident-middle-age-male-entrepreneur-businessman-holding-mobile-cell-phone.jpg?s=612x612&w=0&k=20&c=SZNcl4wlrMF9GPwyPOxI3H-pMUDYGsiJ5FCNco3MHMk=",
              },
              {
                name: "Vikram Singh",
                role: "Lead Food Technologist",
                image:
                  "https://media.istockphoto.com/id/1408199912/photo/close-up-image-of-indian-man-outdoors-on-apartment-balcony-posing-in-front-of-pest-control.jpg?s=612x612&w=0&k=20&c=UDoZDF-F6V9wSljTp0ur3eQFBnXI4F7GW4xR5167N60=",
              },
              {
                name: "Priya Patel",
                role: "Marketing Director",
                image:
                  "https://media.istockphoto.com/id/1309955330/photo/businessman-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=lKAuvJFF1wN8jUM2STmrnLvQzcYFUpZeHXBBQsFyq3E=",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white relative"
              >
                {/* Ink blob frame for image */}
                <div className="relative mx-auto max-w-[200px] mb-4">
                  <div className="aspect-square rounded-full overflow-hidden relative z-10 mx-auto max-w-[180px]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-normal text-white text-xl">{member.name}</h3>
                <p className="text-white">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
