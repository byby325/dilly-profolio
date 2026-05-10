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
  { id: 'thinking', name: '思考方法' },
  { id: 'brainstorm', name: '發想技巧' },
  { id: 'visual', name: '視覺化工具' },
  { id: 'organize', name: '整理分析' },
  { id: 'behavior', name: '行為設計' },
]

const selectedCategory = ref<string>('all')

const tools: Tool[] = [
  {
    id: 'design-thinking',
    name: 'Design Thinking Process',
    category: 'thinking',
    description: '以人為中心的創新方法論，包含同理、定義、發想、原型、測試五個階段',
    when: '需要系統性地解決複雜問題時',
    steps: ['同理 — 理解用戶需求', '定義 — 明確問題陳述', '發想 — 產生創意解決方案', '原型 — 快速製作原型', '測試 — 驗證解決方案'],
    relatedTools: ['Human-Centered Design', 'Double Diamond'],
    difficulty: '中等',
  },
  {
    id: 'brainstorming',
    name: 'Brainstorming 變化版本',
    category: 'brainstorm',
    description: '多種腦力激盪技法的組合，包含各種創意發想變化',
    when: '需要大量創意想法時',
    steps: ['經典腦力激盪 — 不批判、量多於質', '反向腦力激盪 — 思考如何造成問題', '6-3-5 腦力激盪 — 6人3輪各寫5個想法', '腦力書寫 — 靜默書寫想法', '想法組合和改良'],
    relatedTools: ['Crazy 8s', 'SCAMPER'],
    difficulty: '易',
  },
  {
    id: 'crazy-8s',
    name: 'Crazy 8s',
    category: 'brainstorm',
    description: '在 8 分鐘內快速產生 8 個想法的發想技法',
    when: '需要快速產生大量創意時',
    steps: ['折疊紙張成 8 個格子', '設定 8 分鐘計時器', '每分鐘在一個格子畫一個想法', '專注於數量而非質量', '完成後分享和討論想法'],
    relatedTools: ['Brainstorming', 'Sketch Noting'],
    difficulty: '易',
  },
  {
    id: 'scamper',
    name: 'SCAMPER 技法',
    category: 'brainstorm',
    description: '透過七種思考角度系統性地改良現有想法',
    when: '需要改良或創新現有解決方案時',
    steps: ['Substitute — 替換什麼？', 'Combine — 結合什麼？', 'Adapt — 適應什麼？', 'Modify / Magnify — 修改或放大？', 'Put to other uses — 其他用途？', 'Eliminate — 消除什麼？', 'Reverse / Rearrange — 反轉或重組？'],
    relatedTools: ['Brainstorming', 'Innovation Matrix'],
    difficulty: '中等',
  },
  {
    id: 'hmw',
    name: 'How Might We (HMW)',
    category: 'thinking',
    description: '將問題轉化為開放性機會問句的方法',
    when: '需要將問題重新框架為機會時',
    steps: ['識別核心問題或挑戰', '將問題轉換為「我們如何能夠……」的格式', '確保問句足夠廣泛激發創意', '同時具體到能夠行動', '產生多個 HMW 問句角度'],
    relatedTools: ['Problem Framing', 'Brainstorming'],
    difficulty: '中等',
  },
  {
    id: 'storyboarding',
    name: 'Storyboarding',
    category: 'visual',
    description: '用連續圖像敘述用戶體驗或解決方案的視覺化方法',
    when: '需要視覺化用戶體驗流程時',
    steps: ['定義故事的主角和情境', '確定關鍵時刻和接觸點', '繪製連續的場景框格', '添加文字說明和情緒註記', '檢視故事的完整性和邏輯'],
    relatedTools: ['User Journey Mapping', 'Service Blueprint'],
    difficulty: '中等',
  },
  {
    id: 'concept-sketching',
    name: 'Concept Sketching',
    category: 'visual',
    description: '快速手繪概念想法的視覺化技法',
    when: '需要快速視覺化抽象概念時',
    steps: ['準備紙筆和計時器', '設定時間限制 (通常 1-3 分鐘)', '專注於想法的核心概念', '用簡單線條和形狀表達', '添加關鍵標註和說明'],
    relatedTools: ['Crazy 8s', 'Design Studio'],
    difficulty: '易',
  },
  {
    id: 'design-studio',
    name: 'Design Studio Method',
    category: 'visual',
    description: '結合個人發想和團隊協作的設計方法',
    when: '需要團隊協作產生和改良想法時',
    steps: ['個人發想階段', '分享展示', '建設性批評', '迭代改良', '收斂決策'],
    relatedTools: ['Concept Sketching', 'Dot Voting'],
    difficulty: '中等',
  },
  {
    id: 'affinity-mapping',
    name: 'Affinity Mapping',
    category: 'organize',
    description: '將相關想法和洞察歸類整理的方法',
    when: '需要整理大量分散的想法或數據時',
    steps: ['收集所有想法或數據點', '將每個想法寫在便利貼上', '尋找相似主題和模式', '將相關便利貼歸類', '為每個類別命名主題'],
    relatedTools: ['Card Sorting', 'Thematic Analysis'],
    difficulty: '易',
  },
  {
    id: 'card-sorting',
    name: 'Card Sorting',
    category: 'organize',
    description: '讓用戶或團隊成員將資訊項目進行分類的方法',
    when: '需要理解資訊架構或分類邏輯時',
    steps: ['準備要分類的內容卡片', '邀請參與者進行分類', '開放式分類 — 自由分組', '封閉式分類 — 在既定類別中分類', '分析分類模式和一致性'],
    relatedTools: ['Information Architecture', 'User Testing'],
    difficulty: '中等',
  },
  {
    id: 'dot-voting',
    name: 'Dot Voting',
    category: 'organize',
    description: '使用點狀標記進行快速民主投票的決策方法',
    when: '需要團隊快速決策或優先排序時',
    steps: ['展示所有選項或想法', '給每人分配固定數量的點數', '讓每人將點數分配給喜歡的選項', '可以多點投給同一選項', '統計結果並討論'],
    relatedTools: ['Priority Matrix', 'Decision Matrix'],
    difficulty: '易',
  },
  {
    id: 'hook-model',
    name: 'Hook Model',
    category: 'behavior',
    description: 'Nir Eyal 提出的用戶習慣養成模型',
    when: '需要設計能養成用戶習慣的產品時',
    steps: ['Trigger — 內部或外部提示用戶行動', 'Action — 用戶執行特定行為', 'Variable Reward — 提供不可預測的獎勵', 'Investment — 用戶投入時間、數據或努力', '強化循環和習慣養成'],
    relatedTools: ['Behavioral Design', 'User Flow'],
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
          <span class="text-primary-900 font-medium">Ideation</span>
        </nav>

        <div v-reveal class="flex items-start gap-5 max-w-4xl">
          <div class="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-900 text-white font-display flex items-center justify-center text-2xl">
            ◑
          </div>
          <div>
            <span class="eyebrow eyebrow-accent eyebrow-dot mb-3">Phase 02 · Ideation</span>
            <h1 class="text-display-lg font-display tracking-tight">
              創意發想 <span class="text-primary-400 font-light">— Ideation</span>
            </h1>
            <p class="text-primary-600 mt-3 max-w-2xl">
              產生想法、探索解決方案、概念發展的創意方法。
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
            class="card card-hover p-6 md:p-7 flex flex-col"
            v-spotlight
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
