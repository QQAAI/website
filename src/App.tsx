import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomeSection from './pages/HomeSection';

import 'primeflex/primeflex.css';
import './App.scss';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { ScrollTop } from 'primereact/scrolltop';
import ContentCreatorsSection from './pages/ContentCreatorsSection';
import Gamers from './pages/Gamers';

const App = () => {
  return (
    <div id='app' className="text-white">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/content-creator" element={<ContentCreatorsSection />} />
          <Route path="/gamers" element={<Gamers />} />
        </Routes>

        <ContactUs />
      </main>

      <ScrollTop threshold={100} className="w-3rem h-3rem border-round bg-primary scroll-top" icon="pi pi-arrow-up text-base" />

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
