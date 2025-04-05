'use client';

import { useState } from 'react';

export default function NewsletterSubscription() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <section id="newsletter" className="bg-[var(--eu-blue)] py-24 px-4 md:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-3">Stay Updated</h2>
            <p className="text-white/70">
              Subscribe to our newsletter to receive updates about new European
              AI services
            </p>
          </div>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (
                form.elements.namedItem('email') as HTMLInputElement
              ).value;

              setStatus('loading');
              try {
                const apiUrl = process.env.NEXT_PUBLIC_NEWSLETTER_API_URL;
                if (!apiUrl) {
                  throw new Error('Newsletter subscription is not configured');
                }

                const response = await fetch(apiUrl, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    email,
                    lang: 'en',
                  }),
                });

                if (response.ok) {
                  setStatus('success');
                  form.reset();
                } else {
                  throw new Error('Failed to subscribe');
                }
              } catch (error) {
                setStatus('error');
                setErrorMessage(
                  error instanceof Error
                    ? error.message
                    : 'Sorry, there was an error. Please try again later.'
                );
              }
            }}
          >
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/10 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="privacy-policy"
                className="w-4 h-4 rounded border-white/20 accent-[var(--eu-yellow)]"
                required
                disabled={status === 'loading' || status === 'success'}
              />
              <label htmlFor="privacy-policy" className="text-sm text-white/70">
                I agree to the{' '}
                <a
                  href="/privacy"
                  className="text-[var(--eu-yellow)] hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {status === 'success' ? (
              <div className="text-center py-3 text-[var(--eu-yellow)] font-medium">
                ✨ Thank you for subscribing! ✨
              </div>
            ) : (
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full mt-6 px-6 py-3 rounded-xl bg-[var(--eu-yellow)] text-[var(--eu-blue)] font-medium hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            )}

            {status === 'error' && (
              <div className="text-center mt-3 text-red-400 text-sm">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
