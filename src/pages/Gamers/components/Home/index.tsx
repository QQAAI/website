import imagen_home_gamer from '../../../../assets/img/imagen_home_gamer.webp';
import imagen_home_detail1_gamer from '../../../../assets/img/imagen_home_detail1_gamer.webp';
import imagen_home_detail2_gamer from '../../../../assets/img/imagen_home_detail2_gamer.webp';
import imagen_home_detail3_gamer from '../../../../assets/img/imagen_home_detail3_gamer.webp';

import './Home.scss';

const Home = () => {
  return (
    <section className="home-section flex flex-column">
      <div className="container-xxl text-center pb-4 py-6">
        <h1 className='p-0 m-0'>
          <span className="gold">Democratized AI</span> for Video Game Testing Player <br />
          Experience and Game Viewing Experience
        </h1>

        <h6 className='p-0 m-0'>
          Know Audience Behavior using Game Viewer Biometrics Tracking and Decrease Viewer Dropoff Rate.
        </h6>
        <h6 className='p-0 m-0'>
          For Streamers and Game Studios | Same Day Results | Cognitive AI | Neuroscience AI
        </h6>
        <h3 className="mt-3 text-white p-0 m-0">
          <span className="font-bold" style={{ color: 'rgb(255, 138, 55)' }}>As Low As $7.99 per tester</span> +{' '}
          <span className="font-bold" style={{ color: 'blueviolet' }}>AI Voice Assisted Report</span>
        </h3>
      </div>

      <div className="image-row container-fluid">
        <div className="container flex justify-content-center align-items-center gap-4 flex-wrap">
          <img src={imagen_home_gamer} className="portada img-fluid" alt="Main" />
          <img src={imagen_home_detail1_gamer} className="detail1 img-fluid" alt="Detail 1" />
          <img src={imagen_home_detail2_gamer} className="detail2 img-fluid" alt="Detail 2" />
          <img src={imagen_home_detail3_gamer} className="detail3 img-fluid" alt="Detail 3" />
        </div>
      </div>
    </section>
  );
};

export default Home;
