<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

// 控制移動端選單是否展開
const mobileMenuOpen = ref(false)

// 切換移動端選單
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// 圖片錯誤處理函數
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  const altText = img.alt || 'Image';
  
  // 創建一個替代的div來顯示圖片無法載入的訊息
  const placeholder = document.createElement('div');
  placeholder.className = img.className.replace('object-cover', '');
  placeholder.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-200', 'text-gray-600');
  
  // 設置placeholder的尺寸
  placeholder.style.width = '100%';
  placeholder.style.height = '100%';
  
  // 添加文字
  placeholder.textContent = `${altText}`;
  
  // 替換原始圖片
  img.parentNode?.replaceChild(placeholder, img);
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation -->
    <nav class="w-full py-3 md:py-4 bg-white border-b border-primary-200 relative">
      <div class="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <RouterLink to="/" class="flex items-center">
            <img 
              src="./assets/images/logos/logo-dilly.png" 
              alt="Dilly Logo" 
              class="h-[60px] w-[60px] object-contain"
              @error="handleImageError"
            />
          </RouterLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-10 justify-end">
          <RouterLink to="/#selected-projects" class="text-primary-600 hover:text-accent transition-colors font-medium">Project</RouterLink>
          <RouterLink to="/about" class="text-primary-600 hover:text-accent transition-colors font-medium">About</RouterLink>
          <RouterLink to="/resume" class="text-primary-600 hover:text-accent transition-colors font-medium">Resume</RouterLink>
        </div>

        <!-- Mobile Navigation Button -->
        <button 
          class="md:hidden text-primary-700 p-2" 
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-primary-200 z-50 shadow-md"
      >
        <div class="container mx-auto px-4 py-3">
          <div class="flex flex-col space-y-4">
            <RouterLink 
              to="/#selected-projects" 
              class="text-primary-600 hover:text-accent transition-colors font-medium py-2"
              @click="mobileMenuOpen = false"
            >
              Project
            </RouterLink>
            <RouterLink 
              to="/about" 
              class="text-primary-600 hover:text-accent transition-colors font-medium py-2"
              @click="mobileMenuOpen = false"
            >
              About
            </RouterLink>
            <RouterLink 
              to="/resume" 
              class="text-primary-600 hover:text-accent transition-colors font-medium py-2"
              @click="mobileMenuOpen = false"
            >
              Resume
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 w-full">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import './assets/base.css';

/* 全域樣式 */
body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  overflow-x: hidden;
  width: 100%;
}

html {
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

*, *::before, *::after {
  box-sizing: inherit;
}

#app {
  width: 100%;
  min-width: 100%;
  overflow-x: hidden;
}

.router-link-active {
  color: #2563eb !important;
}

.container {
  width: 100%;
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
}
</style>
