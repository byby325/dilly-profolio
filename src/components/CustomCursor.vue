<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const dotRef = ref<HTMLElement | null>(null)
const glowRef = ref<HTMLElement | null>(null)

let raf = 0
let mouseX = 0
let mouseY = 0
let dotX = 0
let dotY = 0
let glowX = 0
let glowY = 0
let active = false

const HOVER_SELECTOR =
  'a, button, [role="button"], input, select, textarea, [data-cursor-hover], .img-wrap, .card-hover'

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

function tick() {
  dotX = lerp(dotX, mouseX, 0.55)
  dotY = lerp(dotY, mouseY, 0.55)
  glowX = lerp(glowX, mouseX, 0.18)
  glowY = lerp(glowY, mouseY, 0.18)
  if (dotRef.value) {
    dotRef.value.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
  }
  if (glowRef.value) {
    glowRef.value.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`
  }
  if (active) raf = requestAnimationFrame(tick)
}

function onMouseMove(e: MouseEvent) {
  mouseX = e.clientX
  mouseY = e.clientY
}
function onPointerOver(e: PointerEvent) {
  const target = e.target as HTMLElement | null
  if (target && target.closest && target.closest(HOVER_SELECTOR)) {
    document.body.classList.add('cursor--hover')
  }
}
function onPointerOut(e: PointerEvent) {
  const target = e.target as HTMLElement | null
  if (target && target.closest && target.closest(HOVER_SELECTOR)) {
    document.body.classList.remove('cursor--hover')
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return
  const coarse = window.matchMedia('(hover: none)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (coarse || reduced) return

  active = true
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  window.addEventListener('pointerover', onPointerOver, { passive: true })
  window.addEventListener('pointerout', onPointerOut, { passive: true })
  raf = requestAnimationFrame(tick)
})

onUnmounted(() => {
  active = false
  cancelAnimationFrame(raf)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('pointerover', onPointerOver)
  window.removeEventListener('pointerout', onPointerOut)
  document.body.classList.remove('cursor--hover')
})
</script>

<template>
  <div ref="dotRef" class="cursor-dot" aria-hidden="true" />
  <div ref="glowRef" class="cursor-glow" aria-hidden="true" />
</template>
