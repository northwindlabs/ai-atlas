import { Service } from '@/data/services';
import { Category } from '@/data/services';
import { getFaviconUrl } from '@/utils/favicon';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  service: Service;
  category: Category;
}

// Helper function to check if a service is new (added in the current month)
const isNewThisMonth = (addedDate?: string): boolean => {
  if (!addedDate) return false;

  const today = new Date();
  const added = new Date(addedDate);

  return (
    added.getFullYear() === today.getFullYear() &&
    added.getMonth() === today.getMonth()
  );
};

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const [showEmoji, setShowEmoji] = useState(true);
  const [imageError, setImageError] = useState(false);
  const faviconUrl = getFaviconUrl(service.link);
  const isNew = isNewThisMonth(service.addedDate);

  return (
    <Link
      href={service.link}
      key={service.name}
      target="_blank"
      className="atlas-card p-5 flex flex-col h-full"
    >
      <div className="flex items-start gap-4 mb-3">
        <div
          className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center text-white text-2xl relative`}
        >
          {faviconUrl && !imageError && (
            <Image
              src={faviconUrl}
              alt={`${service.name} favicon`}
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              onError={() => {
                setShowEmoji(true);
                setImageError(true);
              }}
              onLoad={() => {
                setShowEmoji(false);
                setImageError(false);
              }}
            />
          )}
          {showEmoji && <span>{service.icon}</span>}
        </div>
        <div>
          <h3 className="text-xl font-semibold flex items-center gap-2">
            {service.name}
            <div className="flex items-center gap-1">
              <span className="text-base" title="Country of origin">
                {service.country}
              </span>
              {service.hq && service.legal && (
                <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                  ( Reg. {service.legal})
                </span>
              )}
            </div>
          </h3>
          {isNew && (
            <span className="inline-block mt-1 text-xs bg-[var(--eu-yellow)] text-[var(--eu-blue)] px-2 py-0.5 rounded-full font-medium">
              Added this month
            </span>
          )}
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 flex-grow">
        {service.description}
      </p>
      <div className="mt-3 flex justify-end">
        <span className="text-[var(--eu-blue)] dark:text-[var(--eu-yellow)] font-medium flex items-center gap-1">
          Explore <span className="text-lg">→</span>
        </span>
      </div>
    </Link>
  );
};
