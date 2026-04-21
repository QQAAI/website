import about_us_img from '../../assets/img/about-us-img.webp';
import symbiotic_img from '../../assets/img/symbiotic-img.webp';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-inner">

        {/* Vision & Mission */}
        <div className="about-hero">
          <img src={about_us_img} className="about-img" alt="About QQA AI Studio" />

          <div className="about-text">
            <span className="about-eyebrow">Vision &amp; Mission</span>

            <div className="vision-block">
              <h3>Our Vision</h3>
              <p>
                "Continuously accelerate market disruptions by producing cutting-edge connections between humans and digital systems. We preserve human cognition improving evolution of the human aging lifecycle."
              </p>
            </div>

            <div className="mission-block">
              <h3>Our Mission</h3>
              <p>
                "Connect humans to technology powered by precision robotics using artificial intelligence industry standard communications and cybersecurity protocols for a personalized, secure experience with technology anywhere in the world."
              </p>
            </div>
          </div>
        </div>

        {/* Symbiotic */}
        <div className="symbiotic-section">
          <h2 className="symbiotic-heading">
            We Synthesize Human{' '}
            <span className="gold">Symbiotic &amp; Technology</span>
          </h2>

          <div className="symbiotic-grid">
            <div className="symbiotic-content">
              <p className="symbiotic-para">
                Human symbiotic refers to a harmonious and mutually beneficial relationship between humans and other organisms or technologies — a state of interconnectedness where both parties thrive and support one another.
              </p>
              <p className="symbiotic-para">
                In the realm of technology, human symbiotic denotes the integration of advanced technologies with human abilities to amplify and augment physical performance, cognitive capabilities, healthcare, communication, and more.
              </p>
              <p className="symbiotic-para">
                We provide state-of-the-art signal acquisition systems globally — wearable devices that monitor and analyze an individual's physiological and neurological states to empower the optimal user experience.
              </p>
            </div>

            <img src={symbiotic_img} className="symbiotic-img" alt="Human Symbiotic Technology" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
