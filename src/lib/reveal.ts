export function reveal(selector: string) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.unobserve(el)
        } else {
          el.classList.add('wait')
        }
      }
    },
    { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
  )

  for (const el of document.querySelectorAll<HTMLElement>(selector)) io.observe(el)
}
