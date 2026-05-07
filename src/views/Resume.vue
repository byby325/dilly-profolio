<script setup lang="ts">
import { computed } from 'vue'
import SectionHeader from '../components/SectionHeader.vue'

const calc = (start: string, end: string = new Date().toISOString()) => {
  const s = new Date(start)
  const e = end === 'present' ? new Date() : new Date(end)
  let years = e.getFullYear() - s.getFullYear()
  let months = e.getMonth() - s.getMonth()
  if (months < 0) {
    years--
    months += 12
  }
  return `${years} 年 ${months} 個月`
}

const seniorPeriod = computed(() => calc('2024-01-01'))
const designerPeriod = computed(() => calc('2021-06-01', '2023-12-31'))
const researchPeriod = computed(() => calc('2019-07-01', '2020-07-31'))
const titansoftPeriod = computed(() => calc('2021-06-01'))

interface Item {
  role: string
  org: string
  period: string
  duration: string
  bullets: string[]
}

const experience: Item[] = [
  {
    role: 'Senior Product Designer',
    org: 'Titansoft Pte Ltd',
    period: '2024.01 — Now',
    duration: seniorPeriod.value,
    bullets: [
      'Led design process improvements; +20% efficiency via automation, sprint comms, and Figma templates.',
      'Architected and shipped a product design system using atomic design and variables.',
      'Owned end-to-end SaaS projects from kick-off through usability testing and front-end slicing.',
      'Combined GA4, qualitative research, and competitor analysis to inform decisions.',
      'Served as company-wide Figma Trainer.',
    ],
  },
  {
    role: 'Product Designer',
    org: 'Titansoft Pte Ltd',
    period: '2021.06 — 2023.12',
    duration: designerPeriod.value,
    bullets: [
      'Owned design for SaaS modules; collaborated with Scrum teams across PM, QA, and engineering.',
      'Standardized design hand-off, reducing back-and-forth with engineers.',
    ],
  },
  {
    role: 'Research Assistant',
    org: '輔仁大學 Fu Jen Catholic University',
    period: '2019.07 — 2020.07',
    duration: researchPeriod.value,
    bullets: [
      'Applying biological information visualization to interactive design — mobile apps for Taiwan\'s endemic birds.',
      'Avian visualization, references, interview analysis, user flows, and wireframing.',
    ],
  },
]

const education = [
  {
    degree: 'B.A. in Applied Arts',
    school: '天主教輔仁大學 Fu Jen Catholic University',
    period: '2017 — 2021',
  },
]

const skills = {
  Design: ['Product Design', 'UX Research', 'Interaction Design', 'Prototyping', 'Design Systems'],
  Tools: ['Figma', 'Framer', 'Photoshop', 'Illustrator', 'Webflow', 'Builder.io', 'Cursor'],
  Process: ['Scrum', 'DesignOps', 'Jira', 'Confluence', 'Notion'],
  Coding: ['HTML', 'CSS', 'JavaScript basics', 'Vue (basic)'],
}
</script>

<template>
  <div class="resume">
    <!-- HERO -->
    <section class="aurora-bg pt-12 md:pt-16 pb-12 md:pb-16">
      <div class="shell flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div v-reveal>
          <span class="eyebrow eyebrow-accent eyebrow-dot mb-5">Resume</span>
          <h1 class="text-display-xl font-display font-semibold tracking-tight text-balance">
            Dilly Chen <span class="text-primary-400 font-light text-display-md">— Resume</span>
          </h1>
          <p class="mt-4 text-primary-600 max-w-xl">
            Senior Product Designer · Taipei, Taiwan · Available for SaaS product collaborations.
          </p>
        </div>
        <div v-reveal class="flex flex-wrap gap-3">
          <a
            href="mailto:byby325@gmail.com"
            class="btn btn-lg btn-primary"
            v-magnetic="0.3"
          >
            Email
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>
          <a
            href="https://www.linkedin.com/in/dilly-chen/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-lg btn-outline"
            v-magnetic="0.3"
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>

    <!-- BODY -->
    <section class="bg-white py-16 md:py-24">
      <div class="shell grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
        <!-- Sidebar: skills + education -->
        <aside class="lg:col-span-4 space-y-10 lg:sticky lg:top-28 lg:self-start">
          <div v-reveal>
            <h2 class="section-eyebrow mb-4">
              <span class="inline-block w-6 h-px bg-current opacity-60" /> Skills
            </h2>
            <div class="space-y-5">
              <div v-for="(items, group) in skills" :key="group">
                <div class="text-sm font-semibold text-primary-900 mb-2">{{ group }}</div>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="s in items" :key="s" class="tag-soft">{{ s }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-reveal>
            <h2 class="section-eyebrow mb-4">
              <span class="inline-block w-6 h-px bg-current opacity-60" /> Education
            </h2>
            <div v-for="(edu, i) in education" :key="i" class="card p-5">
              <div class="text-xs text-primary-500 uppercase tracking-wider">{{ edu.period }}</div>
              <h3 class="font-semibold text-primary-900 mt-2">{{ edu.degree }}</h3>
              <p class="text-sm text-primary-600 mt-1">{{ edu.school }}</p>
            </div>
          </div>
        </aside>

        <!-- Experience timeline -->
        <div class="lg:col-span-8">
          <SectionHeader eyebrow="Experience" title="Work history" />

          <div class="mt-10 relative">
            <div aria-hidden="true" class="absolute left-2 top-2 bottom-2 w-px bg-primary-200" />

            <article
              v-for="(item, i) in experience"
              :key="i"
              v-reveal
              class="relative pl-10 pb-10 last:pb-0"
            >
              <span
                aria-hidden="true"
                class="absolute left-0 top-2 w-4 h-4 rounded-full bg-white border-2 border-primary-900"
              />
              <div class="card p-6 md:p-8 card-hover">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 class="text-lg md:text-xl font-display font-semibold text-primary-900">
                    {{ item.role }}
                  </h3>
                  <span class="text-sm text-primary-500">{{ item.period }} · {{ item.duration }}</span>
                </div>
                <div class="text-sm text-primary-600 mb-4">{{ item.org }}</div>
                <ul class="space-y-2">
                  <li
                    v-for="(b, idx) in item.bullets"
                    :key="idx"
                    class="text-sm text-primary-700 leading-relaxed flex gap-2"
                  >
                    <span aria-hidden="true" class="mt-2 inline-block w-1 h-1 rounded-full bg-primary-900 flex-shrink-0" />
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <div
            v-reveal
            class="mt-14 relative card border-primary-200 p-7 md:p-10 overflow-hidden"
          >
            <!-- Top status row -->
            <div class="flex items-center gap-3 mb-5">
              <span class="relative inline-flex items-center justify-center">
                <span class="absolute inline-flex w-2.5 h-2.5 rounded-full bg-primary-900 opacity-30 animate-ping" />
                <span class="relative inline-block w-1.5 h-1.5 rounded-full bg-primary-900" />
              </span>
              <span class="text-xs font-semibold tracking-[0.2em] uppercase text-primary-500">
                Open to opportunities · 2026
              </span>
              <span class="hairline flex-1 ml-2" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-end">
              <div class="md:col-span-7">
                <h3 class="text-2xl md:text-[2rem] leading-[1.15] font-display font-semibold tracking-tight text-primary-900 text-balance">
                  Hiring a senior product designer?
                  <br class="hidden md:inline" />
                  <span class="text-primary-500 font-light">Let's get the kick-off scheduled.</span>
                </h3>
                <p class="mt-4 text-primary-600 max-w-xl leading-relaxed">
                  I'm open to full-time SaaS product roles and selective design collaborations.
                  Tell me what you're building and I'll send back a short note on how I'd help.
                </p>
              </div>

              <div class="md:col-span-5">
                <div class="flex flex-col gap-2.5">
                  <a
                    href="mailto:byby325@gmail.com?subject=Hi%20Dilly%20%E2%80%94%20%5BProject%5D"
                    class="btn btn-lg btn-primary justify-between w-full"
                    v-magnetic="0.25"
                  >
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                      byby325@gmail.com
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dilly-chen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-lg btn-outline justify-between w-full"
                  >
                    <span class="inline-flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      LinkedIn
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="hairline mt-8 mb-5" />

            <dl class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-sm">
              <div>
                <dt class="text-[11px] uppercase tracking-[0.18em] text-primary-500">Tenure</dt>
                <dd class="text-primary-900 font-medium mt-1">{{ titansoftPeriod }}</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.18em] text-primary-500">Based in</dt>
                <dd class="text-primary-900 font-medium mt-1">Taipei, Taiwan</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.18em] text-primary-500">Remote</dt>
                <dd class="text-primary-900 font-medium mt-1">GMT+8 ↔ flexible</dd>
              </div>
              <div>
                <dt class="text-[11px] uppercase tracking-[0.18em] text-primary-500">Reply</dt>
                <dd class="text-primary-900 font-medium mt-1">Within 24h</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
