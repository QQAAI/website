import React from 'react';
import './TimelineSection.scss';
import { timelineItems } from './constants';

const TimelineSection: React.FC = () => {

  return (
    <div id="surface-ground">
      {/* Header Section */}
      <div className="timeline-header">
        <div className="text-center text-white">
          <h1>
            <span style={{ color: '#FF019B' }}>Media Production process</span>{' '}
            flow with Quick Insights
          </h1>
          <h6 className='p-0 m-0'>
            It will allow you to increase your productivity with AI automation
            and gain 25% of efficiency.
          </h6>
        </div>
      </div>

      {/* Buttons */}
      <div className="timeline-buttons">
        <div className="custom-button-with p-button p-button-sm p-button-info text-center">
          <div>With QQA • AI</div>
          <div className="text-xs">3,720 hours</div>
        </div>

        <div className="custom-button-without p-button p-button-sm p-button-info text-center">
          <div>Without QQA • AI</div>
          <div className="text-xs">4,960 hours</div>
        </div>
      </div>

      {/* Timeline */}
      <section className='timeline-section pb-3'>
        <div className="timeline-container">
          {timelineItems.map(item => (
            <div className="timeline-step">
              <div className="step-header text-center">{item.title}</div>

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
                  <h4 className="text-sm font-semibold">{item.highlightTitle}</h4>

                  <p className="text-xs">{item.highlightDesc}</p>
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
