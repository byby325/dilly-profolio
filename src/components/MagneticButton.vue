<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { magnetic as vMagnetic } from '../directives/magnetic'

interface Props {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost'
  size?: 'md' | 'lg'
  to?: string | object
  href?: string
  target?: string
  strength?: number
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  strength: 0.32,
  type: 'button',
})

const attrs = useAttrs()

const classes = computed(() => [
  'btn',
  props.size === 'lg' ? 'btn-lg' : '',
  {
    primary: 'btn-primary',
    accent: 'btn-accent',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  }[props.variant],
])

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="tag"
    v-magnetic="strength"
    :class="classes"
    :to="to"
    :href="href"
    :target="target"
    :type="tag === 'button' ? type : undefined"
    v-bind="attrs"
  >
    <span class="relative z-10 inline-flex items-center gap-2">
      <slot />
    </span>
  </component>
</template>
