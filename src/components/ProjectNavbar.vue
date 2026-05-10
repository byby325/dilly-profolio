<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  navItems: {
    type: Array as () => { id: string; title: string }[],
    required: true,
  },
  showOnMobile: {
    type: Boolean,
    default: false,
  },
})

const activeItem = ref('')
const mobileMenuOpen = ref(false)
const isVisible = ref(true)

let lastScroll = 0

const handleScroll = () => {
  // Active section detection
  const sections = props.navItems.map((item) => document.getElementById(item.id))
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 200) {
        activeItem.value = props.navItems[i].id
        break
      }
    }
  }
  if (!activeItem.value && props.navItems.length > 0) {
    activeItem.value = props.navItems[0].id
  }

  // Hide nav near footer
  const doc = document.documentElement
  const distanceToBottom = doc.scrollHeight - (window.scrollY + window.innerHeight)
  isVisible.value = distanceToBottom > 280
  lastScroll = window.scrollY
}

const scrollToSection = (id: string) => {
  const section = document.getElementById(id)
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'smooth' })
    activeItem.value = id
    mobileMenuOpen.value = false
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') mobileMenuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <!-- Desktop side rail -->
  <Transition name="rail">
    <aside
      v-show="isVisible"
      class="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col"
      aria-label="On-page navigation"
    >
      <nav class="glass rounded-2xl shadow-card border border-primary-100/80 px-3 py-3 max-w-[260px]">
        <div class="text-[10px] font-semibold tracking-[0.2em] uppercase text-primary-400 px-3 pt-1 pb-2">
          On this page
        </div>
        <ul class="space-y-0.5">
          <li v-for="item in navItems" :key="item.id">
            <button
              type="button"
              class="pill-nav-item w-full text-left flex items-center gap-2"
              :class="{ 'is-active': activeItem === item.id }"
              @click="scrollToSection(item.id)"
            >
              <span
                class="inline-block w-1.5 h-1.5 rounded-full transition-colors"
                :class="activeItem === item.id ? 'bg-white' : 'bg-primary-300'"
                aria-hidden="true"
              />
              {{ item.title }}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  </Transition>

  <!-- Mobile floating button + sheet -->
  <div v-if="showOnMobile" class="block xl:hidden fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] z-40">
    <button
      type="button"
      class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary-900 text-white shadow-card-hover transition-transform duration-300 ease-out-expo hover:scale-105"
      :aria-expanded="mobileMenuOpen"
      aria-label="Toggle on-page navigation"
      @click="toggleMobileMenu"
    >
      <svg
        v-if="!mobileMenuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="14" y2="18" />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M6 6 18 18M6 18 18 6" />
      </svg>
    </button>

    <Transition name="sheet">
      <div
        v-if="mobileMenuOpen"
        class="absolute bottom-16 right-0 min-w-[220px] glass rounded-2xl shadow-card-hover border border-primary-100/80 p-2"
        role="dialog"
        aria-modal="true"
      >
        <ul class="space-y-0.5">
          <li v-for="item in navItems" :key="item.id">
            <button
              type="button"
              class="pill-nav-item w-full text-left"
              :class="{ 'is-active': activeItem === item.id }"
              @click="scrollToSection(item.id)"
            >
              {{ item.title }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.rail-enter-active,
.rail-leave-active {
  transition: opacity 300ms var(--ease-out-expo),
    transform 300ms var(--ease-out-expo);
}
.rail-enter-from,
.rail-leave-to {
  opacity: 0;
  transform: translate(8px, -50%);
}

.sheet-enter-active,
.sheet-leave-active {
  transition: opacity 250ms var(--ease-out-expo),
    transform 250ms var(--ease-out-expo);
}
.sheet-enter-from,
.sheet-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
