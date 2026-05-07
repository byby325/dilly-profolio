<script setup lang="ts">
import { computed } from 'vue'
import { reveal as vReveal } from '../directives/reveal'

interface Props {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light' // dark = on light bg (default), light = on dark bg
}

const props = withDefaults(defineProps<Props>(), {
  align: 'left',
  tone: 'dark',
})

const eyebrowCls = computed(() =>
  props.tone === 'light' ? 'text-primary-300' : 'text-primary-500',
)
const titleCls = computed(() =>
  props.tone === 'light' ? 'text-white' : 'text-primary-900',
)
const subtitleCls = computed(() =>
  props.tone === 'light' ? 'text-primary-300' : 'text-primary-600',
)
</script>

<template>
  <div
    v-reveal.stagger
    :class="[
      'flex flex-col gap-3',
      align === 'center' ? 'items-center text-center mx-auto' : 'items-start',
    ]"
  >
    <span
      v-if="eyebrow"
      class="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
      :class="eyebrowCls"
    >
      <span class="inline-block w-6 h-px bg-current opacity-60" />
      {{ eyebrow }}
    </span>
    <h2
      v-if="title"
      class="text-display-md font-display text-balance"
      :class="titleCls"
    >
      <slot name="title">{{ title }}</slot>
    </h2>
    <p
      v-if="subtitle"
      class="text-base md:text-lg max-w-2xl text-pretty"
      :class="subtitleCls"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
    <slot />
  </div>
</template>
