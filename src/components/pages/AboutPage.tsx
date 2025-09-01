import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Eye } from "lucide-react"
import React, { useRef } from "react";
import HeroSection from "../HeroSection";


export default function AboutPage() {

  const bannerData = {
    bg: "/images/bg.png",
    image1: "/images/banners/about/left.png",
    image2: "/images/banners/about/right.png"
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with enhanced effects */}
      <HeroSection banner={bannerData} />

      {/* Our Story with distressed border */}
      <section className="py-16 relative"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}>
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

      {/* Our Mission */}
      <section className="relative overflow-hidden py-16 bg-red-600">
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
        <motion.div
          className="absolute top-20 right-0 w-64 h-64 rounded-full bg-white/10 opacity-30 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <div className="container mx-auto px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-white mb-4 relative inline-block">
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
            <p className="text-white max-w-2xl mx-auto">Where we're headed and what we stand for.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {[
              {
                title: "Crafted to delight, made to munch. ❤️",
                description:
                  "We are on a mission to create high-quality, exciting snacks using fresh ingredients, innovative recipes, and cutting-edge technology — reaching every corner of India through strong distribution and delightful taste.",
                icon: <Heart className="w-8 h-8" />,
                color: "from-red-400 to-pink-400",
                bgColor: "from-red-50 to-pink-50",
              },
            ].map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${mission.color}`}></div>
                  <CardContent
                    className={`p-8 bg-gradient-to-br ${mission.bgColor} group-hover:shadow-inner transition-all duration-300`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${mission.color} text-white shadow-lg mb-4`}
                      >
                        {mission.icon}
                      </div>
                      <h3 className="font-normal text-2xl mb-4 text-gray-800">{mission.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="relative overflow-hidden py-16 bg-white"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
        }}>
        <div className="container mx-auto px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal text-gray-800 mb-4 relative inline-block">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">Our vision for the future of snacking.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            {[
              {
                title: "Leading India's snack revolution. 👁️",
                description:
                  "To become India's most beloved snack brand, setting new standards for quality, taste, and innovation while building a sustainable future for snacking that brings joy to every household across the nation.",
                icon: <Eye className="w-8 h-8" />,
                color: "from-blue-400 to-indigo-400",
                bgColor: "from-blue-50 to-indigo-50",
              },
            ].map((vision, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${vision.color}`}></div>
                  <CardContent
                    className={`p-8 bg-gradient-to-br ${vision.bgColor} group-hover:shadow-inner transition-all duration-300`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${vision.color} text-white shadow-lg mb-4`}
                      >
                        {vision.icon}
                      </div>
                      <h3 className="font-normal text-2xl mb-4 text-gray-800">{vision.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{vision.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Team Section with ink blob frames */}
      <section className="bg-red-600 py-8 relative">
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
          <div className="text-center mb-8">
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

          <div className="flex justify-center">
            {[
              {
                name: "Mr. Manish Pansari",
                role: "CEO & Managing Director",
                image:
                  "/images/team/team1.jpeg",
              }
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
