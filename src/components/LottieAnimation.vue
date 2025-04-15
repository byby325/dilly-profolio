<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount, watch } from 'vue'
import lottie from 'lottie-web'

// 定義元件的屬性
const props = defineProps({
  // 動畫 JSON 文件路徑 (必須是位於 public/animations 目錄中的文件)
  path: {
    type: String,
    required: true
  },
  // 是否循環播放
  loop: {
    type: Boolean,
    default: true
  },
  // 是否自動播放
  autoplay: {
    type: Boolean,
    default: true
  },
  // 播放速度
  speed: {
    type: Number,
    default: 1
  },
  // 動畫類別名稱，用於自定義樣式
  className: {
    type: String,
    default: ''
  },
  // SVG 顏色
  color: {
    type: String,
    default: ''
  }
})

// 定義事件
const emit = defineEmits(['complete', 'loopComplete', 'enterFrame', 'ready'])

// 動畫容器參考
const container = ref<HTMLElement | null>(null)
// 動畫實例
let animation: any = null

// 元件掛載時初始化動畫
onMounted(() => {
  if (container.value && props.path) {
    animation = lottie.loadAnimation({
      container: container.value,
      renderer: 'svg',
      loop: props.loop,
      autoplay: props.autoplay,
      path: props.path,
    })
    
    // 設置播放速度
    animation.setSpeed(props.speed)
    
    // 添加事件監聽器
    animation.addEventListener('complete', () => emit('complete'))
    animation.addEventListener('loopComplete', () => emit('loopComplete'))
    animation.addEventListener('enterFrame', (e: any) => emit('enterFrame', e))
    
    // 在 DOM 加載完成後應用顏色
    animation.addEventListener('DOMLoaded', () => {
      emit('ready')
      
      // 如果設置了顏色屬性，應用到 SVG
      if (props.color && container.value) {
        const svgElements = container.value.querySelectorAll('svg path, svg circle, svg ellipse, svg rect, svg polygon');
        svgElements.forEach((path: Element) => {
          if (path instanceof SVGElement) {
            path.setAttribute('stroke', props.color);
          }
        });
      }
    })
  }
})

// 監視屬性變化
watch(() => props.speed, (newSpeed) => {
  if (animation) {
    animation.setSpeed(newSpeed)
  }
})

watch(() => props.loop, (newLoop) => {
  if (animation) {
    animation.loop = newLoop
  }
})

// 元件卸載時銷毀動畫實例，釋放資源
onBeforeUnmount(() => {
  if (animation) {
    animation.destroy()
    animation = null
  }
})

// 向父元件暴露的方法
defineExpose({
  // 播放動畫
  play: () => animation?.play(),
  // 暫停動畫
  pause: () => animation?.pause(),
  // 停止動畫
  stop: () => animation?.stop(),
  // 設置播放速度
  setSpeed: (speed: number) => animation?.setSpeed(speed),
  // 設置播放方向 (1=正向, -1=反向)
  setDirection: (direction: number) => animation?.setDirection(direction),
  // 跳轉到特定幀並播放
  goToAndPlay: (frame: number, isFrame: boolean = true) => animation?.goToAndPlay(frame, isFrame),
  // 跳轉到特定幀並停止
  goToAndStop: (frame: number, isFrame: boolean = true) => animation?.goToAndStop(frame, isFrame),
  // 播放特定段落
  playSegments: (segments: [number, number][], forceFlag: boolean = false) => 
    animation?.playSegments(segments, forceFlag),
  // 獲取動畫總幀數
  getDuration: (inFrames: boolean = true) => animation?.getDuration(inFrames)
})
</script>

<template>
  <div :ref="el => container = el as HTMLElement | null" :class="['lottie-container', className]"></div>
</template>

<style scoped>
.lottie-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 