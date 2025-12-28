"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./theme-provider";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services#web" },
    { name: "Mobile Apps", path: "/services#mobile" },
    { name: "Cloud Solutions", path: "/services#cloud" },
    { name: "Consulting", path: "/services#consulting" },
  ],
  products: [
    { name: "View All Products", path: "/products" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "GitHub", icon: Github, url: "#" },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className="border-t transition-all duration-300"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(0, 0, 0, 0.95)"
            : "rgba(255, 255, 255, 0.95)",
        borderColor:
          theme === "dark"
            ? "rgba(30, 58, 138, 0.3)"
            : "rgba(226, 232, 240, 0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo_transparent.png"
                alt="Mee Softwares"
                width={120}
                height={32}
                className="h-10 w-auto"
              />
              <span
                className="text-xl font-bold"
                style={{
                  color: theme === "dark" ? "#F5F5F5" : "#0A1929",
                }}
              >
                MEE Softwares
              </span>
            </Link>
            <p
              className="text-sm mb-4 max-w-sm"
              style={{
                color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
              }}
            >
              Building innovative software solutions for the future. We transform
              ideas into powerful digital experiences.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <a
                href="mailto:info@meesoftwares.com"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
                style={{
                  color: theme === "dark" ? "#E0E0E0" : "#1E3A5F",
                }}
              >
                <Mail className="w-4 h-4" />
                <span>info@meesoftwares.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity"
                style={{
                  color: theme === "dark" ? "#E0E0E0" : "#1E3A5F",
                }}
              >
                <Phone className="w-4 h-4" />
                <span>+1 (234) 567-890</span>
              </a>
              <div
                className="flex items-start space-x-2 text-sm"
                style={{
                  color: theme === "dark" ? "#E0E0E0" : "#1E3A5F",
                }}
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Tech Street, Innovation City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{
                color: theme === "dark" ? "#F5F5F5" : "#0A1929",
              }}
            >
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{
                      color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{
                color: theme === "dark" ? "#F5F5F5" : "#0A1929",
              }}
            >
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{
                      color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Legal Links */}
          <div>
            <h3
              className="font-semibold mb-4"
              style={{
                color: theme === "dark" ? "#F5F5F5" : "#0A1929",
              }}
            >
              Products
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{
                      color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3
              className="font-semibold mb-4"
              style={{
                color: theme === "dark" ? "#F5F5F5" : "#0A1929",
              }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm hover:opacity-80 transition-opacity"
                    style={{
                      color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          style={{
            borderColor:
              theme === "dark"
                ? "rgba(30, 58, 138, 0.3)"
                : "rgba(226, 232, 240, 0.8)",
          }}
        >
          <p
            className="text-sm"
            style={{
              color: theme === "dark" ? "#B0B0B0" : "#5A6C7D",
            }}
          >
            © {new Date().getFullYear()} MEE Softwares. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(33, 150, 243, 0.1)"
                        : "rgba(13, 71, 161, 0.08)",
                    color: theme === "dark" ? "#2196F3" : "#0D47A1",
                  }}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
