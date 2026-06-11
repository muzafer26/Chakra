interface PlaceholderImageProps {
  alt: string;
  aspectRatio?: string;
  className?: string;
  overlay?: boolean;
  label?: string;
}

const getAssetSrc = (label?: string, alt?: string): string | null => {
  const query = ((label || '') + ' ' + (alt || '')).toLowerCase();
  
  // 1. Logo
  if (query.includes('logo')) {
    return '/assets/Img/chakra_logo.jpg';
  }

  // 2. Main layout structures
  if (query.includes('story') || query.includes('history') || query.includes('early years') || query.includes('heritage')) {
    return '/assets/Img/ourstory.avif';
  }
  if (query.includes('hero') && !query.includes('menu') || query.includes('entrance') || query.includes('atmosphere')) {
    return '/assets/Img/homepg.avif';
  }
  if (query.includes('interior') || query.includes('main dining') || query.includes('bar area') || query.includes('bar image')) {
    return '/assets/Img/ambience_interior.webp';
  }

  // 3. Specific Dish Mappings to Collected Food Photos
  if (query.includes('butter chicken') || query.includes('lunch spread') || query.includes('menu hero') || query.includes('curry') || query.includes('rogan josh') || query.includes('mutton') || query.includes('fish')) {
    return '/assets/Img/lunch_spread.jpg';
  }
  
  if (query.includes('ghee roast') || query.includes('roasted') || query.includes('pesto') || query.includes('grilled') || query.includes('chicken starter') || query.includes('chicken starters')) {
    return '/assets/Img/roasted_chicken.jpg';
  }
  
  if (query.includes('wings') || query.includes('signature') || query.includes('chana') || query.includes('koliwada')) {
    return '/assets/Img/chicken_wings.jpg';
  }
  
  if (query.includes('chicken tikka') || query.includes('tikka') || query.includes('starter') || query.includes('starters') || query.includes('plating') || query.includes('kebab') || query.includes('tandoori')) {
    return '/assets/Img/chicken_starters.webp';
  }
  
  if (query.includes('paneer') || query.includes('dal makhani') || query.includes('vegetarian') || query.includes('naan') || query.includes('bread') || query.includes('paratha') || query.includes('gathering')) {
    return '/assets/Img/veg_spread.jpg';
  }

  // For desserts or any other food keywords, use the vegetarian spread photo
  if (query.includes('dessert') || query.includes('desserts') || query.includes('jamun') || query.includes('rasmalai') || query.includes('kulfi') || query.includes('sweet')) {
    return '/assets/Img/veg_spread.jpg';
  }

  // Instagram images
  if (query.includes('ig ') || query.includes('instagram')) {
    const numMatch = query.match(/\d+/);
    const index = numMatch ? parseInt(numMatch[0], 10) - 1 : 0;
    const igImages = [
      '/assets/Img/chicken_wings.jpg',
      '/assets/Img/ambience_interior.webp',
      '/assets/Img/homepg.avif',
      '/assets/Img/chicken_starters.webp',
      '/assets/Img/lunch_spread.jpg',
      '/assets/Img/roasted_chicken.jpg',
      '/assets/Img/veg_spread.jpg',
      '/assets/Img/chakra_logo.jpg'
    ];
    return igImages[index % igImages.length];
  }

  return '/assets/Img/veg_spread.jpg';
};

const PlaceholderImage = ({
  alt,
  aspectRatio = 'aspect-[4/3]',
  className = '',
  overlay = false,
  label,
}: PlaceholderImageProps) => {
  const assetSrc = getAssetSrc(label, alt);

  return (
    <div
      className={`relative ${aspectRatio} bg-surface overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {assetSrc ? (
        <img
          src={assetSrc}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-30">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-garamond text-primary-60 text-sm">
              {label || 'Image Placeholder'}
            </span>
          </div>
        </>
      )}

      {/* Dark overlay option */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default PlaceholderImage;
