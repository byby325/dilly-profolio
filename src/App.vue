<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import Footer from './components/Footer.vue'
import CustomCursor from './components/CustomCursor.vue'

const router = useRouter()

// 控制行動版選單是否展開
const mobileMenuOpen = ref(false)

// 滾動超過閾值後切換 navbar 的視覺狀態
const scrolled = ref(false)
const onScroll = () => {
  scrolled.value = window.scrollY > 8
}

// View Transitions API — 平滑路由切換
let started = false
router.beforeResolve((_to, _from, next) => {
  // 第一次載入不啟用 view transition (會閃)
  if (!started) {
    started = true
    return next()
  }
  // @ts-expect-error - 漸進式增強 API
  if (typeof document !== 'undefined' && document.startViewTransition) {
    // @ts-expect-error
    document.startViewTransition(() => next())
  } else {
    next()
  }
})

watch(
  () => router.currentRoute.value.fullPath,
  () => {
    mobileMenuOpen.value = false
  },
)

// 鎖定 / 釋放 body scroll
watch(mobileMenuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = open ? 'hidden' : ''
})

// 鍵盤 ESC 關閉 mobile menu
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') mobileMenuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeyDown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeyDown)
  document.documentElement.style.overflow = ''
})

const navItems = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/resume', label: 'Resume' },
]

const navClasses = computed(() => [
  'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo',
  scrolled.value
    ? 'glass border-b border-primary-100/80 py-2.5'
    : 'bg-transparent border-b border-transparent py-4',
])
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <CustomCursor />

    <!-- Navigation -->
    <nav :class="navClasses" aria-label="Primary">
      <div class="shell flex items-center justify-between gap-6">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="group flex items-center gap-3"
          aria-label="Dilly Chen — back to home"
        >
          <span class="relative inline-flex w-10 h-10 items-center justify-center rounded-xl bg-primary-900 text-white font-display font-semibold text-sm shadow-soft overflow-hidden transition-transform duration-500 ease-out-expo group-hover:scale-105">
            <span class="relative z-10">DC</span>
          </span>
          <span class="hidden sm:inline-flex flex-col leading-none">
            <span class="font-display text-sm font-semibold tracking-tight text-primary-900">Dilly Chen</span>
            <span class="text-[11px] text-primary-500 mt-0.5">Senior Product Designer</span>
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="nav-link"
            active-class="is-active"
            exact-active-class="is-exact"
          >
            <span>{{ item.label }}</span>
          </RouterLink>
        </div>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-2">
          <a
            href="mailto:byby325@gmail.com"
            class="btn btn-primary"
            v-magnetic="0.25"
          >
            Let's talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          class="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full text-primary-900 hover:bg-primary-100"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="hamburger" :class="{ 'is-active': mobileMenuOpen }">
            <span /><span /><span />
          </span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div
          v-if="mobileMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 glass border-b border-primary-100"
          role="dialog"
          aria-modal="true"
        >
          <div class="shell py-4 flex flex-col gap-1">
            <RouterLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="py-3 px-3 rounded-lg text-base font-medium text-primary-800 hover:bg-primary-100 transition-colors"
              active-class="bg-primary-900 text-white hover:bg-primary-900"
            >
              {{ item.label }}
            </RouterLink>
            <a
              href="mailto:byby325@gmail.com"
              class="mt-2 btn btn-primary w-full justify-center"
            >
              Let's talk →
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- 為了避免 fixed nav 蓋住內容 -->
    <div aria-hidden="true" class="h-[68px] md:h-[72px]" />

    <!-- Main Content -->
    <main class="flex-1 w-full">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>

<style>
@import './assets/base.css';

body {
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  color: #0a0a0a;
}

.container {
  width: 100%;
  max-width: 1320px;
  margin-left: auto;
  margin-right: auto;
}

/* Nav links */
.nav-link {
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0.875rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(63 63 70);
  border-radius: 9999px;
  transition: color 250ms var(--ease-out-expo),
    background-color 250ms var(--ease-out-expo);
}
.nav-link:hover {
  color: rgb(24 24 27);
  background-color: rgba(244, 244, 245, 0.7);
}
.nav-link.is-exact,
.nav-link.is-active {
  color: rgb(24 24 27);
  background-color: rgb(244 244 245);
}

/* Hamburger to X */
.hamburger {
  width: 18px;
  height: 14px;
  position: relative;
  display: inline-block;
}
.hamburger span {
  position: absolute;
  left: 0;
  width: 18px;
  height: 1.5px;
  background: currentColor;
  transition:
    transform 350ms var(--ease-out-expo),
    opacity 250ms var(--ease-out-expo),
    top 350ms var(--ease-out-expo);
  border-radius: 2px;
}
.hamburger span:nth-child(1) {
  top: 1px;
}
.hamburger span:nth-child(2) {
  top: 7px;
}
.hamburger span:nth-child(3) {
  top: 13px;
}
.hamburger.is-active span:nth-child(1) {
  top: 7px;
  transform: rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  opacity: 0;
}
.hamburger.is-active span:nth-child(3) {
  top: 7px;
  transform: rotate(-45deg);
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 250ms var(--ease-out-expo),
    transform 350ms var(--ease-out-expo);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Page transition fallback when View Transitions API unsupported */
.page-enter-active,
.page-leave-active {
  transition: opacity 320ms var(--ease-out-expo),
    transform 420ms var(--ease-out-expo);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
