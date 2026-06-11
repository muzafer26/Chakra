import { useState, useEffect } from 'react';
import PlaceholderImage from '../components/PlaceholderImage';
import PlaceholderVideo from '../components/PlaceholderVideo';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  // Hero slider images
  const heroImages = [
    '/assets/Img/homepg.avif',
    '/assets/Img/homepg1.avif',
    '/assets/Img/homepg2.avif',
    '/assets/Img/homepg3.avif',
    '/assets/Img/homepg4.avif'
  ];
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // State for menu item likes
  const [likes, setLikes] = useState<Record<number, number>>({
    0: 48,
    1: 36,
    2: 52,
    3: 41,
    4: 29
  });

  const handleLike = (index: number) => {
    setLikes(prev => ({
      ...prev,
      [index]: prev[index] + 1
    }));
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section with Smooth Slider */}
      <section className="relative h-[65vh] lg:h-[80vh] overflow-hidden bg-tertiary">
        {heroImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentHeroIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={src}
              alt={`Chakra dining ambience slider ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
          </div>
        ))}
        
        {/* Slider Indicator Dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentHeroIndex ? 'bg-[#9C2C2C] w-6' : 'bg-neutral/40 hover:bg-neutral/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Overlapping Badges */}
      <div className="relative -mt-10 flex justify-center gap-4 z-20">
        <div className="w-20 h-20 rounded-full bg-[#9C2C2C] text-neutral flex flex-col items-center justify-center shadow-lg border border-neutral/20 text-center">
          <span className="font-termina text-[8px] uppercase tracking-wider">Estd.</span>
          <span className="font-garamond text-headline-sm font-semibold">1985</span>
        </div>
        <div className="w-20 h-20 rounded-full bg-[#9C2C2C] text-neutral flex flex-col items-center justify-center shadow-lg border border-neutral/20 text-center">
          <span className="font-termina text-[8px] uppercase tracking-wider">Saki</span>
          <span className="font-garamond text-headline-sm font-semibold">Naka</span>
        </div>
      </div>

      {/* Spacer for badges */}
      <div className="h-6 bg-surface-accent" />

      {/* Intro Section - Salmon Pink Background */}
      <section className="bg-surface-accent text-tertiary py-xl lg:py-[120px] text-center border-b border-secondary/20">
        <div className="max-w-4xl mx-auto px-sm flex flex-col items-center">
          <p className="font-script text-script-lg text-primary mb-sm">
            Serving Mumbai Since 1985
          </p>
          <h1 className="font-garamond text-headline-lg lg:text-[52px] text-tertiary uppercase tracking-wider mb-md">
            Chakra Since 1985
          </h1>
          <p className="font-garamond text-body-lg text-tertiary/90 max-w-2xl mb-lg italic">
            "A place for great food, good company, and moments worth remembering."
          </p>
          <p className="font-garamond text-body-md text-tertiary/75 max-w-xl mb-xl">
            For over four decades, Chakra has welcomed families, friends, colleagues, and familiar faces from across the city. What began in 1985 continues today with the same belief — good food tastes even better when shared.
          </p>
          <div className="flex gap-sm">
            <button
              onClick={() => onNavigate('menu')}
              className="px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md"
            >
              Explore The Menu
            </button>
            <a
              href="tel:+917738166702"
              className="px-lg py-sm border border-primary text-primary font-termina text-label-md rounded-full hover:bg-primary/10 transition-colors"
            >
              Reserve A Table
            </a>
          </div>
        </div>
      </section>

      {/* About Section - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20 text-center flex flex-col items-center">
        <div className="max-w-3xl mx-auto px-sm flex flex-col items-center">
          {/* Abstract SVG line-drawn portrait or symbol */}
          <div className="w-40 h-40 mb-lg text-primary opacity-80">
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M50,15 C60,15 70,20 72,32 C73,38 71,44 68,48 C65,52 68,58 68,64 C68,72 60,80 50,80 C40,80 32,72 32,64 C32,58 35,52 32,48 C29,44 27,38 28,32 C30,20 40,15 50,15 Z" />
              <path d="M38,38 Q42,32 46,38" />
              <path d="M62,38 Q58,32 54,38" />
              <path d="M45,48 Q50,52 55,48" />
              <path d="M48,58 Q50,60 52,58" />
              <circle cx="38" cy="48" r="4" fill="#E19946" stroke="none" />
              <circle cx="62" cy="48" r="4" fill="#E19946" stroke="none" />
              <path d="M28,28 Q24,24 28,20 Q32,24 28,28 Z" fill="#E59F94" />
              <circle cx="28" cy="24" r="2" fill="#E19946" />
            </svg>
          </div>
          <h2 className="font-garamond text-d-[40px] tracking-[0.3em] text-tertiary uppercase mb-sm">
            C h a k r a
          </h2>
          <p className="font-garamond text-body-md text-primary-60 italic mb-xs">
            "Good Food, Good Company"
          </p>
          <p className="font-termina text-label-sm text-surface-accent uppercase tracking-wider mb-lg">
            &#123;noun&#125;
          </p>
          <p className="font-garamond text-headline-sm lg:text-headline-md text-tertiary leading-relaxed max-w-xl">
            A neighborhood landmark meaning: <span className="font-script text-primary text-[36px] border-b border-dashed border-secondary/80 pb-1">beloved destination</span>
          </p>
        </div>
      </section>

      {/* Trust Section - Salmon Pink Background */}
      <section className="bg-surface-accent py-xl border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-lg text-center">
            {[
              { title: 'Since 1985', desc: 'More than forty years of serving guests in the heart of Saki Naka.' },
              { title: 'Restaurant & Bar', desc: 'A welcoming destination for family dinners, casual lunches, celebrations, and evenings with friends.' },
              { title: 'Near Saki Naka Metro', desc: 'Conveniently located just minutes away from one of Mumbai\'s busiest neighbourhoods.' },
              { title: 'Trusted By Generations', desc: 'A place many guests discovered years ago and continue returning to today.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <p className="font-garamond text-headline-sm text-tertiary font-semibold uppercase tracking-wider">{item.title}</p>
                <div className="w-8 h-[2px] bg-primary my-sm" />
                <p className="font-garamond text-body-sm text-tertiary/75 max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid lg:grid-cols-2 gap-lg lg:gap-xl items-center">
            <PlaceholderImage
              alt="Restaurant interior"
              aspectRatio="aspect-[3/4]"
              label="Story Image"
              className="rounded-md shadow-sm border border-secondary/25"
            />
            <div className="lg:pl-lg">
              <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                Our Story
              </p>
              <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-md leading-[1.2] uppercase tracking-wide">
                Some Places Become Part Of The Neighbourhood
              </h2>
              <p className="font-script text-script-lg text-primary mb-lg">
                Every city has a few places that people remember.
              </p>
              <div className="font-garamond text-body-lg text-tertiary/75 space-y-md">
                <p>
                  The restaurant where birthdays were celebrated. The table where old friends met after years apart. The place someone recommended and then became a regular.
                </p>
                <p>
                  For many people in Saki Naka, Chakra has been one of those places. Since 1985, we've had the privilege of serving guests through everyday meals, special occasions, family gatherings, and countless conversations shared across the table.
                </p>
                <p>
                  While the city around us has continued to evolve, our focus has remained the same — serving good food, creating a welcoming atmosphere, and making sure every guest leaves with a reason to return.
                </p>
              </div>
              <button
                onClick={() => onNavigate('story')}
                className="mt-lg inline-flex items-center gap-xs font-termina text-label-md text-primary hover:text-primary-60 transition-colors uppercase tracking-wider font-semibold"
              >
                Read Our Story
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Clay Yellow Background */}
      <section className="bg-secondary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-5xl mx-auto px-sm lg:px-lg">
          <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider text-center mb-md">
            Experience Chakra
          </p>
          <PlaceholderVideo
            aspectRatio="aspect-video"
            label="Welcome to Chakra"
            className="rounded-md shadow-md border border-neutral/20"
          />
        </div>
      </section>

      {/* Why People Come - Salmon Pink Background */}
      <section className="bg-surface-accent py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-xl">
            <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">
              Forty Years Later, The Story Is Still Being Written
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-md uppercase tracking-wider">
              Why People Come to Chakra
            </h2>
            <div className="font-script text-script-lg text-primary max-w-2xl mx-auto space-y-xs text-center">
              <p>Every day brings new guests.</p>
              <p>Every table creates new memories.</p>
              <p>And every visit becomes part of the story.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-lg lg:gap-xl text-center">
            {[
              { title: 'For The Food', description: 'From tandoori favourites and rich curries to familiar classics, our menu brings together dishes that guests continue to return for.' },
              { title: 'For The Atmosphere', description: 'Warm lighting, comfortable seating, and a welcoming setting make Chakra a place where people naturally settle in and stay awhile.' },
              { title: 'For The Company', description: 'Meals have always been about more than what\'s on the table. They\'re about the people around it.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center bg-neutral/30 p-md rounded-md border border-neutral/10">
                <p className="font-garamond text-headline-sm text-tertiary mb-sm font-semibold uppercase tracking-wider">{item.title}</p>
                <p className="font-garamond text-body-md text-tertiary/75 max-w-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dish Full Width Hero Image */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <PlaceholderImage
          alt="Signature dish"
          aspectRatio="h-full"
          label="Signature Dish"
          className="absolute inset-0"
        />
        <div className="absolute bottom-0 left-0 right-0 p-sm lg:p-lg bg-gradient-to-t from-tertiary/80 via-tertiary/40 to-transparent">
          <div className="max-w-7xl mx-auto text-neutral">
            <p className="font-script text-script-lg text-surface-accent mb-xs">The Food</p>
            <p className="font-garamond text-body-lg max-w-md text-neutral/90 italic">
              North Indian, coastal influences, Mumbai favorites. Prepared the same way for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Signature Favourites - Cream Background with Clay Yellow Cards (Delbar Menu Style) */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-6xl mx-auto px-sm lg:px-lg">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-md mb-xl">
            <div>
              <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                From Our Kitchen
              </p>
              <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary uppercase tracking-wide">
                Signature Favourites
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="font-termina text-label-md text-primary hover:text-primary-60 transition-colors uppercase tracking-[0.15em] font-semibold border-b-2 border-primary"
            >
              Full Menu
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
            {[
              { name: 'BUTTER CHICKEN', desc: 'Tomato-cream curry, tandoor chicken.', price: '₹430', allergens: 'Dairy, Nuts, Allium' },
              { name: 'DAL MAKHANI', desc: 'Slow-cooked black lentils, rich and creamy.', price: '₹250', allergens: 'Dairy, Allium' },
              { name: 'CHICKEN GHEE ROAST', desc: 'Fiery chicken dish roasted in clarified butter and coastal spices.', price: '₹450', allergens: 'Dairy, Allium, Pepper' },
              { name: 'HARA BHARA KEBAB', desc: 'Pan-fried spinach and green pea patties.', price: '₹350', allergens: 'Dairy, Gluten' },
              { name: 'BUTTER NAAN', desc: 'Freshly prepared and the perfect companion to every meal.', price: '₹80', allergens: 'Gluten, Dairy' },
            ].map((dish, i) => (
              <div key={i} className="bg-secondary rounded-md overflow-hidden shadow-sm border border-neutral/20 flex flex-col justify-between p-sm min-h-[350px]">
                <div>
                  <div className="h-44 w-full rounded-sm overflow-hidden mb-sm border border-neutral/15">
                    <PlaceholderImage
                      alt={dish.name}
                      aspectRatio="h-full w-full"
                      label={dish.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-xs">
                    <h3 className="font-garamond text-headline-sm text-tertiary font-bold tracking-wide">{dish.name}</h3>
                  </div>
                  <p className="font-garamond text-body-sm text-tertiary/75 italic leading-relaxed mb-sm">
                    {dish.price} · {dish.desc}
                  </p>
                </div>

                <div className="pt-sm border-t border-neutral/20 flex justify-between items-center">
                  <span className="font-garamond text-[12px] text-tertiary/60 italic">
                    Allergens: {dish.allergens}
                  </span>
                  <button
                    onClick={() => handleLike(i)}
                    className="flex items-center gap-1 px-3 py-2 bg-neutral rounded-full text-tertiary border border-neutral/30 hover:bg-neutral/80 transition-colors shadow-sm"
                  >
                    <Heart size={14} className="text-[#9C2C2C] fill-[#9C2C2C]" />
                    <span className="font-termina text-[10px]">{likes[i]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bar Section - Salmon Pink Background */}
      <section className="bg-surface-accent py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid lg:grid-cols-2 gap-lg lg:gap-xl items-center">
            <PlaceholderImage
              alt="Bar area"
              aspectRatio="aspect-[4/3]"
              label="Bar Image"
              className="rounded-md shadow-sm border border-neutral/20"
            />
            <div>
              <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">Bar Experience</p>
              <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-lg leading-[1.2] uppercase tracking-wide">
                Where Good Evenings Begin
              </h2>
              <div className="font-garamond text-body-lg text-tertiary/75 space-y-md">
                <p className="font-script text-script-lg text-primary">
                  Some people stop by for a quick drink. Others stay for the conversation.
                </p>
                <p>
                  The bar at Chakra has always been a place where colleagues unwind after work, friends gather for a catchup, and celebrations continue long into the evening.
                </p>
                <p className="italic">
                  Relaxed, welcoming, and unhurried — just the way a good evening should be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmosphere Section - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-xl">
            <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
              The Space
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-md uppercase tracking-wider">
              Pull Up A Chair
            </h2>
            <div className="font-garamond text-body-lg text-tertiary/75 max-w-2xl mx-auto space-y-sm">
              <p className="font-script text-script-lg text-primary">
                The best restaurants aren't remembered only for their food. They're remembered for how they make people feel.
              </p>
              <p>
                At Chakra, you'll find familiar flavours, warm hospitality, and an atmosphere that encourages you to slow down, enjoy the moment, and spend time with the people who matter most.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-sm">
            <div className="col-span-8">
              <PlaceholderImage alt="Gallery 1" aspectRatio="aspect-[16/9]" label="Main Dining" className="rounded-sm" />
            </div>
            <div className="col-span-4 row-span-2">
              <PlaceholderImage alt="Gallery 2" aspectRatio="h-full" label="Interior" className="rounded-sm" />
            </div>
            <div className="col-span-4">
              <PlaceholderImage alt="Gallery 3" aspectRatio="aspect-square" label="Evening" className="rounded-sm" />
            </div>
            <div className="col-span-4">
              <PlaceholderImage alt="Gallery 4" aspectRatio="aspect-square" label="Gathering" className="rounded-sm" />
            </div>
          </div>

          <div className="text-center mt-lg">
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-xs font-termina text-label-md text-primary hover:text-primary-60 transition-colors uppercase tracking-wider font-semibold"
            >
              View All Photos
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section - Clay Yellow Background */}
      <section className="bg-secondary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-xl">
            <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">
              Voices
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-md uppercase tracking-wide">
              The Best Recommendation Comes From Someone Who's Been Here
            </h2>
            <p className="font-garamond text-body-lg text-tertiary/75 max-w-2xl mx-auto">
              Over the years, thousands of guests have shared their experiences, favourite dishes, and memorable moments. Their stories say more about Chakra than we ever could.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-lg lg:gap-xl">
            {[
              { text: "Been coming here for 15 years. The food is consistent, the staff knows my order. Feels like home.", author: "Rajesh M.", note: "Regular since 2009" },
              { text: "The tandoori here is what keeps me coming back. Same taste since my father brought me here as a kid.", author: "Amit K.", note: "Saki Naka" },
            ].map((review, i) => (
              <div key={i} className="bg-neutral/50 p-md rounded-md border border-neutral/30 shadow-sm">
                <p className="font-garamond text-headline-sm lg:text-headline-md text-tertiary leading-[1.5] mb-lg italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-sm">
                  <div className="w-sm h-px bg-primary" />
                  <div>
                    <p className="font-termina text-label-sm text-tertiary font-bold">{review.author}</p>
                    <p className="font-garamond text-body-sm text-tertiary/50 mt-xs">{review.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-lg">
            <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
              Follow Along
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary mb-md uppercase tracking-wider">
              Everyday Life At Chakra
            </h2>
            <p className="font-garamond text-body-lg text-tertiary/75 max-w-2xl mx-auto mb-md">
              Food being shared. Drinks being raised. Conversations unfolding. Celebrations in full swing. A glimpse into the moments that make Chakra what it is.
            </p>
            <a
              href="https://www.instagram.com/chakrasakinaka/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-termina text-label-sm text-primary hover:text-primary-60 transition-colors uppercase tracking-[0.2em] font-semibold"
            >
              @chakrasakinaka
            </a>
          </div>

          <div className="grid grid-cols-4 lg:grid-cols-8 gap-xs">
            {Array.from({ length: 8 }).map((_, i) => (
              <PlaceholderImage
                key={i}
                alt={`Instagram ${i + 1}`}
                aspectRatio="aspect-square"
                label={`IG ${i + 1}`}
                className="rounded-sm"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section - Salmon Pink Background */}
      <section className="bg-surface-accent text-tertiary py-xl lg:py-[120px]">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid lg:grid-cols-2 gap-lg lg:gap-xl">
            <div>
              <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">
                Find Us
              </p>
              <h2 className="font-garamond text-headline-lg lg:text-[40px] mb-lg uppercase tracking-wider">
                Visit <span className="font-script text-primary lowercase tracking-normal">Chakra</span>
              </h2>

              <div className="font-garamond text-body-lg space-y-lg">
                <div>
                  <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider">Address</p>
                  <p className="mt-xs leading-relaxed text-tertiary">
                    Andheri–Kurla Road, Near Saki Naka Metro Station<br />
                    Mumbai, Maharashtra 400072
                  </p>
                </div>
                <div>
                  <p className="font-termina text-label-sm text-tertiary/60 tracking-wider uppercase">Phone</p>
                  <a href="tel:+917738166702" className="block mt-xs text-primary hover:text-primary-60 transition-colors font-semibold">
                    +91 77381 66702
                  </a>
                </div>
                <div>
                  <p className="font-termina text-label-sm text-tertiary/60 tracking-wider uppercase">Hours</p>
                  <p className="mt-xs text-tertiary">
                    Mon - Sun: 12:00 PM - 4:00 PM, 6:00 PM - 12:30 AM
                  </p>
                </div>
              </div>

              <div className="flex gap-sm mt-lg">
                <a
                  href="tel:+917738166702"
                  className="inline-flex items-center gap-xs px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md"
                >
                  <Phone size={16} />
                  Call
                </a>
                <a
                  href="https://www.google.com/maps/place/chakra+sakinaka/data=!4m2!3m1!1s0x3be7c86ded542b17:0xa8f85d53671c7654?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-xs px-lg py-sm border border-primary text-primary font-termina text-label-md rounded-full hover:bg-primary/10 transition-colors"
                >
                  <MapPin size={16} />
                  Map
                </a>
              </div>
            </div>

            <div className="hidden lg:block h-[400px] rounded-md overflow-hidden border border-neutral/20 shadow-md">
              <iframe
                title="Chakra Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0815599879796!2d72.88602641151624!3d19.093108682054238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87c10b784cf%3A0xe6bf44b62db94d1b!2sChakra%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
