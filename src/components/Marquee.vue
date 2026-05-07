<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** Items rendered. If a string is supplied, it's used as a single span. */
  items?: string[]
  /** seconds for one full loop */
  duration?: number
  /** 'left' (default) or 'right' */
  direction?: 'left' | 'right'
  /** how many times to repeat the items inside each track for seamless loop */
  repeat?: number
  /** include a separator dot/arrow between items */
  separator?: string
  /** className applied to each item */
  itemClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  duration: 30,
  direction: 'left',
  repeat: 4,
  separator: '→',
  items: () => [],
  itemClass: '',
})

const repeatedItems = computed(() => {
  const arr: string[] = []
  for (let i = 0; i < props.repeat; i++) arr.push(...props.items)
  return arr
})

const trackStyle = computed(() => ({
  animationDuration: `${props.duration}s`,
  animationDirection: props.direction === 'right' ? 'reverse' : 'normal',
}))
</script>

<template>
  <div class="marquee" role="presentation" aria-hidden="true">
    <!-- Two tracks for seamless infinite scroll -->
    <div class="marquee__track" :style="trackStyle">
      <span
        v-for="(item, i) in repeatedItems"
        :key="`a-${i}`"
        :class="['inline-flex items-center px-6 whitespace-nowrap', itemClass]"
      >
        <slot :item="item" :index="i">{{ item }}</slot>
        <span v-if="separator" class="ml-6 opacity-40">{{ separator }}</span>
      </span>
    </div>
    <div class="marquee__track" :style="trackStyle" aria-hidden="true">
      <span
        v-for="(item, i) in repeatedItems"
        :key="`b-${i}`"
        :class="['inline-flex items-center px-6 whitespace-nowrap', itemClass]"
      >
        <slot :item="item" :index="i">{{ item }}</slot>
        <span v-if="separator" class="ml-6 opacity-40">{{ separator }}</span>
      </span>
    </div>
  </div>
</template>
