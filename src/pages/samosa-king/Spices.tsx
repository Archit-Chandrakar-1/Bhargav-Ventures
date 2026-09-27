const SPICES = [
  { left: '6%', delay: 0, drift: '40px', size: 7, dur: 11 },
  { left: '18%', delay: 2.5, drift: '-30px', size: 5, dur: 9 },
  { left: '31%', delay: 5, drift: '55px', size: 9, dur: 13 },
  { left: '47%', delay: 1.2, drift: '-45px', size: 6, dur: 10 },
  { left: '61%', delay: 3.8, drift: '35px', size: 8, dur: 12 },
  { left: '74%', delay: 0.6, drift: '-25px', size: 5, dur: 9.5 },
  { left: '88%', delay: 4.4, drift: '50px', size: 7, dur: 12.5 },
]

/** Ambient floating spice specks. Decorative only. */
export function Spices() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {SPICES.map((s, i) => (
        <span
          key={i}
          className="animate-spice absolute bottom-0 rounded-full bg-primary/70"
          style={{
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            ['--drift' as string]: s.drift,
          }}
        />
      ))}
    </div>
  )
}
