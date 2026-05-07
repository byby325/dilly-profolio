import type { Directive } from 'vue'

interface MagneticState {
  raf: number
  rect: DOMRect | null
  enter: () => void
  move: (e: MouseEvent) => void
  leave: () => void
}

const states = new WeakMap<HTMLElement, MagneticState>()

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * v-magnetic — pulls an element subtly toward the cursor and snaps back on leave.
 * Pass a numeric value as strength (default 0.35).
 *
 * Usage: <button v-magnetic>Click me</button>
 *        <button v-magnetic="0.5">Stronger</button>
 */
export const magnetic: Directive<HTMLElement, number | undefined> = {
  mounted(el, binding) {
    if (prefersReduced()) return
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return

    const strength = typeof binding.value === 'number' ? binding.value : 0.35
    el.classList.add('magnetic')

    const state: MagneticState = {
      raf: 0,
      rect: null,
      enter: () => {
        state.rect = el.getBoundingClientRect()
      },
      move: (e: MouseEvent) => {
        if (!state.rect) state.rect = el.getBoundingClientRect()
        const r = state.rect
        const x = (e.clientX - (r.left + r.width / 2)) * strength
        const y = (e.clientY - (r.top + r.height / 2)) * strength
        cancelAnimationFrame(state.raf)
        state.raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`
        })
      },
      leave: () => {
        cancelAnimationFrame(state.raf)
        el.style.transform = ''
      },
    }

    el.addEventListener('mouseenter', state.enter)
    el.addEventListener('mousemove', state.move)
    el.addEventListener('mouseleave', state.leave)
    states.set(el, state)
  },
  unmounted(el) {
    const state = states.get(el)
    if (state) {
      el.removeEventListener('mouseenter', state.enter)
      el.removeEventListener('mousemove', state.move)
      el.removeEventListener('mouseleave', state.leave)
      cancelAnimationFrame(state.raf)
      states.delete(el)
    }
  },
}
