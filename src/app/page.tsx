'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import NewsletterSubscription from '../components/NewsletterSubscription';
import ActionButton from '../components/ActionButton';
import { FilterSection } from '../components/FilterSection';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNewOnly, setShowNewOnly] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCategoryClick = () => {
    setMobileMenuOpen(false);
  };

  // Filter categories to only show those with new services when showNewOnly is true
  const filteredCategories = showNewOnly
    ? categories.filter((category) =>
        category.services.some((service) => {
          if (!service.addedDate) return false;
          const added = new Date(service.addedDate);
          const today = new Date();
          return (
            added.getFullYear() === today.getFullYear() &&
            added.getMonth() === today.getMonth()
          );
        })
      )
    : categories;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="absolute right-0 top-0 p-4 z-20">
        <Link
          href="https://github.com/northwindlabs/ai-atlas"
          target="_blank"
          className="dark:bg-white/10 bg-white/10 rounded-lg px-4 py-2 hover:bg-black/20 dark:hover:bg-white/20 flex items-center gap-2 transition-colors"
        >
          <Image
            src="/github-mark-white.svg"
            alt="GitHub"
            width={20}
            height={20}
            className="w-5 h-5 invert-0"
          />
          <span className="text-sm text-white dark:text-white">Contribute</span>
        </Link>
      </div>
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Category Grid - Hidden on mobile by default, shown when menu is open */}
          <div
            className={`${
              mobileMenuOpen ? 'grid py-2 px-4 md:px-0' : 'hidden'
            } md:grid md:py-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`}
          >
            {filteredCategories.map((category) => (
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
            <h2 className="text-3xl font-bold mb-4">
              Welcome to the European AI Atlas
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Explore our collection of innovative European AI services that are
              shaping the future. Find the perfect tools for your projects or
              discover new AI experiences.
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              All services are categorized by their primary function, with
              country flags indicating company headquarters location.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <ActionButton
                href="https://github.com/northwindlabs/ai-atlas/issues/new?template=suggest-service.yml"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                }
                label="Add Service on GitHub"
                variant="primary"
              />
              <ActionButton
                href="#newsletter"
                icon={
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
                label="Subscribe to Updates"
                variant="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#newsletter')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }}
              />
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              No GitHub account? Suggest a service via email at{' '}
              <a
                href="mailto:contact@aiatlas.eu"
                className="font-medium text-[var(--eu-blue)] dark:text-white/90 hover:underline"
              >
                contact@aiatlas.eu
              </a>
            </p>
          </section>

          {/* Categories */}
          <div className="space-y-4 px-4 md:px-8">
            <FilterSection
              showNewOnly={showNewOnly}
              setShowNewOnly={setShowNewOnly}
              filteredCategories={filteredCategories}
            />

            {filteredCategories.map((category) => (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-20 md:scroll-mt-60 pt-12"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services
                    .filter((service) => {
                      if (!showNewOnly) return true;
                      if (!service.addedDate) return false;
                      const added = new Date(service.addedDate);
                      const today = new Date();
                      return (
                        added.getFullYear() === today.getFullYear() &&
                        added.getMonth() === today.getMonth()
                      );
                    })
                    .map((service) => (
                      <ServiceCard
                        key={service.name}
                        service={service}
                        category={category}
                      />
                    ))}
                </div>
                <div className="mt-8 border-b border-gray-200 dark:border-gray-800"></div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <NewsletterSubscription />

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
            © {new Date().getFullYear()} AIAtlas • MIT Licensed • Contributions
            welcome
          </div>
          <div className="mt-4 text-center text-sm text-white/60">
            Maintained by{' '}
            <a
              href="https://www.linkedin.com/in/elinfritiofsson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--eu-yellow)] hover:underline"
            >
              Elin Fritiofsson
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
