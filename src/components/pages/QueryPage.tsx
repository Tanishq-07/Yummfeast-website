"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Truck, MapPin, Clock, Shield, Star, TrendingUp, Users, Award, Zap, Target, Gift } from "lucide-react"
import Image from "next/image"

export default function QueryPage() {
  const [queryType, setQueryType] = useState("distributionship")

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-600 py-24">
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

        {/* Floating Snack Animations */}
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
          <div className="max-w-5xl mx-auto text-center text-white">
            <motion.h1
              className="text-5xl md:text-7xl font-normal mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the Snack Revolution! 
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-pink-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             Curious about what makes Yummfeast snacks so yummy? We'd love to hear from you! Connect with us, and let's ensure your tummy always says 'Yummy! ✨
            </motion.p>
          </div>
        </div>
      </section>

      {/* Query Type Selector */}
      <section className="py-12 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-normal mb-4 text-gray-800">Choose Your Adventure! 🎯</h2>
            <p className="text-xl text-gray-600">Pick the partnership that fits your business dreams!</p>
          </motion.div>

          <Tabs defaultValue="dealership" onValueChange={setQueryType}>
            <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-2">
              <TabsTrigger
                value="dealership"
                className="text-lg font-normal data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-pink-400 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                🏪 Dealership
              </TabsTrigger>
              <TabsTrigger
                value="super"
                className="text-lg font-normal data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-blue-400 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                ⭐ Super Stockist
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Query Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-normal mb-4 text-gray-800">Ready to Join Our Snack Family? 🎉</h2>
              <p className="text-xl text-gray-600">
                Fill out this form and let's start building something delicious together! 🚀
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div
                  className={`h-3 bg-gradient-to-r ${
                    queryType === "dealership"
                      ? "from-orange-400 to-red-400"
                      : queryType === "distributorship"
                        ? "from-purple-400 to-pink-400"
                        : "from-green-400 to-blue-400"
                  }`}
                ></div>
                <CardContent className="p-8 bg-gradient-to-br from-white to-orange-50">
                  <div className="mb-8 text-center">
                    <div className="text-4xl mb-4">
                      {queryType === "dealership" && "🏪"}
                      {queryType === "distributorship" && "🚛"}
                      {queryType === "super" && "⭐"}
                    </div>
                    <h3 className="text-2xl font-normal mb-2 text-gray-800">
                      {queryType === "dealership" && "Dealership Application 🏪"}
                      {queryType === "distributorship" && "Distributorship Application 🚛"}
                      {queryType === "super" && "Super Stockist Application ⭐"}
                    </h3>
                    <p className="text-gray-600">
                      {queryType === "dealership" &&
                        "Join our dealer network and bring Yummfeast magic to your neighborhood! 🌟"}
                      {queryType === "distributorship" &&
                        "Become a distribution superhero and spread snack joy across regions! 🦸‍♂️"}
                      {queryType === "super" &&
                        "Unlock super stockist powers with exclusive benefits and premium margins! 💎"}
                    </p>
                  </div>

                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault()
                      window.alert(
                        "🎉 Awesome! Your application is submitted! Our snack-loving team will contact you faster than you can finish a bag of chips! 🍟✨",
                      )
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-gray-700 font-normal">
                          First Name 👋
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-gray-700 font-normal">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-normal">
                        Email Address 📧
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-normal">
                        Phone Number 📱
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 font-normal">
                        Business Name 🏢
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Amazing Business"
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-gray-700 font-normal">
                        Location/Region 📍
                      </Label>
                      <Input
                        id="location"
                        placeholder="City, State, Country"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience" className="text-gray-700 font-normal">
                        Business Experience 📈
                      </Label>
                      <select
                        id="experience"
                        className="flex h-12 w-full rounded-lg border-2 border-orange-200 focus:border-orange-400 bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-normal placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="">Select your experience level</option>
                        <option value="0-1">🌱 Just starting (Less than 1 year)</option>
                        <option value="1-3">🌿 Growing (1-3 years)</option>
                        <option value="3-5">🌳 Established (3-5 years)</option>
                        <option value="5-10">🏆 Expert (5-10 years)</option>
                        <option value="10+">👑 Master (More than 10 years)</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-normal">
                        Tell Us Your Story! 📖
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Share your business dreams, why you want to partner with Yummfeast, and what makes you awesome! We love hearing success stories in the making! ✨"
                        rows={5}
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3 bg-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      className={`w-full bg-gradient-to-r ${
                        queryType === "dealership"
                          ? "from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
                          : queryType === "distributorship"
                            ? "from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
                            : "from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500"
                      } text-white font-normal py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
                    >
                      🚀 Submit My Application! 🚀
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-normal mb-6 text-gray-800">Amazing Benefits Await You! 🎁</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our snack family and unlock incredible perks that'll make your business dreams come true! 🌟
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title:
                  queryType === "dealership"
                    ? "Exclusive Territory 🏆"
                    : queryType === "distributorship"
                      ? "Complete Product Range 📦"
                      : "Premium Margins 💰",
                description:
                  queryType === "dealership"
                    ? "Rule your territory like a snack king! No competition, just pure profit potential in your exclusive zone! 👑"
                    : queryType === "distributorship"
                      ? "Access our entire snack universe! From classic favorites to exciting new flavors - you've got it all! 🌈"
                      : "Enjoy the highest profit margins in the game! More money in your pocket means more reasons to smile! 😊",
                icon:
                  queryType === "dealership" ? (
                    <Target className="w-8 h-8" />
                  ) : queryType === "distributorship" ? (
                    <Gift className="w-8 h-8" />
                  ) : (
                    <TrendingUp className="w-8 h-8" />
                  ),
                color: "from-green-400 to-teal-400",
                bgColor: "from-green-50 to-teal-50",
              },
              {
                title: "Marketing Magic ✨",
                description:
                  "Get ready-made marketing materials, promotional campaigns, and co-branding opportunities that'll make your business shine! 🌟",
                icon: <Star className="w-8 h-8" />,
                color: "from-purple-400 to-pink-400",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                title:
                  queryType === "dealership"
                    ? "Training Academy 🎓"
                    : queryType === "distributorship"
                      ? "Logistics Support 🚛"
                      : "VIP Treatment ⭐",
                description:
                  queryType === "dealership"
                    ? "Master the art of snack selling with our comprehensive training programs! From rookie to pro in no time! 🚀"
                    : queryType === "distributorship"
                      ? "Lightning-fast logistics and delivery systems that'll make your customers say 'WOW!' every single time! ⚡"
                      : "Get VIP access to new products, priority stock, and never worry about running out during snack emergencies! 🆘",
                icon:
                  queryType === "dealership" ? (
                    <Award className="w-8 h-8" />
                  ) : queryType === "distributorship" ? (
                    <Zap className="w-8 h-8" />
                  ) : (
                    <Users className="w-8 h-8" />
                  ),
                color: "from-orange-400 to-red-400",
                bgColor: "from-orange-50 to-red-50",
              },
            ].map((benefit, index) => (
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
                  <div className={`h-2 bg-gradient-to-r ${benefit.color}`}></div>
                  <CardContent
                    className={`p-8 bg-gradient-to-br ${benefit.bgColor} group-hover:shadow-inner transition-all duration-300`}
                  >
                    <div className="text-center mb-6">
                      <div
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg mb-4`}
                      >
                        {benefit.icon}
                      </div>
                      <h3 className="font-normal text-2xl mb-4 text-gray-800">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-normal mb-6">Join 500+ Success Stories! 📈</h2>
            <p className="text-xl mb-8 text-purple-100">
              Our partners are crushing it! From small shops to distribution empires, everyone's winning with Yummfeast!
              Your success story starts here! 🎯
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">🏆</div>
                <div className="text-2xl font-normal">Rajesh Kumar</div>
                <div className="text-purple-200">Bihar Distributor</div>
                <div className="text-sm mt-2">"Revenue grew 300% in 6 months!"</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">⭐</div>
                <div className="text-2xl font-normal">Priya Sharma</div>
                <div className="text-purple-200">Super Stockist</div>
                <div className="text-sm mt-2">"Best decision for my business!"</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-2">🚀</div>
                <div className="text-2xl font-normal">Amit Patel</div>
                <div className="text-purple-200">Dealer Network</div>
                <div className="text-sm mt-2">"From 1 to 15 stores in 2 years!"</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600 bg-[url('/images/bg.png')] text-white text-center">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-normal mb-6">Ready to Start Your Snack Empire? 👑</h2>
            <p className="text-xl mb-8 text-orange-100">
              The snack revolution is underway—why just watch, when you can lead? Partner with Yummfeast and turn bold ideas into mouthwatering success! 🚀✨
            </p>
            <div className="transition-transform duration-100 hover:scale-[1.03]">
            <div className="bg-red-500 text-white text-lg font-normal w-56 mx-auto px-6 py-2 rounded-md shadow-md border-2 border-black relative hover:bg-orange-600">
               Become a Partner
              <div className="absolute -bottom-1 left-0 w-56 h-full mx-auto rounded-md bg-black -z-10 translate-y-1 translate-x-1"></div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
