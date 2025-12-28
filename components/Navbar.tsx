"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(0, 0, 0, 0.85)"
            : "rgba(255, 255, 255, 0.85)",
        borderColor:
          theme === "dark"
            ? "rgba(30, 58, 138, 0.3)"
            : "rgba(226, 232, 240, 0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Clickable to go home */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo_transparent.png"
              alt="Mee Softwares"
              width={150}
              height={40}
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <span
              className="text-2xl font-bold"
              style={{
                letterSpacing: "0.02em",
                color: theme === "dark" ? "#F5F5F5" : "#0A1929",
              }}
            >
              MEE Softwares
            </span>
          </Link>

          {/* Nav Items + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-5 py-2 group"
              >
                <span
                  className="text-base font-medium transition-all duration-300 relative z-10"
                  style={{
                    color:
                      pathname === item.path
                        ? theme === "dark"
                          ? "#2196F3"
                          : "#0D47A1"
                        : theme === "dark"
                        ? "#E0E0E0"
                        : "#1E3A5F",
                  }}
                >
                  {item.name}
                </span>
                {pathname === item.path ? (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{
                      backgroundColor: theme === "dark" ? "#2196F3" : "#0D47A1",
                      boxShadow: `0 0 10px ${
                        theme === "dark"
                          ? "rgba(33, 150, 243, 0.6)"
                          : "rgba(13, 71, 161, 0.5)"
                      }`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <div
                    className="absolute inset-0 rounded-lg transition-all duration-300"
                    style={{
                      background:
                        theme === "dark"
                          ? "linear-gradient(to right, rgba(33, 150, 243, 0), rgba(66, 165, 245, 0))"
                          : "linear-gradient(to right, rgba(13, 71, 161, 0), rgba(21, 101, 192, 0))",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        theme === "dark"
                          ? "linear-gradient(to right, rgba(33, 150, 243, 0.15), rgba(66, 165, 245, 0.15))"
                          : "linear-gradient(to right, rgba(13, 71, 161, 0.08), rgba(21, 101, 192, 0.08))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        theme === "dark"
                          ? "linear-gradient(to right, rgba(33, 150, 243, 0), rgba(66, 165, 245, 0))"
                          : "linear-gradient(to right, rgba(13, 71, 161, 0), rgba(21, 101, 192, 0))";
                    }}
                  />
                )}
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor:
                  theme === "dark"
                    ? "rgba(33, 150, 243, 0.15)"
                    : "rgba(13, 71, 161, 0.1)",
                color: theme === "dark" ? "#2196F3" : "#0D47A1",
              }}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors"
              style={{
                color: theme === "dark" ? "#2196F3" : "#0D47A1",
              }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="transition-colors"
              style={{
                color: theme === "dark" ? "#E0E0E0" : "#1E3A5F",
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
