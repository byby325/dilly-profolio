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
          <span class="eyebrow eyebrow-accent eyebrow-dot mb-4">Service Design · Wearable</span>
          <h1 class="text-display-xl font-display tracking-tight">Blossom 智慧項鍊</h1>
          <p class="text-lg md:text-xl text-primary-600 mt-4">穿戴式裝置 — 為高齡族群設計簡易復健引導與感測回饋的服務。</p>
        </div>

        <div v-reveal.stagger class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Role</div>
            <p class="text-primary-900 font-medium">Service · UX</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Timeline</div>
            <p class="text-primary-900 font-medium">Workshop · 2020</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Tools</div>
            <p class="text-primary-900 font-medium">Field study · Figma</p>
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
            Blossom started as a Fu Jen × 苗圃 design thinking workshop, focused on simple
            rehabilitation for older adults. I'm currently consolidating field-research insights and
            service blueprints into a publishable case study.
          </p>
          <div class="mt-6 inline-flex flex-wrap gap-3 justify-center">
            <a href="mailto:byby325@gmail.com" class="btn btn-primary" v-magnetic="0.3">Email me →</a>
            <RouterLink to="/" class="btn btn-outline">Browse other work</RouterLink>
          </div>
        </div>

        <nav class="mt-12 flex items-center justify-between text-sm">
          <RouterLink to="/project/iotion" class="link-underline text-primary-700">
            ← IOTION
          </RouterLink>
          <RouterLink to="/project/moodzine" class="link-underline text-primary-700">
            MOODZiNE →
          </RouterLink>
        </nav>
      </div>
    </section>
  </div>
</template>
