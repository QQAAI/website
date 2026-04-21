/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { classNames } from 'primereact/utils';
import 'animate.css';
import './FeatureSection.scss';

import frame1 from '../../../../assets/img/frame_1_gamer.webp';
import frame2 from '../../../../assets/img/frame_2_gamer.webp';
import frame3 from '../../../../assets/img/frame_3_gamer.webp';
import frame4 from '../../../../assets/img/frame_4_gamer.webp';
import frameMobile1 from '../../../../assets/img/frame_1_1_gamer.webp';
import frameMobile2 from '../../../../assets/img/frame_2_2_gamer.webp';
import frameMobile3 from '../../../../assets/img/frame_3_3_gamer.webp';
import frameMobile4 from '../../../../assets/img/frame_4_4_gamer.webp';

const FeatureSection = () => {
  const [index, setIndex] = useState(0);
  const desktopFrames = [frame1, frame2, frame3, frame4];
  const mobileFrames  = [frameMobile1, frameMobile2, frameMobile3, frameMobile4];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % desktopFrames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="feature-gamer">
      <div className="feature-inner text-center">
        <span className="feature-eyebrow">Core Features</span>
        <h2 className="feature-heading">Why choose QQA AI Insights for Gaming?</h2>

        {/* Desktop */}
        <div className="hidden md:flex justify-content-center">
          <div className="relative w-full max-w-6xl flex justify-content-center">
            {desktopFrames.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Feature ${i + 1}`}
                className={classNames(
                  'absolute transition-opacity duration-1000',
                  index === i ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-content-center">
          <div className="relative w-full max-w-xs">
            {mobileFrames.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Feature mobile ${i + 1}`}
                className={classNames(
                  'absolute transition-opacity duration-1000',
                  index === i ? 'opacity-100 animate__animated animate__fadeIn' : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>

        <div className="feature-dots">
          {desktopFrames.map((_, i) => (
            <span key={i} className={classNames('dot', { active: index === i })} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
