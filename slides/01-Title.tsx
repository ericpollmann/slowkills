import Slide from './Slide'

export default function TitleSlide({ isNested }) {
  return (
    <Slide isNested={isNested}>
      <section data-background-gradient="linear-gradient(to bottom, #1a0a0a, #000)">
        <h1 style={{ fontSize: '3em', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ff6b6b' }}>
          Slow Kills
        </h1>
        <h3 style={{ color: '#42affa', fontWeight: 'normal', marginTop: '0.5em', fontSize: '2em' }}>
          Creativity
        </h3>
        <p style={{ marginTop: '2em', fontSize: '0.8em', opacity: 0.8, fontStyle: 'italic' }}>
          Why the inner loop of coding matters
        </p>
        <aside className="notes">
          The inner loop - that tight cycle of code, run, debug - is where creativity lives.
          When it's slow, ideas die before they're born.
          This presentation explores why speed in the development loop is critical for creative flow.
        </aside>
      </section>
    </Slide>
  )
}
