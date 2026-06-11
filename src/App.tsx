import { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage'));
const StoryPage = lazy(() => import('./pages/StoryPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const VisitPage = lazy(() => import('./pages/VisitPage'));

const PageLoader = () => (
  <div className="min-h-screen bg-neutral flex items-center justify-center">
    <div className="w-px h-16 bg-surface-accent animate-pulse" />
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', url);
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const page = e.state?.page || 'home';
      setCurrentPage(page);
    };

    const path = window.location.pathname;
    const pageFromPath = path.slice(1) || 'home';
    const validPages = ['home', 'menu', 'story', 'gallery', 'visit'];
    if (validPages.includes(pageFromPath)) {
      setCurrentPage(pageFromPath);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showNav = currentPage !== 'home';

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage onNavigate={handleNavigate} />;
      case 'story':
        return <StoryPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'visit':
        return <VisitPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral pb-24">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <Suspense fallback={<PageLoader />}>
        {renderPage()}
      </Suspense>
      <Footer onNavigate={handleNavigate} />

      {/* Floating Bottom Pill Menu (Delbar Style) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px] shadow-lg">
        <div className="flex bg-primary border border-neutral/20 rounded-full overflow-hidden text-neutral font-termina text-label-md uppercase tracking-[0.1em] text-center shadow-xl">
          <a
            href="https://www.zomato.com/mumbai/chakra-since-1985-sakinaka"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 hover:bg-primary-60 transition-colors border-r border-neutral/25 font-medium block"
          >
            Order Online
          </a>
          <a
            href="tel:+917738166702"
            className="flex-1 py-4 hover:bg-primary-60 transition-colors font-medium block"
          >
            Reserve Table
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
