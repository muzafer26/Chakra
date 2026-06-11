import { useState } from 'react';
import { X } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const GalleryPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const images = [
    { label: 'Main Dining', span: 'col-span-8 row-span-2', desc: 'Atmosphere' },
    { label: 'Interior', span: 'col-span-4', desc: 'Detail' },
    { label: 'Bar Area', span: 'col-span-4', desc: 'Evenings' },
    { label: 'Food Plating', span: 'col-span-4', desc: 'Dishes' },
    { label: 'Gathering', span: 'col-span-4', desc: 'Celebrations' },
    { label: 'Guests', span: 'col-span-4', desc: 'People' },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero - Salmon Pink Background */}
      <section className="bg-surface-accent pt-lg lg:pt-xl pb-lg border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">
            Gallery
          </p>
          <h1 className="font-garamond text-headline-lg lg:text-[56px] text-tertiary leading-[1.1] mb-xs uppercase tracking-wider">
            More Than Meals
          </h1>
          <p className="font-garamond text-body-lg text-tertiary/75 max-w-2xl italic">
            A collection of moments, celebrations, conversations, flavours, and memories shared over the years.
          </p>
        </div>
      </section>

      {/* Grid - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px]">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid grid-cols-12 gap-sm">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className={`${img.span} overflow-hidden rounded-md shadow-sm border border-secondary/20 group relative`}
              >
                <PlaceholderImage
                  alt={img.label}
                  aspectRatio="h-full min-h-[200px]"
                  label={img.label}
                  className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-tertiary/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-sm text-left">
                  <span className="font-termina text-[10px] text-neutral/60 uppercase tracking-wider">{img.desc}</span>
                  <span className="font-garamond text-headline-sm text-neutral font-semibold">{img.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA - Clay Yellow Background */}
      <section className="bg-secondary py-xl text-center border-t border-secondary/20">
        <div className="max-w-4xl mx-auto px-sm lg:px-lg">
          <p className="font-garamond text-body-lg text-tertiary/80 mb-md italic">
            Follow us on Instagram for daily moments and stories.
          </p>
          <a
            href="https://www.instagram.com/chakrasakinaka/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md uppercase tracking-wider"
          >
            @chakrasakinaka
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-tertiary/95 flex items-center justify-center p-sm"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-lg right-lg p-sm text-neutral hover:text-surface-accent transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <PlaceholderImage
              alt={images[selected].label}
              aspectRatio="aspect-video"
              label={images[selected].label}
              className="bg-neutral rounded-md border border-neutral/20 shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
