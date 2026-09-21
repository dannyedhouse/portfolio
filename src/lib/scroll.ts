export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  return true
}

export function onScroll(fn: () => void) {
  let raf = 0
  const go = () => {
    if (raf) return
    raf = requestAnimationFrame(() => {
      fn()
      raf = 0
    })
  }
  fn()
  addEventListener('scroll', go, { passive: true })
  addEventListener('resize', go)
}
