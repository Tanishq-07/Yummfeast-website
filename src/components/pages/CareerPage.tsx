"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp, MapPin, Clock, Users } from "lucide-react";

export default function CareerPage() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Area Sales Manager – Gorakhpur, Uttar Pradesh",
      location: "Gorakhpur, Uttar Pradesh (Field-based)",
      type: "Full-Time",
      department: "Sales",
      shortDescription:
        "Lead and scale Yummfeast's sales and distribution operations in the Gorakhpur region.",
      about:
        "Yummfeast is a rapidly growing packaged snacks brand bringing delicious, affordable, and high-quality snacks to consumers across India. As we expand our national footprint, we are looking for dynamic professionals who thrive in fast-paced environments and are excited to grow with us.",
      roleOverview:
        "As the Area Sales Manager for Gorakhpur, you will be responsible for leading and scaling Yummfeast's sales and distribution operations in the region. You'll manage distributor networks, mentor sales teams, and drive strategic initiatives to enhance our market presence and boost revenue growth.",
      responsibilities: [
        "Drive both primary and secondary sales to achieve volume and revenue targets.",
        "Build and manage an efficient network of distributors and retailers across urban and rural Gorakhpur.",
        "Recruit, train, and lead a team of Sales Officers/Executives, ensuring high performance.",
        "Analyse market trends and competitor activities to modify our business strategy.",
        "Implement trade promotions, visibility initiatives, and in-store merchandising plans.",
        "Ensure adequate stock levels, timely collections, and operational compliance.",
        "Maintain strong relationships with other channel partners and key customers.",
        "Provide regular sales reports and insights to management.",
      ],
      qualifications: [
        "Graduate/Postgraduate in Business, Marketing, or any such related field.",
        "4–6 years of FMCG sales experience, with at least 2 years in a similar regional role.",
        "Deep understanding of the Gorakhpur/U.P. market and its retail dynamics.",
        "Strong experience in distributor/channel management and team leadership.",
      ],
      skills: [
        "Excellent negotiation, communication, and interpersonal skills.",
        "Strong leadership and team-building ability.",
        "Analytical thinking and working knowledge of Excel and PowerPoint.",
        "Target-driven, self-motivated, and adaptable to a fast-moving environment.",
        "Willingness to travel extensively within the assigned area.",
      ],
      benefits: [
        "Competitive compensation with performance-based incentives.",
        "Growth opportunities in a high-impact role at a leading FMCG startup.",
        "Collaborative, energetic, and entrepreneurial work culture.",
      ],
    },
    {
      id: 2,
      title: "Retail Sales Manager – Bihar",
      location: "Bihar (Field-based, extensive intra-state travel)",
      type: "Full-Time",
      department: "Sales",
      shortDescription:
        "Execute end-to-end retail strategy across Bihar state and lead high-performing sales teams.",
      about:
        "Yummfeast is an innovative and fast-scaling brand in India's packaged snacks industry, focused on combining authentic flavours with modern convenience. We're expanding rapidly and looking for leaders who can accelerate our growth across various regions.",
      roleOverview:
        "As the Retail Sales Manager for Bihar, you will be responsible for the end-to-end execution of Yummfeast's retail strategy across the state. From increasing product visibility to building strong retail relationships and leading sales teams, you will play a key role in shaping our market presence in Bihar.",
      responsibilities: [
        "Develop and execute retail sales strategies for market expansion and revenue growth.",
        "Establish and nurture relationships with retailers across urban and rural Bihar.",
        "Lead, train, and supervise a high-performing field sales team.",
        "Monitor sales performance and implement corrective actions where necessary.",
        "Coordinate with distributors and supply chain teams to ensure consistent stock availability.",
        "Conduct regular market mapping, competitive analysis, and retail audits.",
        "Drive visibility through in-store promotions, plans, and merchandising.",
        "Prepare performance reports and contribute to strategic planning.",
        "Ensure adherence to policies on credit, collections, and distributor compliance.",
      ],
      qualifications: [
        "Graduate/Postgraduate in Business, Sales, or Marketing (MBA preferred).",
        "4–7 years of experience in FMCG retail sales, with exposure to Bihar's trade landscape.",
        "Proven expertise in retail expansion, sales team handling, and channel development.",
      ],
      skills: [
        "Exceptional communication, leadership, and team management skills.",
        "Strong negotiation and relationship-building capabilities.",
        "Analytical, target-oriented, and capable of strategic problem-solving.",
        "Fluent in MS Office tools, especially Excel and PowerPoint.",
        "Open to extensive travel and on-ground execution across districts.",
      ],
      benefits: [
        "Competitive salary with performance-driven incentives.",
        "A key leadership opportunity in a high-growth FMCG brand.",
        "Supportive and fast-paced work environment with growth potential.",
      ],
    },
    {
      id: 3,
      title: "Toll-Free Customer Service Executive (Female)",
      location: "Darbhanga, Bihar (Office-based)",
      type: "Full-Time",
      department: "Customer Service",
      shortDescription:
        "Handle customer queries and provide exceptional service via toll-free helpline.",
      about:
        "Yummfeast is one of India's fastest-growing snack brands, known for quality, taste, and a strong customer focus. We are currently looking for a personable and dedicated Female Customer Service Executive to join our Darbhanga office and handle inbound calls via our toll-free helpline.",
      roleOverview:
        "As a Toll-Free Customer Service Executive, you'll be the first point of contact for customer queries, complaints, and feedback. Your role will be essential in building trust and ensuring a smooth, helpful, and professional communication experience for our consumers.",
      responsibilities: [
        "Handle incoming customer calls on the toll-free helpline.",
        "Provide accurate product information and resolve customer inquiries.",
        "Log and maintain detailed records of all customer interactions.",
        "Coordinate with internal teams (sales, logistics, quality) to resolve issues.",
        "Follow up with customers to ensure problem resolution and satisfaction.",
        "Maintain a positive and empathetic tone in all interactions.",
        "Adhere to all internal protocols, including privacy and compliance policies.",
      ],
      qualifications: [
        "1–3 years of experience in customer service or a call center environment.",
        "Fluent in Hindi; familiarity with Maithili or regional dialects is an advantage.",
        "Basic computer literacy, including MS Office and CRM systems.",
        "Must be a female candidate (as per organisational requirements).",
      ],
      skills: [
        "Clear verbal communication and excellent listening skills.",
        "Calm, patient, and professional under pressure.",
        "Strong organizational and multitasking ability.",
        "Customer-first mindset with attention to detail.",
      ],
      benefits: [
        "Fixed salary with attractive performance incentives.",
        "Friendly, professional, and inclusive office environment.",
        "Career development opportunities within a rapidly growing FMCG company.",
      ],
    },
  ];

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

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
              <div className="relative inset-0 bg-black/10"></div>
              <motion.div
                className="absolute top-6 left-6 md:top-12 md:left-28 text-5xl md:text-6xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <img src="/images/prop1.png" alt="" className="w-20 h-20 md:w-28 md:h-28" />
              </motion.div>
              <motion.div
                className="absolute top-8 right-6 md:top-20 md:right-28 text-5xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <img src="/images/prop2.png" alt="" className="w-20 h-20" />
              </motion.div>
              <motion.div
                className="absolute bottom-10 left-20 md:left-1/4 text-5xl"
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                <img src="/images/prop3.png" alt="" className="w-12 h-12"/>
              </motion.div>
              <motion.div
                className="absolute bottom-8 right-20 md:right-1/3 text-5xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <img src="/images/prop4.png" alt="" className="w-12 h-12"/>
              </motion.div>
      
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <motion.h1
                    className="text-5xl md:text-7xl font-normal mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Career Opportunities
                  </motion.h1>
                  <motion.p
                    className="text-xl md:text-2xl mb-8 text-orange-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Join our team and be part of our mission to deliver exceptional
              snacks and services! 👬
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

      {/* Why Join Us */}
      <section className="py-16"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-normal mb-6 text-gray-900">
                Why Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-4 font-normal">
                At Yummfeast, we believe that our team is the backbone of our
                success. We're looking for passionate, driven individuals who
                are excited about our products and eager to help customers find
                the right solutions for their needs.
              </p>
              <p className="text-muted-foreground mb-4 font-normal">
                As a member of our team, you'll have the opportunity to grow
                professionally, earn competitive compensation, and work in a
                supportive, collaborative environment.
              </p>
              <p className="text-muted-foreground font-normal">
                We invest in our team members through comprehensive training,
                mentorship programs, and clear paths for advancement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img
                src="/images/gallery/pic7.jpg"
                alt="Sales Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-red-600 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <h2 className="text-4xl font-normal mb-6 relative text-white inline-block">
              Benefits & Perks
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
            <p className="text-white max-w-2xl mx-auto font-normal">
              We take care of our team so they can focus on taking care of our
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Compensation",
                description:
                  "Base salary plus commission structure that rewards performance and achievement.",
              },
              {
                title: "Professional Development",
                description:
                  "Ongoing training, education stipends, and opportunities to attend industry conferences.",
              },
              {
                title: "Work-Life Balance",
                description:
                  "Flexible scheduling options, paid time off, and company-sponsored wellness programs.",
              },
              {
                title: "Health Benefits",
                description:
                  "Comprehensive health, dental, and vision insurance for you and your dependents.",
              },
              {
                title: "Retirement Planning",
                description:
                  "Matching program to help you save for your future.",
              },
              {
                title: "Career Advancement",
                description:
                  "Clear paths for growth and promotion based on performance and dedication.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-red-500 backdrop-blur-lg p-8 rounded-lg shadow-lg border-1 border-white z-10"
              >
                <h3 className="font-normal text-white text-xl mb-3 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-white font-normal">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16"
      style={{
          backgroundImage: "url('/images/white-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1,
        }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4 text-gray-900">
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-normal">
              Explore our available positions and find the right fit for your
              skills and career goals.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    {/* Job Header - Always Visible */}
                    <div
                      className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleJobExpansion(job.id)}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="font-normal text-xl mb-2 pr-4 text-gray-900">
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.location}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.type}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4 text-blue-500" />
                                  <span className="font-normal">
                                    {job.department}
                                  </span>
                                </div>
                              </div>
                              <p className="text-muted-foreground font-normal">
                                {job.shortDescription}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              {expandedJob === job.id ? (
                                <ChevronUp className="w-5 h-5 text-red-500" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-red-500" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Job Details */}
                    <AnimatePresence>
                      {expandedJob === job.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t bg-gray-50/50">
                            <div className="pt-6 space-y-6">
                              {/* About Company */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  About Yummfeast
                                </h4>
                                <p className="text-muted-foreground leading-relaxed font-normal">
                                  {job.about}
                                </p>
                              </div>

                              {/* Role Overview */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Role Overview
                                </h4>
                                <p className="text-muted-foreground leading-relaxed font-normal">
                                  {job.roleOverview}
                                </p>
                              </div>

                              {/* Key Responsibilities */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Key Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {job.responsibilities.map(
                                    (responsibility, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-muted-foreground"
                                      >
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed font-normal">
                                          {responsibility}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Qualifications */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Qualifications & Experience
                                </h4>
                                <ul className="space-y-2">
                                  {job.qualifications.map(
                                    (qualification, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-muted-foreground"
                                      >
                                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed font-normal">
                                          {qualification}
                                        </span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>

                              {/* Skills */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  Skills & Attributes
                                </h4>
                                <ul className="space-y-2">
                                  {job.skills.map((skill, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-muted-foreground"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                      <span className="leading-relaxed font-normal">
                                        {skill}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* What We Offer */}
                              <div>
                                <h4 className="font-normal text-lg mb-3 text-gray-900 border-l-2 border-red-500 pl-3">
                                  What We Offer
                                </h4>
                                <ul className="space-y-2">
                                  {job.benefits.map((benefit, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2 text-muted-foreground"
                                    >
                                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                                      <span className="leading-relaxed font-normal">
                                        {benefit}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Apply Button */}
                              <div className="pt-4 border-t">
                                <Button
                                  size="lg"
                                  className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-normal"
                                  onClick={() =>
                                    window.open(
                                      `mailto:careers@yummfeast.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`,
                                      "_blank"
                                    )
                                  }
                                >
                                  Apply for this Position
                                </Button>
                                <p className="text-sm text-muted-foreground mt-2 font-normal">
                                  Click to send your application via email with
                                  your resume attached.
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-red-600 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <h2 className="text-3xl font-normal mb-4 text-white">
              Our Application Process
            </h2>
            <p className="text-white max-w-2xl mx-auto font-normal">
              Here's what to expect when you apply for a position with
              Yummfeast.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {[
                {
                  title: "Application Review",
                  description:
                    "Our hiring team reviews your application and resume.",
                },
                {
                  title: "Initial Interview",
                  description:
                    "A phone or video call to discuss your experience and interest in the role.",
                },
                {
                  title: "Skills Assessment",
                  description:
                    "Depending on the position, you may be asked to complete a skills assessment.",
                },
                {
                  title: "Team Interview",
                  description:
                    "Meet with potential team members and managers to ensure a good fit.",
                },
                {
                  title: "Offer & Onboarding",
                  description:
                    "If selected, you'll receive an offer and begin our comprehensive onboarding process.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-10"
                >
                  {index < 4 && (
                    <div className="absolute left-4 top-4 bottom-0 w-px bg-blue-300" />
                  )}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white text-red-500 flex items-center justify-center font-normal">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="ms-4 font-normal text-xl mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="ms-4 text-white font-normal">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
