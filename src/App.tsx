import { AppRoutes } from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useGa4 } from './lib/useGa4';
import ScrollToTop from './lib/scrollToTop';
import './styles/global.css';

// Vite provides types for import.meta.env automatically, no need to redeclare them.

export default function App() {
  const GA = import.meta.env.VITE_GA4_ID ?? 'G-W6SCBR27PW';
useGa4(GA);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <ScrollToTop/>
      <Header />
      <main id="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}