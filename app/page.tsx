"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="w-full relative z-10">
      {/* Hero Section with Zoom Effect */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ scale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-bg-primary)] z-10" />
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            alt="Digital Technology Background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-50 to-cyan-100 bg-clip-text text-transparent">
                Digitalize Your Life,
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-100 via-blue-100 to-white bg-clip-text text-transparent">
                Simplify Your World
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Enterprise-grade software solutions that drive innovation and accelerate growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/contact"
              className="group relative px-10 py-5 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 dark:bg-gradient-to-r dark:from-blue-400 dark:to-cyan-400 bg-gradient-to-r from-blue-900 to-blue-950"
            >
              <span className="relative dark:text-black text-white">Start Your Project</span>
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 rounded-xl font-semibold text-lg border-2 dark:border-blue-400 dark:text-blue-400 border-blue-900 text-blue-900 dark:hover:bg-blue-400/10 hover:bg-blue-900/10 transition-all duration-300 hover:scale-105"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 dark:border-blue-400 border-white flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full dark:bg-blue-400 bg-white"
            />
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* Core Values Section with Images */}
      <section className="py-32 px-6 relative" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-heading">
              Why Choose Mee Softwares
            </h2>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              We deliver cutting-edge solutions backed by industry expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud-Native Architecture",
                desc: "Build scalable, resilient systems designed for the modern cloud infrastructure",
                image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop"
              },
              {
                title: "AI-Powered Solutions",
                desc: "Leverage machine learning and artificial intelligence to drive business insights",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2032&auto=format&fit=crop"
              },
              {
                title: "Enterprise Security",
                desc: "Military-grade security protocols protecting your most valuable assets",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden border"
                style={{
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Technology Showcase */}
      <section className="py-32 px-6 relative" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold mb-6 gradient-heading">
                Built for Scale,
                <br />
                Designed for Speed
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Our solutions leverage cutting-edge technologies to deliver unmatched performance,
                reliability, and scalability for businesses of all sizes.
              </p>
              <ul className="space-y-4">
                {[
                  "99.99% uptime guarantee",
                  "Sub-second response times",
                  "Auto-scaling infrastructure",
                  "Real-time data processing"
                ].map((feature, idx) => (
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
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                alt="Modern Data Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-32 px-6" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/90" />
            </div>

            <div className="relative z-10 p-16 text-center">
              <h2 className="text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Let's build something extraordinary together. Get in touch with our team today.
              </p>
              <Link
                href="/contact"
                className="inline-block px-12 py-5 bg-white text-blue-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
