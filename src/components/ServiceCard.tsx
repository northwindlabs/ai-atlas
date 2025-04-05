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

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const [showEmoji, setShowEmoji] = useState(true);
  const faviconUrl = getFaviconUrl(service.link);

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
          {faviconUrl && (
            <Image
              src={faviconUrl}
              alt={`${service.name} favicon`}
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
              onError={() => setShowEmoji(true)}
              onLoad={() => setShowEmoji(false)}
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
