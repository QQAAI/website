import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Steps from '../../../../components/Steps';

import { Button } from 'primereact/button';

import img1 from '../../../../assets/img/Step 1_woman.png';
import img2 from '../../../../assets/img/Step 2_woman.png';
import img3 from '../../../../assets/img/Step 3 Image.png';

import video from '../../../../assets/img/Website_HomePage.mp4';
import videoAskAnswer from '../../../../assets/img/Final_Cut_HomePage_Video.mp4';

import './Home.scss';

const Home = () => {
  const firstVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);
  const secondVideoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const video1 = firstVideoRef.current;
      const video2 = secondVideoRef.current;

      if (!video1 || !video2) return;

      const scrollY = window.scrollY;

      if (scrollY >= 1400) {
        video1.pause();
        video2.pause();
      } else if (scrollY >= 650) {
        video1.pause();
        video2.play().catch(() => { });
      } else {
        video1.play().catch(() => { });
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
          Attention Test Your Content Before You Post
        </h2>

        <p className="my-3 text-4xl">
          Don't lose followers & views <br /> by guessing their likes.
        </p>

        <video
          ref={firstVideoRef}
          src={video}
          className="demo-video"
          autoPlay
          loop
          muted
          controls
          controlsList="nodownload nofullscreen"
        />

        <h1 className="title m-0 p-0 text-4xl">
          <span className='ask'>Ask AI</span> & <span className='ask'>Answer</span> These Questions Before You Post That Video
        </h1>

        <div ref={secondVideoContainerRef}>
          <video
            ref={secondVideoRef}
            src={videoAskAnswer}
            className="demo-video"
            loop
            muted
            controls
            controlsList="nodownload nofullscreen"
          />
        </div>

        <div>
          <Steps img1={img1} img2={img2} img3={img3} />
        </div>

        <Link to="https://portal.qqa.ai">
          <Button label="Sign Up" className="btn-sign-up" />
        </Link>

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
