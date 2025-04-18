<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 接收從父組件傳遞的導航項目
const props = defineProps({
    navItems: {
        type: Array as () => { id: string; title: string }[],
        required: true
    },
    // 控制導航欄在小屏幕上的顯示
    showOnMobile: {
        type: Boolean,
        default: false
    }
});

// 當前活動的導航項目
const activeItem = ref('');

// 是否顯示移動端導航菜單
const mobileMenuOpen = ref(false);

// 計算 activeItem 的樣式
const getItemStyle = (id: string) => {
    return {
        'font-bold': activeItem.value === id,
        'text-coral-600': activeItem.value === id,
        'text-gray-600': activeItem.value !== id,
    };
};

// 滾動處理函數
const handleScroll = () => {
    const sections = props.navItems.map(item => document.getElementById(item.id));

    // 找到當前滾動位置的section
    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
            const rect = section.getBoundingClientRect();
            // 如果section顶部在視窗頂部以下200px或以上位置，將其設為活動項
            if (rect.top <= 200) {
                activeItem.value = props.navItems[i].id;
                break;
            }
        }
    }

    // 如果沒有找到任何活動項，默认設為第一個
    if (!activeItem.value && props.navItems.length > 0) {
        activeItem.value = props.navItems[0].id;
    }
};

// 點擊導航項目時的處理函數
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        activeItem.value = id;
        mobileMenuOpen.value = false; // 點擊後關閉移動端菜單
    }
};

// 切換移動端菜單
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// 組件掛載時添加滾動監聽
onMounted(() => {
    handleScroll(); // 初始檢查
    window.addEventListener('scroll', handleScroll, { passive: true });
});

// 組件卸載時移除滾動監聽
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <!-- 桌面端側邊導航 (只在 xl 尺寸以上顯示) -->
    <div class="hidden xl:block fixed right-8 top-1/3 transform -translate-y-1/2 z-50">
        <div class="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 border border-gray-200">
            <ul class="space-y-3">
                <li v-for="item in navItems" :key="item.id" class="transition-all duration-200">
                    <a href="javascript:void(0)" @click="scrollToSection(item.id)"
                        class="block py-1 px-2 hover:text-coral-600 transition-colors duration-200 text-sm"
                        :class="getItemStyle(item.id)">
                        {{ item.title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- 移動端導航 (從 xs 到 lg 尺寸顯示) -->
    <div class="block xl:hidden fixed right-4 bottom-6 z-50" v-if="showOnMobile">
        <!-- 移動端菜單按鈕 -->
        <button @click="toggleMobileMenu"
            class="bg-coral-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-coral-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- 移動端菜單內容 -->
        <div v-if="mobileMenuOpen"
            class="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 min-w-[200px] border border-gray-200">
            <ul class="space-y-3">
                <li v-for="item in navItems" :key="item.id">
                    <a href="javascript:void(0)" @click="scrollToSection(item.id)"
                        class="block py-1 px-2 hover:text-coral-600 transition-colors duration-200 text-sm"
                        :class="getItemStyle(item.id)">
                        {{ item.title }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* 添加過渡動畫 */
.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
</style>