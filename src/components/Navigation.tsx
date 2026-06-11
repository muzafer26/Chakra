import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit', label: 'Visit' },
  ];

  return (
    <>
      {/* Spacer */}
      <div className="h-20" />

      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-neutral border-b border-secondary/20 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2"
            >
              <img
                src="/assets/Img/chakra logo.jpg"
                alt="Chakra Logo"
                className="w-10 h-10 rounded-full object-cover border border-secondary/20 bg-white"
              />
              <span className="font-termina text-headline-sm font-medium text-tertiary tracking-[0.25em] uppercase">
                Chakra
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`font-termina text-label-md uppercase tracking-[0.15em] transition-colors py-1 ${
                    currentPage === item.id
                      ? 'text-primary font-semibold border-b-2 border-primary'
                      : 'text-primary-60 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-sm text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-neutral">
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsOpen(false);
                }}
                className={`font-garamond text-headline-lg py-sm ${
                  currentPage === item.id ? 'text-primary' : 'text-primary-60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
