import Steps from "../../components/Steps";
import FeatureSection from "./components/FeatureSection";
import Home from "./components/Home";
import ServicesSection from "./components/ServicesSection";

import './Gamers.scss';

const Gamers = () => {
  return (
    <div>
      <Home />

      <ServicesSection />

      <div className="value-gamers">
        <div className="row text-center">
          <h5>VALUE TO YOUR BUSINESS</h5>

          <ul>
            {['Strengthen audience connection', 'Boost monetization opportunities', 'Increase Viewership Revenue',
              'Identify popular game', 'Drive audience-driven content strategy', 'Increase follower retention',
            ].map((label: string) => (
              <li>
                <i className="pi pi-check" style={{ color: '#FF019B' }} />
                &nbsp;&nbsp;
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Steps isGamer />

      <div className="text-center">
        <h4 className="m-0 p-0" style={{ color: 'rgb(255, 138, 55)', fontSize: '1.5rem', fontWeight: '400' }}>
          Gameplay is used solely to showcase your game viewer testing capabilities and not for profit.
        </h4>
      </div>

      <FeatureSection />
    </div>
  )
}

export default Gamers;