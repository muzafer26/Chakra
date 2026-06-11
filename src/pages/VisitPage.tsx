import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const VisitPage = () => {
  const hours = [
    { day: 'Monday - Sunday', time: '12:00 PM - 4:00 PM, 6:00 PM - 12:30 AM' },
  ];

  const transport = [
    { method: 'Metro', info: 'Saki Naka Station, Line 1. 2-minute walk.' },
    { method: 'Bus', info: 'BEST buses stop at Saki Naka junction.' },
    { method: 'Car', info: 'Paid parking nearby. Valet on weekends.' },
  ];

  const faqs = [
    { q: 'Do I need a reservation?', a: 'Walk-ins welcome. Recommended for groups of 6+ on weekends.' },
    { q: 'Is parking available?', a: 'Limited parking nearby. Valet service on weekends.' },
    { q: 'Private dining?', a: 'Yes, private section available for events. Contact us.' },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero - Salmon Pink Background */}
      <section className="bg-surface-accent pt-lg lg:pt-xl pb-lg border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-sm">
            Visit Us
          </p>
          <h1 className="font-garamond text-headline-lg lg:text-[56px] text-tertiary leading-[1.1] mb-xs uppercase tracking-wider">
            We'd Love To Welcome You
          </h1>
          <p className="font-garamond text-body-lg text-tertiary/75 max-w-3xl italic">
            Whether you're planning a family dinner, catching up with friends, or simply looking for a good meal in good company, there's always a place for you at Chakra.
          </p>
        </div>
      </section>

      {/* Map */}
      <section className="h-[40vh] lg:h-[50vh] border-b border-secondary/20 shadow-sm overflow-hidden">
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
      </section>

      {/* Contact + Hours - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid lg:grid-cols-12 gap-lg lg:gap-xl">
            {/* Contact */}
            <div className="lg:col-span-7">
              <div className="space-y-xl">
                {/* Address */}
                <div>
                  <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                    Address
                  </p>
                  <p className="font-garamond text-headline-sm text-tertiary leading-relaxed font-bold">
                    Andheri–Kurla Road, Near Saki Naka Metro Station<br />
                    Mumbai, Maharashtra 400072
                  </p>
                  <a
                    href="https://www.google.com/maps/place/chakra+sakinaka/data=!4m2!3m1!1s0x3be7c86ded542b17:0xa8f85d53671c7654?sa=X&ved=1t:242&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs mt-sm font-termina text-label-sm text-primary hover:text-primary-60 transition-colors font-semibold"
                  >
                    Open in Maps
                    <MapPin size={14} />
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                    Reservations
                  </p>
                  <a
                    href="tel:+917738166702"
                    className="font-garamond text-headline-md text-primary hover:text-primary-70 transition-colors font-bold"
                  >
                    +91 77381 66702
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/917738166702"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs font-garamond text-body-lg text-primary-60 hover:text-primary transition-colors font-semibold"
                  >
                    <MessageCircle size={18} />
                    Message us
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                    Email
                  </p>
                  <a
                    href="mailto:hello@chakra1985.com"
                    className="inline-flex items-center gap-xs font-garamond text-body-lg text-primary-60 hover:text-primary transition-colors font-semibold"
                  >
                    <Mail size={18} />
                    hello@chakra1985.com
                  </a>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-sm pt-sm">
                  <a
                    href="tel:+917738166702"
                    className="inline-flex items-center gap-xs px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md uppercase tracking-wider"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps/place/chakra+sakinaka/data=!4m2!3m1!1s0x3be7c86ded542b17:0xa8f85d53671c7654?sa=X&ved=1t:242&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-xs px-lg py-sm border border-primary text-primary font-termina text-label-md rounded-full hover:bg-primary/10 transition-colors uppercase tracking-wider"
                  >
                    <MapPin size={16} />
                    Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours + Transport */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="bg-secondary p-md rounded-md border border-neutral/20 shadow-sm mb-lg">
                <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mb-md">
                  Hours
                </p>
                <div className="space-y-sm font-garamond text-body-md text-tertiary/75">
                  {hours.map((h, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span>{h.day}</span>
                      <span className="text-tertiary font-bold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
                Getting Here
              </p>
              <div className="space-y-md font-garamond text-body-md text-tertiary/75">
                {transport.map((t, i) => (
                  <div key={i} className="border-b border-secondary/20 pb-xs last:border-0">
                    <p className="font-termina text-label-md text-primary uppercase tracking-wide">{t.method}</p>
                    <p className="mt-xs">{t.info}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image container */}
      <section className="relative h-[50vh] lg:h-[60vh]">
        <PlaceholderImage
          alt="Chakra entrance"
          aspectRatio="h-full"
          label="Entrance Image"
          className="absolute inset-0"
        />
      </section>

      {/* FAQs - Clay Yellow Background */}
      <section className="bg-secondary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-3xl mx-auto px-sm lg:px-lg">
          <h2 className="font-garamond text-headline-lg text-tertiary text-center mb-xl uppercase tracking-wider">
            Common Questions
          </h2>

          <div className="space-y-md">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-neutral p-md rounded-md border border-neutral/25 shadow-sm">
                <h3 className="font-garamond text-headline-sm text-tertiary font-bold mb-xs">{faq.q}</h3>
                <p className="font-garamond text-body-md text-tertiary/75">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Salmon Pink Background */}
      <section className="bg-surface-accent text-tertiary py-xl lg:py-[120px] text-center">
        <div className="max-w-4xl mx-auto px-sm lg:px-lg">
          <p className="font-script text-script-lg text-primary mb-sm">
            we look forward
          </p>
          <p className="font-garamond text-headline-lg mb-lg uppercase tracking-wider">
            to welcoming you
          </p>
          <a
            href="tel:+917738166702"
            className="inline-block px-xl py-md bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md uppercase tracking-wider"
          >
            Reserve Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default VisitPage;
