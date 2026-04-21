import imagen_home_gamer         from '../../../../assets/img/imagen_home_gamer.webp';
import imagen_home_detail1_gamer  from '../../../../assets/img/imagen_home_detail1_gamer.webp';
import imagen_home_detail2_gamer  from '../../../../assets/img/imagen_home_detail2_gamer.webp';
import imagen_home_detail3_gamer  from '../../../../assets/img/imagen_home_detail3_gamer.webp';

import './Home.scss';

const Home = () => {
  return (
    <section className="gamer-home-section">
      <div className="gamer-hero-inner">
        <div className="d-flex justify-content-center">
          <span className="gamer-badge">
            <span className="badge-dot" />
            For Streamers &amp; Game Studios
          </span>
        </div>

        <h1 className="gamer-title">
          <span className="gold">Democratized AI</span> for Video Game<br />
          Testing &amp; Player Experience
        </h1>

        <p className="gamer-subtitle">
          Know audience behavior using Game Viewer Biometrics Tracking.
        </p>
        <p className="gamer-subtitle">
          Decrease viewer drop-off rate with same-day results. Cognitive AI · Neuroscience AI.
        </p>

        <div className="gamer-pricing">
          <span className="price-chip price-chip--orange">As Low As $7.99 per tester</span>
          <span className="price-chip price-chip--violet">AI Voice Assisted Report</span>
        </div>
      </div>

      <div className="image-row container-fluid">
        <div className="container">
          <img src={imagen_home_gamer}        className="portada img-fluid" alt="Gamer dashboard" />
          <img src={imagen_home_detail1_gamer} className="detail1 img-fluid" alt="Detail 1" />
          <img src={imagen_home_detail2_gamer} className="detail2 img-fluid" alt="Detail 2" />
          <img src={imagen_home_detail3_gamer} className="detail3 img-fluid" alt="Detail 3" />
        </div>
      </div>
    </section>
  );
};

export default Home;
