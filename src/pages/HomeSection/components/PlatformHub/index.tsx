import './PlatformHub.scss';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

const PORTAL_URL = 'https://www.portal-qqa.ai/#/sign-in';
// const PORTAL_URL = 'http://localhost:5173/#/sign-in';

const tiles = [
  {
    color: 'blue',
    windowName: 'video-search',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>,
    title: 'Video Search',
    desc: 'Semantic search across your entire video library. Find scenes, speakers, and moments in seconds.',
    meta: 'Active · 2,418 videos indexed',
    stat: { value: '142', label: 'searches' },
  },
  {
    color: 'emerald',
    windowName: '',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Online Audience Test Screen',
    desc: 'Test video variants against real audiences. Measure retention, engagement, and conversion.',
    meta: 'Active · 3 tests running',
    stat: { value: '8.2k', label: 'viewers' },
  },
  {
    color: 'violet',
    windowName: 'otis',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Developer API',
    desc: 'Programmatic access to every feature. Generate API keys, manage tokens, and integrate with your stack.',
    meta: 'Active · 4 API keys',
    stat: { value: '34.1k', label: 'calls' },
  },
];

const openTile = (windowName: string) => {
  // window.open(url, name) — el segundo arg es window.name en la nueva pestaña.
  // La URL queda limpia; el destino lee window.name para saber el producto.
  window.open(PORTAL_URL, windowName || '_blank');
};

const PlatformHub = () => (
  <section className="platform-hub">
    <div className="hub-shell">
      <header className="hub-welcome">
        <div>
          <h2 className="hub-welcome__title">3 tools inside the platform</h2>
          <p className="hub-welcome__sub">Everything you need to know your audience before you publish.</p>
        </div>
        <div className="hub-plan-pill">
          <span className="pill-dot" />
          Live &amp; Ready to Use
        </div>
      </header>

      <div className="hub-tiles">
        {tiles.map((tile) => (
          <div key={tile.title} className={`hub-tile hub-tile--${tile.color}`} onClick={() => openTile(tile.windowName)}>
            <div className="hub-tile__icon">{tile.icon}</div>
            <div className="hub-tile__body">
              <div className="hub-tile__head">
                <h3 className="hub-tile__title">{tile.title}</h3>
                <span className="hub-tile__arrow"><ArrowIcon /></span>
              </div>
              <p className="hub-tile__desc">{tile.desc}</p>
              <div className="hub-tile__foot">
                <span className="hub-tile__meta">
                  <span className="hub-tile__dot" />{tile.meta}
                </span>
                <span className="hub-tile__stat">
                  <strong>{tile.stat.value}</strong> {tile.stat.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlatformHub;
