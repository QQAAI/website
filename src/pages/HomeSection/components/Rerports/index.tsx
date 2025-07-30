import img1 from '../../../../assets/img/report-img-1.webp';
import img2 from '../../../../assets/img/report-img-2.webp';
import "./Reports.scss";

export const Reports = () => {
  return (
    <div className="container-fluid reports mt-8">
      <div className="container-xxl">
        <div className="row text-center mt-5">
          <h5 className="text-uppercase">REPORTS</h5>

          <h1 className="m-0 P-0">Take your decisions</h1>

          <h6 className="mb-3 m-0 p-0">
            Data-driven results to take your decisions to another level.
          </h6>

          <div className="mb-4 flex justify-content-center gap-4 container-buttons">
            <div>
              Promo or Campaign
            </div>

            <div>
              Competitor Comparison
            </div>

            <div>
              Quality Analysis
            </div>
          </div>
          <p className="mx-auto" style={{ maxWidth: "600px", marginBottom: "40px" }}>
            Harness the synergy of artificial intelligence and neural behavior understanding
            for proactive decision-making. Our Neuro AI predictions report ensures you stay
            one step ahead, shaping strategic evolution and defining objectives.
          </p>
        </div>
      </div>

      <div className="container-img flex justify-content-center">
        <div className="flex flex-wrap justify-content-center gap-5">
          <img className="img-fluid" src={img1} alt="Report Visual 1" />
          <img className="img-fluid" src={img2} alt="Report Visual 2" />
        </div>
      </div>
    </div>
  );
};
