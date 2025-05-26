"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Splatter effects scattered throughout the page */}
      <div className="absolute top-[15%] right-[5%] w-32 h-32 opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#000000"
            d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29C74.8,-14.8,77.2,0.5,74.1,14.8C71,29.1,62.5,42.4,50.8,51.2C39.1,60,24.2,64.3,9.2,67.1C-5.8,69.9,-21,71.2,-34.9,66.5C-48.8,61.8,-61.5,51.1,-68.1,37.4C-74.7,23.7,-75.2,7,-71.9,-8.1C-68.6,-23.2,-61.4,-36.7,-50.5,-46.5C-39.6,-56.3,-24.9,-62.4,-9.4,-65.1C6.1,-67.8,30.7,-74.1,42.8,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="absolute bottom-[25%] left-[8%] w-40 h-40 opacity-10 z-0 rotate-45">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#000000"
            d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Hero Section with enhanced effects */}
      <section className="relative bg-gradient-to-br from-red-500 via-red-600 to-red-700 py-20 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500 opacity-30 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-yellow-300 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        {/* Ink splatter effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,10 C30,20 70,0 100,10 C130,20 170,0 200,10 L200,100 L0,100 Z" fill="#000" />
            <circle cx="50" cy="30" r="10" fill="#000" />
            <circle cx="150" cy="30" r="15" fill="#000" />
            <circle cx="100" cy="50" r="8" fill="#000" />
            <circle cx="180" cy="20" r="12" fill="#000" />
            <circle cx="20" cy="40" r="14" fill="#000" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              {/* Enhanced organic blob behind the text */}
              <svg
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                width="120%"
                height="140"
                viewBox="0 0 400 140"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#F29C1F"
                />
                {/* Grunge brush effect on the blob */}
                <filter id="grunge" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="10"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
                <path
                  d="M10,30 Q30,0 70,10 T140,20 Q180,0 220,15 T300,25 Q350,10 390,30 Q410,50 390,80 T340,110 Q300,130 250,110 T180,100 Q140,120 100,105 T40,90 Q10,110 10,70 Z"
                  fill="#F29C1F"
                  filter="url(#grunge)"
                  opacity="0.4"
                />
              </svg>

              {/* Heading text */}
              <h1 className="text-5xl font-extrabold px-6 py-3 text-white">About Yummfeast</h1>
            </div>

            <p className="text-xl text-red-100">
              Learn about our journey, mission, and the values that drive us to deliver delicious snacks.
            </p>
          </div>
        </div>

        {/* Paint brush stroke at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity=".8"
              className="fill-white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="fill-white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-white"
            />
          </svg>
        </div>
      </section>

      {/* Our Story with distressed border */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
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
                    stroke="#F29C1F"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
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
              className="relative"
            >
              {/* Distressed border effect */}
              <div
                className="absolute inset-0 border-8 border-red-500 rounded-lg opacity-70"
                style={{
                  clipPath:
                    "polygon(0% 0%, 3% 3%, 0% 6%, 3% 9%, 0% 12%, 3% 15%, 0% 18%, 3% 21%, 0% 24%, 3% 27%, 0% 30%, 3% 33%, 0% 36%, 3% 39%, 0% 42%, 3% 45%, 0% 48%, 3% 51%, 0% 54%, 3% 57%, 0% 60%, 3% 63%, 0% 66%, 3% 69%, 0% 72%, 3% 75%, 0% 78%, 3% 81%, 0% 84%, 3% 87%, 0% 90%, 3% 93%, 0% 96%, 3% 99%, 6% 96%, 9% 99%, 12% 96%, 15% 99%, 18% 96%, 21% 99%, 24% 96%, 27% 99%, 30% 96%, 33% 99%, 36% 96%, 39% 99%, 42% 96%, 45% 99%, 48% 96%, 51% 99%, 54% 96%, 57% 99%, 60% 96%, 63% 99%, 66% 96%, 69% 99%, 72% 96%, 75% 99%, 78% 96%, 81% 99%, 84% 96%, 87% 99%, 90% 96%, 93% 99%, 96% 96%, 99% 99%, 96% 96%, 99% 93%, 96% 90%, 99% 87%, 96% 84%, 99% 81%, 96% 78%, 99% 75%, 96% 72%, 99% 69%, 96% 66%, 99% 63%, 96% 60%, 99% 57%, 96% 54%, 99% 51%, 96% 48%, 99% 45%, 96% 42%, 99% 39%, 96% 36%, 99% 33%, 96% 30%, 99% 27%, 96% 24%, 99% 21%, 96% 18%, 99% 15%, 96% 12%, 99% 9%, 96% 6%, 99% 3%, 96% 0%, 93% 3%, 90% 0%, 87% 3%, 84% 0%, 81% 3%, 78% 0%, 75% 3%, 72% 0%, 69% 3%, 66% 0%, 63% 3%, 60% 0%, 57% 3%, 54% 0%, 51% 3%, 48% 0%, 45% 3%, 42% 0%, 39% 3%, 36% 0%, 33% 3%, 30% 0%, 27% 3%, 24% 0%, 21% 3%, 18% 0%, 15% 3%, 12% 0%, 9% 3%, 6% 0%, 3% 3%)",
                }}
              ></div>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden relative z-10 transform rotate-1">
                <img
                  src="images/aboutHero.png"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Paint splatter effect */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-70 z-20">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#F29C1F"
                    d="M42.8,-65.2C54.9,-56.3,63.7,-43.2,69.2,-29C74.8,-14.8,77.2,0.5,74.1,14.8C71,29.1,62.5,42.4,50.8,51.2C39.1,60,24.2,64.3,9.2,67.1C-5.8,69.9,-21,71.2,-34.9,66.5C-48.8,61.8,-61.5,51.1,-68.1,37.4C-74.7,23.7,-75.2,7,-71.9,-8.1C-68.6,-23.2,-61.4,-36.7,-50.5,-46.5C-39.6,-56.3,-24.9,-62.4,-9.4,-65.1C6.1,-67.8,30.7,-74.1,42.8,-65.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values with brush stroke divider */}
      <section className="py-16 relative">
        {/* Paint brush stroke divider at top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-blue-50"
            />
          </svg>
        </div>

        <div className="bg-blue-50 pt-10 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 relative inline-block">
                Our Mission & Values
                {/* Cartoon stroke underline */}
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="12"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,5 C10,10 30,2 50,5 S80,10 100,5"
                    stroke="#FF6B6B"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </h2>
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
                  className="relative"
                >
                  {/* SVG Mask/Clip Path for card */}
                  <div
                    className="absolute inset-0 bg-white"
                    style={{
                      clipPath: "polygon(3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%, 0% 3%)",
                    }}
                  ></div>

                  {/* Grunge brush texture overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <filter id="grunge-texture">
                        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" />
                        <feDisplacementMap in="SourceGraphic" scale="10" />
                      </filter>
                      <rect width="100%" height="100%" filter="url(#grunge-texture)" fill="#000000" />
                    </svg>
                  </div>

                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 relative z-10">
                    <h3 className="font-normal text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Paint brush stroke divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-blue-50"
            />
          </svg>
        </div>
      </section>

      {/* Team Section with ink blob frames */}
      <section className="py-16 relative">
        {/* Background paint splatter */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-5 z-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M39.9,-65.7C54.1,-60.5,69.5,-54.1,76.7,-42.5C83.9,-30.9,82.9,-15.5,79.1,-2.2C75.3,11.1,68.6,22.1,61.8,33C54.9,43.9,47.8,54.6,37.7,62.3C27.6,70,13.8,74.7,-0.2,75C-14.2,75.3,-28.3,71.3,-39.9,64C-51.5,56.7,-60.5,46.1,-67.1,33.8C-73.7,21.5,-77.9,7.5,-77.2,-6.4C-76.6,-20.3,-71.1,-34.2,-61.8,-43.9C-52.5,-53.6,-39.4,-59.1,-27.1,-65.5C-14.8,-71.9,-3.7,-79.2,7.1,-79.9C17.9,-80.6,25.7,-70.9,39.9,-65.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 opacity-5 z-0 rotate-45">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#000000"
              d="M47.7,-73.2C62.1,-66.3,74.5,-53.9,79.8,-39.1C85.2,-24.3,83.5,-7.1,79.9,9C76.3,25.1,70.8,40.2,60.4,50.5C50,60.8,34.7,66.3,19.2,70.1C3.7,73.9,-12,75.9,-26.8,72.1C-41.6,68.3,-55.5,58.6,-65.6,45.6C-75.7,32.6,-82,16.3,-82.9,-0.5C-83.8,-17.3,-79.3,-34.7,-69.1,-47.8C-58.9,-60.9,-43,-69.8,-27.8,-75.8C-12.6,-81.8,1.9,-84.9,16.8,-82.1C31.7,-79.3,33.3,-80.1,47.7,-73.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 relative inline-block">
              Meet Our Team
              {/* Handwritten underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="10"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,5 C30,2 50,8 100,5" stroke="#FF6B6B" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className="text-center relative"
              >
                {/* Ink blob frame for image */}
                <div className="relative mx-auto max-w-[200px] mb-4">
                  <svg
                    className="absolute top-0 left-0 w-full h-full -z-10"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#F29C1F"
                      d="M47.3,-73.2C60.9,-66.2,71.3,-52.3,77.4,-37.1C83.4,-21.9,85.1,-5.3,81.5,9.4C77.9,24.1,69,36.9,58.1,47.4C47.2,57.9,34.3,66.1,20.1,70.7C5.9,75.3,-9.6,76.3,-23.9,72.5C-38.2,68.7,-51.3,60.1,-62.5,48.5C-73.7,36.9,-83,22.3,-85.2,6.5C-87.4,-9.3,-82.5,-26.3,-72.6,-39.1C-62.7,-51.9,-47.8,-60.5,-33.4,-67C-19,-73.5,-5,-77.9,9.7,-78.1C24.4,-78.3,33.7,-80.2,47.3,-73.2Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                  <div className="aspect-square rounded-full overflow-hidden relative z-10 mx-auto max-w-[180px]">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-normal text-xl">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartoon stroke divider at bottom */}
      <div className="relative h-24 overflow-hidden">
        <svg className="absolute bottom-0 w-full" height="100" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,10 C30,30 70,0 100,10" stroke="#FF6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0,10 C30,20 70,5 100,10" stroke="#F29C1F" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M0,10 C30,15 70,10 100,10" stroke="#FF6B6B" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
