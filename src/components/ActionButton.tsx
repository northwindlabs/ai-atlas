'use client';

import Link from 'next/link';

interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function ActionButton({
  href,
  icon,
  label,
  variant = 'primary',
  onClick,
}: ActionButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-colors';
  const variantClasses =
    variant === 'primary'
      ? 'bg-[var(--eu-blue)] text-white hover:bg-[#2c4b99]'
      : 'bg-[var(--eu-yellow)] text-[var(--eu-blue)] hover:bg-[#ffd700]';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}
