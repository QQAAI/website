import about_us_img from '../../assets/img/about-us-img.webp'
import symbiotic_img from '../../assets/img/symbiotic-img.webp'

import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="flex gap-8 justify-content-center mb-5">
        <img src={about_us_img} className="img-fluid" alt="About Us" style={{ maxWidth: '500px' }} />

        <div style={{ maxWidth: '500px' }}>
          <div className="text-center container-buttons">
            Vision & Mission
          </div>

          <h1 className="mt-3">Our Vision</h1>

          <p>
            “Continuously accelerate market disruptions by producing cutting edge connections between humans and digital systems. We preserve human cognition improving evolution of the human aging lifecycle.”
          </p>

          <h1>Our Mission</h1>

          <p>
            “Connect humans to technology powered by precision robotics using artificial intelligence industry standard communications and cybersecurity protocols for personalized secure experience with technology anywhere in the world”
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <h1>
          We Synthesize Human <br />
          <span className="gold">Symbiotics & Technology</span>
        </h1>
      </div>

      <div className="flex gap-8 justify-content-center mt-4">
        <div style={{ maxWidth: '500px' }}>
          <p>
            Human symbiotic refers to a harmonious and mutually beneficial relationship between humans and other organisms or technologies. It signifies a state of interconnectedness and collaboration, where both parties thrive and support one another.
          </p>
          <p>
            In the realm of technology, human symbiotic denotes the integration of advanced technologies with human abilities to amplify and augment various aspects of human existence. This encompasses domains such as physical performance, cognitive capabilities, healthcare, communication, and more.
          </p>
          <p>
            For instance, we provide state-of-the-art signal acquisition systems globally for humans wearable devices that monitor and analyze an individual's physiological states and neurological states to empower the optimal user experience.
          </p>
        </div>

        <img src={symbiotic_img} className="img-fluid" alt="Symbiotic" style={{ maxWidth: '500px' }} />
      </div>
    </section>
  );
};

export default AboutUs;
