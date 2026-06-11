import PlaceholderImage from '../components/PlaceholderImage';
import PlaceholderVideo from '../components/PlaceholderVideo';

interface StoryPageProps {
  onNavigate: (page: string) => void;
}

const StoryPage = ({ onNavigate }: StoryPageProps) => {
  const milestones = [
    { year: '1985', title: 'The Beginning', desc: 'Chakra opens in Saki Naka, a small neighbourhood restaurant.' },
    { year: '1992', title: 'Bar Added', desc: 'The bar section opens, becoming a gathering spot.' },
    { year: '2005', title: 'Generation Next', desc: 'Second generation joins, preserving recipes and philosophy.' },
    { year: 'Today', title: 'Four Decades', desc: 'Still family-run. Still serving the same recipe from 1985.' },
  ];

  const values = [
    { title: 'Hospitality First', desc: 'Every guest is treated like family.' },
    { title: 'Consistent Quality', desc: 'The butter chicken today tastes the same as years ago.' },
    { title: 'Community Space', desc: 'Where celebrations happen and memories form.' },
  ];

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <PlaceholderImage
          alt="Story hero"
          aspectRatio="h-full"
          overlay
          label="Story Hero"
          className="absolute inset-0"
        />
        <div className="absolute bottom-0 left-0 right-0 p-sm lg:p-lg bg-gradient-to-t from-tertiary/70 via-tertiary/30 to-transparent">
          <div className="max-w-7xl mx-auto text-neutral">
            <p className="font-termina text-label-sm text-surface-accent uppercase tracking-wider mb-sm">
              Since 1985
            </p>
            <h1 className="font-garamond text-headline-lg lg:text-[56px] max-w-4xl leading-[1.1] mb-xs uppercase tracking-wide">
              Since 1985
            </h1>
            <p className="font-garamond text-body-lg text-neutral/80 max-w-2xl italic">
              For over forty years, Chakra has been part of the rhythm of Saki Naka. Welcoming familiar faces, meeting new ones, and continuing a tradition of hospitality that began decades ago.
            </p>
          </div>
        </div>
      </section>

      {/* Intro - Salmon Pink Background */}
      <section className="bg-surface-accent text-tertiary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-3xl mx-auto px-sm lg:px-lg text-center">
          <p className="font-garamond text-headline-md text-tertiary leading-[1.5] italic">
            In 1985, Saki Naka was different. Small industries, quieter streets.
            Chakra opened not with ambition to expand, but simply: serve good food, make people welcome.
          </p>
        </div>
      </section>

      {/* Image + Text - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="grid lg:grid-cols-2 gap-lg lg:gap-xl items-center">
            <PlaceholderImage
              alt="Early years"
              aspectRatio="aspect-[3/4]"
              label="Early Years Image"
              className="rounded-md shadow-sm border border-secondary/25"
            />
            <div className="font-garamond text-body-lg text-tertiary/75 space-y-md lg:pl-lg">
              <p className="font-script text-script-lg text-primary mb-sm">
                The menu was simple.
              </p>
              <p>
                Tandoor items, a few curries, fresh bread.
                The kitchen was small, the staff was family.
              </p>
              <p>
                Word spread slowly. Office workers came for lunch.
                Families celebrated birthdays. Regulars became friends.
              </p>
              <p className="italic">
                The restaurant was never about creating a brand.
                It was about building something lasting in the neighbourhood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video - Clay Yellow Background */}
      <section className="bg-secondary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-5xl mx-auto px-sm lg:px-lg">
          <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider text-center mb-md">
            Our Journey In Motion
          </p>
          <PlaceholderVideo
            label="Our Story Video"
            className="rounded-md shadow-md border border-neutral/20"
          />
        </div>
      </section>

      {/* Timeline - Forest Green Background */}
      <section className="bg-primary text-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-5xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-xl">
            <p className="font-termina text-label-sm text-neutral/50 uppercase tracking-wider mb-sm">
              The Journey
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] uppercase tracking-wider">Milestones</h2>
          </div>

          <div className="space-y-lg">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-lg lg:gap-xl border-b border-neutral/10 pb-md last:border-0 last:pb-0">
                <p className="font-garamond text-headline-md text-surface-accent flex-shrink-0 w-24">
                  {m.year}
                </p>
                <div className="pt-xs">
                  <h3 className="font-garamond text-headline-sm text-neutral mb-xs uppercase tracking-wide">{m.title}</h3>
                  <p className="font-garamond text-body-md text-neutral/60">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Cream Background */}
      <section className="bg-neutral py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-7xl mx-auto px-sm lg:px-lg">
          <div className="text-center mb-xl">
            <p className="font-termina text-label-sm text-primary-60 uppercase tracking-wider mb-sm">
              What We Believe
            </p>
            <h2 className="font-garamond text-headline-lg lg:text-[40px] text-tertiary uppercase tracking-wider">Our Values</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-lg text-center">
            {values.map((v, i) => (
              <div key={i} className="bg-secondary p-md rounded-md border border-neutral/20 shadow-sm">
                <p className="font-script text-script-lg text-primary mb-sm">{v.title}</p>
                <p className="font-garamond text-body-md text-tertiary/75">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote - Clay Yellow Background */}
      <section className="bg-secondary py-xl lg:py-[120px] border-b border-secondary/20">
        <div className="max-w-4xl mx-auto px-sm lg:px-lg text-center">
          <p className="font-garamond text-headline-md lg:text-headline-lg text-tertiary leading-[1.5] italic">
            "We never set out to be famous. We just wanted to be the place
            families in Saki Naka could count on."
          </p>
          <p className="font-termina text-label-sm text-tertiary/60 uppercase tracking-wider mt-lg">
            The Chakra Family
          </p>
        </div>
      </section>

      {/* CTA - Salmon Pink Background */}
      <section className="bg-surface-accent text-tertiary py-xl lg:py-[120px]">
        <div className="max-w-4xl mx-auto px-sm lg:px-lg text-center">
          <h2 className="font-garamond text-headline-md lg:text-headline-lg mb-md uppercase tracking-wider">
            Part of Your Story
          </h2>
          <p className="font-garamond text-body-lg text-tertiary/80 mb-lg italic">
            We would be honoured to host you.
          </p>
          <button
            onClick={() => onNavigate('visit')}
            className="px-lg py-sm bg-primary text-neutral font-termina text-label-md rounded-full hover:bg-primary-60 transition-colors shadow-md uppercase tracking-wider"
          >
            Visit Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;
