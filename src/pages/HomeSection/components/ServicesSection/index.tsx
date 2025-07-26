import img1_carousel from '../../../../assets/img/img1_carousel.webp'
import img2_carousel from '../../../../assets/img/img2_carousel.webp'
import img3_carousel from '../../../../assets/img/img3_carousel.webp'
import img4_carousel from '../../../../assets/img/img4_carousel.webp'
import img5_carousel from '../../../../assets/img/img5_carousel.webp'
import img6_carousel from '../../../../assets/img/img6_carousel.webp'
import './ServicesSection.scss';

const ServicesSection = () => {
  const images = [
    img1_carousel,
    img2_carousel,
    img3_carousel,
    img4_carousel,
    img5_carousel,
    img6_carousel,
  ];

  return (
    <section className="services-section">
      <div className="container-fluid">
        <div className="container-xxl">
          <div className="row text-center mb-6">
            <h5 className="section-subtitle">OUR SERVICES</h5>
            <h1 className="section-title">How can Quick Insights help?</h1>
            <h6 className="section-description">
              Our AI Services & Neuroscience Services Provide these capabilities
            </h6>
          </div>
        </div>

        <div className="slider2">
          <div className="slide-track2">
            {[...images, ...images].map((src, i) => (
              <div className="slide2" key={i}>
                <img src={src} alt={`carousel-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;