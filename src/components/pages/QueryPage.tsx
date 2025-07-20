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
          className="absolute top-10 left-10 text-6xl"
          animate={{ rotate: 360, y: [-10, 10, -10] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          🍿
        </motion.div>
        <motion.div
          className="absolute top-20 right-20 text-5xl"
          animate={{ y: [-15, 15, -15], rotate: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          🥨
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/4 text-4xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        >
          🍪
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-1/3 text-5xl"
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          🥜
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
            <motion.div
              className="flex justify-center gap-6 text-4xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span>💼</span>
              <span>🤝</span>
              <span>📈</span>
              <span>🎯</span>
              <span>💰</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 inline-block"
            >
              <p className="text-lg font-normal">🌟 Over 500+ Happy Partners Already! 🌟</p>
            </motion.div>
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

          <Tabs defaultValue="distributorship" onValueChange={setQueryType}>
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-2">
              <TabsTrigger
                value="distributorship"
                className="text-lg font-normal data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-400 data-[state=active]:to-red-400 data-[state=active]:text-white rounded-xl transition-all duration-300"
              >
                🚛 Distributorship
              </TabsTrigger>
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

      {queryType === "distributorship" && (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-normal mb-6 text-gray-800">Our Super-Powered Distribution Network! 🚛⚡</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Join our incredible distribution family that's spreading snack happiness across Bihar and beyond!
                  We're not just delivering snacks - we're delivering smiles! 😊🍿
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {[
                    {
                      icon: <MapPin className="h-8 w-8" />,
                      title: "Strategic Snack Hubs 📍",
                      description:
                        "Our distribution points are like snack command centers - strategically placed to get fresh goodies to you lightning fast!",
                      color: "from-orange-400 to-red-400",
                      bgColor: "from-orange-50 to-red-50",
                    },
                    {
                      icon: <Truck className="h-8 w-8" />,
                      title: "Fleet of Flavor 🚛",
                      description:
                        "Our own trucks + trusted partners = a snack delivery dream team that knows every shortcut to happiness!",
                      color: "from-blue-400 to-purple-400",
                      bgColor: "from-blue-50 to-purple-50",
                    },
                    {
                      icon: <Clock className="h-8 w-8" />,
                      title: "Real-Time Snack Tracking 📱",
                      description:
                        "Watch your orders zoom from our Darbhanga facility straight to your store - it's like GPS for snacks!",
                      color: "from-green-400 to-teal-400",
                      bgColor: "from-green-50 to-teal-50",
                    },
                    {
                      icon: <Shield className="h-8 w-8" />,
                      title: "Quality Guardian Angels 👼",
                      description:
                        "Our logistics ninjas optimize every route while keeping our planet happy - fresh snacks, green delivery!",
                      color: "from-purple-400 to-pink-400",
                      bgColor: "from-purple-50 to-pink-50",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className={`bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl text-white shadow-lg`}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-normal mb-3 text-gray-800">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <Image
                      src="/images/distributionship-truck.jpeg"
                      alt="Yummfeast distribution truck on highway"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="absolute -top-6 -right-6 text-5xl animate-bounce">🚛</div>
                  <div className="absolute -bottom-4 -left-4 text-4xl animate-pulse">📦</div>
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 shadow-2xl text-white text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-normal mb-6">🌟 Complete Coverage Magic! 🌟</h3>
                <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                  Our super-network delivers to most super-stockists and dealers faster than you can say "snack attack"!
                  We ensure that the delightful taste of Yummfeast is always within arm's reach for every hungry
                  customer! Fresh, fast, and absolutely fantastic! 🎯✨
                </p>
                <div className="flex justify-center gap-4 mt-6 text-3xl">
                  <span>🎯</span>
                  <span>⚡</span>
                  <span>🍿</span>
                  <span>😋</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-normal mb-6">Ready to Start Your Snack Empire? 👑</h2>
            <p className="text-xl mb-8 text-orange-100">
              Don't wait! The snack revolution is happening NOW, and we want YOU to be part of it! Let's build something
              amazing together! 🚀✨
            </p>
            <div className="flex justify-center gap-4 text-5xl">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🍿
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                🤝
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
              >
                💰
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
              >
                🚀
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
