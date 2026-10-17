const GAME_URL = 'https://game3.glov3.me/uploads/game/html5/25436/'

export default function Page() {
  return (
    <main className="game-shell">
      <header className="game-toolbar">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">G</span>
          <div>
            <p className="eyebrow">Now playing</p>
            <h1>Subway Surfers</h1>
          </div>
        </div>
        <a className="open-link" href={GAME_URL} target="_blank" rel="noreferrer">
          Open game ↗
        </a>
      </header>
      <section className="game-stage" aria-label="Subway Surfers game">
        <object data={GAME_URL} type="text/html" title="Subway Surfers">
          <div className="fallback">
            <p>The game could not be loaded in this embedded view.</p>
            <a href={GAME_URL} target="_blank" rel="noreferrer">Open Subway Surfers</a>
          </div>
        </object>
      </section>
    </main>
  )
}
