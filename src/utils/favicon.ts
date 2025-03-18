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
