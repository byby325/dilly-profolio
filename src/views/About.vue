<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue'

const calculateDuration = (startDate: string, endDate: string = new Date().toISOString()) => {
  const start = new Date(startDate)
  const end = endDate === 'present' ? new Date() : new Date(endDate)
  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  if (months < 0) {
    years--
    months += 12
  }
  return { years, months, totalMonths: years * 12 + months }
}

const titanSoftDuration = calculateDuration('2021-06-01')
const titanSoftTotalDuration = `${titanSoftDuration.years} 年 ${titanSoftDuration.months} 個月`

const seniorDuration = calculateDuration('2024-01-01')
const seniorPeriod = `${seniorDuration.years} 年 ${seniorDuration.months} 個月`

const designerDuration = calculateDuration('2021-06-01', '2023-12-31')
const designerPeriod = `${designerDuration.years} 年 ${designerDuration.months} 個月`

const researchDuration = calculateDuration('2019-07-01', '2020-07-31')
const researchPeriod = `${researchDuration.years} 年 ${researchDuration.months} 個月`

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  if (img) img.style.opacity = '0.4'
}

const expertiseTags = [
  '使用者研究',
  '需求規劃',
  '互動設計',
  '原型設計',
  '網頁前端設計',
  '數據分析',
  '設計系統',
  '專案管理',
  '設計流程管理',
]

interface Tool {
  name: string
  src: string
}

const tools: Tool[] = [
  { name: 'Figma', src: new URL('../assets/icons/icon-color-figma.svg', import.meta.url).href },
  { name: 'Framer', src: new URL('../assets/icons/icon-color-framer.svg', import.meta.url).href },
  { name: 'Photoshop', src: new URL('../assets/icons/icon-color-photoshop.svg', import.meta.url).href },
  { name: 'Illustrator', src: new URL('../assets/icons/icon-color-illustrator.svg', import.meta.url).href },
  { name: 'Webflow', src: new URL('../assets/icons/icon-color-webflow.svg', import.meta.url).href },
  { name: 'Builder.io', src: new URL('../assets/icons/icon-color-builderio.svg', import.meta.url).href },
  { name: 'Cursor', src: new URL('../assets/icons/icon-color-cursor.svg', import.meta.url).href },
  { name: 'Notion', src: new URL('../assets/icons/icon-color-notion.svg', import.meta.url).href },
  { name: 'Jira', src: new URL('../assets/icons/icon-color-jira.svg', import.meta.url).href },
  { name: 'Confluence', src: new URL('../assets/icons/icon-color-confluence.svg', import.meta.url).href },
]

interface Talk {
  year: string
  title: string
  subtitle?: string
  speaker: string
  description: string
  cover: string
  href?: string
  cta?: string
}

const talks: Talk[] = [
  {
    year: '2025',
    title: 'UI/UX 設計師的成長與實戰心法',
    speaker: '講者｜成大職涯教練計畫',
    description:
      '透過職涯經驗與實戰案例，帶領初學者認識 UI/UX 設計師的核心能力，從入門到職場求生攻略，建構清晰的成長路徑。',
    cover: new URL('../assets/images/community/community-titansoft-ccp.jpg', import.meta.url).href,
    href: 'https://www.canva.com/design/DAGf8JH-fGc/rNPqQvPTzQlgz02xnDbpOg/view?utm_content=DAGf8JH-fGc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcbf5ec034c',
    cta: '閱讀簡報內容',
  },
  {
    year: '2024',
    title: 'Value-Driven！發揮 UX 影響力的關鍵',
    speaker: '講者｜2024 Titansoft Days Conference',
    description:
      '面對企業的產品利益，身為設計師如何發揮影響力，讓利益關係人理解 UX 價值，能夠幫助使用者也幫助產品成長？',
    cover: new URL('../assets/images/community/community-titansoftDay2024.jpg', import.meta.url).href,
    href: 'https://medium.com/titansoft/value-driven-%E7%99%BC%E6%8F%AE-ux-%E5%BD%B1%E9%9F%BF%E5%8A%9B%E7%9A%84%E9%97%9C%E9%8D%B5-2024-titansoft-tech-days-%E7%B2%BE%E9%81%B8%E8%AD%B0%E7%A8%8B-fbd1637cc980',
    cta: '閱讀文章內容',
  },
  {
    year: '2024',
    title: '團隊品質進化：敏捷開發的自動化工作流',
    subtitle: 'Team Quality Evolution: Automation Workflow in Scrum',
    speaker: '講者｜2024 Plus Ultra Conference',
    description:
      '分享如何在 Scrum 團隊中導入自動化工作流程，提升團隊品質與開發效率，讓成員可以更專注在開發上。',
    cover: new URL('../assets/images/community/community-designerDay2024.jpg', import.meta.url).href,
  },
  {
    year: '2023',
    title: '從 UX 設計師到「產品設計師」，T 型人才的菜鳥求職記',
    speaker: '鈦坦訪談｜Medium',
    description:
      '從個人的學習經驗，分享從學生時期到業界工作的成長經歷，以及身為產品設計師的價值觀分享。',
    cover: new URL('../assets/images/community/community-titansoft-career.webp', import.meta.url).href,
    href: 'https://medium.com/titansoft/%E5%BE%9E-ux-%E8%A8%AD%E8%A8%88%E5%B8%AB%E5%88%B0-%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E5%B8%AB-t-%E5%9E%8B%E4%BA%BA%E6%89%8D%E7%9A%84%E8%8F%9C%E9%B3%A5%E6%B1%82%E8%81%B7%E8%A8%98-61e29ded4205',
    cta: '閱讀文章內容',
  },
]

const besides = Array.from({ length: 6 }, (_, i) => ({
  src: new URL(`../assets/images/about/besides${i + 1}.jpg`, import.meta.url).href,
  alt: `Workshop photo ${i + 1}`,
}))
</script>

<template>
  <div class="about">
    <!-- =========================================================
         INTRO
         ========================================================= -->
    <section class="aurora-bg relative pt-12 md:pt-16 pb-16 md:pb-24">
      <div class="shell relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <div v-reveal class="md:col-span-7 order-2 md:order-1">
          <span class="eyebrow eyebrow-accent eyebrow-dot mb-6">About</span>
          <h1 class="text-display-xl text-balance font-display font-bold">
            Hi, I'm Dilly
            <span class="inline-block ml-2 origin-bottom-right hover:rotate-12 transition-transform duration-500">👋</span>
          </h1>
          <div class="space-y-4 mt-6 max-w-2xl text-pretty">
            <p class="text-lg md:text-xl text-primary-700 leading-relaxed">
              我是擁有五年經驗的資深產品設計師，專注於打造 SaaS 數位產品，擅長從用戶需求出發，結合商業目標與互動設計，提供 end-to-end 解決方案。
            </p>
            <p class="text-base text-primary-600 leading-relaxed">
              一路走來持續跨領域學習，累積了研究、分析、設計、測試及前端基礎開發等多元能力。具備 Scrum 團隊開發經驗，對 DesignOps 有深厚興趣。
            </p>
            <p class="text-base text-primary-600 leading-relaxed">
              致力於優化設計流程、降低跨部門溝通成本，並推動設計知識的傳承與團隊成長。我相信以使用者為中心的設計，能創造超越期待的產品體驗。
            </p>
          </div>
          <div class="flex flex-wrap gap-3 mt-8">
            <a
              v-magnetic="0.3"
              href="https://www.linkedin.com/in/dilly-chen/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-lg btn-primary"
            >
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
            </a>
          </div>
        </div>

        <div v-reveal class="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
          <div class="relative">
            <div class="absolute -inset-3 rounded-[28px] bg-primary-100 blur-2xl opacity-60" aria-hidden="true" />
            <div class="img-wrap relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] rounded-[28px]">
              <img
                src="../assets/images/about/profile.jpg"
                alt="Dilly profile"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         EXPERTISE & SKILLS
         ========================================================= -->
    <section class="bg-primary-50 py-20 md:py-28">
      <div class="shell">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div class="lg:col-span-6">
            <SectionHeader
              eyebrow="Expertise"
              title="What I bring to the table"
              subtitle="從探討需求、定義問題到原型測試與後期數據分析 — 我能在 SaaS 產品的各個階段提供端到端的支援。"
            />
            <div v-reveal.stagger class="mt-8 flex flex-wrap gap-2.5">
              <span
                v-for="t in expertiseTags"
                :key="t"
                class="px-4 py-2 rounded-full bg-white border border-primary-200 text-primary-800 text-sm font-medium shadow-soft hover:border-primary-900 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
              >{{ t }}</span>
            </div>
          </div>

          <div class="hidden lg:block lg:col-span-1">
            <div class="hairline rotate-90 origin-top h-px w-full mt-8" />
          </div>

          <div class="lg:col-span-5">
            <SectionHeader
              eyebrow="Tools"
              title="Tools of the trade"
              subtitle="主要使用 Figma 設計介面與原型，搭配 Cursor 開發，並使用 Notion、Jira、Confluence 等專案管理工具。"
            />
            <div v-reveal.stagger class="mt-8 grid grid-cols-5 gap-x-4 gap-y-6">
              <div
                v-for="tool in tools"
                :key="tool.name"
                v-spotlight
                class="group flex flex-col items-center gap-2"
                data-cursor-hover
              >
                <div class="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white border border-primary-100 shadow-soft transition-all duration-300 ease-out-expo group-hover:-translate-y-1 group-hover:shadow-card">
                  <img
                    :src="tool.src"
                    :alt="`${tool.name} logo`"
                    class="h-9 w-9 md:h-10 md:w-10"
                    loading="lazy"
                    @error="handleImageError"
                  />
                </div>
                <span class="text-[11px] text-primary-500">{{ tool.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- =========================================================
         WORK EXPERIENCE — Timeline
         ========================================================= -->
    <section class="bg-white py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="Career"
          title="Work experience"
          subtitle="A timeline of the places, projects, and people that shaped me."
        />

        <div class="mt-12 relative">
          <!-- Vertical line -->
          <div aria-hidden="true" class="absolute left-[26px] md:left-[31px] top-2 bottom-2 w-px bg-primary-200" />

          <!-- Titansoft -->
          <article v-reveal class="relative pl-16 md:pl-20 pb-12">
            <div class="absolute left-0 top-0 w-[54px] h-[54px] md:w-16 md:h-16 rounded-2xl bg-white border border-primary-200 flex items-center justify-center shadow-soft overflow-hidden">
              <img
                src="../assets/images/logos/logo-titansoft.jpeg"
                alt="Titansoft Logo"
                class="w-full h-full object-contain"
                @error="handleImageError"
              />
            </div>
            <div>
              <h3 class="text-2xl font-display font-semibold text-primary-900">Titansoft Pte Ltd</h3>
              <p class="text-sm text-primary-500 mt-1">全職 · {{ titanSoftTotalDuration }}</p>

              <!-- Senior Product Designer -->
              <div class="mt-6 card p-6 md:p-8">
                <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h4 class="text-lg font-semibold text-primary-900">Senior Product Designer</h4>
                  <span class="text-sm text-primary-500">2024.01 — Now · {{ seniorPeriod }}</span>
                </div>
                <div class="grid sm:grid-cols-2 gap-4 mt-5 text-sm">
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">Continuous Improvement</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Led the design team in continuously improving design processes and workflows. Increased work efficiency by at least 20% via workflow automation, sprint communication, and Figma templates.
                    </p>
                  </div>
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">Design System</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Architected and shipped a product design system using atomic design, variables, and components, improving consistency, flexibility, and design velocity.
                    </p>
                  </div>
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">Figma Trainer</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Company Figma Trainer covering basics, prototyping, version control, variables, components, and advanced topics like layer management and auto layout.
                    </p>
                  </div>
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">End-to-end SaaS</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Delivered multiple SaaS projects end-to-end, covering kick-off, exploratory research, wireframing, hi-fi prototyping, usability testing, and front-end slicing.
                    </p>
                  </div>
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">Data-Informed</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Combined GA4, competitor surveys, qualitative research, and academic reports to ensure design decisions deliver business value.
                    </p>
                  </div>
                  <div>
                    <h5 class="font-semibold text-primary-900 mb-1">Project Management</h5>
                    <p class="text-primary-600 leading-relaxed">
                      Atlassian-stack workflow (Jira + Confluence) for structured project execution and team-wide knowledge management.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Product Designer -->
              <div class="mt-4 card p-6 md:p-8">
                <div class="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 class="text-lg font-semibold text-primary-900">Product Designer</h4>
                  <span class="text-sm text-primary-500">2021.06 — 2023.12 · {{ designerPeriod }}</span>
                </div>
              </div>
            </div>
          </article>

          <!-- Research Assistant -->
          <article v-reveal class="relative pl-16 md:pl-20">
            <div class="absolute left-0 top-0 w-[54px] h-[54px] md:w-16 md:h-16 rounded-2xl bg-white border border-primary-200 flex items-center justify-center shadow-soft overflow-hidden">
              <img
                src="../assets/images/logos/logo-fju.jpeg"
                alt="FJU Logo"
                class="w-full h-full object-contain"
                @error="handleImageError"
              />
            </div>
            <div>
              <h3 class="text-2xl font-display font-semibold text-primary-900">Research Assistant</h3>
              <p class="text-sm text-primary-500 mt-1">天主教輔仁大學 Fu Jen Catholic University · 兼職</p>
              <p class="text-sm text-primary-500">2019.07 — 2020.07 · {{ researchPeriod }}</p>

              <div class="mt-5 card p-6 md:p-8">
                <h4 class="font-semibold text-primary-900 mb-2">
                  Applying biological information visualization to interactive design
                </h4>
                <p class="text-primary-600 leading-relaxed text-sm">
                  Mobile applications for Taiwan's endemic birds. I assisted with early-stage research and design tasks, including avian visualization, organizing references, analyzing interviews, planning user flows, and designing wireframes.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         COMMUNITY & ARTICLES
         ========================================================= -->
    <section class="bg-primary-50 py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="Community &amp; Writing"
          title="Sharing what I learn"
          subtitle="設計的價值不只存在於產品本身，也在於分享與傳承。透過演講、文章和工作坊，我把實戰經驗帶給更多設計師，與社群夥伴共同成長。"
        />

        <div v-reveal.stagger class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          <article
            v-for="(t, i) in talks"
            :key="i"
            v-spotlight
            class="card card-hover overflow-hidden flex flex-col"
            data-cursor-hover
          >
            <div class="img-wrap aspect-[16/9] rounded-none">
              <img
                :src="t.cover"
                :alt="t.title"
                loading="lazy"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <div class="p-6 md:p-7 flex-1 flex flex-col">
              <div class="text-xs uppercase tracking-[0.2em] text-primary-500">{{ t.year }}</div>
              <h3 class="text-lg md:text-xl font-display font-semibold text-primary-900 mt-2">
                {{ t.title }}
              </h3>
              <div v-if="t.subtitle" class="text-sm text-primary-500 italic mt-1">{{ t.subtitle }}</div>
              <div class="text-sm text-primary-700 mt-3">{{ t.speaker }}</div>
              <p class="text-sm text-primary-600 mt-3 leading-relaxed flex-1">
                {{ t.description }}
              </p>
              <div v-if="t.href" class="mt-5">
                <a
                  :href="t.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link-underline text-sm font-medium"
                >
                  {{ t.cta || '閱讀內容' }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- =========================================================
         BESIDES…
         ========================================================= -->
    <section class="bg-white py-20 md:py-28">
      <div class="shell">
        <SectionHeader
          eyebrow="Besides…"
          title="Beyond the screen"
          subtitle="經歷工程與設計的跨領域求學階段，我經常參與設計社群、活動講座、工作坊與藝文展覽。透過參與社群建立人際關係，從各個角度學習設計思考、執行、驗證。"
        />

        <div v-reveal.stagger class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <div
            v-for="(b, i) in besides"
            :key="i"
            v-spotlight
            class="img-wrap aspect-[3/2]"
            data-cursor-hover
          >
            <img
              :src="b.src"
              :alt="b.alt"
              loading="lazy"
              class="w-full h-full object-cover"
              @error="handleImageError"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hairline {
  background: linear-gradient(180deg, transparent, rgba(15, 23, 42, 0.16), transparent);
}
</style>
