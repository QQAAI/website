import imagen from '../../../../assets/img/imagen_home_2x.webp';
import imagen2 from '../../../../assets/img/imagen2_home_2x.webp';
import imagen3 from '../../../../assets/img/imagen3_home_2x.webp';
import imagen4 from '../../../../assets/img/imagen4_home_2x.webp';
import video from '../../../../assets/img/Website_HomePage.mp4'
import videoAskAnswer from '../../../../assets/img/Final_Cut_HomePage_Video.mp4'
import img1 from '../../../../assets/img/Step 1_woman.png'
import img2 from '../../../../assets/img/Step 2_woman.png'
import img3 from '../../../../assets/img/Step 3 Image.png'
import './Home.scss';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Steps from '../../../../components/Steps';

const Home = () => {
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
          src={video}
          className="demo-video"
          autoPlay
          loop
          controls
          controlsList="nodownload nofullscreen"
        />

        <h1 className="title m-0 p-0 text-4xl">
          <span className='ask'>Ask</span> & <span className='ask'>Answer AI</span> These Questions Before You Post That Video
        </h1>

        <video
          src={videoAskAnswer}
          className="demo-video"
          autoPlay
          loop
          controls
          controlsList="nodownload nofullscreen"
        />

        <Steps img1={img1} img2={img2} img3={img3} />

        <Link
          to='https://portal.qqa.ai'
        >
          <Button
            label="Sign Up"
            className="btn-sign-up"
          />
        </Link>

        <div className="image-stack mt-5">
          <img src={imagen} alt="Main" className="portada img-fluid" />
          <img src={imagen2} alt="Detail 1" className="detail1 img-fluid" />
          <img src={imagen3} alt="Detail 2" className="detail2 img-fluid" />
          <img src={imagen4} alt="Detail 3" className="detail3 img-fluid" />
        </div>

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
