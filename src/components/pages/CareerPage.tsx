"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CareerPage() {
  const careers = [
    {
      id: 1,
      title: "Regional Sales Manager",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      description:
        "We're looking for an experienced sales professional to lead our regional sales team and develop new business opportunities.",
    },
    {
      id: 2,
      title: "Territory Sales Representative",
      location: "Delhi, NCR",
      type: "Full-time",
      description:
        "Join our sales team to promote our products and build relationships with customers in an assigned territory.",
    },
    {
      id: 3,
      title: "Sales Coordinator",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      description: "Support our sales team with administrative tasks, customer communication, and order processing.",
    },
    {
      id: 4,
      title: "Key Account Manager",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      description:
        "Manage relationships with our key accounts, ensuring customer satisfaction and identifying growth opportunities.",
    },
    {
      id: 5,
      title: "Inside Sales Representative",
      location: "Remote",
      type: "Full-time",
      description:
        "Generate leads and close sales through phone calls, emails, and virtual meetings with potential customers.",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Career Opportunities</h1>
            <p className="text-xl text-muted-foreground">
              Join our team and be part of our mission to deliver exceptional snacks and services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Join Our Sales Team?</h2>
              <p className="text-muted-foreground mb-4">
                At Yummfeast, we believe that our sales team is the backbone of our success. We're looking for
                passionate, driven individuals who are excited about our products and eager to help customers find the
                right solutions for their needs.
              </p>
              <p className="text-muted-foreground mb-4">
                As a member of our sales team, you'll have the opportunity to grow professionally, earn competitive
                compensation, and work in a supportive, collaborative environment.
              </p>
              <p className="text-muted-foreground">
                We invest in our team members through comprehensive training, mentorship programs, and clear paths for
                advancement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-muted rounded-lg overflow-hidden"
            >
              <img src="/sales-team.png" alt="Sales Team" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take care of our team so they can focus on taking care of our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Competitive Compensation",
                description: "Base salary plus commission structure that rewards performance and achievement.",
              },
              {
                title: "Professional Development",
                description: "Ongoing training, education stipends, and opportunities to attend industry conferences.",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible scheduling options, paid time off, and company-sponsored wellness programs.",
              },
              {
                title: "Health Benefits",
                description: "Comprehensive health, dental, and vision insurance for you and your dependents.",
              },
              {
                title: "Retirement Planning",
                description: "Matching program to help you save for your future.",
              },
              {
                title: "Career Advancement",
                description: "Clear paths for growth and promotion based on performance and dedication.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Openings</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our available sales positions and find the right fit for your skills and career goals.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {careers.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-xl mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <span>{job.location}</span>
                          <span className="hidden md:inline">•</span>
                          <span>{job.type}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground hidden md:block">{job.description}</p>
                      </div>
                      <Button
                        className="md:self-start whitespace-nowrap"
                        onClick={() => window.alert(`Application for ${job.title} will be available soon!`)}
                      >
                        Apply Now
                      </Button>
                    </div>
                    <p className="mt-2 text-muted-foreground md:hidden">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Application Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's what to expect when you apply for a position with Yummfeast.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {[
                { title: "Application Review", description: "Our hiring team reviews your application and resume." },
                {
                  title: "Initial Interview",
                  description: "A phone or video call to discuss your experience and interest in the role.",
                },
                {
                  title: "Skills Assessment",
                  description: "Depending on the position, you may be asked to complete a skills assessment.",
                },
                {
                  title: "Team Interview",
                  description: "Meet with potential team members and managers to ensure a good fit.",
                },
                {
                  title: "Offer & Onboarding",
                  description: "If selected, you'll receive an offer and begin our comprehensive onboarding process.",
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
                  {index < 4 && <div className="absolute left-4 top-4 bottom-0 w-px bg-muted-foreground/30" />}
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
