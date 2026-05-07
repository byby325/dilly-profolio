<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-white">
    <section class="aurora-bg pt-12 md:pt-16 pb-16 md:pb-24">
      <div class="shell">
        <div v-reveal class="mb-6">
          <RouterLink
            to="/#selected-projects"
            class="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            All projects
          </RouterLink>
        </div>

        <div v-reveal class="max-w-4xl">
          <span class="eyebrow eyebrow-accent eyebrow-dot mb-4">Dating App · Research-led</span>
          <h1 class="text-display-xl font-display tracking-tight">IOTION</h1>
          <p class="text-lg md:text-xl text-primary-600 mt-4">交友 APP — 從問卷與訪談切入，創造輕鬆自然的社交連結。</p>
        </div>

        <div v-reveal.stagger class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Role</div>
            <p class="text-primary-900 font-medium">UX · UI · Research</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Timeline</div>
            <p class="text-primary-900 font-medium">2022 — 2023</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Tools</div>
            <p class="text-primary-900 font-medium">Figma · Notion</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Status</div>
            <p class="text-primary-900 font-medium">Case study coming</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24">
      <div class="shell max-w-4xl">
        <div v-reveal class="card p-8 md:p-12 text-center">
          <span class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500 mb-4">
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-primary-900 animate-pulse-soft" />
            In progress
          </span>
          <h2 class="text-2xl md:text-3xl font-display font-semibold mb-3">Case study coming soon</h2>
          <p class="text-primary-600 max-w-xl mx-auto">
            I'm currently writing up the research, problem framing, and interaction design
            decisions behind IOTION. Reach out if you'd like an early walkthrough.
          </p>
          <div class="mt-6 inline-flex flex-wrap gap-3 justify-center">
            <a href="mailto:byby325@gmail.com" class="btn btn-primary" v-magnetic="0.3">Email me →</a>
            <RouterLink to="/" class="btn btn-outline">Browse other work</RouterLink>
          </div>
        </div>

        <nav class="mt-12 flex items-center justify-between text-sm">
          <RouterLink to="/project/firefoxlite" class="link-underline text-primary-700">
            ← Firefox Lite
          </RouterLink>
          <RouterLink to="/project/blossom" class="link-underline text-primary-700">
            Blossom →
          </RouterLink>
        </nav>
      </div>
    </section>
  </div>
</template>
