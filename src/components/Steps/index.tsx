import gamer_1 from '../../assets/img/gamer_1.webp';
import gamer_2 from '../../assets/img/gamer_2.webp';
import gamer_3 from '../../assets/img/gamer_3.webp';
import type { StepGamer, StepsProps } from './interface';

import './Steps.scss';

const Steps = ({ img1, img2, img3, isGamer }: StepsProps) => {
  const stepImages = [img1, img2, img3];

  const stepsGamers: StepGamer[] = [
    {
      image: gamer_1,
      title: 'Upload Video',
      description: 'All you need to do is upload a 30-second clip or more of your gameplay.',
    },
    {
      image: gamer_2,
      title: 'Send the Invites',
      description: (
        <>
          DM invites to your <span className="highlight">Followers</span> or use our{' '}
          <span className="highlight">Internal Testers</span> — they start viewing{' '}
          <span className="highlight font-bold">instantly</span>.
        </>
      ),
    },
    {
      image: gamer_3,
      title: 'Get Results',
      description: (
        <>
          As each viewer completes a test, you get{' '}
          <span className="highlight font-bold">instant</span> results in your Report Dashboard.
        </>
      ),
    },
  ];

  const stepsHome: StepGamer[] = [
    {
      image: gamer_1,
      title: 'Upload Video',
      description: 'Upload any video clip you want to test with a live audience.',
    },
    {
      image: gamer_2,
      title: 'Request Attention Test',
      description: 'Participants watch your clip instantly. No scheduling, no waiting.',
    },
    {
      image: gamer_3,
      title: 'Get Results',
      description: 'Results land in your Studio page as each viewer finishes watching.',
    },
  ];

  const steps = isGamer ? stepsGamers : stepsHome;

  return (
    <div id="general-section">
      <div className="steps-inner">
        <div className="text-center">
          <span className="steps-eyebrow">How it works</span>
          <h2 className="steps-heading">
            Live Audience Test in{' '}
            <span style={{ background: 'linear-gradient(90deg, #FF019B, #8f1289)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              3 simple steps
            </span>
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step: StepGamer, index: number) => (
            <div key={index} className="step-card">
              <span className="step-number">{index + 1}</span>

              <img src={step.image} alt={step.title} className="step-image" />

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>

              {stepImages[index] && (
                <img src={stepImages[index]} alt={step.title} className="step-screen" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
