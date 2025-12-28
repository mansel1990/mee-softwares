"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  { icon: "🚀", title: "Challenging Projects", desc: "Work on cutting-edge technology solutions" },
  { icon: "📚", title: "Continuous Learning", desc: "Grow your skills with latest technologies" },
  { icon: "🤝", title: "Collaborative Culture", desc: "Team-oriented environment" },
  { icon: "📈", title: "Growth-Focused Careers", desc: "Clear paths for advancement" },
];

export default function Careers() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Build the Future With Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-blue-200 mb-16 max-w-3xl"
        >
          Join a team that's passionate about building enterprise-grade software solutions
          that make a real impact.
        </motion.p>

        {/* Benefits Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Why Join Mee Softwares?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-blue-800/50 backdrop-blur-sm text-center hover:border-blue-600/50 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-300 mb-2">{benefit.title}</h3>
                <p className="text-blue-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24 p-12 rounded-xl bg-gradient-to-br from-blue-950/50 to-blue-900/30 border border-blue-800/50 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-300 text-center">
            Our Culture
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Innovation</h3>
              <p className="text-blue-300">
                We encourage creative thinking and embrace new technologies
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Excellence</h3>
              <p className="text-blue-300">
                We strive for the highest quality in everything we build
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-200">Impact</h3>
              <p className="text-blue-300">
                Your work directly influences the success of our clients
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-950/50 border border-blue-700/50 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-200">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about
            building exceptional software.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-semibold text-lg shadow-lg shadow-blue-900/50"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
