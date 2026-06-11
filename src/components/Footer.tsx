import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="w-full text-tertiary">
      {/* Upper Footer - Pastel Pink Background */}
      <div className="bg-surface-accent py-xl lg:py-[100px] text-center border-t border-secondary/20 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-sm flex flex-col items-center">
          <p className="font-garamond text-body-lg text-tertiary/80 italic mb-sm">
            Chakra is a part of the Sakinaka Hospitality Group
          </p>

          {/* Group Logo Block (Delbar Style) */}
          <div className="border border-tertiary/75 px-lg py-md inline-flex items-center gap-md my-md font-termina text-[16px] font-medium uppercase tracking-[0.25em]">
            <span>Chakra</span>
            <div className="w-px h-8 bg-tertiary/50" />
            <span>Group</span>
          </div>

          <div className="flex gap-md mt-sm font-termina text-[12px] uppercase tracking-widest text-tertiary/60">
            <button onClick={() => onNavigate('menu')} className="hover:text-primary transition-colors">Menu</button>
            <span>·</span>
            <button onClick={() => onNavigate('story')} className="hover:text-primary transition-colors">Our Story</button>
            <span>·</span>
            <button onClick={() => onNavigate('gallery')} className="hover:text-primary transition-colors">Gallery</button>
            <span>·</span>
            <button onClick={() => onNavigate('visit')} className="hover:text-primary transition-colors">Visit Us</button>
          </div>
        </div>
      </div>

      {/* Middle Strip - Clay Yellow Background */}
      <div className="bg-secondary py-sm text-center border-t border-neutral/20 text-tertiary/80 font-script text-script-md">
        Made with ♥ by Antigravity
      </div>

      {/* Lower Footer - Clay Yellow Background */}
      <div className="bg-secondary py-lg text-center border-t border-neutral/15">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg flex flex-col items-center gap-md">
          {/* Social Icons */}
          <div className="flex gap-lg justify-center text-tertiary">
            <a
              href="https://www.instagram.com/chakrasakinaka/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>

          {/* Address & Info */}
          <div className="font-garamond text-body-sm text-tertiary/60 max-w-xl leading-relaxed">
            <p className="font-semibold uppercase tracking-wider font-termina text-[10px] mb-xs">Chakra Restaurant & Bar</p>
            <p>Andheri–Kurla Road, Near Saki Naka Metro Station, Mumbai, Maharashtra 400072</p>
            <p className="mt-xs">
              <a href="tel:+917738166702" className="hover:underline">+91 77381 66702</a> · <a href="mailto:hello@chakra1985.com" className="hover:underline">hello@chakra1985.com</a>
            </p>
          </div>

          {/* Review text */}
          <div className="font-termina text-[10px] uppercase tracking-widest text-tertiary/50">
            Reviews & Feedback
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
