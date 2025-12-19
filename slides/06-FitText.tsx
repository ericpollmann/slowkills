import Slide from './Slide'

export default function FitTextSlide({ isNested }) {
  return (
    <Slide isNested={isNested}>
      <section data-transition="zoom" data-background-gradient="radial-gradient(circle, #1a0a0a 0%, #000 100%)">
        <h3 className="r-fit-text"><span style={{ color: '#ff6b6b' }}>MAKE</span><span style={{ color: '#42affa' }}>IT</span><span style={{ color: '#7ee787' }}>FAST</span></h3>
        <p className="fragment" style={{ marginTop: '1em', fontSize: '0.8em', opacity: 0.8 }}>
          Every millisecond counts
        </p>
        <aside className="notes">
          The imperative is clear: optimize the inner loop.
          Hot reload, instant preview, live updates.
          Remove every barrier between thought and reality.
        </aside>
      </section>
    </Slide>
  )
}
