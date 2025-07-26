import { Button } from 'primereact/button';
import beginners from '../../assets/img/c-beginners.png';
import experienced from '../../assets/img/c-experienced.png';
import expert from '../../assets/img/c-expert.png';
import './ContentCreatorsSection.scss';

const contentData = [
  {
    title: 'Beginner Content Creator',
    image: beginners,
    description:
      'Kickstart your revenue gain using receive expert guidance from artificial intelligence to help make your content gain more likes, viewers, viewing time, and subscribers – AT LOW COST',
    link: 'form.html',
  },
  {
    title: 'Experienced Content Creators',
    image: experienced,
    description:
      'Polish your content to perfection with precision analysis and recommendation tools to increase your subscribers, viewership, and revenue',
    link: 'form.html',
  },
  {
    title: 'Expert Content Creators',
    image: expert,
    description:
      'At a Minimal Cost - Increase your marketing & viewership using analytics and tools that major Ad Agency & Film Production pay millions of dollars to use for their pre and post film & media productions',
    link: 'form.html',
  },
];

const leftList = [
  'Pinpoint drop-off points before you post.',
  'Live Audience Testing — our 1 million viewers are online ready to watch your video before you post.',
  'Upload video & track reactions to your hook,.',
  'Timeline Plugin for DaVinci — edit by attention.',
  'AI GPT Editing —emotion design, cuts, audio, script, colors,.',
  'Audience Behavior Dashboard — see reactions, attention spikes, drop-offs.',
  'Save up to 30 hours per hour of footage.',
];

const rightList = [
  'Test with real viewers and track hook reactions.',
  'AI GPT Assistant — get edit, hook, and pacing suggestions.',
  'Audience Reaction Insights to Actor, Script, and Music designs.',
  'See second by second attention and emotions.',
  'Same-day reports — smarter edits, more views, faster.',
  'Adobe Premiere Pro Compatible & DaVinci Resolve Compatible Analytics Integration.',
];

const ContentCreatorsSection = () => {
  return (
    <section className="content-creators-section">
      <div className="text-center mb-8">
        <h1 className='m-0 p-0'>
          <span className="gold">Increase revenue</span> per video <br /> published to platforms
        </h1>
      </div>

      <div className="card-container">
        {contentData.map((item) => (
          <div className="creator-card flex flex-column justify-content-between" key={item.title}>
            <div>
              <img src={item.image} alt={item.title} className="creator-img" />

              <h3 className="text-pink-500">{item.title}</h3>

              <p>{item.description}</p>
            </div>

            <a href={item.link}>
              <Button label="Start Now" className="p-button-outlined p-button-secondary" />
            </a>
          </div>
        ))}
      </div>

      <div className="service-section">
        <div className="text-center">
          <h6 className='m-0 p-0'>CONTENT CREATORS SERVICE</h6>
          <p className="text-sm m-0 p-0">you will have the possibility to:</p>
        </div>

        <div className="flex justify-content-center flex-wrap gap-5 mt-5">
          <ul>
            {leftList.map((item) => (
              <li key={item} className='flex gap-2'>
                <i className="pi pi-check" style={{ color: '#FF019B' }} />
                {item}
              </li>
            ))}
          </ul>

          <ul>
            {rightList.map((item) => (
              <li key={item} className='flex gap-3'>
                <i className="pi pi-check" style={{ color: '#FF019B' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorsSection;
