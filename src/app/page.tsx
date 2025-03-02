"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories } from "../data/services";

// AI service data
// const categories = [
// ... existing code ...
// ];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleCategoryClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Atlas-inspired header */}
      <header className="eu-gradient text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <Image 
                  src="/europe-logo.svg" 
                  alt="Europe AI Atlas Logo" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-[var(--eu-yellow)]">AI</span> Atlas
                </h1>
              </div>
              <p className="text-xl md:text-2xl max-w-2xl">
                Discover European AI services for consumers and developers
              </p>
              <p className="text-lg opacity-80 max-w-2xl">
                Your map to navigate the European AI landscape
              </p>
              <div className="pt-4">
                <a 
                  href="#chat" 
                  className="inline-flex items-center gap-2 bg-[var(--eu-yellow)] text-[var(--eu-blue)] px-6 py-3 rounded-full font-medium hover:bg-white transition-colors"
                >
                  Start Exploring <span className="text-xl">→</span>
                </a>
              </div>
            </div>
 
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <nav className="bg-[var(--eu-blue)] text-white py-2 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex justify-between items-center py-2 px-4">
            <div className="flex items-center gap-2">
              <Image 
                src="/europe-logo.svg" 
                alt="Europe AI Atlas Logo" 
                width={24} 
                height={24} 
                className="rounded-full"
              />
              <span className="font-bold">AI Atlas</span>
            </div>
            <button 
              onClick={toggleMobileMenu}
              className="p-1.5 rounded-md hover:bg-[#2c4b99] transition"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Category Grid - Hidden on mobile by default, shown when menu is open */}
          <div className={`${mobileMenuOpen ? 'grid py-2 px-4 md:px-0' : 'hidden'} md:grid md:py-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`}>
            {categories.map((category) => (
              <a 
                key={category.id}
                href={`#${category.id}`}
                onClick={handleCategoryClick}
                className={`${category.color} flex items-center justify-center gap-2 px-3 py-2 rounded-lg hover:opacity-90 transition text-center shadow-sm`}
                style={{ minWidth: '120px' }}
              >
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 py-12 px-0 md:px-0 bg-gradient-to-b from-white to-gray-100 dark:from-[#0a0a0a] dark:to-[#121212]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Welcome Message */}
          <section className="text-center max-w-3xl mx-auto mb-8 px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to the European AI Atlas</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our collection of innovative European AI services that are shaping the future.
              Find the perfect tools for your projects or discover new AI experiences.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              All services are categorized by their primary function, with country flags indicating company headquarters location.
            </p>
          </section>

      

          {/* Categories */}
          <div className="space-y-16 px-4 md:px-8">
            {categories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-32 pt-4">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service) => (
                    <Link 
                      href={service.link} 
                      key={service.name}
                      target="_blank"
                      className="atlas-card p-5 flex flex-col h-full"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-2xl`}>
                          <span>{service.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold flex items-center gap-2">
                            {service.name}
                            <span className="text-base" title="Country of origin">{service.country}</span>
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
                      <div className="mt-3 flex justify-end">
                        <span className="text-[var(--eu-blue)] dark:text-[var(--eu-yellow)] font-medium flex items-center gap-1">
                          Explore <span className="text-lg">→</span>
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-8 border-b border-gray-200 dark:border-gray-800"></div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--eu-blue)] text-white py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-[var(--eu-yellow)]">AI</span> Atlas
              </h2>
              <p className="mt-2 text-sm text-white/70">
                Mapping the European AI landscape
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🇪🇺</span>
              <span className="text-sm">Made in Europe</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-white/60">
            © {new Date().getFullYear()} AI Atlas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
