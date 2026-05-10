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
  { id: 'business', name: '商業分析' },
  { id: 'user', name: '用戶研究' },
  { id: 'analysis', name: '分析框架' },
]

const selectedCategory = ref<string>('all')

const tools: Tool[] = [
  {
    id: 'sipoc',
    name: 'SIPOC',
    category: 'business',
    description: '流程分析工具，識別供應商-輸入-流程-輸出-客戶關係',
    when: '需要理解複雜系統或流程時',
    steps: ['定義核心流程', '識別輸出(Output)和客戶(Customer)', '確認輸入(Input)和供應商(Supplier)', '詳述流程(Process)步驟'],
    relatedTools: ['User Journey Mapping', 'Stakeholder Mapping'],
    difficulty: '中等',
  },
  {
    id: 'business-model-canvas',
    name: 'Business Model Canvas',
    category: 'business',
    description: '九宮格商業模式視覺化工具',
    when: '分析現有商業模式或設計新商業模式',
    steps: ['定義價值主張', '識別客戶區隔', '設計客戶關係', '確認通路', '列出關鍵活動、資源、夥伴', '分析成本結構和收益流'],
    relatedTools: ['Value Proposition Canvas', 'SWOT Analysis'],
    difficulty: '中等',
  },
  {
    id: 'value-proposition-canvas',
    name: 'Value Proposition Canvas',
    category: 'business',
    description: '專注於價值主張與客戶需求匹配的工具',
    when: '需要深入了解客戶需求和痛點時',
    steps: ['描繪客戶側面', '列出客戶工作', '識別痛點', '找出收益', '設計價值主張', '驗證產品-市場適配度'],
    relatedTools: ['Business Model Canvas', 'JTBD'],
    difficulty: '中等',
  },
  {
    id: 'jtbd',
    name: 'Jobs To Be Done',
    category: 'user',
    description: '從用戶想要完成的「工作」角度理解需求',
    when: '需要深入理解用戶動機和需求時',
    steps: ['識別目標用戶群體', '找出用戶想要完成的核心工作', '分析情感、功能、社交層面的需求', '識別現有解決方案的不足', '定義機會缺口'],
    relatedTools: ['User Interview', 'Persona Development'],
    difficulty: '高',
  },
  {
    id: 'persona',
    name: 'Persona Development',
    category: 'user',
    description: '創建典型用戶角色的詳細描述',
    when: '需要統一團隊對目標用戶的理解時',
    steps: ['收集用戶研究數據', '識別用戶行為模式', '創建角色檔案', '添加目標、動機、痛點', '驗證和迭代角色設定'],
    relatedTools: ['User Interview', 'Empathy Mapping'],
    difficulty: '中等',
  },
  {
    id: 'empathy-mapping',
    name: 'Empathy Mapping',
    category: 'user',
    description: '視覺化用戶的想法、感受、行為和環境',
    when: '需要深入理解用戶體驗和情感狀態時',
    steps: ['選定特定用戶情境', '填寫「說」象限', '記錄「想」的內容', '觀察「做」的行為', '識別「感受」的情緒', '分析痛點和收益'],
    relatedTools: ['Persona Development', 'User Journey Mapping'],
    difficulty: '易',
  },
  {
    id: 'user-journey',
    name: 'User Journey Mapping',
    category: 'user',
    description: '視覺化用戶與產品互動的完整旅程',
    when: '需要理解用戶完整體驗流程時',
    steps: ['定義用戶角色和情境', '識別關鍵接觸點', '記錄用戶行為和情緒', '標註痛點和機會點', '提出改善建議'],
    relatedTools: ['Empathy Mapping', 'Service Blueprint'],
    difficulty: '中等',
  },
  {
    id: 'dvf',
    name: 'Desirability / Feasibility / Viability',
    category: 'analysis',
    description: '從需求性、可行性、可持續性三個維度評估想法',
    when: '需要評估產品或功能的整體可行性時',
    steps: ['評估需求性 — 用戶是否想要', '分析可行性 — 技術上是否可實現', '檢視可持續性 — 商業上是否可持續', '找出三者交集的最佳解決方案'],
    relatedTools: ['SWOT Analysis', 'Risk Assessment'],
    difficulty: '中等',
  },
  {
    id: 'swot',
    name: 'SWOT Analysis',
    category: 'analysis',
    description: '分析優勢、劣勢、機會、威脅的策略工具',
    when: '需要全面評估內外部環境時',
    steps: ['識別內部優勢', '分析內部劣勢', '發現外部機會', '評估外部威脅', '制定策略建議'],
    relatedTools: ['Competitive Analysis', 'Market Research'],
    difficulty: '易',
  },
  {
    id: '5-whys',
    name: '5 Whys Analysis',
    category: 'analysis',
    description: '通過連續詢問「為什麼」找到問題根本原因',
    when: '需要深入了解問題根源時',
    steps: ['明確定義問題', '問第一個「為什麼」', '基於答案繼續問「為什麼」', '重複直到找到根本原因', '制定針對性解決方案'],
    relatedTools: ['Root Cause Analysis', 'Fishbone Diagram'],
    difficulty: '易',
  },
  {
    id: 'stakeholder-mapping',
    name: 'Stakeholder Mapping',
    category: 'analysis',
    description: '識別和分析所有相關利益相關者',
    when: '需要理解項目影響範圍時',
    steps: ['識別所有利益相關者', '評估影響力和利益程度', '繪製利益相關者矩陣', '制定參與策略', '定期更新和檢視'],
    relatedTools: ['Power/Interest Grid', 'Communication Plan'],
    difficulty: '中等',
  },
  {
    id: 'competitive-analysis',
    name: 'Competitive Analysis',
    category: 'analysis',
    description: '系統性分析競爭對手的產品和策略',
    when: '需要了解市場競爭格局時',
    steps: ['識別直接和間接競爭對手', '分析競爭對手的產品特色', '評估優劣勢', '找出市場空隙', '制定差異化策略'],
    relatedTools: ['SWOT Analysis', 'Feature Comparison'],
    difficulty: '中等',
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
    <!-- Hero -->
    <section class="aurora-bg pt-12 md:pt-16 pb-10 md:pb-14">
      <div class="shell">
        <nav v-reveal class="flex items-center gap-2 text-sm text-primary-500 mb-6">
          <RouterLink to="/design-methods" class="hover:text-primary-900 transition-colors">
            設計方法論
          </RouterLink>
          <span class="text-primary-300">/</span>
          <span class="text-primary-900 font-medium">Inspiration</span>
        </nav>

        <div v-reveal class="flex items-start gap-5 max-w-4xl">
          <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-900 text-white font-display flex items-center justify-center text-2xl">
            ◐
          </div>
          <div>
            <span class="eyebrow eyebrow-accent eyebrow-dot mb-3">Phase 01 · Inspiration</span>
            <h1 class="text-display-lg font-display tracking-tight">
              洞察發現 <span class="text-primary-400 font-light">— Inspiration</span>
            </h1>
            <p class="text-primary-600 mt-3 max-w-2xl">
              理解問題、發現機會、建立基礎認知的工具與方法。
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="shell">
        <!-- Category filter -->
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

        <!-- Tools grid -->
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
