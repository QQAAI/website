import img1_carousel from '../../../../assets/img/img1_carousel_gamer.webp';
import img2_carousel from '../../../../assets/img/img2_carousel_gamer.webp';
import img3_carousel from '../../../../assets/img/img3_carousel_gamer.webp';
import img4_carousel from '../../../../assets/img/img4_carousel_gamer.webp';
import img5_carousel from '../../../../assets/img/img5_carousel_gamer.webp';
import img6_carousel from '../../../../assets/img/img6_carousel_gamer.webp';
import './ServicesSection.scss';

const images = [
  img1_carousel, img2_carousel, img3_carousel,
  img4_carousel, img5_carousel, img6_carousel,
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="section-subtitle">Our Services</span>
        <h2 className="section-title">How we help you give gamers what they want</h2>
        <p className="section-description">
          AI &amp; Neuroscience capabilities built for streamers and game studios.
        </p>
      </div>

      <div className="slider2">
        <div className="slide-track2">
          {[...images, ...images].map((src, i) => (
            <div className="slide2" key={i}>
              <img src={src} alt={`Gamer service ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
