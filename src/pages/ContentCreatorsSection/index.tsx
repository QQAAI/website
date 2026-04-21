import beginners   from '../../assets/img/c-beginners.png';
import experienced from '../../assets/img/c-experienced.png';
import expert      from '../../assets/img/c-expert.png';
import './ContentCreatorsSection.scss';

const contentData = [
  {
    tier: 'Beginner',
    tierClass: 'creator-tier--beginner',
    title: 'Beginner Content Creator',
    image: beginners,
    description: 'Kickstart your revenue with AI guidance that helps your content gain more likes, viewers, watch time, and subscribers — at low cost.',
  },
  {
    tier: 'Experienced',
    tierClass: 'creator-tier--experienced',
    title: 'Experienced Content Creator',
    image: experienced,
    description: 'Polish your content to perfection with precision analysis and recommendation tools to increase subscribers, viewership, and revenue.',
  },
  {
    tier: 'Expert',
    tierClass: 'creator-tier--expert',
    title: 'Expert Content Creator',
    image: expert,
    description: 'At a minimal cost — use analytics that major ad agencies and film productions pay millions for, now accessible for your pre and post production.',
  },
];

const leftList = [
  'Pinpoint drop-off points before you post',
  'Live Audience Testing — 1M+ viewers ready instantly',
  'Upload video & track reactions to your hook',
  'Timeline Plugin for DaVinci — edit by attention',
  'AI GPT Editing — emotion design, cuts, audio, script, colors',
  'Audience Behavior Dashboard — reactions, attention spikes, drop-offs',
  'Save up to 30 hours per hour of footage',
];

const rightList = [
  'Test with real viewers and track hook reactions',
  'AI GPT Assistant — edit, hook, and pacing suggestions',
  'Audience Reaction Insights to actor, script, and music designs',
  'See second-by-second attention and emotions',
  'Same-day reports — smarter edits, more views, faster',
  'Adobe Premiere Pro &amp; DaVinci Resolve compatible',
];

const ContentCreatorsSection = () => {
  return (
    <section className="content-creators-section">
      <div className="creators-inner">
        <div className="text-center">
          <span className="creators-eyebrow">For Content Creators</span>
          <h1 className="creators-heading">
            <span className="gold">Increase revenue</span> per video<br />published to platforms
          </h1>
          <p className="creators-sub" style={{ margin: '0 auto' }}>
            From first upload to viral hit — AI-powered audience intelligence at every level.
          </p>
        </div>

        <div className="card-container">
          {contentData.map((item) => (
            <div className="creator-card" key={item.title}>
              <span className={`creator-tier ${item.tierClass}`}>{item.tier}</span>
              <img src={item.image} alt={item.title} className="creator-img" />
              <h3 className="creator-title">{item.title}</h3>
              <p className="creator-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="service-section">
        <div className="service-inner">
          <span className="service-eyebrow">Content Creator Services</span>
          <h2 className="service-heading">Everything you get access to</h2>
          <p className="service-sub">You will have the possibility to:</p>

          <div className="service-lists">
            <ul>
              {leftList.map((item) => (
                <li key={item}>
                  <i className="pi pi-check check-icon" />
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              {rightList.map((item) => (
                <li key={item}>
                  <i className="pi pi-check check-icon" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCreatorsSection;
