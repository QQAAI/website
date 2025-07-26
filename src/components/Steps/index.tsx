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
      description: 'All you need to do is upload a 30 second clip or more of your game play.',
    },
    {
      image: gamer_2,
      title: 'Send the invites',
      description: (
        <>
          You can DM invites to your <span className="highlight">Followers</span> or use our{' '}
          <span className="highlight">Internal Testers</span> and they can start viewing{' '}
          <span className="highlight font-bold">instantly</span> for instant results.
        </>
      ),
    },
    {
      image: gamer_3,
      title: 'Results',
      description: (
        <>
          As each invited viewer completes a test viewing, you receive notification for{' '}
          <span className="highlight font-bold">instant</span> results in your Report Dashboard.
        </>
      ),
    },
  ];

  const stepsHome: StepGamer[] = [
    {
      image: gamer_1,
      title: 'Upload Video',
      description: 'All you need to do is upload a video clip.',
    },
    {
      image: gamer_2,
      title: 'Request Attention Test',
      description: 'Participants Watch Video Clip Instantly.',
    },
    {
      image: gamer_3,
      title: 'Results',
      description: 'As each viewer completes viewing clip, your results are instantly in your MY STUDIO page.'
    },
  ];

  const steps = isGamer ? stepsGamers : stepsHome;

  return (
    <div id="general-section">
      <div className="text-center">
        <h1>
          How to <span className="gold">Live Audience Test Videos?</span>
        </h1>
      </div>

      <div className="container-fluid mt-8">
        <div className="flex flex-wrap justify-content-center gap-4">
          {steps.map((step: StepGamer, index: number) => (
            <div
              key={index}
              className="flex flex-column align-items-center text-center px-4 py-5 step-card"
            >
              <img src={step.image} alt={step.title} className="step-image" />

              <h3 className="text-pink m-0 mt-3" style={{ height: '75px' }}>{step.title}</h3>

              <h5 className="mt-3" style={{ height: '115px' }}>{step.description}</h5>

              {stepImages[index] && (
                <img src={stepImages[index]} alt={step.title} width='100%' />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
