import { useState } from 'react';
import { Heart } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

const MenuPage = ({ onNavigate }: MenuPageProps) => {
  const menuData = {
    Starters: [
      { name: 'Hara Bhara Kebab', desc: 'Pan-fried spinach and green pea patties', price: '₹350', allergens: 'Dairy, Gluten', likes: 38 },
      { name: 'Chicken Ghee Roast', desc: 'Fiery chicken dish roasted in clarified butter and coastal spices', price: '₹450', allergens: 'Dairy, Allium, Pepper', likes: 52 },
      { name: 'Paneer Tikka', desc: 'Marinated cottage cheese, tandoor roasted', price: '₹280', allergens: 'Dairy, Allium', likes: 34 },
      { name: 'Chicken Tikka', desc: 'Boneless chicken, yogurt-spice marinade', price: '₹320', allergens: 'Dairy, Allium, Pepper', likes: 45 },
      { name: 'Chana Koliwada', desc: 'Crispy chickpeas, Mumbai street style', price: '₹220', allergens: 'Gluten, Sesame, Citrus', likes: 28 },
    ],
    Mains: [
      { name: 'Butter Chicken', desc: 'Tomato-cream curry, tandoor chicken', price: '₹430', allergens: 'Dairy, Nuts, Allium', likes: 88 },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils, rich and creamy', price: '₹250', allergens: 'Dairy, Allium', likes: 74 },
      { name: 'Mutton Rogan Josh', desc: 'Kashmiri style mutton curry cooked with aromatic spices', price: '₹580', allergens: 'Allium, Pepper', likes: 61 },
      { name: 'Pesto Grilled Chicken', desc: 'Grilled chicken breast flavored with pesto sauce', price: '₹480', allergens: 'Nuts, Dairy', likes: 43 },
      { name: 'Fish Curry', desc: 'Coastal recipe, fresh catch', price: '₹420', allergens: 'Fish, Mustard, Coconut', likes: 37 },
    ],
    Tandoor: [
      { name: 'Chicken Tandoori', desc: 'Half chicken, clay oven roasted', price: '₹350', allergens: 'Dairy, Allium, Pepper', likes: 62 },
      { name: 'Butter Naan', desc: 'Leavened bread, brushed with butter', price: '₹80', allergens: 'Gluten, Dairy', likes: 85 },
      { name: 'Garlic Naan', desc: 'Naan topped with fresh garlic', price: '₹90', allergens: 'Gluten, Dairy, Allium', likes: 57 },
      { name: 'Laccha Paratha', desc: 'Layered whole wheat bread', price: '₹75', allergens: 'Gluten, Dairy', likes: 31 },
    ],
    Desserts: [
      { name: 'Gulab Jamun', desc: 'Milk dumplings, rose syrup', price: '₹120', allergens: 'Dairy, Gluten, Sugar', likes: 53 },
      { name: 'Rasmalai', desc: 'Cottage cheese, cardamom milk', price: '₹140', allergens: 'Dairy, Nuts, Sugar', likes: 49 },
      { name: 'Kulfi', desc: 'Traditional Indian ice cream', price: '₹110', allergens: 'Dairy, Nuts, Sugar', likes: 42 },
    ]
  };

  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Starters');
  const [likes, setLikes] = useState<Record<string, number>>({});

  const handleLike = (cat: string, index: number) => {
    const key = `${cat}-${index}`;
    const defaultLikes = menuData[cat as keyof typeof menuData][index].likes;
    setLikes(prev => ({
      ...prev,
      [key]: (prev[key] ?? defaultLikes) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero */}
      <section className="relative h-[50vh] lg:h-[65vh] overflow-hidden">
        <PlaceholderImage
          alt="Menu hero"
          aspectRatio="h-full"
          overlay
          label="Menu Hero Image"
          className="absolute inset-0"
        />
        <div className="absolute bottom-0 left-0 right-0 p-sm lg:p-lg bg-gradient-to-t from-tertiary/70 via-tertiary/30 to-transparent">
          <div className="max-w-7xl mx-auto text-neutral">
            <p className="font-script text-script-lg text-surface-accent mb-xs">
              From Our Kitchen
            </p>
            <h1 className="font-garamond text-headline-lg lg:text-[52px] leading-[1.1] mb-xs uppercase tracking-wide">
              Food Worth Coming Back For
            </h1>
            <p className="font-garamond text-body-lg text-neutral/80 max-w-2xl italic">
              A collection of guest favourites, signature dishes, and timeless recipes that have earned a place at our tables for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation (Delbar Style) */}
      <section className="bg-neutral py-6 sticky top-20 z-30 border-b border-secondary/25 shadow-sm">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg overflow-x-auto whitespace-nowrap scrollbar-none flex justify-center gap-sm">
          {Object.keys(menuData).map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveCategory(catName as keyof typeof menuData)}
              className={`px-lg py-sm font-termina text-label-md uppercase tracking-wider rounded-full transition-all duration-300 ${
                activeCategory === catName
                  ? 'bg-primary text-neutral shadow-md'
                  : 'bg-neutral border border-secondary/40 text-primary-60 hover:bg-secondary/10'
              }`}
            >
              {catName}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Grid */}
      <section className="bg-neutral py-xl lg:py-[100px]">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
            {menuData[activeCategory].map((dish, i) => {
              const key = `${activeCategory}-${i}`;
              const currentLikes = likes[key] ?? dish.likes;

              return (
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
                      <h3 className="font-garamond text-headline-sm text-tertiary font-bold tracking-wide uppercase">{dish.name}</h3>
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
                      onClick={() => handleLike(activeCategory, i)}
                      className="flex items-center gap-1 px-3 py-2 bg-neutral rounded-full text-tertiary border border-neutral/30 hover:bg-neutral/80 transition-colors shadow-sm"
                    >
                      <Heart size={14} className="text-[#9C2C2C] fill-[#9C2C2C]" />
                      <span className="font-termina text-[10px]">{currentLikes}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bar CTA */}
      <section className="bg-surface-accent text-tertiary py-xl border-t border-secondary/20">
        <div className="max-w-4xl mx-auto px-sm lg:px-lg text-center">
          <p className="font-script text-script-lg text-primary mb-sm">Full Bar</p>
          <p className="font-garamond text-body-md text-tertiary/80 mb-lg max-w-md mx-auto italic">
            Classic cocktails, imported spirits, Indian whisky, cold beers.
          </p>
          <button
            onClick={() => onNavigate('visit')}
            className="px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md uppercase tracking-wider"
          >
            Reserve a Table
          </button>
        </div>
      </section>

      {/* Note */}
      <section className="bg-neutral py-md text-center border-t border-secondary/15">
        <p className="font-garamond text-body-sm text-tertiary/50">
          Menu items and prices subject to change. GST applicable.
        </p>
      </section>
    </div>
  );
};

export default MenuPage;
