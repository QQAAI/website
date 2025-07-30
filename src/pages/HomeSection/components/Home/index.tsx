import { useEffect, useRef } from 'react';

import Steps from '../../../../components/Steps';

import { Button } from 'primereact/button';

import img1 from '../../../../assets/img/Step 1_woman.png';
import img2 from '../../../../assets/img/Step 2_woman.png';
import img3 from '../../../../assets/img/Step 3 Image.png';

import video from '../../../../assets/img/Website_HomePage.mp4';
import videoAskAnswer from '../../../../assets/img/Final_Cut_HomePage_Video.mp4';

import './Home.scss';

const Home = () => {
  const secondVideoContainerRef = useRef<HTMLDivElement>(null);
  const firstVideoRef           = useRef<HTMLVideoElement>(null);
  const secondVideoRef          = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video1 = firstVideoRef.current;
      const video2 = secondVideoRef.current;

      if (!video1 || !video2) return;

      const scrollY = window.scrollY;
      const screenWidth = window.innerWidth;


      let scrollThreshold1 = 1400;
      let scrollThreshold2 = 900;

      if (screenWidth <= 768) {
        scrollThreshold1 = 1500;
        scrollThreshold2 = 1100;
      } else if (screenWidth <= 1024)  {
        scrollThreshold1 = 1700;
        scrollThreshold2 = 1100;
      }

      if (scrollY >= scrollThreshold1) {
        video1.pause();
        video2.pause();
      } else if (scrollY >= scrollThreshold2) {
        video1.pause();
        video2.play().catch(() => {});
      } else {
        video1.play().catch(() => {});
        video2.pause();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="home-section text-center">
      <div className="container-xxl">
        <h1 className="title m-0 p-0 mb-3">
          CALLING ALL CONTENT CREATORS <span className='ask'>YOUTUBERS, INSTAGRAM & TIKTOK</span>
        </h1>

        <h2 className="title m-0 p-0" style={{ fontSize: '40px' }}>
          YouTube creators report <span className='ask'>50% viewer drop in the first 10 seconds.</span>
        </h2>

        <h2 className="title m-0 p-0" style={{ fontSize: '40px' }}>
          Attention Test Your Content Before You Post
        </h2>

        <p className="my-3 text-4xl">
          Don't lose followers & views <br /> by guessing their likes.
        </p>

        <video
          loop
          autoPlay
          playsInline
          src       = {video}
          className = "demo-video"
          ref       = {firstVideoRef}
        />

        <h1 className="title m-0 p-0 text-4xl">
          <span className='ask'>Ask AI</span> & <span className='ask'>Answer</span> These Questions Before You Post That Video
        </h1>

        <div ref={secondVideoContainerRef}>
          <video
            loop
            playsInline
            className = "demo-video"
            ref       = {secondVideoRef}
            src       = {videoAskAnswer}
          />
        </div>

        <div>
          <Steps img1={img1} img2={img2} img3={img3} />
        </div>

        <a
          href="https://portal.qqa.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Sign Up" className="btn-sign-up" />
        </a>

        <div className="secondary-section mt-6">
          <h2 className="title-secondary">Maximize Attention Time Before You Post</h2>

          <p className="subtitle-secondary">🎥 Stop Guessing. Start Testing.</p>

          <ul className="features-list">
            <li>👀 What your audience looks at — second by second</li>
            <li>😊 How they emotionally react — second by second</li>
            <li>🔥 Which moments drive interest, engagement, and retention</li>
            <li>✅ Instant audience testing reports</li>
            <li>✅ Make smarter edits that boost watch time and engagement</li>
            <li>✅ Launch content with confidence</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
