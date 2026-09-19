export function reveal(selector: string) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  for (const el of document.querySelectorAll<HTMLElement>(selector)) {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          io.disconnect()
        } else {
          el.classList.add('wait')
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
  }
}
