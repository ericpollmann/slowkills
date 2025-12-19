import Slide from './Slide'

export default function FragmentsSlide({ isNested }) {
  return (
    <Slide isNested={isNested}>
      <section data-background="#0a0a1a">
        <h2>What Dies When It's Slow?</h2>
        <p style={{ fontSize: '0.8em', opacity: 0.6, marginBottom: '1.5em' }}>Click to reveal...</p>
        <p className="fragment fade-up" style={{ fontSize: '1.1em', margin: '0.5em 0' }}>
          ❌ Experimentation
        </p>
        <p className="fragment fade-up" style={{ fontSize: '1.1em', margin: '0.5em 0' }}>
          ❌ Playfulness
        </p>
        <p className="fragment fade-up" style={{ fontSize: '1.1em', margin: '0.5em 0' }}>
          ❌ Exploration
        </p>
        <p className="fragment fade-up" style={{ fontSize: '1.1em', margin: '0.5em 0' }}>
          ❌ Flow state
        </p>
        <p className="fragment fade-up" style={{ fontSize: '1.1em', margin: '0.5em 0' }}>
          ❌ Joy
        </p>
        <p className="fragment" style={{ marginTop: '1.5em', fontSize: '1.2em', color: '#ff6b6b' }}>
          In short: <strong>Creativity</strong>
        </p>
        <aside className="notes">
          Slow feedback loops kill the creative spirit.
          When every iteration takes minutes, you stop exploring.
          You take the safe path. You avoid risk. Innovation dies.
        </aside>
      </section>
    </Slide>
  )
}
