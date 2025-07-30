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
  const mobileFrames = [frameMobile1, frameMobile2, frameMobile3, frameMobile4];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % desktopFrames.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="feature-gamer" className="my-6">
      <div>
        <div className="text-center mb-4">
          <h5 className="font-bold m-0 p-0">CORE FEATURES</h5>
          <h1 className="text-3xl font-bold m-0 p-0">Why choose QOA.Al Insights for Gaming Platform?</h1>
        </div>

        <div className="hidden md:flex justify-content-center">
          <div className="relative w-full max-w-6xl flex justify-content-center">
            {desktopFrames.map((img, i) => (
              <img
                key={i}
                src={img}
                width={1300}
                height={600}
                alt={`Frame ${i + 1}`}
                className={classNames(
                  'absolute transition-opacity duration-1000 border-round-xl',
                  index === i
                    ? 'opacity-100 animate__animated animate__fadeIn'
                    : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex md:hidden justify-content-center flex justify-content-center">
          <div className="relative w-full max-w-xs">
            {mobileFrames.map((img, i) => (
              <img
                key={i}
                src={img}
                width={1300}
                height={600}
                alt={`Mobile Frame ${i + 1}`}
                className={classNames(
                  'absolute transition-opacity duration-1000 border-round-xl',
                  index === i
                    ? 'opacity-100 animate__animated animate__fadeIn'
                    : 'opacity-0'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
