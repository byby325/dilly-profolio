<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectNavbar from '../components/ProjectNavbar.vue'

// 定義專案頁面中的導航項目
const navItems = [
  { id: 'project-overview', title: '專案概述' },
  { id: 'project-background', title: '專案背景' },
  { id: 'user-research', title: '使用者研究' },
  { id: 'hypothesis', title: '假設驗證' },
  { id: 'deliverables', title: '介面規劃' },
  { id: 'usability-testing', title: '使用者測試' },
  { id: 'demonstration', title: '原型展示' },
  { id: 'conclusion', title: '結論' }
]

// 回到首頁並滾動到 selected-projects 部分
function backToHome() {
  setTimeout(() => {
    const selectedProjectsSection = document.getElementById('selected-projects')
    if (selectedProjectsSection) {
      selectedProjectsSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' })
    }
  }, 300)
}
</script>

<template>
  <div class="bg-white text-primary-900" lang="zh-Hant,en">
    <!-- 側邊導航 -->
    <ProjectNavbar :nav-items="navItems" :show-on-mobile="true" />

    <!-- =========================================================
         Hero
         ========================================================= -->
    <header class="aurora-bg relative pt-10 md:pt-16 pb-12 md:pb-20">
      <div class="max-w-6xl mx-auto px-4 md:px-6">
        <div v-reveal class="mb-6 md:mb-8">
          <RouterLink
            to="/#selected-projects"
            class="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
            All projects
          </RouterLink>
        </div>

        <div id="project-overview" v-reveal class="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">
          <div class="w-24 h-24 md:w-28 md:h-28 bg-white rounded-2xl shadow-card flex-shrink-0 overflow-hidden p-3 mx-auto md:mx-0 border border-primary-100">
            <div class="w-full h-full bg-primary-100 rounded-xl flex items-center justify-center overflow-hidden">
              <img src="../assets/images/firefoxlite/firefoxlite-icon.png" alt="Firefox Lite app icon"
                class="object-cover w-full h-full rounded-xl" />
            </div>
          </div>

          <div class="min-w-0 flex-1 flex flex-col justify-center text-center md:text-left">
            <span class="eyebrow eyebrow-accent eyebrow-dot mx-auto md:mx-0 mb-3">Case study · 2019</span>
            <h1 class="text-display-lg font-display font-semibold tracking-tight">FirefoxLite Browser Feature</h1>
            <p class="text-base md:text-lg text-primary-500 mt-2 italic">Mozilla Campus Seeding Program</p>
            <div class="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <span class="tag-soft">Mozilla</span>
              <span class="tag-soft">UX Research</span>
              <span class="tag-soft">UI/UX Design</span>
              <span class="tag-soft">Android</span>
            </div>
          </div>
        </div>

        <div v-reveal class="img-wrap aspect-[16/9] md:aspect-[16/8] mb-10">
          <img src="../assets/images/firefoxlite/firefoxlite-landing.png" alt="Firefox Lite landing"
            class="w-full h-full object-cover" />
        </div>

        <div v-reveal.stagger class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-2">
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">專案期間</div>
            <p class="text-primary-900 font-medium">2019.10 – 2019.12</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">負責角色</div>
            <p class="text-primary-900 font-medium">UX/UI Designer</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">成果產出</div>
            <p class="text-primary-900 font-medium">Mozilla Campus Seeding Program</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">工具軟體</div>
            <p class="text-primary-900 font-medium">InVision · Miro</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Body -->
    <div class="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">

      <!-- Overview -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Overview</h2>
        <p class="text-base md:text-lg mb-4">
          本研究為 Mozilla Campus Seeding Program ，以 Firefox Lite App 為 Case Study ， 透過使用者研究了解使用者對行動裝置瀏覽器的使用行為與需求，將現階段的 FirefoxLite App 規劃新功能與操作方式改善。根據手機的使用量狀況、瀏覽網頁習慣的研究，我們針對 Android 使用者的瀏覽器使用行為進行訪談研究，重新設計 Firefox Lite 在版面配置，以及「閱讀模式」、「分享功能」的操作體驗，拓展不同年齡層的使用者，提升使用者在瀏覽器閱讀的舒適性，以及改善跨裝置體驗。
        </p>
        <ul class="text-sm text-primary-600 mt-4 space-y-1">
          <li>Team Leader: Dilly Chen</li>
          <li>UX/UI Designer: Dilly Chen</li>
          <li>Graphic Design: Tai Jiang Lin</li>
          <li>PPT: Lisa Lin / Zach Huang / Zhi Xing Dai</li>
        </ul>

        <div class="my-8">
          <div class="rounded-lg overflow-hidden shadow-sm mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-process.png" alt="Firefox Lite design process" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">設計流程</span>
        </div>
      </div>

      <!-- 專案背景 -->
      <div id="project-background" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">專案背景</span>
        </h2>

        <p class="text-base md:text-lg mb-4">
          Firefox Lite 是由 Mozilla 台灣團隊一手打造的行動瀏覽器，其特色為安裝容量小、瀏覽速度快，並具「阻擋追蹤廣告」功能 (block tracking ads)，即使是入門級手機使用者，也能享受安全又快速的瀏覽體驗。 Firefox Lite 針對東南亞的 Mobile First 市場特性，提供使用者可以更安全快速的瀏覽體驗。
        </p>

        <div class="my-8">
          <div class="rounded-lg overflow-hidden mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-hero-bg.jpg" alt="Firefox Lite browser features" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Firefox Lite 主要特色</span>
        </div>

        <p class="text-base md:text-lg mb-4">
          Firefox Lite 於 2019 年上架，目前僅開放 Android 系統下載，主打著輕量級瀏覽器，除了搜尋功能之外，也整合了購物、新聞及遊戲內容。藉由 Mozilla Campus Seeding Program ，我們以台灣的使用者為例，研究 Browser Feature ，並提出功能設計。從使用者的手機與瀏覽器使用行為資料發現：
        </p>
        <ul class="text-base md:text-lg text-primary-700 list-decimal pl-6 mb-4 space-y-1">
          <li>手機使用量以「睡前」的時間點為最高峰</li>
          <li>平均一天手機使用時間為 3.1 小時，瀏覽器使用量約佔 1/6，大約 30 - 40 分鐘</li>
          <li>手機與電腦的跨裝置操作日趨頻繁，使用者可能會以不同情境選擇最好的智慧裝置來操作</li>
        </ul>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-mobile-usage.jpg" alt="Mobile phone usage in a day" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">手機使用時段與來源比例</span>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-cross-device.jpg" alt="Cross-device usage statistics" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Cross-Device 使用概況（InsightXplorer, 2017）</span>
        </div>
      </div>

      <!-- 使用者研究 -->
      <div id="user-research" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">使用者研究</span>
        </h2>

        <h3 class="text-2xl font-bold mb-6">1. Interview</h3>
        <p class="text-base md:text-lg mb-8">
          首先訪談研究訪問了不同年齡與背景受訪者，且為 Android 的 Firefox 使用者，以利了解不同使用者的行為模式。結果顯示使用者的行為與需求是追求 (1) 閱讀體驗，以及 (2) 資訊存取的便利性。
        </p>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-6">2. Empathy Map</h3>
        <p class="text-base md:text-lg mb-8">
          我們訪談了青年設計師、壯年工程師與中年教授。將訪談內容整理成 Empathy Map 。受訪者使用瀏覽器的行為，皆以閱讀資訊為主。痛點為不方便閱讀、整理資訊，像是手機螢幕太小，會把資訊轉至電腦瀏覽。因此在需求上，他們想要更好的閱讀體驗，以及保存資訊的便利性。
        </p>

        <div class="space-y-8 mb-8">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-interview-1.jpg" alt="Empathy map - Early Adulthood Interviewee, Graphic Designer" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Early Adulthood Interviewee — Graphic Designer</span>
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-interview-2.jpg" alt="Empathy map - Mature Adulthood Interviewee, Assistant Professor" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Mature Adulthood Interviewee — Assistant Professor</span>
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-interview-3.jpg" alt="Empathy map - Midlife Interviewee, Software Developer" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Midlife Interviewee — Software Developer</span>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-interview-summary.jpg" alt="Interview summary" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Summary</span>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-6">3. User Journey</h3>
        <p class="text-base md:text-lg mb-8">
          我們將 Empathy Map 進一步整理為 User Journey 。將行動瀏覽器的功能對應受訪者的使用行為、使用過程的感受，發現受訪者在「目標的搜尋」是追求效率的，而搜尋後的行為主要是「閱讀資訊」、「分享資訊」。
        </p>

        <div class="space-y-8 mb-8">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-journey-1.jpg" alt="Search Information Journey Map" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Search Information Journey Map</span>
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-journey-2.jpg" alt="Reading Behaviors Journey Map" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Reading Behaviors Journey Map</span>
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-journey-3.jpg" alt="Search News Journey Map" class="w-full object-cover" />
            <span class="block text-center text-sm text-primary-500 mt-2">Search News Journey Map</span>
          </div>
        </div>
      </div>

      <!-- 假設驗證 / Hypothesis -->
      <div id="hypothesis" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">Hypothesis</span>
        </h2>

        <h3 class="text-2xl font-bold mb-6">1. Browser Upgrade</h3>
        <p class="text-xl md:text-2xl font-medium text-primary-900 mb-4">How to expand the target audience?</p>
        <p class="text-base md:text-lg mb-8">
          透過改善瀏覽器使用體驗與增進功能，來讓更多目標族群願意使用。並且滿足使用者的喜好與需求，來讓 Firefox Lite 更有趣味性、適合所有人使用。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-photo-3.jpg" alt="Team workshop" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-photo-4.jpg" alt="Mozilla group" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-6">2. How Might We</h3>
        <p class="text-base md:text-lg mb-8">
          我們透過 How Might We 來定義問題與規劃原型設計及後續發展。
        </p>

        <div class="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm">
          <div class="text-xl md:text-2xl text-center font-medium leading-relaxed text-primary-800 space-y-3">
            <p>How to make your <span class="text-primary-900 font-bold">reading experience</span> comfortable?</p>
            <p>How to improve <span class="text-primary-900 font-bold">sharing and cross-device</span> experience?</p>
          </div>
        </div>
      </div>

      <!-- Deliverables / 介面規劃 -->
      <div id="deliverables" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">Deliverables</span>
        </h2>

        <!-- Product Structure -->
        <h3 class="text-2xl font-bold mb-6">1. Product Structure</h3>
        <p class="text-base md:text-lg mb-8">
          先分析市場主流的瀏覽器競品，並比較「<strong>閱讀模式</strong>」與「<strong>分享</strong>」的功能比較。Firefox Lite 瀏覽器專注於單手操作 (one-hand) 的介面設計，並以圖示 (icons) 來傳達功能資訊。
        </p>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-browser-structure.jpg" alt="Mobile browser market share" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Mobile Browser Market Share - Taiwan (Statcounter, 2019)</span>
        </div>

        <p class="text-base md:text-lg mb-8">
          Firefox Lite 的 Android 競爭者主要是 Chrome 和 Samsung Internet。由於競爭對手 Google, Apple, Samsung 皆有研發手機或作業系統，使得原生瀏覽器皆為自家品牌，造成 Firefox 在市佔率上較為弱勢。
        </p>

        <h4 class="text-xl font-bold mb-4">Firefox Lite Original Layout</h4>
        <p class="text-base md:text-lg mb-8">
          在原本的 Layout ，秉持著單手操作的設計，主要的選單及功能都放在「拇指熱區」(one-hand) 裡，只要點擊右下角的 icon 就能展開所有功能列。
        </p>

        <div class="my-8">
          <div class="overflow-hidden mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-layout.jpg" alt="Firefox Lite original layout" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Firefox Lite Original Layout</span>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <!-- Reader Mode -->
        <h3 class="text-2xl font-bold mb-6">2. Reader Mode</h3>
        <h4 class="text-xl font-bold mb-4">Current Reader Mode</h4>
        <p class="text-base md:text-lg mb-8">
          Chrome 並沒有任何調節的功能，而 Samsung Internet 和 Firefox 有 Reader Mode，icon 位置都是在 Application Bar ， Firefox Lite 則是沒有 Reader Mode ，然而夜間模式是放在 Bottom Sheet 裡。
        </p>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-current-reader-mode.jpg" alt="Reader Mode UI Design comparison" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Reader Mode UI Design</span>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-reader-screens.jpg" alt="Reader mode screens" class="w-full object-cover" />
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-reader-steps.jpg" alt="Reader mode steps" class="w-full object-cover" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 p-4 flex items-center justify-center h-32">
              <img src="../assets/images/firefoxlite/firefoxlite-reader-fontsize.jpg" alt="Font size adjustment" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold">A. Font Size Adjustment</h4>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 p-4 flex items-center justify-center h-32">
              <img src="../assets/images/firefoxlite/firefoxlite-reader-bgcolor.jpg" alt="Switching background color" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold">B. Switching Background Color</h4>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 p-4 flex items-center justify-center h-32">
              <img src="../assets/images/firefoxlite/firefoxlite-reader-boldfont.jpg" alt="Bold font" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold">C. Bold Font</h4>
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <!-- Share Function -->
        <h3 class="text-2xl font-bold mb-6">3. Share Function</h3>
        <h4 class="text-xl font-bold mb-4">Current Share Function</h4>
        <p class="text-base md:text-lg mb-8">
          每個瀏覽器都可以分享網址給別人，但透過帳號同步，「傳送到裝置」的平台主要是 Firefox 和 Chrome（Firefox 在 iOS 可以傳送，Samsung 手機不行）。Share function 的 icon 位置，依照介面設計各有不同。
        </p>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-current-share.jpg" alt="Share Function UI Design comparison" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">Share Function UI Design</span>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-share-steps.jpg" alt="Share function steps" class="w-full object-cover" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 aspect-[3/4] flex items-center justify-center p-2">
              <img src="../assets/images/firefoxlite/firefoxlite-share-url.jpg" alt="URL/Screenshot" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold text-center">D. URL / Screenshot</h4>
          </div>
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 aspect-[3/4] flex items-center justify-center p-2">
              <img src="../assets/images/firefoxlite/firefoxlite-sendtodevice.jpg" alt="Firefox Send to Device" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold text-center">E. Firefox Send to Device (Sync Account)</h4>
          </div>
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50 aspect-[3/4] flex items-center justify-center p-2">
              <img src="../assets/images/firefoxlite/firefoxlite-firefoxsend.jpg" alt="Firefox Send" class="max-h-full object-contain" />
            </div>
            <h4 class="text-base font-bold text-center">F. Firefox Send</h4>
          </div>
        </div>
      </div>

      <!-- 使用者測試 -->
      <div id="usability-testing" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">4. Usability Testing</span>
        </h2>

        <p class="text-base md:text-lg mb-8">
          在使用性測試，我們找了 12 位受測者，操作 Reader Mode 與 Share Function ，並訪問使用者對於<strong>功能</strong>與<strong>操作流程</strong>上的回饋。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-test-function.jpg" alt="Function testing" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-test-layout.jpg" alt="Layout testing" class="w-full object-cover" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">Function</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-decimal pl-6 space-y-2">
              <li>有些人認為夜間模式與閱讀模式的功能差不多，很可能會操作錯誤</li>
              <li>iOS 和 Android 的作業系統皆已有夜間模式 (Dark mode)，瀏覽器應該參照手機系統來設計</li>
              <li>Firefox Lite 原本的功能「我的截圖」，可能與新設計的「分享頁面截圖」功能混淆</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">Layout</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-decimal pl-6 space-y-2">
              <li>Firefox Lite 在點擊「⋯」 icon 前後 Bottom Navigation 畫面不一，使用者容易誤觸</li>
              <li>Firefox Lite 將功能集中於「⋯」選單的操作不直覺，但熟練後能提升點擊時的效率</li>
            </ul>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-final-issues.jpg" alt="Final usability issues" class="w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Demonstration -->
      <div id="demonstration" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">Demonstration</span>
        </h2>

        <h3 class="text-2xl font-bold mb-6">1. Reader Mode</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">
          <div class="overflow-hidden rounded-lg bg-gray-50 max-w-xs mx-auto">
            <img src="../assets/images/firefoxlite/firefoxlite-reader-mode.gif" alt="Reader Mode demonstration" class="w-full object-cover" />
          </div>
          <ul class="text-base md:text-lg space-y-3">
            <li><span class="font-bold">A.</span> Font Size</li>
            <li><span class="font-bold">B.</span> Background Color</li>
            <li><span class="font-bold">C.</span> Bold Font</li>
          </ul>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-6">2. Share Function</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50">
              <img src="../assets/images/firefoxlite/firefoxlite-share-url.gif" alt="URL/Screenshot demo" class="w-full object-cover" />
            </div>
            <h4 class="text-base font-bold text-center">D. URL / Screenshot</h4>
          </div>
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50">
              <img src="../assets/images/firefoxlite/firefoxlite-sendtodevice.gif" alt="Firefox Send to Device demo" class="w-full object-cover" />
            </div>
            <h4 class="text-base font-bold text-center">E. Firefox Send to Device</h4>
          </div>
          <div>
            <div class="overflow-hidden rounded-lg mb-3 bg-gray-50">
              <img src="../assets/images/firefoxlite/firefoxlite-firefoxsend.gif" alt="Firefox Send demo" class="w-full object-cover" />
            </div>
            <h4 class="text-base font-bold text-center">F. Firefox Send</h4>
          </div>
        </div>

        <div class="flex justify-center mt-8">
          <a href="https://reurl.cc/e9mbaQ" target="_blank" rel="noopener noreferrer"
            class="my-4 btn btn-lg btn-primary cursor-pointer">
            PROTOTYPE <span class="ml-2 text-white">→</span>
          </a>
        </div>
      </div>

      <!-- Conclusion -->
      <div id="conclusion" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class="flex items-center font-bold">Conclusion</span>
        </h2>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/firefoxlite/firefoxlite-conclusion.jpg" alt="Project conclusion" class="w-full object-cover" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">Make reading experience comfortable</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base md:text-lg mb-4">
              針對單手操作的閱讀模式，新增了字體大小、粗細對比、背景顏色調節功能，滿足各年齡層使用者在不同情境下的閱讀體驗。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">Improve sharing and cross-device experience</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base md:text-lg mb-4">
              將 Mozilla 現有的傳輸方式，應用於此瀏覽器，提升跨裝置傳輸資料的便利性，來因應不同情境的使用。在未來展望中，我們希望使用者在隱私保護下，更享受 FirefoxLite 瀏覽器的使用。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div class="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-photo-1.jpg" alt="Workshop photo" class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[4/3] overflow-hidden rounded-lg">
            <img src="../assets/images/firefoxlite/firefoxlite-photo-2.jpg" alt="Team photo" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Project navigation -->
      <nav class="flex items-center justify-between text-sm pt-6 md:pt-8 border-t border-gray-300 mt-8 md:mt-12">
        <RouterLink to="/project/moodzine" class="link-underline text-primary-700">
          ← MOODZiNE
        </RouterLink>
        <RouterLink
          to="/"
          class="text-primary-600 hover:text-primary-900 transition-colors font-medium"
          @click="backToHome"
        >
          All Projects
        </RouterLink>
        <RouterLink to="/project/iotion" class="link-underline text-primary-700">
          IOTION →
        </RouterLink>
      </nav>
    </div>
  </div>
</template>
