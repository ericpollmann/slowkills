import Slide from './Slide'

export default function ClosingSlide({ isNested }) {
  return (
    <Slide isNested={isNested}>
      <section data-background-gradient="radial-gradient(circle at center, #0a0a0a 0%, #000 100%)">
        <h1 style={{ fontSize: '2.5em', marginBottom: '0.5em', color: '#7ee787' }}>
          Speed Enables Creativity
        </h1>
        <p style={{ fontSize: '1.2em', opacity: 0.8, marginTop: '1.5em' }}>
          The inner loop is where ideas live or die
        </p>
        <div className="fragment" style={{ marginTop: '2em' }}>
          <p style={{ fontSize: '0.9em', opacity: 0.7 }}>
            Optimize for:
          </p>
          <p style={{ fontSize: '1em', margin: '0.5em 0' }}>⚡ Instant feedback</p>
          <p style={{ fontSize: '1em', margin: '0.5em 0' }}>🔄 Frictionless iteration</p>
          <p style={{ fontSize: '1em', margin: '0.5em 0' }}>🎨 Creative exploration</p>
        </div>
        <p className="fragment" style={{ marginTop: '2em', fontSize: '1.3em', color: '#42affa' }}>
          Don't let slow tools kill your creativity
        </p>
        <aside className="notes">
          The tools we use shape how we think and create.
          Choose tools that respect your creative process.
          Demand speed. Your ideas deserve it.
        </aside>
      </section>
    </Slide>
  )
}
