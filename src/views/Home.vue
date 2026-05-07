<script setup lang="ts">
// cspell:words pomodoro moodzine iotion firefox
import { computed, onMounted, onUnmounted, ref } from 'vue'
import LottieAnimation from '../components/LottieAnimation.vue'
import UiPlaceholder from '../components/UiPlaceholder.vue'
import Marquee from '../components/Marquee.vue'
import SectionHeader from '../components/SectionHeader.vue'
import { useScrollProgress } from '../composables/useScrollProgress'

import './Home.scss'

const arrowDownRef = ref(null)
const scrollProgress = useScrollProgress()
const progressPct = computed(() => `${(scrollProgress.value * 100).toFixed(2)}%`)

// Hero parallax — cursor-driven
const heroX = ref(0)
const heroY = ref(0)
const onHeroMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  heroX.value = ((e.clientX - rect.left) / rect.width - 0.5) * 12
  heroY.value = ((e.clientY - rect.top) / rect.height - 0.5) * 12
}
const onHeroLeave = () => {
  heroX.value = 0
  heroY.value = 0
}

// =========================================================
// Selected projects
// =========================================================
interface Project {
  id: string
  number: string
  title: string
  caption: string
  cover: string
  tags: string[]
  description: string
  category: string
  cta: { label: string; to?: string; href?: string }
}

const projects: Project[] = [
  {
    id: 'moodzine',
    number: '01',
    title: 'MOODZiNE',
    caption: '情緒管理 APP',
    category: 'Mobile App Design',
    cover: new URL('../assets/images/projects/project-1/cover/projectCover-moodzine.jpg', import.meta.url).href,
    tags: ['Emotional Management', 'UI/UX Design', 'Interview Research'],
    description:
      '與諮商心理師、輕度憂鬱者進行訪談研究，並分析市場產品。透過視覺化符碼與遊戲化互動，鼓勵使用者每日紀錄情緒，了解自身變化及原因，就像創作專屬的情緒雜誌。',
    cta: { label: 'View case study', to: '/project/moodzine' },
  },
  {
    id: 'firefox',
    number: '02',
    title: 'Firefox Lite Browser Feature',
    caption: 'Reader Mode & Share Function',
    category: 'Browser Redesign',
    cover: new URL('../assets/images/projects/project-2/cover/projectCover-firefoxLite.jpg', import.meta.url).href,
    tags: ['Firefox Lite', 'UI/UX Design', 'How Might We'],
    description:
      'Mozilla Campus Seeding Program 案例。聚焦瀏覽器「閱讀模式」與「分享功能」的流程與版面再設計，提升跨裝置一致性與流暢度，讓輕量化瀏覽器擁有更舒適的閱讀體驗。',
    cta: { label: 'Coming soon', href: 'javascript:void(0)' },
  },
  {
    id: 'iotion',
    number: '03',
    title: 'IOTION',
    caption: '交友 APP',
    category: 'Dating App',
    cover: new URL('../assets/images/projects/project-3/cover/projectCover-iotion.jpg', import.meta.url).href,
    tags: ['UI/UX Design', 'User Research', 'Usability Test'],
    description:
      '從問卷調查、實際訪談來定義問題，深入探討網路交友的心理需求與互動行為。透過競品分析了解市場狀況，創造一個輕鬆自然的交友過程。',
    cta: { label: 'Coming soon', href: 'javascript:void(0)' },
  },
  {
    id: 'blossom',
    number: '04',
    title: 'Blossom 智慧項鍊',
    caption: '穿戴式裝置 APP',
    category: 'Service Design',
    cover: new URL('../assets/images/projects/project-4/cover/projectCover-blossom.jpg', import.meta.url).href,
    tags: ['Service Design', 'UI Design', 'Interview Research'],
    description:
      '與輔仁大學苗圃設計思考工作坊合作，聚焦於高齡族群的日常復健需求。透過動作引導與即時感測回饋，協助長者進行伸展運動，紀錄身體狀況並達到預防與改善健康的目標。',
    cta: { label: 'Coming soon', href: 'javascript:void(0)' },
  },
]

// =========================================================
// UI design tile + modal
// =========================================================
interface Design {
  name: string
  subtitle: string
  images: string[]
  description?: string
  cover: string
}

const tiles: Design[] = [
  {
    name: 'Online Reservation',
    subtitle: 'Restaurant booking flow',
    cover: new URL('../assets/images/ui-design/ui-reserve01.jpg', import.meta.url).href,
    images: [
      'ui-reserve01',
      'ui-reserve02',
      'ui-reserve03',
      'ui-reserve04',
      'ui-reserve05',
      'ui-reserve06',
    ],
  },
  {
    name: 'Pomodoro Timer',
    subtitle: 'Focus assistant',
    cover: new URL('../assets/images/ui-design/ui-pomodoro01.jpg', import.meta.url).href,
    images: [
      'ui-pomodoro01',
      'ui-pomodoro02',
      'ui-pomodoro03',
      'ui-pomodoro04',
      'ui-pomodoro05',
      'ui-pomodoro06',
    ],
  },
  {
    name: 'Coffee Shop',
    subtitle: 'Website & ordering',
    cover: new URL('../assets/images/ui-design/ui-coffee01.jpg', import.meta.url).href,
    images: ['ui-coffee01', 'ui-coffee02', 'ui-coffee03', 'ui-coffee04'],
  },
  {
    name: 'Online Payment',
    subtitle: 'Mobile payment UI',
    cover: new URL('../assets/images/ui-design/ui-payment01.jpg', import.meta.url).href,
    images: [
      'ui-payment01',
      'ui-payment02',
      'ui-payment03',
      'ui-payment04',
      'ui-payment05',
      'ui-payment06',
    ],
  },
]

const showDetailsModal = ref(false)
const currentDesign = ref<Design>({ name: '', subtitle: '', images: [], cover: '' })

const showUIDetails = (tile: Design) => {
  currentDesign.value = tile
  showDetailsModal.value = true
}
const closeModal = () => (showDetailsModal.value = false)

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  if (target) target.style.display = 'none'
}

const getImagePath = (name: string) => {
  try {
    return new URL(`../assets/images/ui-design/${name}.jpg`, import.meta.url).href
  } catch (error) {
    console.error('Failed to load image:', name, error)
    return ''
  }
}

// =========================================================
// Visual / Photography / Inspiration assets
// =========================================================
const visualImages = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return new URL(`../assets/images/visual-design/visual${n}.jpg`, import.meta.url).href
})

const photographyImages = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return new URL(`../assets/images/photography/photography${n}.jpg`, import.meta.url).href
})

const inspirationImages = Array.from({ length: 6 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0')
  return new URL(`../assets/images/inspiration/inspiration${n}.jpg`, import.meta.url).href
})

// =========================================================
// Horizontal scroll for inspiration (scroll-driven)
// =========================================================
const horizontalScrollEl = ref<HTMLElement | null>(null)

let raf = 0
const handleHorizontalScroll = () => {
  if (!horizontalScrollEl.value) return
  const container = horizontalScrollEl.value
  const track = container.querySelector('.flex') as HTMLElement | null
  if (!track) return
  const max = track.scrollWidth - container.clientWidth
  if (max <= 0) return
  const rect = container.getBoundingClientRect()
  const winH = window.innerHeight
  // 進度從 container 進入視窗開始，到完全離開時結束
  const progress = Math.max(0, Math.min(1, (winH - rect.top) / (winH + rect.height)))
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    track.style.transform = `translateX(-${max * progress}px)`
  })
}

// ESC closes modal
const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
}

onMounted(() => {
  window.addEventListener('scroll', handleHorizontalScroll, { passive: true })
  window.addEventListener('resize', handleHorizontalScroll, { passive: true })
  window.addEventListener('keydown', onKeyDown)
  handleHorizontalScroll()
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('scroll', handleHorizontalScroll)
  window.removeEventListener('resize', handleHorizontalScroll)
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<template>
  <div class="home">
    <!-- Page top progress bar -->
    <div
      aria-hidden="true"
      class="fixed top-0 left-0 h-[2px] bg-primary-900 z-[60] origin-left"
      :style="{ width: progressPct }"
    />

    <!-- =========================================================
         HERO
         ========================================================= -->
    <section
      class="relative aurora-bg overflow-hidden"
      @mousemove="onHeroMove"
      @mouseleave="onHeroLeave"
    >
      <!-- Subtle monochrome orbits -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -top-32 -left-20 w-[480px] h-[480px] rounded-full opacity-50 blur-3xl"
        style="background: radial-gradient(circle, rgba(15,23,42,0.06), transparent 70%)"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute -bottom-32 -right-20 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
        style="background: radial-gradient(circle, rgba(15,23,42,0.05), transparent 70%)"
      />

      <div class="shell pt-16 md:pt-24 pb-16 md:pb-24 relative">
        <div class="max-w-5xl">
          <!-- Status pill -->
          <div v-reveal class="mb-6 md:mb-8">
            <span class="eyebrow eyebrow-dot bg-primary-100 text-primary-800">
              <span class="w-1.5 h-1.5 rounded-full bg-primary-900 animate-pulse-soft" />
              Available for SaaS product collaborations · 2026
            </span>
          </div>

          <!-- Headline -->
          <h1
            v-reveal
            class="text-display-2xl text-balance leading-[0.95] text-primary-950"
            :style="{ transform: `translate3d(${heroX * 0.4}px, ${heroY * 0.4}px, 0)` }"
          >
            Hello, I'm
            <span class="italic font-display">Dilly Chen</span>.
          </h1>

          <!-- Subheading -->
          <p
            v-reveal
            class="mt-6 md:mt-8 text-xl md:text-2xl lg:text-3xl text-primary-600 leading-snug max-w-4xl text-pretty font-display font-light"
            :style="{ transform: `translate3d(${heroX * 0.2}px, ${heroY * 0.2}px, 0)` }"
          >
            A
            <span class="text-primary-900 font-medium">Senior Product Designer</span>
            crafting end-to-end SaaS experiences that balance business goals and user needs —
            and turn product complexity into clarity.
          </p>

          <!-- CTAs -->
          <div v-reveal.stagger class="flex flex-wrap gap-3 mt-10">
            <RouterLink to="/about" class="btn btn-lg btn-primary group" v-magnetic="0.3">
              About me
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
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </RouterLink>
            <a
              href="#selected-projects"
              class="btn btn-lg btn-outline group"
              v-magnetic="0.3"
            >
              See the work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-y-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" /><path d="m5 12 7 7 7-7" />
              </svg>
            </a>
          </div>

          <!-- Stats -->
          <div
            v-reveal.stagger
            class="mt-16 md:mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl"
          >
            <div>
              <div class="text-display-sm font-display font-semibold text-primary-900">5+</div>
              <div class="text-sm text-primary-500 mt-1">Years designing SaaS</div>
            </div>
            <div>
              <div class="text-display-sm font-display font-semibold text-primary-900">12+</div>
              <div class="text-sm text-primary-500 mt-1">Shipped end-to-end</div>
            </div>
            <div>
              <div class="text-display-sm font-display font-semibold text-primary-900">∞</div>
              <div class="text-sm text-primary-500 mt-1">Curious by default</div>
            </div>
          </div>
        </div>

        <!-- Scroll cue -->
        <a
          href="#selected-projects"
          class="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-500 hover:text-primary-900 transition-colors"
          aria-label="Scroll down"
        >
          <span>Scroll</span>
          <div class="w-12 h-12">
            <LottieAnimation
              ref="arrowDownRef"
              path="/animations/arrow-down.json"
              class="arrow-down-anim"
              :loop="true"
              :autoplay="true"
              :speed="1"
              color="#0a0a0a"
            />
          </div>
        </a>
      </div>
    </section>

    <!-- =========================================================
         SELECTED PROJECTS — marquee + cards
         ========================================================= -->
    <section
      id="selected-projects"
      class="relative bg-primary-950 text-white py-20 md:py-28 overflow-hidden"
    >
      <!-- Marquee headline -->
      <div class="-mx-1 mb-12 md:mb-20">
        <Marquee
          :items="['Selected Project', 'Selected Project', 'Selected Project']"
          :duration="40"
          separator="→"
          item-class="text-display-xl font-display font-bold tracking-tight text-white opacity-95"
        />
      </div>

      <div class="shell">
        <SectionHeader
          eyebrow="Featured work"
          title="Designed end-to-end. Shipped to production."
          subtitle="A handful of projects spanning research, design systems, and product UI — across consumer and enterprise SaaS."
          align="left"
          tone="light"
        />

        <div class="mt-12 md:mt-16 space-y-6">
          <article
            v-for="(p, idx) in projects"
            :key="p.id"
            v-reveal
            class="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur overflow-hidden transition-all duration-500 ease-out-expo hover:border-white/30 hover:bg-white/[0.06]"
            v-spotlight
            data-cursor-hover
          >
            <div class="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 items-stretch">
              <!-- Image -->
              <div class="relative md:col-span-5 lg:col-span-5 overflow-hidden">
                <div class="aspect-[4/3] md:aspect-auto md:h-full">
                  <img
                    :src="p.cover"
                    :alt="p.title"
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                    @error="handleImageError"
                  />
                </div>
                <span class="absolute top-4 left-4 tag bg-white/85 text-primary-900 backdrop-blur">
                  {{ p.category }}
                </span>
              </div>

              <!-- Content -->
              <div class="relative md:col-span-7 lg:col-span-7 p-7 md:p-10 lg:p-12 flex flex-col">
                <div class="flex items-start justify-between gap-4 mb-4">
                  <span class="text-sm font-mono text-primary-400 tracking-wider">{{ p.number }} / {{ String(projects.length).padStart(2, '0') }}</span>
                  <span class="text-xs uppercase tracking-[0.18em] text-primary-400">{{ p.caption }}</span>
                </div>

                <h3 class="text-3xl md:text-4xl font-display font-semibold text-white tracking-tight">
                  {{ p.title }}
                </h3>

                <div class="flex flex-wrap gap-2 mt-4">
                  <span
                    v-for="tag in p.tags"
                    :key="tag"
                    class="px-2.5 py-1 rounded-full bg-white/10 text-xs text-primary-200 border border-white/10"
                  >{{ tag }}</span>
                </div>

                <p class="text-primary-200 mt-5 leading-relaxed text-sm md:text-base">
                  {{ p.description }}
                </p>

                <div class="mt-auto pt-6">
                  <RouterLink
                    v-if="p.cta.to"
                    :to="p.cta.to"
                    class="link-underline inline-flex items-center gap-1.5 text-white"
                  >
                    {{ p.cta.label }}
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
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </RouterLink>
                  <a
                    v-else
                    :href="p.cta.href"
                    class="link-underline inline-flex items-center gap-1.5 text-primary-300"
                    aria-disabled="true"
                  >
                    {{ p.cta.label }}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <!-- Hover gradient outline -->
            <div
              aria-hidden="true"
              class="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="
                background:
                  linear-gradient(180deg, rgba(255,255,255,0.06), transparent 30%);
              "
            />
            <span class="sr-only">Project {{ idx + 1 }}: {{ p.title }}</span>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         UI DESIGN tiles
         ========================================================= -->
    <section class="bg-white py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="UI Explorations"
          title="Daily UI design"
          subtitle="Side projects and design challenges that explore systems, interaction patterns, and small product moments."
          align="left"
        />

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <button
            v-for="tile in tiles"
            :key="tile.name"
            type="button"
            class="card-flush card group relative aspect-[3/2] cursor-pointer text-left overflow-hidden"
            v-reveal
            v-spotlight
            data-cursor-hover
            @click="showUIDetails(tile)"
          >
            <img
              :src="tile.cover"
              :alt="tile.name"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
              @error="handleImageError"
            />
            <div class="fallback absolute inset-0">
              <UiPlaceholder :title="tile.name" :subtitle="tile.subtitle" />
            </div>
            <!-- Bottom gradient + caption -->
            <div
              class="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/20 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div>
                <div class="text-[10px] uppercase tracking-[0.2em] opacity-70">{{ tile.subtitle }}</div>
                <div class="text-lg md:text-xl font-display font-medium">{{ tile.name }}</div>
              </div>
              <span class="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white text-primary-950 transform transition-transform duration-300 ease-out-expo group-hover:translate-x-0 -translate-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- UI Detail Modal -->
    <Transition name="modal">
      <div
        v-if="showDetailsModal"
        class="fixed inset-0 z-[80] flex items-end md:items-center justify-center p-0 md:p-6"
        role="dialog"
        aria-modal="true"
        @click.self="closeModal"
      >
        <div
          class="absolute inset-0 bg-primary-950/70 backdrop-blur-sm"
          aria-hidden="true"
          @click="closeModal"
        />
        <div class="relative bg-white rounded-t-3xl md:rounded-3xl w-full max-w-6xl max-h-[92vh] overflow-auto shadow-elevated">
          <div class="p-6 md:p-8 border-b border-primary-100 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur z-10">
            <div>
              <div class="text-xs uppercase tracking-[0.2em] text-primary-500">{{ currentDesign.subtitle }}</div>
              <h3 class="text-xl md:text-2xl font-display font-semibold text-primary-900 mt-1">
                {{ currentDesign.name }}
              </h3>
            </div>
            <button
              class="inline-flex w-10 h-10 items-center justify-center rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 transition-colors"
              aria-label="Close modal"
              @click="closeModal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div class="p-6 md:p-8">
            <p v-if="currentDesign.description" class="text-primary-700 mb-8 max-w-3xl">
              {{ currentDesign.description }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div
                v-for="(image, index) in currentDesign.images"
                :key="image"
                class="img-wrap aspect-[3/2]"
              >
                <img
                  :src="getImagePath(image)"
                  :alt="`${currentDesign.name} - screen ${index + 1}`"
                  loading="lazy"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
                <div class="fallback absolute inset-0">
                  <UiPlaceholder :title="currentDesign.name" :subtitle="`Screen ${index + 1}`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- =========================================================
         VISUAL DESIGN
         ========================================================= -->
    <section class="bg-primary-50 py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="Visual Design"
          title="Posters, marketing &amp; branding"
          subtitle="Brand-leaning work that balances editorial typography, identity, and rhythm."
          align="left"
        />
        <div v-reveal.stagger class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <div
            v-for="(src, i) in visualImages"
            :key="src"
            class="img-wrap aspect-[4/3]"
            v-spotlight
            data-cursor-hover
          >
            <img
              :src="src"
              :alt="`Visual design ${i + 1}`"
              loading="lazy"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         PHOTOGRAPHY
         ========================================================= -->
    <section class="bg-white py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="Photography"
          title="Frames, captured between projects"
          subtitle="A small selection of moments — light, geometry, people, places."
          align="left"
        />
        <div v-reveal class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div class="img-wrap aspect-[4/3]">
            <img :src="photographyImages[0]" alt="Photography 01" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="img-wrap aspect-[4/3]">
            <img :src="photographyImages[1]" alt="Photography 02" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="img-wrap md:row-span-2 aspect-[4/3] md:aspect-auto">
            <img :src="photographyImages[4]" alt="Photography 05" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="img-wrap md:row-span-2 aspect-[4/3] md:aspect-auto">
            <img :src="photographyImages[5]" alt="Photography 06" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="img-wrap aspect-[4/3]">
            <img :src="photographyImages[2]" alt="Photography 03" loading="lazy" class="w-full h-full object-cover" />
          </div>
          <div class="img-wrap aspect-[4/3]">
            <img :src="photographyImages[3]" alt="Photography 04" loading="lazy" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         INSPIRATION → IDEATION → IMPLEMENTATION
         ========================================================= -->
    <section class="bg-primary-50 py-20 md:py-28 overflow-hidden">
      <div class="-mx-1 mb-10 md:mb-14">
        <Marquee
          :items="['Inspiration', 'Ideation', 'Implementation']"
          :duration="35"
          separator="→"
          item-class="text-display-lg font-display font-bold tracking-tight text-primary-900"
        />
      </div>

      <div ref="horizontalScrollEl" class="relative mb-16">
        <div class="flex space-x-4 py-4 w-max px-4 md:px-8 lg:px-12">
          <div
            v-for="(src, i) in inspirationImages"
            :key="src"
            class="w-[420px] md:w-[540px] flex-shrink-0 img-wrap aspect-[16/8]"
          >
            <img :src="src" :alt="`Inspiration ${i + 1}`" loading="lazy" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Quote -->
      <div v-reveal class="shell">
        <figure class="max-w-4xl mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 mx-auto mb-6 text-primary-400"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l4-3V9a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v3l4-3V9a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote class="text-2xl md:text-3xl text-primary-800 font-display font-light leading-relaxed text-balance">
            "Design is not just what it looks like and feels like. Design is how it works."
          </blockquote>
          <figcaption class="mt-6 text-sm tracking-wider uppercase text-primary-500">
            — Steve Jobs
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 250ms var(--ease-out-expo);
}
.modal-enter-active > .relative,
.modal-leave-active > .relative {
  transition: transform 350ms var(--ease-out-expo),
    opacity 350ms var(--ease-out-expo);
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from > .relative,
.modal-leave-to > .relative {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
</style>
