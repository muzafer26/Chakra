interface PlaceholderImageProps {
  alt: string;
  aspectRatio?: string;
  className?: string;
  overlay?: boolean;
  label?: string;
}

const getAssetSrc = (label?: string, alt?: string): string | null => {
  const query = ((label || '') + ' ' + (alt || '')).toLowerCase();
  
  if (query.includes('hero') && query.includes('menu')) {
    return '/assets/Img/Indulge in a Love Affair with Flavors at Chakra! ❤️🍽️ Our delectable lunch spread is a symphon.jpg';
  }
  if (query.includes('hero')) {
    return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg';
  }
  if (query.includes('logo')) {
    return '/assets/Img/chakra logo.jpg';
  }
  if (query.includes('signature') || query.includes('wings') || query.includes('dish') || query.includes('ghee roast')) {
    return '/assets/Img/Chakra in Sakinaka sets the bar high with its irresistible chicken wings. Succulent, perfectly s.jpg';
  }
  if (query.includes('early years') || query.includes('history')) {
    return '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg';
  }
  if (query.includes('story')) {
    return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving deliciou.webp';
  }
  if (query.includes('main dining') || query.includes('atmosphere')) {
    return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg';
  }
  if (query.includes('interior')) {
    return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving deliciou.webp';
  }
  if (query.includes('bar area') || query.includes('bar image')) {
    return '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg';
  }
  if (query.includes('food plating') || query.includes('plating') || query.includes('kebab')) {
    return '/assets/Img/Chicken starters are a popular choice to kick off a meal for several reasons. Firstly, chicken .webp';
  }
  if (query.includes('gathering') || query.includes('guests') || query.includes('people')) {
    return '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg';
  }
  if (query.includes('entrance')) {
    return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg';
  }
  
  // Instagram images
  if (query.includes('ig ') || query.includes('instagram')) {
    const numMatch = query.match(/\d+/);
    const index = numMatch ? parseInt(numMatch[0], 10) - 1 : 0;
    const igImages = [
      '/assets/Img/Chakra in Sakinaka sets the bar high with its irresistible chicken wings. Succulent, perfectly s.jpg',
      '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving deliciou.webp',
      '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg',
      '/assets/Img/Chicken starters are a popular choice to kick off a meal for several reasons. Firstly, chicken .webp',
      '/assets/Img/Indulge in a Love Affair with Flavors at Chakra! ❤️🍽️ Our delectable lunch spread is a symphon.jpg',
      '/assets/Img/Indulge in the Irresistible Delight of Chakras Succulent Roasted Chicken Starter...#chicken #fo.jpg',
      '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg',
      '/assets/Img/chakra logo.jpg'
    ];
    return igImages[index % igImages.length];
  }

  // Fallbacks
  if (query.includes('butter chicken')) {
    return '/assets/Img/Indulge in a Love Affair with Flavors at Chakra! ❤️🍽️ Our delectable lunch spread is a symphon.jpg';
  }
  if (query.includes('dal makhani')) {
    return '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg';
  }
  if (query.includes('ghee roast')) {
    return '/assets/Img/Indulge in the Irresistible Delight of Chakras Succulent Roasted Chicken Starter...#chicken #fo.jpg';
  }
  if (query.includes('naan') || query.includes('bread')) {
    return '/assets/Img/The restaurant has an array of Vegetarian & Non-Vegetarian dishes that are sure to satisfy food .jpg';
  }

  return '/assets/Img/Chakra is a popular restaurant located in Sakinaka, Mumbai that specializes in serving delicious.jpg';
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
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
