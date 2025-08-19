"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Heart, Star, Zap } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden  bg-red-600 py-20">
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
              Let's Chat! 
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-orange-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Got questions about our delicious snacks? We're all ears and ready to help! Drop us a line and let's make
              your snacking experience amazing! ✨
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-normal mb-4 text-gray-800">How Can We Help You? 🤝</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the best way to reach our snack-loving team!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Support 💬",
                description: "Questions about our yummy snacks? We've got answers!",
                contact: "customercare@yummfeast.in",
                phone: "18001020602",
                icon: <Heart className="w-8 h-8" />,
                color: "from-pink-400 to-red-400",
                emoji: "🎧",
              },
              {
                title: "Sales Team 📈",
                description: "Ready for bulk orders? Let's make it happen!",
                contact: "sales@yummfeast.in",
                phone: "+91 9334469490",
                icon: <Star className="w-8 h-8" />,
                color: "from-yellow-400 to-orange-400",
                emoji: "💼",
              },
              {
                title: "Partnership Hub 🤝",
                description: "Want to partner with us? We'd love to collaborate!",
                contact: "info@ambeyfood.in",
                phone: "+91 9334469505",
                icon: <Zap className="w-8 h-8" />,
                color: "from-green-400 to-blue-400",
                emoji: "🚀",
              },
            ].map((info, index) => (
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
                  <div className={`h-2 bg-gradient-to-r ${info.color}`}></div>
                  <CardContent className="p-8 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-orange-50 transition-all duration-300">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">{info.emoji}</div>
                      <h3 className="font-normal text-2xl mb-3 text-gray-800">{info.title}</h3>
                      <p className="text-gray-600 mb-6">{info.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-center p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                        <Mail className="w-5 h-5 text-orange-500 mr-3" />
                        <a
                          href={`mailto:${info.contact}`}
                          className="text-orange-600 hover:text-orange-700 font-normal"
                        >
                          {info.contact}
                        </a>
                      </div>
                      <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                        <Phone className="w-5 h-5 text-green-500 mr-3" />
                        <a href={`tel:${info.phone}`} className="text-green-600 hover:text-green-700 font-normal">
                          {info.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-normal mb-4 text-gray-800">Send Us a Sweet Message! 📝</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We promise to respond faster than you can say "snack attack"! 🏃‍♂️💨
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400"></div>
                <CardContent className="p-8 bg-white">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault()
                      window.alert(
                        "🎉 Thank you for your message! We'll get back to you faster than you can finish a bag of chips! 🍟",
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
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
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
                          className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
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
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 font-normal">
                        Phone Number 📱
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-normal">
                        What's on your mind? 💭
                      </Label>
                      <Input
                        id="subject"
                        placeholder="I love your snacks and want to know more!"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-normal">
                        Tell us more! 💬
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Share your thoughts, feedback, or questions about our delicious snacks..."
                        rows={5}
                        required
                        className="border-2 border-orange-200 focus:border-orange-400 rounded-lg p-3"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-normal py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send My Message! 🚀
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-normal mb-4 text-gray-800">Come Visit Our Snack HQ! 🏢</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Where all the magic happens! Drop by for a tour and some free samples! 🎁
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.461832121948!2d85.92654807556895!3d26.14908467711062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb97928c5dd6d%3A0xf4d75dd98463a65!2sAmbey%20Food%20Products!5e0!3m2!1sen!2sin!4v1745313914923!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce">📍</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
                <h3 className="font-normal text-2xl mb-4 text-gray-800 flex items-center">
                  <MapPin className="w-6 h-6 text-red-500 mr-2" />
                  Our Snack Factory 🏭
                </h3>
                <address className="not-italic text-gray-600 space-y-2 mb-6 text-lg">
                  <p>Ambey Food Products</p>
                  <p>Plot no 55, B (53) P, B(58) P Industrial Area Donar</p>
                  <p>Darbhanga, Bihar, India 846004</p>
                </address>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-green-50 p-4 rounded-xl flex items-center">
                  <Phone className="w-6 h-6 text-green-500 mr-4" />
                  <div>
                    <p className="font-normal text-gray-800">Call Us! 📞</p>
                    <p className="text-gray-600">+91 9334469490</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl flex items-center">
                  <Mail className="w-6 h-6 text-blue-500 mr-4" />
                  <div>
                    <p className="font-normal text-gray-800">Email Us! 💌</p>
                    <p className="text-gray-600">info@yummfeast.in</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-xl flex items-center">
                  <Clock className="w-6 h-6 text-purple-500 mr-4" />
                  <div>
                    <p className="font-normal text-gray-800">Visit Us! 🕐</p>
                    <p className="text-gray-600">Mon-Sat: 10am - 6pm</p>
                    <p className="text-gray-600">Sunday: Closed (We're snacking!)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-red-600 text-white text-center bg-[url('/images/bg.png')]">
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-normal mb-4">Ready to Snack with Us?✨</h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of happy snackers who trust us for their cravings!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
