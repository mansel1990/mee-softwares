"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Enterprise Software Solutions",
    description: "Custom applications for complex workflows and mission-critical operations with unparalleled reliability.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Healthcare & Clinical Systems",
    description: "Secure, compliant healthcare software built for patient care excellence and HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud-native architectures and CI/CD automation for modern, scalable deployments.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=2032&auto=format&fit=crop"
  },
  {
    title: "Secure Communication Platforms",
    description: "Scalable voice and messaging systems with enterprise-grade security and reliability.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
  },
];

const capabilities = [
  {
    title: "API Development",
    description: "RESTful and GraphQL APIs built for scale and performance",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable business intelligence",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Cybersecurity",
    description: "Comprehensive security audits and implementation",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
];

export default function Services() {
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Enterprise-grade solutions built on strong engineering foundations
          </p>
        </motion.div>

        {/* Main Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl overflow-hidden border transition-all duration-300"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Capabilities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
              Technical Capabilities
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Comprehensive technology expertise to power your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-400 dark:text-blue-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Approach Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
                Our Approach
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                We combine technical excellence with a deep understanding of business needs to deliver solutions that drive real results.
              </p>
              <ul className="space-y-4">
                {[
                  "Requirement-driven architecture",
                  "Modular, maintainable codebases",
                  "Security by design principles",
                  "Performance optimization at scale",
                  "Continuous integration and deployment",
                  "Comprehensive testing and QA"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-lg"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-4" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
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
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              alt="Professional workspace"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
          </div>

          <div className="relative z-10 p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Transform your business with custom software solutions tailored to your unique needs.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
