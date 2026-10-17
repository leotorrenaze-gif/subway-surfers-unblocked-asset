const GAME_URL = 'https://game3.glov3.me/uploads/game/html5/25436/'

export default function Page() {
  return (
    <main className="game-stage">
      <object data={GAME_URL} type="text/html" title="Embedded game" />
    </main>
  )
}
