<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" @click="closeModal">
    <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
      <!-- Header -->
      <div class="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
        <div class="flex items-start justify-between">
          <div class="flex items-center">
            <div :class="[
              'w-12 h-12 rounded-lg flex items-center justify-center mr-4',
              phaseColors[tool?.phase || 'inspiration'].bg
            ]">
              <span class="text-2xl">{{ phaseIcons[tool?.phase || 'inspiration'] }}</span>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">{{ tool?.name }}</h2>
              <span :class="[
                'inline-block px-3 py-1 rounded-full text-sm font-medium mt-2',
                phaseColors[tool?.phase || 'inspiration'].text,
                phaseColors[tool?.phase || 'inspiration'].bg
              ]">
                {{ tool?.phase === 'inspiration' ? 'Inspiration' : tool?.phase === 'ideation' ? 'Ideation' : 'Implementation' }}
              </span>
            </div>
          </div>
          <button class="text-gray-400 hover:text-gray-600 transition-colors" @click="closeModal">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Description -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">工具簡介</h3>
          <p class="text-gray-700 leading-relaxed">{{ tool?.description }}</p>
        </div>

        <!-- When to Use -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">適用時機</h3>
          <p class="text-gray-700 leading-relaxed">{{ tool?.when }}</p>
        </div>

        <!-- Steps -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">操作步驟</h3>
          <ol class="space-y-3">
            <li v-for="(step, index) in tool?.steps" :key="index" class="flex items-start">
              <span :class="[
                'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium mr-3 mt-0.5',
                phaseColors[tool?.phase || 'inspiration'].accent
              ]">
                {{ index + 1 }}
              </span>
              <span class="text-gray-700">{{ step }}</span>
            </li>
          </ol>
        </div>

        <!-- Difficulty Level -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">難度等級</h3>
          <div class="flex items-center">
            <div class="flex space-x-1 mr-3">
              <div v-for="i in 3" :key="i" :class="[
                'w-3 h-3 rounded-full',
                getDifficultyLevel(tool?.difficulty || '易') >= i 
                  ? phaseColors[tool?.phase || 'inspiration'].accent 
                  : 'bg-gray-200'
              ]"></div>
            </div>
            <span class="text-gray-600">{{ tool?.difficulty }}</span>
          </div>
        </div>

        <!-- Related Tools -->
        <div v-if="tool?.relatedTools && tool.relatedTools.length > 0" class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">相關工具</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="related in tool.relatedTools" 
              :key="related"
              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {{ related }}
            </span>
          </div>
        </div>

        <!-- Tips or Examples (if provided) -->
        <div v-if="tool?.tips" class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">實用技巧</h3>
          <div :class="[
            'p-4 rounded-lg border-l-4',
            phaseColors[tool?.phase || 'inspiration'].lightBg,
            phaseColors[tool?.phase || 'inspiration'].border
          ]">
            <p class="text-gray-700">{{ tool.tips }}</p>
          </div>
        </div>
      </div>

      <!-- Footer Actions -->
      <div class="sticky bottom-0 bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-200">
        <div class="flex justify-between items-center">
          <div class="text-sm text-gray-500">
            點擊相關工具可查看更多資訊
          </div>
          <button 
            :class="[
              'px-6 py-2 rounded-lg font-medium transition-colors',
              phaseColors[tool?.phase || 'inspiration'].accent,
              'text-white hover:opacity-90'
            ]"
            @click="closeModal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tool {
  id: string
  name: string
  phase: 'inspiration' | 'ideation' | 'implementation'
  description: string
  when: string
  steps: string[]
  relatedTools: string[]
  difficulty: string
  tips?: string
}

interface Props {
  isOpen: boolean
  tool: Tool | null
}

interface Emits {
  (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

// Phase colors and icons
const phaseColors = {
  inspiration: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    accent: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    border: 'border-l-blue-500'
  },
  ideation: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    accent: 'bg-green-600',
    lightBg: 'bg-green-50',
    border: 'border-l-green-500'
  },
  implementation: {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    accent: 'bg-purple-600',
    lightBg: 'bg-purple-50',
    border: 'border-l-purple-500'
  }
}

const phaseIcons = {
  inspiration: '🔍',
  ideation: '💡',
  implementation: '🚀'
}

const closeModal = () => {
  emit('close')
}

const getDifficultyLevel = (difficulty: string): number => {
  switch (difficulty) {
    case '易': return 1
    case '中等': return 2
    case '高': return 3
    default: return 1
  }
}

// Close modal on Escape key
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

// Add/remove event listener when modal opens/closes
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.addEventListener('keydown', handleKeydown)
  } else {
    document.removeEventListener('keydown', handleKeydown)
  }
})

// Import watch
import { watch } from 'vue'
</script>

<style scoped>
/* Smooth scroll for modal content */
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #d1d5db #f3f4f6;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #d1d5db;
  border-radius: 3px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style> 