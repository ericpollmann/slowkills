import Slide from './Slide'

const slowExample = `// Traditional workflow
1. Edit code
2. Save file
3. Run build command      ⏱️ 30s
4. Wait for bundler       ⏱️ 45s
5. Refresh browser        ⏱️ 5s
6. Navigate to test page  ⏱️ 10s
7. Finally see result     ⏱️ 90 seconds total

// Your idea is already cold`

const fastExample = `// Modern workflow
1. Edit code
2. See instant update     ⏱️ <1s

// Idea → Reality
// The loop is invisible`

export default function CodeSlide({ isNested }) {
  return (
    <Slide isNested={isNested} isVertical>
      <section data-transition="concave" data-background="#1a0a0a">
        <h2 style={{ color: '#ff6b6b' }}>The Cost of Waiting</h2>
        <pre style={{
          textAlign: 'left',
          background: '#161b22',
          padding: '1em',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          <code style={{ color: '#c9d1d9', fontSize: '0.55em', lineHeight: '1.5' }}>{slowExample}</code>
        </pre>
        <p className="fragment" style={{ marginTop: '1em', fontSize: '0.8em', color: '#ff6b6b' }}>
          90 seconds per iteration = 40 iterations per hour
        </p>
        <aside className="notes">
          Every second of delay compounds. When the loop is slow, you lose momentum.
          Your working memory dumps. The creative thread breaks.
        </aside>
      </section>
      <section data-background="#0a1a0a">
        <h2 style={{ color: '#7ee787' }}>The Power of Fast</h2>
        <pre style={{
          textAlign: 'left',
          background: '#161b22',
          padding: '1em',
          borderRadius: '8px'
        }}>
          <code style={{ color: '#c9d1d9', fontSize: '0.6em', lineHeight: '1.5' }}>{fastExample}</code>
        </pre>
        <p className="fragment" style={{ marginTop: '1em', color: '#7ee787' }}>
          When the loop is fast, you stay in flow
        </p>
        <p className="fragment" style={{ fontSize: '0.8em', opacity: 0.7 }}>
          Ideas compound. Exploration becomes natural.
        </p>
        <aside className="notes">
          Fast feedback loops enable creative exploration.
          You can try wild ideas because the cost of failure is near zero.
        </aside>
      </section>
    </Slide>
  )
}
