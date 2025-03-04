/**
 * Common favicon paths and formats to try
 */
const FAVICON_PATHS = [
  '/favicon.ico',
  '/favicon.png',
  '/favicon-32x32.png',
  '/apple-touch-icon.png',
  '/apple-touch-icon-precomposed.png',
];

/**
 * Checks if a URL is accessible
 */
async function isUrlAccessible(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Finds the first available favicon URL for a given website
 */
export async function findFavicon(websiteUrl: string): Promise<string | null> {
  try {
    const origin = new URL(websiteUrl).origin;
    
    // If all attempts fail, try a favicon service as last resort
    return `https://www.google.com/s2/favicons?domain=${origin}&sz=32`;
    
  } catch {
    return null;
  }
}

/**
 * Gets the favicon URL for a given website using Google's favicon service
 */
export function getFaviconUrl(websiteUrl: string): string | null {
  try {
    const origin = new URL(websiteUrl).origin;
    return `https://www.google.com/s2/favicons?domain=${origin}&sz=32`;
  } catch {
    return null;
  }
} 