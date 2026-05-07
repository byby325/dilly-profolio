import type { Directive } from 'vue'

interface SpotlightState {
  move: (e: MouseEvent) => void
}

const states = new WeakMap<HTMLElement, SpotlightState>()

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * v-spotlight — tracks the mouse and exposes --mx / --my CSS variables on the element.
 * Pair with the `.spotlight` class (defined in main.css) to render a glow that follows
 * the cursor.
 */
export const spotlight: Directive<HTMLElement> = {
  mounted(el) {
    if (prefersReduced()) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return

    el.classList.add('spotlight')

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      el.style.setProperty('--mx', `${x}%`)
      el.style.setProperty('--my', `${y}%`)
    }

    el.addEventListener('mousemove', move)
    states.set(el, { move })
  },
  unmounted(el) {
    const state = states.get(el)
    if (state) {
      el.removeEventListener('mousemove', state.move)
      states.delete(el)
    }
  },
}
