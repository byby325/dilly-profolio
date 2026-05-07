import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Returns a reactive 0..1 progress of how far the page has scrolled.
 * Useful for top progress bars or hero parallax.
 */
export function useScrollProgress() {
  const progress = ref(0)

  let raf = 0
  const update = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - doc.clientHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  }

  const onScroll = () => {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(update)
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onUnmounted(() => {
    cancelAnimationFrame(raf)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  return progress
}
