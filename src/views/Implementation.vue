<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Category {
  id: string
  name: string
}

interface Tool {
  id: string
  name: string
  category: string
  description: string
  when: string
  steps: string[]
  relatedTools: string[]
  difficulty: '易' | '中等' | '高'
}

const categories: Category[] = [
  { id: 'all', name: '全部' },
  { id: 'prototype', name: '原型製作' },
  { id: 'testing', name: '測試驗證' },
  { id: 'measurement', name: '測量分析' },
  { id: 'optimization', name: '優化改善' },
  { id: 'development', name: '開發協作' },
]

const selectedCategory = ref<string>('all')

const tools: Tool[] = [
  {
    id: 'prototyping',
    name: 'Prototyping (Low-fi → Hi-fi)',
    category: 'prototype',
    description: '從低保真到高保真的漸進式原型製作方法',
    when: '需要測試和驗證設計想法時',
    steps: ['紙本原型 — 快速草圖驗證', '線框圖 — 結構和功能布局', '互動原型 — 添加基本互動', '視覺原型 — 加入視覺設計', '高保真原型 — 接近真實產品'],
    relatedTools: ['Figma', 'Sketch', 'InVision'],
    difficulty: '中等',
  },
  {
    id: 'mvp',
    name: 'MVP (Minimum Viable Product)',
    category: 'prototype',
    description: '具備核心功能的最小可行產品，用於驗證市場需求',
    when: '需要快速驗證產品概念和市場反應時',
    steps: ['識別核心價值主張', '定義最小功能集', '快速開發和部署', '收集用戶反饋', '基於學習迭代改進'],
    relatedTools: ['Lean Startup', 'Build-Measure-Learn'],
    difficulty: '高',
  },
  {
    id: 'usability-testing',
    name: 'Usability Testing',
    category: 'testing',
    description: '觀察真實用戶使用產品的過程，發現可用性問題',
    when: '需要驗證設計是否易於使用時',
    steps: ['制定測試計劃和任務', '招募目標用戶參與者', '進行測試觀察和記錄', '分析用戶行為和反饋', '制定改善建議'],
    relatedTools: ['User Testing', 'Task Analysis'],
    difficulty: '中等',
  },
  {
    id: 'ab-testing',
    name: 'A/B Testing',
    category: 'testing',
    description: '同時測試兩個或多個版本，比較哪個表現更好',
    when: '需要數據驗證設計決策時',
    steps: ['定義測試假設和成功指標', '設計對照組和實驗組', '隨機分配用戶流量', '收集和分析數據', '根據結果做出決策'],
    relatedTools: ['Statistical Analysis', 'Conversion Optimization'],
    difficulty: '中等',
  },
  {
    id: 'user-feedback',
    name: 'User Feedback Collection',
    category: 'testing',
    description: '系統性收集和分析用戶意見反饋的方法',
    when: '需要了解用戶真實感受和需求時',
    steps: ['設計反饋收集機制', '選擇合適的收集渠道', '分類和整理反饋內容', '識別關鍵問題和機會', '制定響應和改進計劃'],
    relatedTools: ['Survey Design', 'Customer Support'],
    difficulty: '易',
  },
  {
    id: 'heuristic-evaluation',
    name: 'Heuristic Evaluation',
    category: 'testing',
    description: '基於可用性原則檢查介面設計的專家評估方法',
    when: '需要快速識別可用性問題時',
    steps: ['選擇合適的可用性原則', '邀請專家評估者', '系統性檢查介面元素', '記錄和分類問題', '優先級排序和改善建議'],
    relatedTools: ['Nielsen Heuristics', 'Expert Review'],
    difficulty: '中等',
  },
  {
    id: 'analytics',
    name: 'Analytics & Metrics',
    category: 'measurement',
    description: '設置和分析產品使用數據，追蹤關鍵指標',
    when: '需要了解產品實際使用情況時',
    steps: ['定義關鍵指標 (KPIs)', '設置數據追蹤埋點', '建立數據儀表板', '定期分析數據趨勢', '基於數據制定優化策略'],
    relatedTools: ['Google Analytics', 'Mixpanel', 'Amplitude'],
    difficulty: '中等',
  },
  {
    id: 'kano-model',
    name: 'Kano Model',
    category: 'measurement',
    description: '分析功能需求對用戶滿意度影響的模型',
    when: '需要優先排序產品功能時',
    steps: ['識別產品功能列表', '設計 Kano 調查問卷', '收集用戶反應數據', '分類功能類型 (基本／期望／魅力)', '制定功能開發優先級'],
    relatedTools: ['Feature Prioritization', 'Customer Satisfaction'],
    difficulty: '中等',
  },
  {
    id: 'heart-framework',
    name: 'HEART Framework',
    category: 'measurement',
    description: 'Google 的用戶體驗測量框架',
    when: '需要全面評估用戶體驗時',
    steps: ['Happiness — 測量用戶滿意度', 'Engagement — 分析用戶參與度', 'Adoption — 追蹤功能採用率', 'Retention — 評估用戶留存', 'Task Success — 衡量任務完成率'],
    relatedTools: ['GSM Framework', 'UX Metrics'],
    difficulty: '中等',
  },
  {
    id: 'continuous-improvement',
    name: 'Continuous Improvement',
    category: 'optimization',
    description: '持續改進的系統性方法',
    when: '需要建立長期優化機制時',
    steps: ['建立改進目標和指標', '定期回顧和評估', '識別改進機會', '實施小幅度改變', '測量效果並調整'],
    relatedTools: ['PDCA Cycle', 'Kaizen'],
    difficulty: '中等',
  },
  {
    id: 'retrospectives',
    name: 'Design Retrospectives',
    category: 'optimization',
    description: '設計團隊定期回顧和改進工作流程的方法',
    when: '需要改善團隊協作和流程時',
    steps: ['收集項目過程中的經驗', '識別什麼進展順利', '找出需要改進的地方', '制定具體改進行動', '追蹤改進效果'],
    relatedTools: ['Agile Retrospectives', 'Team Building'],
    difficulty: '易',
  },
  {
    id: 'design-system',
    name: 'Design System Implementation',
    category: 'development',
    description: '建立和維護設計系統的實施方法',
    when: '需要確保設計一致性和效率時',
    steps: ['建立設計原則和指導方針', '創建組件庫和模式', '制定使用文檔和規範', '與開發團隊協作實施', '持續維護和更新'],
    relatedTools: ['Component Library', 'Style Guide'],
    difficulty: '高',
  },
]

const filteredTools = computed(() => {
  if (selectedCategory.value === 'all') return tools
  return tools.filter((tool) => tool.category === selectedCategory.value)
})

const getCategoryName = (categoryId: string) => {
  return categories.find((cat) => cat.id === categoryId)?.name || ''
}

const difficultyTone = (d: Tool['difficulty']) => {
  if (d === '易') return 'bg-primary-100 text-primary-700'
  if (d === '中等') return 'bg-primary-200 text-primary-800'
  return 'bg-primary-900 text-white'
}
</script>

<template>
  <div class="bg-white">
    <section class="aurora-bg pt-12 md:pt-16 pb-10 md:pb-14">
      <div class="shell">
        <nav v-reveal class="flex items-center gap-2 text-sm text-primary-500 mb-6">
          <RouterLink to="/design-methods" class="hover:text-primary-900 transition-colors">
            設計方法論
          </RouterLink>
          <span class="text-primary-300">/</span>
          <span class="text-primary-900 font-medium">Implementation</span>
        </nav>

        <div v-reveal class="flex items-start gap-5 max-w-4xl">
          <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-900 text-white font-display flex items-center justify-center text-2xl">
            ●
          </div>
          <div>
            <span class="eyebrow eyebrow-accent eyebrow-dot mb-3">Phase 03 · Implementation</span>
            <h1 class="text-display-lg font-display tracking-tight">
              執行實現 <span class="text-primary-400 font-light">— Implementation</span>
            </h1>
            <p class="text-primary-600 mt-3 max-w-2xl">
              原型製作、測試驗證、優化迭代的實作工具。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="shell">
        <div v-reveal class="mb-10 flex flex-wrap items-center gap-2">
          <span class="text-xs font-semibold tracking-[0.18em] uppercase text-primary-500 mr-2">Filter by</span>
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out-expo border"
            :class="
              selectedCategory === category.id
                ? 'bg-primary-900 text-white border-primary-900'
                : 'bg-white text-primary-700 border-primary-200 hover:border-primary-900 hover:text-primary-900'
            "
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>

        <div v-reveal.stagger class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <article
            v-for="tool in filteredTools"
            :key="tool.id"
            v-spotlight
            class="card card-hover p-6 md:p-7 flex flex-col"
            data-cursor-hover
          >
            <div class="flex items-start justify-between gap-3 mb-2">
              <h3 class="min-w-0 flex-1 text-lg font-display font-semibold text-primary-900 leading-snug break-words">
                {{ tool.name }}
              </h3>
              <span class="tag-soft flex-shrink-0">{{ getCategoryName(tool.category) }}</span>
            </div>
            <p class="text-sm text-primary-600 leading-relaxed">{{ tool.description }}</p>

            <div class="mt-5">
              <div class="text-[11px] uppercase tracking-[0.18em] text-primary-500 mb-1.5">適用時機</div>
              <p class="text-sm text-primary-700">{{ tool.when }}</p>
            </div>

            <div class="mt-5">
              <div class="text-[11px] uppercase tracking-[0.18em] text-primary-500 mb-2">操作步驟</div>
              <ol class="space-y-1.5">
                <li
                  v-for="(step, index) in tool.steps"
                  :key="index"
                  class="text-sm text-primary-700 flex gap-2.5 leading-relaxed"
                >
                  <span class="text-primary-400 font-mono text-[11px] mt-1 flex-shrink-0">{{ String(index + 1).padStart(2, '0') }}</span>
                  <span>{{ step }}</span>
                </li>
              </ol>
            </div>

            <div v-if="tool.relatedTools.length > 0" class="mt-5">
              <div class="text-[11px] uppercase tracking-[0.18em] text-primary-500 mb-1.5">相關工具</div>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="related in tool.relatedTools" :key="related" class="tag">
                  {{ related }}
                </span>
              </div>
            </div>

            <div class="mt-auto pt-5 flex items-center justify-between border-t border-primary-100">
              <span
                class="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                :class="difficultyTone(tool.difficulty)"
              >
                難度 · {{ tool.difficulty }}
              </span>
              <button class="link-underline text-sm text-primary-700 hover:text-primary-900">
                詳細說明
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>
