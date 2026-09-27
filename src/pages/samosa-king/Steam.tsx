/** Curling steam wisps rendered above a hot item. Decorative only. */
export function Steam({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none flex gap-5 ${className}`}>
      {[0, 1.4, 2.8].map((d, i) => (
        <span
          key={i}
          className="animate-steam block h-24 w-2 rounded-full bg-gradient-to-t from-transparent via-[#d99a3a]/35 to-transparent blur-[3px]"
          style={{ animationDelay: `${d}s` }}
        />
      ))}
    </div>
  )
}
