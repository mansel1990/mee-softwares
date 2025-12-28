"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    title: "Enterprise Platform",
    tagline: "Complete business management solution",
    description: "Comprehensive enterprise resource planning system designed for modern businesses. Manage operations, analytics, and workflows in one unified platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    features: ["Real-time Analytics", "Workflow Automation", "Team Collaboration", "Custom Reporting"],
    status: "Available"
  },
  {
    title: "Healthcare Hub",
    tagline: "Patient care reimagined",
    description: "HIPAA-compliant healthcare management platform that streamlines patient records, appointments, and clinical workflows with intelligent automation.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    features: ["Electronic Health Records", "Appointment Scheduling", "Telemedicine Integration", "Compliance Management"],
    status: "Available"
  },
  {
    title: "CloudOps Suite",
    tagline: "DevOps automation platform",
    description: "End-to-end DevOps platform for continuous integration, deployment, and infrastructure management. Scale your operations with confidence.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2032&auto=format&fit=crop",
    features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Alerts", "Auto-scaling"],
    status: "Coming Soon"
  },
];

const productCategories = [
  {
    name: "SaaS Solutions",
    description: "Cloud-based software for instant deployment",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Custom Development",
    description: "Tailored solutions for unique business needs",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "API Platforms",
    description: "Scalable APIs for seamless integration",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
];

export default function Products() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Innovative software products designed to solve real-world problems and accelerate your business
          </p>
        </motion.div>

        {/* Featured Products */}
        <div className="space-y-32 mb-32">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-block px-4 py-1 mb-4 rounded-full border"
                  style={{
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                  }}>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">{product.status}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
                  {product.title}
                </h2>
                <p className="text-xl mb-6 text-blue-600 dark:text-blue-400">
                  {product.tagline}
                </p>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {product.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                      <span style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  {product.status === "Available" ? "Get Started" : "Join Waitlist"}
                </Link>
              </div>

              <div className={`relative h-[500px] rounded-2xl overflow-hidden ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Categories */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
              Product Categories
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Explore our diverse range of software solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="relative h-80">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {category.name}
                  </h3>
                  <p className="text-gray-200">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32 py-20 px-8 rounded-3xl border"
          style={{
            backgroundColor: 'var(--color-bg-secondary)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
              Built With Modern Technology
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Our products leverage cutting-edge tech stacks
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "React & Next.js",
              "Node.js & Python",
              "PostgreSQL & MongoDB",
              "AWS & Azure Cloud",
              "Docker & Kubernetes",
              "GraphQL & REST APIs",
              "Redis & ElasticSearch",
              "AI/ML Integration"
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="text-center p-6 rounded-xl border"
                style={{
                  backgroundColor: 'var(--color-bg-tertiary)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
              alt="Innovation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
          </div>

          <div className="relative z-10 p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Have an Idea for a Product?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              We&apos;d love to hear about your vision and help bring it to life with our expertise and technology.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Discuss Your Idea
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
