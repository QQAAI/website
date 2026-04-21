import img1_carousel from '../../../../assets/img/img1_carousel.webp';
import img2_carousel from '../../../../assets/img/img2_carousel.webp';
import img3_carousel from '../../../../assets/img/img3_carousel.webp';
import img4_carousel from '../../../../assets/img/img4_carousel.webp';
import img5_carousel from '../../../../assets/img/img5_carousel.webp';
import img6_carousel from '../../../../assets/img/img6_carousel.webp';
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
        <h2 className="section-title">How can Quick Insights help?</h2>
        <p className="section-description">
          AI &amp; Neuroscience services built for creators who want to stop guessing and start knowing.
        </p>
      </div>

      <div className="slider2">
        <div className="slide-track2">
          {[...images, ...images].map((src, i) => (
            <div className="slide2" key={i}>
              <img src={src} alt={`Service showcase ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
