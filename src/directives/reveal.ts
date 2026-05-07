import type { Directive, DirectiveBinding } from 'vue'

interface RevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  stagger?: boolean
}

const observers = new WeakMap<Element, IntersectionObserver>()

function prefersReduced() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * v-reveal — adds the `reveal` class on mount and toggles `is-visible`
 * once the element enters the viewport. Use `v-reveal.stagger` to add
 * the `reveal-stagger` variant for sequential children.
 *
 * Usage:
 *   <h1 v-reveal>Hello</h1>
 *   <ul v-reveal.stagger><li/><li/></ul>
 *   <div v-reveal="{ rootMargin: '0px 0px -10% 0px', once: false }"/>
 */
export const reveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding: DirectiveBinding<RevealOptions | undefined>) {
    const opts: RevealOptions = binding.value ?? {}
    const stagger = !!binding.modifiers.stagger || !!opts.stagger
    const once = opts.once ?? true
    const threshold = opts.threshold ?? 0.12
    const rootMargin = opts.rootMargin ?? '0px 0px -8% 0px'

    el.classList.add(stagger ? 'reveal-stagger' : 'reveal')

    if (prefersReduced()) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add('is-visible')
            if (once) obs.unobserve(entry.target)
          } else if (!once) {
            ;(entry.target as HTMLElement).classList.remove('is-visible')
          }
        })
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    observers.set(el, observer)
  },
  unmounted(el) {
    const observer = observers.get(el)
    if (observer) {
      observer.disconnect()
      observers.delete(el)
    }
  },
}
