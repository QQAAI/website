import FeatureSection from "./components/FeatureSection";
import Home from "./components/Home";
import { Reports } from "./components/Rerports";
import ServicesSection from "./components/ServicesSection";
import TimelineSection from "./components/TimelineSection";

import './HomeSection.scss';

const HomeSection = () => {
  return (
    <>
      <Home />

      <ServicesSection />

      <div className="value-home container-fluid">
        <div className="container-xxl">
          <div className="row text-center">
            <h5>VALUE TO YOUR BUSINESS</h5>

            <ul className="p-0">
              {['Real time analysis', 'Optimized Spend by 25%', 'Generate New Consumer Insights'].map((label: string) => (
                <li>
                  <i className="pi pi-check" style={{ color: '#FF019B' }} />
                  &nbsp;&nbsp;
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FeatureSection />

      <TimelineSection />

      <Reports />
    </>
  );
};

export default HomeSection;
