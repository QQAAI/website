import React from 'react';
import './TimelineSection.scss';
import { timelineItems } from './constants';

const TimelineSection: React.FC = () => {
  return (
    <div id="surface-ground">
      <div className="timeline-header">
        <span className="timeline-eyebrow">Production Workflow</span>
        <h1>
          <span className="highlight">Media Production</span> process flow with Quick Insights
        </h1>
        <h6>
          Increase productivity with AI automation and gain 25% efficiency.
        </h6>
      </div>

      <div className="timeline-buttons">
        <div className="custom-button-with">
          <div>With QQA · AI</div>
          <div className="text-xs">3,720 hours</div>
        </div>

        <div className="custom-button-without">
          <div>Without QQA · AI</div>
          <div className="text-xs">4,960 hours</div>
        </div>
      </div>

      <section className="timeline-section pb-3">
        <div className="timeline-container">
          {timelineItems.map((item) => (
            <div key={item.title} className="timeline-step">
              <div className="step-header">{item.title}</div>

              <div className="step-body">
                <section>
                  <div className="step-section-main">
                    <strong>Team</strong>
                    <p>{item.team}</p>
                  </div>

                  <div className="step-section">
                    <strong>Time Calculation</strong>
                    <p>{item.timeDescription}</p>
                    <p className="text-gray-400 line-through">{item.total}</p>
                    <p className="text-pink-500 font-bold">{item.optimized}</p>
                  </div>
                </section>

                <div className="step-highlight">
                  <h4>{item.highlightTitle}</h4>
                  <p>{item.highlightDesc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TimelineSection;
