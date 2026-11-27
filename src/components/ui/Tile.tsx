import type { LucideIcon } from 'lucide-react';

const SIZES = {
  lg: 'w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl',
  md: 'w-11 h-11 md:w-12 md:h-12 rounded-xl',
};

/**
 * Square tile in the item's --accent colour: shows a logo image if given,
 * otherwise an icon or short text (monogram) on an accent gradient.
 */
export default function Tile({
  logo,
  icon: Icon,
  text,
  alt = '',
  size = 'lg',
}: {
  logo?: string;
  icon?: LucideIcon;
  text?: string;
  alt?: string;
  size?: keyof typeof SIZES;
}) {
  if (logo) {
    return (
      <div className={`glow-tile ${SIZES[size]}`}>
        <img src={logo} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className={`glow-tile tile-tint ${SIZES[size]}`} aria-hidden={!alt} title={alt || undefined}>
      {Icon ? (
        <Icon className="w-1/2 h-1/2" strokeWidth={1.75} />
      ) : (
        <span className="font-bold tracking-tight text-sm md:text-base">{text}</span>
      )}
    </div>
  );
}
