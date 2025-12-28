"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
            About Mee Softwares
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            A multi-product software company delivering enterprise-grade digital solutions
          </p>
        </motion.div>

        {/* Vision & Mission with Images */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                alt="Our Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Vision</h2>
              <p className="text-gray-100 leading-relaxed text-lg">
                To be a trusted technology partner delivering innovative, secure, and scalable solutions that transform businesses worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-4xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-gray-100 leading-relaxed text-lg">
                To engineer high-quality software systems through technical excellence, innovation, and a people-driven culture.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Section with Images */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "Integrity",
                description: "Honest and transparent in all our dealings",
                image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
              },
              {
                value: "Quality",
                description: "Excellence in every line of code we write",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              },
              {
                value: "Innovation",
                description: "Constantly pushing technological boundaries",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
              },
              {
                value: "Collaboration",
                description: "Working together to achieve greatness",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative rounded-xl overflow-hidden border"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.value}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                    {item.value}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What Sets Us Apart */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#162659] to-[#0D47A1] bg-clip-text text-transparent">
                What Sets Us Apart
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                We combine deep technical expertise with a genuine commitment to understanding your business needs.
              </p>
              <ul className="space-y-4">
                {[
                  "10+ years of combined team experience",
                  "Enterprise-grade security standards",
                  "Agile development methodology",
                  "24/7 dedicated support",
                  "Continuous innovation and improvement",
                  "Client-first approach"
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
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
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
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
              alt="Join Us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
          </div>

          <div className="relative z-10 p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build the Future Together?
            </h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Let&apos;s create something extraordinary. Get in touch with our team today.
            </p>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
