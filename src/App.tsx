import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Gamers from './pages/Gamers';
import AboutUs from './pages/AboutUs';
import HomeSection from './pages/HomeSection';
import PolicyHandling from './pages/PolicyHandling';
import ContentCreatorsSection from './pages/ContentCreatorsSection';
import PolicyHandlingPersonalData from './pages/PolicyHandlingPersonalData';

// Components PrimeReact
import { ScrollTop } from 'primereact/scrolltop';

// Components
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import ScrollToTop from './components/ScrollToTop';
// import SupportButton from './components/SupportButton';

// Styles
import './App.scss';
import 'primeflex/primeflex.css';

const App = () => {
  return (
    <div id='app' className="text-white">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main className="content">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/content-creator" element={<ContentCreatorsSection />} />
          <Route path="/gamers" element={<Gamers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/policy-handling" element={<PolicyHandling />} />
          <Route path="/policy-handling-personal-data" element={<PolicyHandlingPersonalData />} />
        </Routes>

        <ContactUs />
      </main>

      <ScrollTop threshold={100} className="w-3rem h-3rem border-round bg-primary scroll-top" icon="pi pi-arrow-up text-base" />

      {/* <SupportButton /> */}

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
