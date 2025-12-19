import Slide from './Slide'

export default function BackgroundsSlide({ isNested }) {
  return (
    <Slide isNested={isNested} isVertical>
      <section data-background="#1a1a0a">
        <h2>Why Speed Matters</h2>
        <p>The psychology of the inner loop</p>
        <p style={{ opacity: 0.7, marginTop: '1em' }}>Explore ↓</p>
        <aside className="notes">
          Understanding the psychological impact of feedback speed
          helps us see why this isn't just about productivity.
        </aside>
      </section>
      <section data-background="#2d1a1a">
        <h2>Cognitive Load</h2>
        <p style={{ fontSize: '1.1em', marginTop: '1em' }}>
          Every second of delay requires you to hold context in working memory
        </p>
        <p className="fragment" style={{ opacity: 0.7, marginTop: '1em' }}>
          Working memory capacity: ~7 items
        </p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          Decay time: ~18 seconds without rehearsal
        </p>
      </section>
      <section data-background-gradient="linear-gradient(to right, #1a0a0a, #0a0a1a)">
        <h2>Flow State</h2>
        <p style={{ fontSize: '1.1em', marginTop: '1em' }}>
          Flow requires immediate feedback
        </p>
        <p className="fragment" style={{ opacity: 0.7, marginTop: '1em' }}>
          Challenge ⚖️ Skill balance
        </p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          Clear goals + instant feedback = flow
        </p>
        <p className="fragment" style={{ color: '#ff6b6b', marginTop: '1em' }}>
          Delay breaks the spell
        </p>
      </section>
      <section data-background="#0a1a1a">
        <h2>Creative Confidence</h2>
        <p style={{ fontSize: '1.1em', marginTop: '1em' }}>
          Fast loops = low cost of failure
        </p>
        <p className="fragment" style={{ opacity: 0.7, marginTop: '1em' }}>
          "Let me try something crazy..."
        </p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          vs.
        </p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          "This better work, I don't want to wait 2 minutes to find out"
        </p>
      </section>
    </Slide>
  )
}
