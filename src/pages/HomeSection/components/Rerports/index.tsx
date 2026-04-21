import img1 from '../../../../assets/img/report-img-1.webp';
import img2 from '../../../../assets/img/report-img-2.webp';
import "./Reports.scss";

const reportTypes = ['Promo / Campaign', 'Competitor Comparison', 'Quality Analysis'];

export const Reports = () => {
  return (
    <div className="reports">
      <div className="reports-inner text-center">
        <span className="reports-eyebrow">Reports</span>

        <h1>Take smarter decisions</h1>

        <p className="reports-sub">
          Data-driven results that take your content strategy to another level.
        </p>

        <div className="container-buttons">
          {reportTypes.map((label) => (
            <span key={label} className="report-pill">{label}</span>
          ))}
        </div>

        <p className="reports-description">
          Harness the synergy of artificial intelligence and neural behavior understanding
          for proactive decision-making. Our Neuro AI predictions ensure you stay one step
          ahead — shaping strategy and defining objectives with confidence.
        </p>

        <div className="reports-images">
          <img className="img-fluid" src={img1} alt="Report Visual 1" />
          <img className="img-fluid" src={img2} alt="Report Visual 2" />
        </div>
      </div>
    </div>
  );
};
