<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { reveal as vReveal } from '../directives/reveal'

const year = new Date().getFullYear()

const links = [
  { label: 'Work', to: '/' },
  { label: 'About', to: '/about' },
]

const social = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dilly-chen/',
  },
  {
    label: 'Email',
    href: 'mailto:byby325@gmail.com',
  },
]
</script>

<template>
  <footer class="relative isolate overflow-hidden bg-primary-950 text-white">
    <!-- Subtle mono glow -->
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 -z-10 opacity-60"
      style="
        background:
          radial-gradient(60% 60% at 12% 0%, rgba(255,255,255,0.06), transparent 60%),
          radial-gradient(50% 50% at 100% 100%, rgba(255,255,255,0.04), transparent 60%);
      "
    />

    <div class="shell py-16 md:py-24">
      <!-- Big call-to-action band -->
      <div v-reveal class="flex flex-col gap-6 md:gap-8 max-w-3xl">
        <span class="section-eyebrow text-primary-300">
          <span class="inline-block w-6 h-px bg-current opacity-60" />
          Let's collaborate
        </span>
        <h2 class="text-display-lg font-display font-semibold tracking-tight text-balance">
          Have a product worth designing well? Let's make it
          <em class="not-italic underline decoration-2 underline-offset-[6px] decoration-white/40">memorable</em>.
        </h2>
        <p class="text-primary-300 max-w-xl">
          I'm always open to chatting about SaaS product design, design systems, or
          DesignOps. Drop a note any time, and I usually reply within a day.
        </p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a
            v-magnetic="0.25"
            href="mailto:byby325@gmail.com"
            class="btn btn-lg bg-white text-primary-950 hover:bg-primary-100 hover:-translate-y-0.5"
          >
            byby325@gmail.com
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
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
          <a
            href="https://www.linkedin.com/in/dilly-chen/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg border border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div class="hairline opacity-40 my-12" />

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div class="col-span-2">
          <div class="flex items-center mb-4">
            <img
              src="/logo-dilly.png"
              alt="Dilly Chen"
              class="w-10 h-10 object-contain"
            />
          </div>
          <p class="text-primary-300 max-w-sm leading-relaxed">
            Senior Product Designer crafting end-to-end SaaS experiences that balance
            business goals and user needs.
          </p>
        </div>

        <div>
          <h4 class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-4">
            Sitemap
          </h4>
          <ul class="space-y-2.5">
            <li v-for="link in links" :key="link.to">
              <RouterLink
                :to="link.to"
                class="text-primary-200 hover:text-white transition-colors"
              >
                {{ link.label }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-4">
            Elsewhere
          </h4>
          <ul class="space-y-2.5">
            <li v-for="s in social" :key="s.href">
              <a
                :href="s.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary-200 hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                {{ s.label }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5 opacity-50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between text-xs text-primary-400">
        <p>© {{ year }} Dilly Chen. Designed &amp; built with care.</p>
      </div>
    </div>
  </footer>
</template>
