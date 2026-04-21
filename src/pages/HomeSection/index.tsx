import FeatureSection    from "./components/FeatureSection";
import Home              from "./components/Home";
import PlatformHub       from "./components/PlatformHub";
import { Reports }       from "./components/Rerports";
import ServicesSection   from "./components/ServicesSection";
import TimelineSection   from "./components/TimelineSection";

import './HomeSection.scss';

const valueItems = [
  { icon: '⚡', label: 'Real-time Analysis',       detail: 'Instant biometric feedback as viewers watch' },
  { icon: '📉', label: 'Optimized Spend by 25%',   detail: 'Reduce wasted budget on content that doesn\'t land' },
  { icon: '🧠', label: 'New Consumer Insights',    detail: 'Uncover hidden patterns in audience attention' },
];

const HomeSection = () => (
  <>
    {/* 1. Hero + videos + steps */}
    <Home />

    {/* 2. What's inside the platform — 3 product tiles */}
    <PlatformHub />

    {/* 3. Services carousel */}
    <ServicesSection />

    {/* 4. Value proposition */}
    <div className="value-home container-fluid">
      <div className="value-inner">
        <div className="text-center">
          <h5>Value to your business</h5>
          <p className="value-heading">Why leading creators choose QQA</p>
        </div>
        <ul className="p-0">
          {valueItems.map((item) => (
            <li key={item.label}>
              <span className="value-icon">{item.icon}</span>
              <div className="value-text">
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* 5. Platform screenshots / frames */}
    <FeatureSection />

    {/* 6. Production workflow */}
    <TimelineSection />

    {/* 7. Reports */}
    <Reports />
  </>
);

export default HomeSection;
