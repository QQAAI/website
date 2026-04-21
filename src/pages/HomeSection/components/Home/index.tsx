import { useEffect, useRef } from 'react';
import Steps from '../../../../components/Steps';
import img1 from '../../../../assets/img/Step 1_woman.png';
import img2 from '../../../../assets/img/Step 2_woman.png';
import img3 from '../../../../assets/img/Step 3 Image.png';
import videoAskAnswer from '../../../../assets/img/Final_Cut_HomePage_Video.mp4';
import './Home.scss';

const stats = [
  { value: '1M+',  label: 'viewers ready to test' },
  { value: '50%',  label: 'avg drop-off detected' },
  { value: '3hrs', label: 'to get your report' },
];

const features = [
  { icon: '👀', text: 'What your audience looks at — second by second' },
  { icon: '😊', text: 'How they emotionally react — second by second' },
  { icon: '🔥', text: 'Which moments drive interest & retention' },
  { icon: '✅', text: 'Instant audience testing reports' },
  { icon: '✅', text: 'Smarter edits that boost watch time' },
  { icon: '✅', text: 'Launch content with confidence' },
];

const Home = () => {
  const firstVideoRef  = useRef<HTMLVideoElement>(null);
  const secondVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const v1 = firstVideoRef.current;
      const v2 = secondVideoRef.current;
      if (!v1 || !v2) return;

      const y = window.scrollY;
      const w = window.innerWidth;
      const t1 = w <= 768 ? 1500 : w <= 1024 ? 1700 : 1400;
      const t2 = w <= 768 ? 1100 : 900;

      if (y >= t1)       { v1.pause(); v2.pause(); }
      else if (y >= t2)  { v1.pause(); v2.play().catch(() => {}); }
      else               { v1.play().catch(() => {}); v2.pause(); }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const v = firstVideoRef.current;
    if (!v) return;
    v.muted = true;
    v.controls = false;
    v.play().catch(() => {});
    const t = setTimeout(() => { v.muted = false; v.controls = true; }, 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="home-section text-center">
      <div className="container-xxl">

        {/* Badge */}
        <div className="d-flex justify-content-center">
          <span className="hero-badge">
            <span className="badge-dot" />
            AI-Powered Audience Intelligence
          </span>
        </div>

        {/* ONE headline */}
        <h1 className="title">
          Stop losing viewers<br />
          in the <span className="ask">first 10 seconds.</span>
        </h1>

        {/* ONE subtext */}
        <p className="hero-subtext">
          QQA tests your content with real viewers <em>before</em> you post.<br />
          Know exactly what hooks them — and what makes them leave.
        </p>

        {/* CTAs */}
        <div className="hero-ctas">
          <a
            href="https://portal-qqa.ai/#/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
          >
            Start Testing Free →
          </a>
          <a
            href="https://portal-qqa.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            Log In
          </a>
        </div>

        {/* Social proof bar */}
        <div className="social-proof">
          {stats.map((s) => (
            <div key={s.label} className="proof-item">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Demo video */}
        <video
          loop autoPlay playsInline
          className="demo-video"
          ref={firstVideoRef}
          controlsList="nodownload nofullscreen"
          src="https://rawdatastaging.blob.core.windows.net/video/Beta-Web%20Home%20Page%20Video-V2-8-17-2025.mp4"
        />

        {/* Ask AI section */}
        <h2 className="ask-answer-heading">
          <span className="ask">Ask AI</span> &amp; <span className="ask">Answer</span>{' '}
          these questions before you post
        </h2>

        <video
          loop controls playsInline
          className="demo-video"
          ref={secondVideoRef}
          src={videoAskAnswer}
          controlsList="nodownload nofullscreen"
        />

        <Steps img1={img1} img2={img2} img3={img3} />

        {/* Features */}
        <div className="secondary-section">
          <h2 className="title-secondary">Maximize Attention Time Before You Post</h2>
          <p className="subtitle-secondary">🎥 Stop Guessing. Start Testing.</p>
          <ul className="features-list">
            {features.map((f) => (
              <li key={f.text}>{f.icon} {f.text}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Home;
