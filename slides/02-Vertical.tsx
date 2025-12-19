import Slide from './Slide'

export default function VerticalSlides({ isNested }) {
  return (
    <Slide isNested={isNested} isVertical>
      <section data-transition="convex">
        <h2>The Inner Loop</h2>
        <p>The cycle every developer lives in:</p>
        <p style={{ opacity: 0.7, marginTop: '1em' }}>Explore the loop ↓</p>
        <aside className="notes">
          The inner loop is the fundamental cycle of software development.
          Understanding each phase helps us see where slowness creeps in.
        </aside>
      </section>
      <section data-background="#2d2d2d">
        <h2>1. Think</h2>
        <p style={{ fontSize: '1.2em', marginTop: '1em' }}>💭 Form an idea</p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          "What if I tried this approach?"
        </p>
      </section>
      <section data-background="#1a1a2e">
        <h2>2. Code</h2>
        <p style={{ fontSize: '1.2em', marginTop: '1em' }}>⌨️ Express the idea</p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          Type, refactor, shape your thoughts
        </p>
      </section>
      <section data-background="#2d1a1a">
        <h2>3. Run</h2>
        <p style={{ fontSize: '1.2em', marginTop: '1em' }}>▶️ See it live</p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          Build, compile, reload, refresh...
        </p>
      </section>
      <section data-background-gradient="radial-gradient(circle, #16213e 0%, #0f0f23 100%)">
        <h2>4. Learn</h2>
        <p style={{ fontSize: '1.2em', marginTop: '1em' }}>🔍 Observe the result</p>
        <p className="fragment" style={{ opacity: 0.7 }}>
          "Interesting... what if I change..."
        </p>
        <p className="fragment" style={{ marginTop: '1.5em', color: '#42affa' }}>
          → Back to step 1
        </p>
      </section>
    </Slide>
  )
}
