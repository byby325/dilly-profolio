<template>
  <div :class="{'bg-transition': true}" :style="{ backgroundColor: backgroundColor }">
    <div class="w-full py-16 md:py-32">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <!-- Hero Section -->
        <div class="w-full mx-auto">
          <!-- Main Content -->
          <div class="space-y-8">
            <!-- Heading -->
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">
              Hello! I'm Dilly Chen.
            </h1>
            
            <!-- Subheading -->
            <p class="text-3xl md:text-4xl lg:text-5xl leading-relaxed tracking-wide" :class="[isDarkMode ? 'text-gray-200' : 'text-primary-700']">
              I'm a Product Designer, crafting end-to-end solutions that balance business goals and user needs, creating meaningful product experiences.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-6 mt-10">
            <RouterLink
              to="/about"
              class="px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium flex items-center"
            >
              ABOUT <span class="ml-2 text-white">→</span>
            </RouterLink>
            <button
              class="px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium flex items-center"
              @click="goToHome"
            >
              PROJECT <span class="ml-2 text-white">→</span>
            </button>
          </div>
          
          <!-- Scroll Down Animation Container -->
          <div class="flex justify-center my-10">
            <div class="w-16 h-16">
              <LottieAnimation
                ref="arrowDownRef"
                path="/animations/arrow-down.json"
                class="arrow-down-anim"
                :loop="true"
                :autoplay="true"
                :speed="1"
                :color="isDarkMode ? '#ffffff' : '#18181b'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SELECTED PROJECT Section -->
    <section id="selected-projects" class="w-full py-16 md:py-12">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-12" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">SELECTED PROJECT</h2>
        
        <div class="space-y-6 max-w-7xl mx-auto">
          <!-- Project Card 1 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row">
              <div class="relative md:w-2/5 lg:w-1/3">
                <img src="../assets/images/projects/project-1/cover/projectCover-moodzine.jpg" alt="Project 1" class="w-full aspect-video md:h-full object-cover">
                <span class="absolute top-4 left-4 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Mobile App Design</span>
              </div>
              <div class="p-6 md:p-8 md:w-3/5 lg:w-2/3">
                <h3 class="text-2xl font-bold text-primary-900 mb-2">MOODZiNE</h3>
                <p class="text-gray-600 mb-4">情緒管理 APP</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Emotional Management</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">UI/UX Design</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Interview Research</span>
                </div>
                <p class="text-gray-700 mb-6">
                  發覺自己的心理問題，才能從情緒的根本上解決問題。我們與諮商心理師、輕度憂鬱者進行個別訪談研究，並分析市場產品，將產品目的與定義釐清，規劃完整的 App 內容。透過視覺化符碼與遊戲化互動，鼓勵使用者每日紀錄情緒，了解自身變化及原因，就像創作專屬的情緒雜誌。
                </p>
                <a href="javascript:void(0)" class="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center">
                  Coming Soon <span class="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 2 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row">
              <div class="relative md:w-2/5 lg:w-1/3">
                <img src="../assets/images/projects/project-2/cover/projectCover-firefoxLite.jpg" alt="Project 2" class="w-full aspect-video md:h-full object-cover">
                <span class="absolute top-4 left-4 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Browser Redesign</span>
              </div>
              <div class="p-6 md:p-8 md:w-3/5 lg:w-2/3">
                <h3 class="text-2xl font-bold text-primary-900 mb-2">Firefox Lite Browser Feature</h3>
                <p class="text-gray-600 mb-4">Reader Mode & Share Function</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Firefox Lite</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">UI/UX Design</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">How Might We</span>
                </div>
                <p class="text-gray-700 mb-6">
                  本專案為 Mozilla Campus Seeding Program，以 Firefox Lite App 產品為例，透過訪談研究及 Empathy Mapping，了解使用者瀏覽行為與痛點。案例聚焦瀏覽器「閱讀模式」、「分享功能」，重新設計操作流程與版面配置，提升跨裝置的一致性與流暢度，拓展不同年齡層的使用者，讓輕量化瀏覽器擁有更舒適的閱讀與操作體驗。
                </p>
                <a href="javascript:void(0)" class="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center">
                  Coming Soon <span class="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 3 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row">
              <div class="relative md:w-2/5 lg:w-1/3">
                <img src="../assets/images/projects/project-3/cover/projectCover-iotion.jpg" alt="Project 3" class="w-full aspect-video md:h-full object-cover">
                <span class="absolute top-4 left-4 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Dating App</span>
              </div>
              <div class="p-6 md:p-8 md:w-3/5 lg:w-2/3">
                <h3 class="text-2xl font-bold text-primary-900 mb-2">IOTION</h3>
                <p class="text-gray-600 mb-4">交友 APP</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">UI/UX Design</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">User Research</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Usability Test</span>
                </div>
                <p class="text-gray-700 mb-6">
                  專案以問卷調查、實際訪談來定義問題、深入探討網路交友的心理需求與互動行為，並透過競品分析來了解市場狀況與定位。期望解決用戶互動的網路社交問題，創造一個輕鬆自然的交友過程，且在最後透過使用性測試，來了解產品設計的價值與可行性。
                </p>
                <a href="javascript:void(0)" class="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center">
                  Coming Soon <span class="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
          
          <!-- Project Card 4 -->
          <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div class="flex flex-col md:flex-row">
              <div class="relative md:w-2/5 lg:w-1/3">
                <img src="../assets/images/projects/project-4/cover/projectCover-blossom.jpg" alt="Project 4" class="w-full aspect-video md:h-full object-cover">
                <span class="absolute top-4 left-4 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-full">Service Design</span>
              </div>
              <div class="p-6 md:p-8 md:w-3/5 lg:w-2/3">
                <h3 class="text-2xl font-bold text-primary-900 mb-2">Blossom 智慧項鍊</h3>
                <p class="text-gray-600 mb-4">穿戴式裝置 APP</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Service Design</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">UI Design</span>
                  <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Interview Research</span>
                </div>
                <p class="text-gray-700 mb-6">
                  專案為輔仁大學與苗圃設計思考工作坊，聚焦於高齡族群在日常生活中進行簡易復健的需求。藉由安養機構田野調查與長者與高齡者訪談，發想穿戴式智慧產品。透過簡單的動作引導與即時感測回饋，協助長者在日常中進行伸展運動，同時紀錄身體狀況，達到預防與改善健康的目標。
                </p>
                <a href="javascript:void(0)" class="text-primary-600 font-medium hover:text-primary-800 transition-colors inline-flex items-center">
                  Coming Soon <span class="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- UI Design Section -->
    <section class="w-full py-16 md:py-12">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-12" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">UI DESIGN</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Reserve UI Design -->
          <div class="rounded-sm group relative overflow-hidden hover:shadow-xl transition-all cursor-pointer aspect-[3/2]" @click="showUIDetails('reserve')">
            <img 
              :src="getImagePath('ui-reserve01')" 
              alt="Online Reservation"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            >
            <div class="fallback absolute inset-0">
              <UiPlaceholder title="Online Reservation" subtitle="Restaurant Reservation" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6 z-10">
              <h3 class="text-white text-xl">Online Reservation</h3>
            </div>
          </div>
          
          <!-- Pomodoro UI Design -->
          <div class="rounded-sm group relative overflow-hidden hover:shadow-xl transition-all cursor-pointer aspect-[3/2]" @click="showUIDetails('pomodoro')">
            <!-- cspell:disable-next-line -->
            <img 
              :src="getImagePath('ui-pomodoro01')" 
              alt="Pomodoro Timer" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            >
            <div class="fallback absolute inset-0">
              <UiPlaceholder title="Pomodoro Timer" subtitle="Pomodoro Timer" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6 z-10">
              <h3 class="text-white text-xl">Pomodoro Timer</h3>
            </div>
          </div>
          
          <!-- Coffee UI Design -->
          <div class="rounded-sm group relative overflow-hidden hover:shadow-xl transition-all cursor-pointer aspect-[3/2]" @click="showUIDetails('coffee')">
            <img 
              :src="getImagePath('ui-coffee01')" 
              alt="Website Design" 
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            >
            <div class="fallback absolute inset-0">
              <UiPlaceholder title="Website Design" subtitle="Coffee Shop App" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6 z-10">
              <h3 class="text-white text-xl">Website Design</h3>
            </div>
          </div>
          
          <!-- Payment UI Design -->
          <div class="rounded-sm group relative overflow-hidden hover:shadow-xl transition-all cursor-pointer aspect-[3/2]" @click="showUIDetails('payment')">
            <img 
              :src="getImagePath('ui-payment01')" 
              alt="Online Payment"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              @error="handleImageError"
            >
            <div class="fallback absolute inset-0">
              <UiPlaceholder title="Online Payment" subtitle="Mobile Payment UI" />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center p-6 z-10">
              <h3 class="text-white text-xl">Online Payment</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- UI Detail Modal -->
    <div v-if="showDetailsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" @click.self="closeModal">
      <div class="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-auto">
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 class="text-2xl font-bold text-primary-900">{{ currentDesign.name }}</h3>
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Modal Body -->
        <div class="p-6">
          <!-- Description -->
          <p v-if="currentDesign.description" class="text-primary-800 mb-8">{{ currentDesign.description }}</p>
          
          <!-- Images Gallery -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(image, index) in currentDesign.images" :key="index" class="rounded-sm aspect-[3/2] relative">
              <img 
                :src="getImagePath(image)" 
                :alt="`${currentDesign.name} - 畫面 ${index + 1}`" 
                class="w-full h-full object-cover"
                @error="handleImageError"
              >
              <div class="fallback absolute inset-0">
                <UiPlaceholder :title="currentDesign.name" :subtitle="`Screen ${index + 1}`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Visual Design Section -->
    <section class="w-full py-16 md:py-12">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-12" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">VISUAL DESIGN</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <!-- Visual Design Items - Images commented out to fix build -->
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual01.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual02.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual03.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual04.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual05.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-sm">
            <img src="../assets/images/visual-design/visual06.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110">
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photography Section -->
    <section class="w-full py-16 md:py-12">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-12" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">PHOTOGRAPHY</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto">
          <!-- 第一行：01, 02 + 第二行的兩張 -->
          <div class="relative overflow-hidden">
            <div class="aspect-[4/3]">
              <img src="../assets/images/photography/photography01.jpg" alt="Photography 01" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
          
          <div class="relative overflow-hidden">
            <div class="aspect-[4/3]">
              <img src="../assets/images/photography/photography02.jpg" alt="Photography 02" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
          
          <!-- photography05 使用 3和7 的格子 -->
          <div class="relative overflow-hidden md:row-span-2 flex items-center">
            <div class="aspect-[4/3] md:h-auto md:aspect-auto w-full">
              <img src="../assets/images/photography/photography05.jpg" alt="Photography 05" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
          
          <!-- photography06 使用 4和8 的格子 -->
          <div class="relative overflow-hidden md:row-span-2 flex items-center">
            <div class="aspect-[4/3] md:h-auto md:aspect-auto w-full">
              <img src="../assets/images/photography/photography06.jpg" alt="Photography 06" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
          
          <!-- 第二行的前兩張：03, 04 -->
          <div class="relative overflow-hidden">
            <div class="aspect-[4/3]">
              <img src="../assets/images/photography/photography03.jpg" alt="Photography 03" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
          
          <div class="relative overflow-hidden">
            <div class="aspect-[4/3]">
              <img src="../assets/images/photography/photography04.jpg" alt="Photography 04" class="w-full h-full object-cover transition-all duration-500 hover:scale-105">
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- INSPIRATION→IDEATION→IMPLEMENTATION Section -->
    <section class="w-full py-16 md:py-24 overflow-hidden" :class="[isDarkMode ? 'bg-transparent' : 'bg-white']">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6" :class="[isDarkMode ? 'text-white' : 'text-primary-900']">INSPIRATION→IDEATION→IMPLEMENTATION</h2>
        
        <!-- Horizontal Scrolling Container -->
        <div id="horizontalScroll" class="relative mt-12 mb-16">
          <div class="flex space-x-4 py-4 w-max">
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration01.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration02.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration03.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration04.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration05.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
            <div class="w-[500px] flex-shrink-0">
              <img src="../assets/images/inspiration/inspiration06.jpg" alt="Inspiration" class="w-full h-[240px] object-cover">
            </div>
          </div>
        </div>
        
        <!-- Quote -->
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl text-primary-800 italic font-light leading-relaxed">
            "The design is not just what it looks like and feels like. The design is how it works"
          </h2>
          <p class="text-lg text-primary-700 mt-4">— Steve Jobs</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  // cspell:words pomodoro
  import { RouterLink } from 'vue-router'
  import { ref, onMounted, computed } from 'vue'
  import LottieAnimation from '../components/LottieAnimation.vue'
  import UiPlaceholder from '../components/UiPlaceholder.vue'
  
  // 導入樣式文件
  import './Home.scss'
  
  // 使用響應式參考來操作動畫
  const arrowDownRef = ref(null)
  
  // 背景顏色過渡相關
  const scrollProgress = ref(0);
  const backgroundColor = computed(() => {
    // 計算顏色值，從白色到黑色的漸變
    const brightness = Math.floor(255 * (1 - scrollProgress.value));
    return `rgb(${brightness}, ${brightness}, ${brightness})`;
  });
  const isDarkMode = computed(() => {
    // 當背景色夠暗時，返回 true 以便切換文字顏色
    return scrollProgress.value > 0.5;
  });
  
  // 導航到首頁（不保留錨點）
  const goToHome = () => {
    // 使用History API徹底清除URL中的錨點
    const cleanUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
    window.history.pushState({}, '', cleanUrl);
    // 強制刷新頁面
    window.location.href = '/';
  };
  
  // UI 項目詳情 modal 控制
  const showDetailsModal = ref(false)
  
  // 定義一個介面使 description 成為可選屬性
  interface Design {
    name: string;
    images: string[];
    description?: string;
  }
  
  const currentDesign = ref<Design>({
    name: '',
    images: []
  })
  
  // 顯示 UI 詳情
  const showUIDetails = (design: string) => {
    // 設置當前設計
    switch(design) {
      case 'reserve':
        currentDesign.value = {
          name: 'Online Reservation',
          images: ['ui-reserve01', 'ui-reserve02', 'ui-reserve03', 'ui-reserve04', 'ui-reserve05', 'ui-reserve06']
        }
        break;
      case 'pomodoro':
        currentDesign.value = {
          name: 'Pomodoro Timer',
          images: ['ui-pomodoro01', 'ui-pomodoro02', 'ui-pomodoro03', 'ui-pomodoro04', 'ui-pomodoro05', 'ui-pomodoro06']
        }
        break;
      case 'coffee':
        currentDesign.value = {
          name: 'Website Design',
          images: ['ui-coffee01', 'ui-coffee02', 'ui-coffee03', 'ui-coffee04', 'ui-coffee05', 'ui-coffee06']
        }
        break;
      case 'payment':
        currentDesign.value = {
          name: 'Online Payment',
          images: ['ui-payment01', 'ui-payment02', 'ui-payment03', 'ui-payment04', 'ui-payment05', 'ui-payment06']
        }
        break;
    }
    
    // 開啟 modal
    showDetailsModal.value = true
  }
  
  // 關閉 modal
  const closeModal = () => {
    showDetailsModal.value = false
  }
  
  // 處理圖片加載錯誤
  const handleImageError = (event: Event) => {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
    }
  }
  
  // 獲取圖片路徑
  const getImagePath = (name: string) => {
    // 嘗試使用相對路徑
    try {
      // 直接返回路徑字符串，在模板中使用
      return new URL(`../assets/images/ui-design/${name}.jpg`, import.meta.url).href;
    } catch (error) {
      console.error('無法載入圖片:', name, error);
      return '';
    }
  }
  
  onMounted(() => {
    // 獲取重要的節點
    const selectedProjectsSection = document.getElementById('selected-projects');
    const scrollContainer = document.getElementById('horizontalScroll');
    let inspirationTitle: Element | null = null;
    
    // 查找包含 "INSPIRATION" 的標題
    document.querySelectorAll('section h2').forEach(h2 => {
      if (h2.textContent?.includes('INSPIRATION')) {
        inspirationTitle = h2;
      }
    });
    
    // 處理水平滾動邏輯
    if (scrollContainer && inspirationTitle) {
      const scrollContent = scrollContainer.querySelector('.flex') as HTMLElement;
      if (scrollContent) {
        const maxScroll = scrollContent.scrollWidth - scrollContainer.clientWidth;
        
        // 監聽頁面滾動
        window.addEventListener('scroll', () => {
          const containerRect = scrollContainer.getBoundingClientRect();
          const titleRect = inspirationTitle!.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // 調整觸發點：只有當容器底部進入視窗時才開始滾動
          if (containerRect.bottom < windowHeight && titleRect.bottom > 0) {
            // 計算滾動比例 (0 到 1)
            const scrollStart = 0;
            const scrollEnd = -titleRect.height - containerRect.height;
            const totalScrollRange = scrollStart - scrollEnd;
            
            // 計算當前容器底部的相對位置
            const currentPosition = containerRect.bottom - windowHeight;
            
            // 轉換為進度比例
            const progress = Math.max(0, Math.min(1, -currentPosition / totalScrollRange));
            
            // 應用水平捲動
            scrollContent.style.transform = `translateX(-${maxScroll * progress}px)`;
          }
        });
      }
    }
    
    // 處理背景顏色變化
    window.addEventListener('scroll', () => {
      // 檢查各節點是否存在
      if (!selectedProjectsSection || !inspirationTitle) return;
      
      const selectedProjectsRect = selectedProjectsSection.getBoundingClientRect();
      const inspirationTitleRect = inspirationTitle.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 背景顏色變化邏輯修改
      // 當 SELECTED PROJECT 標題到達頁面頂部時，背景變為黑色
      if (selectedProjectsRect.top <= 0) {
        // 檢查是否已經開始看到 INSPIRATION 標題
        if (inspirationTitleRect.top < windowHeight) {
          // 開始從黑色變回白色
          // 計算從 INSPIRATION 出現到完全進入視窗的進度
          const totalFadeDistance = windowHeight;
          const currentPosition = windowHeight - inspirationTitleRect.top;
          const fadeBackProgress = Math.max(0, Math.min(1, currentPosition / totalFadeDistance));
          
          // 背景從黑色漸變回白色
          scrollProgress.value = 1 - fadeBackProgress;
        } else {
          // SELECTED PROJECT 在頂部，但還沒看到 INSPIRATION，保持黑色
          scrollProgress.value = 1;
        }
      } else {
        // SELECTED PROJECT 還沒到頂部，根據滾動進度調整背景
        const fadeDistance = windowHeight; // 在一個視窗高度內完成從白色到黑色的過渡
        const currentPosition = windowHeight - selectedProjectsRect.top;
        const fadeProgress = Math.max(0, Math.min(1, currentPosition / fadeDistance));
        
        scrollProgress.value = fadeProgress;
      }
    });
    
    // 初始觸發一次滾動事件，確保初始狀態正確
    window.dispatchEvent(new Event('scroll'));
  });
</script>

<style scoped>
/* 背景顏色過渡效果 */
.bg-transition {
  transition: background-color 0.5s ease;
}
</style>