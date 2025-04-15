<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import { ref, onMounted } from 'vue'
  import LottieAnimation from '../components/LottieAnimation.vue'
  
  // 使用響應式參考來操作動畫
  const arrowDownRef = ref(null)
  
  // 導航到首頁（不保留錨點）
  const goToHome = () => {
    // 獲取當前 URL 的協議和主機部分
    const baseUrl = window.location.protocol + '//' + window.location.host;
    // 設置完整的 URL，不包含任何路徑和錨點
    window.location.href = baseUrl;
  };
  
  // 設置水平滾動效果
  const setupHorizontalScroll = () => {
    const scrollContainer = document.getElementById('horizontalScroll');
    if (!scrollContainer) return;
    
    const scrollContent = scrollContainer.querySelector('.flex') as HTMLElement;
    if (!scrollContent) return;
    
    const maxScroll = scrollContent.scrollWidth - scrollContainer.clientWidth;
    
    // 監聽頁面滾動
    window.addEventListener('scroll', () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 當容器進入視窗範圍
      if (containerRect.top < windowHeight && containerRect.bottom > 0) {
        // 計算滾動百分比
        const visibleHeight = Math.min(windowHeight, containerRect.bottom) - 
                             Math.max(0, containerRect.top);
        const percentVisible = visibleHeight / containerRect.height;
        const scrollOffset = maxScroll * Math.min(percentVisible * 1.5, 1);
        
        // 應用水平捲動
        scrollContent.style.transform = `translateX(-${scrollOffset}px)`;
      }
    });
  };
  
  onMounted(() => {
    setupHorizontalScroll();
  });
</script>

<template>
  <div>
    <div class="min-h-screen w-full py-16 md:py-32 bg-white">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <!-- Hero Section -->
        <div class="w-full mx-auto space-y-8">
          <!-- Main Content -->
          <div class="space-y-8">
            <!-- Heading -->
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-900 leading-tight">
              Hello! I'm Dilly Chen.
            </h1>
            
            <!-- Subheading -->
            <p class="text-3xl md:text-4xl lg:text-5xl text-primary-700 leading-relaxed tracking-wide">
              I'm a Product Designer, crafting end-to-end solutions that balance business goals and user needs, creating meaningful product experiences.
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-6">
            <RouterLink
              to="/about"
              class="px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium flex items-center"
            >
              ABOUT <span class="ml-2 text-white">→</span>
            </RouterLink>
            <button
              @click="goToHome"
              class="px-8 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg font-medium flex items-center"
            >
              PROJECT <span class="ml-2 text-white">→</span>
            </button>
          </div>
          
          <!-- Scroll Down Animation Container -->
          <div class="flex justify-center mb-10">
            <div class="w-16 h-16">
              <LottieAnimation
                ref="arrowDownRef"
                path="/animations/arrow-down.json"
                class="arrow-down-anim"
                :loop="true"
                :autoplay="true"
                :speed="1"
                color="#18181b"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SELECTED PROJECT Section -->
    <section id="selected-projects" class="w-full py-16 md:py-24 bg-white">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-900 mb-12">SELECTED PROJECT</h2>
        
        <div class="space-y-12 max-w-5xl mx-auto">
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
    <section class="w-full py-16 md:py-24 bg-gray-50 hidden">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-900 mb-12">UI DESIGN</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- UI Design Items - Images commented out to fix build -->
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-1.jpg" alt="UI Design 1" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">Mobile App Dashboard</h3>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-2.jpg" alt="UI Design 2" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">E-commerce Product Page</h3>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-3.jpg" alt="UI Design 3" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">Banking App Interface</h3>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-4.jpg" alt="UI Design 4" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">Admin Dashboard</h3>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-5.jpg" alt="UI Design 5" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">Smart Home App</h3>
            </div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/ui-design-6.jpg" alt="UI Design 6" class="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"> -->
            <div class="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-white text-lg font-medium">Travel App Interface</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Visual Design Section -->
    <section class="w-full py-16 md:py-24 bg-white hidden">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-900 mb-12">VISUAL DESIGN</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Visual Design Items - Images commented out to fix build -->
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-1.jpg" alt="Visual Design 1" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-2.jpg" alt="Visual Design 2" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-3.jpg" alt="Visual Design 3" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-4.jpg" alt="Visual Design 4" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-5.jpg" alt="Visual Design 5" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="group relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/visual-design-6.jpg" alt="Visual Design 6" class="w-full aspect-[4/3] object-cover transition-all duration-300 group-hover:brightness-110"> -->
            <div class="absolute inset-0 bg-primary-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Photography Section -->
    <section class="w-full py-16 md:py-24 bg-gray-50 hidden">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-900 mb-12">PHOTOGRAPHY</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">
          <!-- Photography Items - Images commented out to fix build -->
          <div class="md:col-span-3 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-1.jpg" alt="Photography 1" class="w-full aspect-video object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
          
          <div class="md:col-span-3 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-2.jpg" alt="Photography 2" class="w-full aspect-video object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
          
          <div class="md:col-span-2 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-3.jpg" alt="Photography 3" class="w-full aspect-[9/16] object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
          
          <div class="md:col-span-4 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-4.jpg" alt="Photography 4" class="w-full aspect-video object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
          
          <div class="md:col-span-4 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-5.jpg" alt="Photography 5" class="w-full aspect-video object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
          
          <div class="md:col-span-2 relative overflow-hidden rounded-lg">
            <!-- <img src="../assets/photo-6.jpg" alt="Photography 6" class="w-full aspect-[9/16] object-cover transition-all duration-500 hover:scale-105"> -->
          </div>
        </div>
      </div>
    </section>
    
    <!-- INSPIRATION→IDEATION→IMPLEMENTATION Section -->
    <section class="w-full py-16 md:py-24 bg-white overflow-hidden hidden">
      <div class="w-full px-4 md:px-8 lg:px-16">
        <h2 class="text-4xl md:text-5xl font-bold text-primary-900 mb-6">INSPIRATION→IDEATION→IMPLEMENTATION</h2>
        
        <!-- Horizontal Scrolling Container -->
        <div id="horizontalScroll" class="relative mt-12 mb-16">
          <div class="flex space-x-8 py-4 w-max">
            <div class="w-[500px] flex-shrink-0">
              <!-- <img src="../assets/design-process-1.jpg" alt="Inspiration" class="w-full h-[300px] object-cover rounded-lg shadow-md"> -->
            </div>
            <div class="w-[500px] flex-shrink-0">
              <!-- <img src="../assets/design-process-2.jpg" alt="Research" class="w-full h-[300px] object-cover rounded-lg shadow-md"> -->
            </div>
            <div class="w-[500px] flex-shrink-0">
              <!-- <img src="../assets/design-process-3.jpg" alt="Ideation" class="w-full h-[300px] object-cover rounded-lg shadow-md"> -->
            </div>
            <div class="w-[500px] flex-shrink-0">
              <!-- <img src="../assets/design-process-4.jpg" alt="Prototyping" class="w-full h-[300px] object-cover rounded-lg shadow-md"> -->
            </div>
            <div class="w-[500px] flex-shrink-0">
              <!-- <img src="../assets/design-process-5.jpg" alt="Implementation" class="w-full h-[300px] object-cover rounded-lg shadow-md"> -->
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
    
    <!-- Get in touch Section -->
    <section class="w-full bg-gray-50 py-8 sm:py-16">
      <div class="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-6 text-primary-900">Get in touch!</h2>
        <p class="mb-8 text-md md:text-base text-primary-800">Say hi → byby325@gmail.com</p>
        <div class="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/dilly-chen/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-900 text-white rounded-full px-8 py-4 hover:bg-gray-800 transition-colors text-lg"
          >
            LINKEDIN
          </a>
          <a
            href="#"
            class="bg-gray-900 text-white rounded-full px-8 py-4 hover:bg-gray-800 transition-colors text-lg"
          >
            RESUME
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  h1 {
    line-height: 1.1;
  }
  
  p.leading-relaxed {
    line-height: 1.5;
  }
  
  .lottie-scroll {
    cursor: pointer;
  }
  
  .arrow-down-anim {
    opacity: 0.8;
  }
  
  #horizontalScroll {
    overflow: hidden;
  }
  
  #horizontalScroll .flex {
    transition: transform 0.1s ease-out;
  }
</style>
