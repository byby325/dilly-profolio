import { onMounted, onUnmounted, ref } from 'vue'

/**
 * Reactive `prefers-reduced-motion` detection.
 * Returns true when the user prefers reduced motion (so callers can
 * skip non-essential animation).
 */
export function useReducedMotion() {
  const reduced = ref(false)

  let media: MediaQueryList | null = null
  const handler = (event: MediaQueryListEvent | MediaQueryList) => {
    reduced.value = 'matches' in event ? event.matches : false
  }

  onMounted(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    handler(media)
    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', handler)
    } else if (typeof (media as MediaQueryList & { addListener?: (h: typeof handler) => void }).addListener === 'function') {
      // Safari < 14
      ;(media as MediaQueryList & { addListener: (h: typeof handler) => void }).addListener(handler)
    }
  })

  onUnmounted(() => {
    if (!media) return
    if (typeof media.removeEventListener === 'function') {
      media.removeEventListener('change', handler)
    } else if (typeof (media as MediaQueryList & { removeListener?: (h: typeof handler) => void }).removeListener === 'function') {
      ;(media as MediaQueryList & { removeListener: (h: typeof handler) => void }).removeListener(handler)
    }
  })

  return reduced
}
