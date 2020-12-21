import './index.css';

const Aside = ({ children, loading }) => (
  <aside className="Aside">
    <header>
      <div className="window-control-buttons">
        <div className="window-control-buttons_close" />
        <div className="window-control-buttons_roll-up" />
        <div className="window-control-buttons_expand" />
      </div>

      <div className="Aside_header-cloud">
        {
          loading ? <div /> : null
        }
      </div>
    </header>

    <main>
      {children}
    </main>
  </aside>
);

export default Aside;