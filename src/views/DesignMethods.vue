<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionHeader from '../components/SectionHeader.vue'

interface Phase {
  num: string
  symbol: string
  name: string
  caption: string
  description: string
  to: string
}

const phases: Phase[] = [
  {
    num: '01',
    symbol: '◐',
    name: 'Inspiration',
    caption: '洞察發現階段',
    description: '理解問題、發現機會、建立基礎認知的工具與方法。',
    to: '/design-methods/inspiration',
  },
  {
    num: '02',
    symbol: '◑',
    name: 'Ideation',
    caption: '創意發想階段',
    description: '產生想法、探索解決方案、概念發展的創意方法。',
    to: '/design-methods/ideation',
  },
  {
    num: '03',
    symbol: '●',
    name: 'Implementation',
    caption: '執行實現階段',
    description: '原型製作、測試驗證、優化迭代的實作工具。',
    to: '/design-methods/implementation',
  },
]

const popular = [
  { title: 'JTBD', desc: 'Jobs To Be Done' },
  { title: 'User Journey', desc: '用戶旅程' },
  { title: 'A/B Testing', desc: '對比測試' },
  { title: 'Prototyping', desc: '原型製作' },
]
</script>

<template>
  <div class="bg-white">
    <!-- Hero -->
    <section class="aurora-bg pt-12 md:pt-16 pb-12 md:pb-16">
      <div class="shell">
        <div v-reveal class="max-w-3xl">
          <span class="eyebrow eyebrow-accent eyebrow-dot mb-5">Design Methods</span>
          <h1 class="text-display-xl font-display tracking-tight text-balance">
            設計方法論<span class="italic font-display">工具庫</span>
          </h1>
          <p class="mt-4 text-lg text-primary-600 max-w-2xl text-pretty">
            探索設計過程中的方法與理論 — 從洞察發現到創意發想，再到執行實現。這裡收錄了我在設計工作中運用到的各種框架和工具。
          </p>
        </div>
      </div>
    </section>

    <!-- Phase cards -->
    <section class="py-16 md:py-24">
      <div class="shell">
        <SectionHeader
          eyebrow="Three phases"
          title="設計思維三階段"
          subtitle="每個階段都有對應的研究與設計工具，根據問題的脈絡選擇合適的方法。"
        />

        <div v-reveal.stagger class="mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
          <RouterLink
            v-for="p in phases"
            :key="p.num"
            v-spotlight
            :to="p.to"
            class="group card card-hover p-7 md:p-8 flex flex-col"
            data-cursor-hover
          >
            <div class="flex items-baseline justify-between mb-6">
              <span class="text-xs font-mono tracking-wider text-primary-400">{{ p.num }}</span>
              <span class="text-2xl text-primary-900 font-display">{{ p.symbol }}</span>
            </div>
            <h3 class="text-2xl font-display font-semibold text-primary-900">{{ p.name }}</h3>
            <p class="mt-1 text-sm text-primary-500">{{ p.caption }}</p>
            <p class="mt-4 text-primary-600 leading-relaxed text-sm">{{ p.description }}</p>
            <div class="mt-auto pt-6">
              <span class="link-underline text-primary-900 inline-flex items-center gap-1.5 text-sm font-medium">
                探索工具
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
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Process flow -->
    <section class="bg-primary-50 py-16 md:py-24">
      <div class="shell">
        <SectionHeader
          eyebrow="Process flow"
          title="設計思維流程"
          align="center"
        />
        <div v-reveal class="mt-12 max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            <template v-for="(p, idx) in phases" :key="p.num">
              <div class="flex flex-col items-center text-center flex-1">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border border-primary-200 flex items-center justify-center mb-3 shadow-soft">
                  <span class="text-2xl md:text-3xl text-primary-900 font-display">{{ p.symbol }}</span>
                </div>
                <p class="font-semibold text-primary-900">{{ p.name }}</p>
                <p class="text-xs text-primary-500 mt-1">{{ p.caption }}</p>
              </div>
              <svg
                v-if="idx < phases.length - 1"
                xmlns="http://www.w3.org/2000/svg"
                class="hidden md:block h-5 w-5 text-primary-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
              <svg
                v-if="idx < phases.length - 1"
                xmlns="http://www.w3.org/2000/svg"
                class="md:hidden h-5 w-5 text-primary-400 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 5v14" /><path d="m5 12 7 7 7-7" />
              </svg>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular tools -->
    <section class="bg-primary-950 text-white py-16 md:py-24">
      <div class="shell">
        <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10">
          <div>
            <span class="section-eyebrow text-primary-300">
              <span class="inline-block w-6 h-px bg-current opacity-60" />
              Popular methods
            </span>
            <h2 class="text-display-md font-display font-semibold tracking-tight text-white mt-3">
              快速存取熱門工具
            </h2>
          </div>
          <p class="text-primary-300 max-w-md">
            最常用的研究與設計方法，可快速跳轉到對應的章節。
          </p>
        </div>

        <div v-reveal.stagger class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div
            v-for="t in popular"
            :key="t.title"
            v-spotlight
            class="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-5 transition-all duration-300 ease-out-expo hover:border-white/30 hover:bg-white/[0.06] cursor-pointer"
            data-cursor-hover
          >
            <h3 class="font-display font-semibold text-white">{{ t.title }}</h3>
            <p class="text-sm text-primary-300 mt-1">{{ t.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
