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
