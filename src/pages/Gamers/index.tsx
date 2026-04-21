import Steps from "../../components/Steps";
import FeatureSection from "./components/FeatureSection";
import Home from "./components/Home";
import ServicesSection from "./components/ServicesSection";

import './Gamers.scss';

const valueItems = [
  { label: 'Strengthen audience connection' },
  { label: 'Boost monetization opportunities' },
  { label: 'Increase viewership revenue' },
  { label: 'Identify popular game moments' },
  { label: 'Drive audience-driven content strategy' },
  { label: 'Increase follower retention' },
];

const Gamers = () => {
  return (
    <div>
      <Home />

      <ServicesSection />

      <div className="value-gamers">
        <div className="value-inner">
          <span className="value-eyebrow">Value to your business</span>
          <h2 className="value-heading">Why game studios &amp; streamers choose QQA</h2>

          <ul>
            {valueItems.map(({ label }) => (
              <li key={label}>
                <i className="pi pi-check check-icon" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Steps isGamer />

      <div className="gamer-disclaimer">
        <p>
          Gameplay is used solely to showcase your game viewer testing capabilities and not for profit.
        </p>
      </div>

      <FeatureSection />
    </div>
  );
};

export default Gamers;
