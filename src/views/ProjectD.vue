<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectNavbar from '../components/ProjectNavbar.vue'

// 定義專案頁面中的導航項目
const navItems = [
  { id: 'project-overview', title: '專案概述' },
  { id: 'project-background', title: '專案背景' },
  { id: 'user-research', title: '使用者研究' },
  { id: 'problem-definition', title: '定義問題' },
  { id: 'product-planning', title: '產品規劃' },
  { id: 'prototype-design', title: '原型設計' },
  { id: 'project-reflection', title: '反思與結論' }
];

// 回到首頁並滾動到 selected-projects 部分
function backToHome() {
  setTimeout(() => {
    const selectedProjectsSection = document.getElementById('selected-projects');
    if (selectedProjectsSection) {
      selectedProjectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 800, behavior: 'smooth' });
    }
  }, 300);
}
</script>

<template>
  <div class="bg-white text-primary-900" lang="zh-Hant,en">
    <!-- 側邊導航組件 -->
    <ProjectNavbar :nav-items="navItems" :show-on-mobile="true" />

    <!-- =========================================================
         Hero — Aurora bg, big metadata grid
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
              <img src="../assets/images/blossom/blossom-icon.png" alt="Blossom app icon"
                class="object-cover w-full h-full rounded-xl" />
            </div>
          </div>

          <div class="min-w-0 flex-1 flex flex-col justify-center text-center md:text-left">
            <span class="eyebrow eyebrow-accent eyebrow-dot mx-auto md:mx-0 mb-3">Case study · 2019</span>
            <h1 class="text-display-lg font-display font-semibold tracking-tight">Blossom 智慧項鍊</h1>
            <p class="text-base md:text-lg text-primary-500 mt-2 italic">Wearable Device | FJU x MIAOPU Design Thinking Workshop</p>
            <div class="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <span class="tag-soft">Service Design</span>
              <span class="tag-soft">UI Design</span>
              <span class="tag-soft">Interview Research</span>
            </div>
          </div>
        </div>

        <div v-reveal class="img-wrap aspect-[16/9] md:aspect-[16/8] mb-10">
          <img src="../assets/images/blossom/blossom-hero-bg.png" alt="blossomLanding"
            class="w-full h-full object-cover" />
        </div>

        <div v-reveal.stagger class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-2">
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Timeline</div>
            <p class="text-primary-900 font-medium">2019.09 – 2019.10</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Role</div>
            <p class="text-primary-900 font-medium">Team Leader · UI Designer</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Outcome</div>
            <p class="text-primary-900 font-medium">研究與產品計畫</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Team</div>
            <p class="text-primary-900 font-medium">UI · 3D · Graphic · Copy</p>
          </div>
        </div>
      </div>
    </header>

    <!-- Body -->
    <div class="max-w-6xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div id="project-overview-body"></div>

      <!-- Overview -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Overview</h2>
        <p class="text-base md:text-lg mb-4">
          本產品概念計畫為輔仁大學苗圃計畫，智能律動 x 穿戴式產品 設計思考工作坊，認識醫療智能律動與產品發想。分為兩階段進行：(1) 設計思考、安養中心與高齡者訪談，(2) 原型製作及成果報告。
        </p>
        <p class="text-base md:text-lg mb-4">
          經由訪談高齡者行為、物理治療與設計思考老師們討論。Blossom 花花萬物，是一款可以進行簡單伸展復健的穿戴式產品，讓高齡者在日常生活中應用，並透過感測裝置紀錄，及時了解自身狀況。
        </p>
        <ul>
          Team Leader & UI Design: Dilly Chen
        </ul>
        <ul>
          3D Modeling: Wendy Lee / Emily Liao
        </ul>
        <ul>
          Graphic Design: Melody Chen
        </ul>
        <ul>
          Copywriter: Lisa Lin / Yan-Cheng Liu / Wen-Rou Chen
        </ul>
      </div>

      <!-- 專案背景 -->
      <div id="project-background" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">專案背景</span>
        </h2>
        <p class="text-base md:text-lg mb-6">
          近年台灣的高齡人口族群快速增加，早在 1993 年就正式邁入高齡化社會（aging society），人口的老化也帶來許多醫療、照護、休閒、心理和社會的問題，找到促進高齡者順利<span class="font-bold">成功老化</span>是非常重要的關鍵。
        </p>
        <p class="text-base md:text-lg mb-3">
          Rowe & Kahn (1997) 定義成功老化主要包含三個要件:
        </p>
        <ul class="text-base text-primary-700 list-disc pl-5 mb-4">
          <li class="mb-1">降低疾病與失能之發生率</li>
          <li class="mb-1">維持高度的認知與身體功能</li>
          <li class="mb-1">積極參與日常活動</li>
        </ul>
        <div class="my-8">
          <div class="rounded-lg overflow-hidden shadow-sm mb-2">
            <img src="../assets/images/blossom/blossom-process.png" alt="blossomProcess" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">設計流程</span>
        </div>
      </div>

      <!-- 使用者研究 -->
      <div id="user-research" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">使用者研究 - 高齡者訪談</span>
        </h2>
        <p class="text-base md:text-lg mb-6">
          我們藉由工作坊的機會參訪安養中心、了解長照服務模式與訪問高齡者。受訪的高齡者皆是自願進入安養中心，而原因主要是孩子不在台灣、可能沒有後輩照顧，有一定的身份背景。
        </p>
        <p class="text-base md:text-lg mb-3">
          在訪談研究前，我們的設計範圍已限縮在高齡者「可復健的穿戴式產品」。因此訪問高齡者的內容直接針對目標產品，主要訪談：
        </p>
        <ul class="text-base text-primary-700 list-decimal pl-6 mb-6">
          <li class="mb-1">生活習慣</li>
          <li class="mb-1">生理症狀</li>
          <li class="mb-1">身體紀錄</li>
          <li class="mb-1">穿戴配件的習慣等</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          將受訪內容製作成 Persona，發現<span class="font-bold">高齡者是更在意自己身體狀況</span>的，進而<span class="font-bold">影響行為：運動習慣、量血壓</span>等，讓自己維持健康狀態。
        </p>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-elderly-couple.jpg" alt="blossomElderlyCouple"
              class="w-full object-cover" />
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-persona.png" alt="blossomPersona" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">高齡者 Persona</span>
        </div>
      </div>

      <!-- 定義問題 -->
      <div id="problem-definition" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">定義問題</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. Just To Be Done (JTBD)</h3>
        <p class="text-base md:text-lg mb-6">
          經過用戶研究，高齡者的運動／復健 JTBD 列出使用者的情境動機，進而整理研究，目標產品是一個可以隨時運動且具紀錄功能的穿戴式產品。
        </p>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-jtbd.png" alt="blossomJTBD" class="w-full object-cover" />
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. How Might We</h3>
        <div class="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm my-2">
          <div class="text-xl md:text-3xl text-center font-medium leading-relaxed text-primary-800">
            穿戴式裝置產品的發展限制之下，<br>
            如何協助高齡者在生活中達到<span class="text-primary-900 font-bold">延緩失能</span>、<br>
            <span class="text-primary-900 font-bold">方便運動且紀錄身體狀態</span>？
          </div>
        </div>
      </div>

      <!-- 產品規劃 -->
      <div id="product-planning" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">產品規劃</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 產品定位</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">符合的穿戴裝置</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              透過穿戴式設備進行日常生活的健康檢測、行動裝置紀錄，可以讓高齡者更方便注意身體狀況。穿戴式裝置包含了：手環、手錶、項鍊、鞋子等。功能主要為：睡眠監測、運動紀錄、心跳次數、步數統計。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">復健運動產品</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              復健的目的是增強和恢復身體失能者的身體功能和生活品質，而高齡者的運動應該以安全為主，合適的運動包含：伸展運動可以改善柔軟度，避免骨骼肌肉受傷、步行能提升下肢及背部肌力並改善平衡能力（台灣老年醫學暨老年學雜誌，2010）。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-picollection.png" alt="blossomCollection" class="w-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">產品定位</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              穿戴式智慧裝置的產品功能、目標與受眾不同，本研究的產品定位是針對高齡者的生活必需為目標。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-product-position.jpg" alt="blossomPosition" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">穿戴式智慧裝置定位</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">產品發展</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              為協助高齡者能方便復健運動，及紀錄身體狀況，我們以「頸部穿戴裝置」為設計方向：結合彈力繩的伸展運動、偵測頸部脈搏紀錄，以及 APP 的資訊呈現。經過小組及老師討論頸部穿戴裝置的可行性後，將方向調整為：
            </p>
            <p class="text-base font-bold mb-2">四大設計方向：</p>
            <ul class="text-base text-primary-700 list-decimal pl-6">
              <li class="mb-1">智能監測 (Smart Monitoring)</li>
              <li class="mb-1">高齡女性 (Elderly Women)</li>
              <li class="mb-1">頸部裝飾 (Neck Decoration)</li>
              <li class="mb-1">高貴典雅 (Elegant & Sophisticated)</li>
            </ul>
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 產品故事</h3>
        <p class="text-base md:text-lg mb-6">
          我們想像穿戴飾品的裝飾功能讓奶奶阿姨們的心情回到年輕時候愛漂亮的年代，想像自己是奧黛麗赫本、是 Coco Chanel，期望女性長者也能藉由妝點自己得到自信與愉悅。結合智能與彈力繩裝置，讓配戴者除了美觀，更能透過拉繩運動強健體魄，運用現代智能裝置為健康把關。
        </p>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/blossom/blossom-story.jpg" alt="blossomStory" class="w-full object-cover" />
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">3. User Flow</h3>
        <p class="text-base md:text-lg mb-6">
          我們將「維持復健運動習慣」設為長期規劃。Blossom 可以進行簡單的復健運動，鼓勵更多高齡者藉由毛巾操、洗澡操的動作概念，活動、伸展上肢以及軀幹。使用 Blossom 正確規律的在日常生活中應用，並透過感應器偵測、紀錄，可以及時了解自身生理資訊與活動，以便於提醒與觀察。
        </p>
        <p class="text-base font-bold mb-3">使用流程：</p>
        <p class="text-base md:text-lg text-primary-800 mb-4">
          維持復健運動習慣（使用產品的彈力繩功能）<span class="mx-2">→</span>設定運動目標（使用 APP）<span class="mx-2">→</span>檢測自己身體狀況（使用 APP）
        </p>
      </div>

      <!-- 原型設計 -->
      <div id="prototype-design" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">原型設計</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 3D 建模</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">初期草圖</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              一開始的草圖設計，珠子是有點方形、彈力繩有兩條，扣頭的地方是像「易利氣」一樣。缺點：沒有握把、容易夾手、不夠女性化。
            </p>
          </div>
        </div>
        <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-3dproduct-1.jpg" alt="blossom3D1" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-3dproduct-2.jpg" alt="blossom3D2" class="w-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">修正過程</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5">
              <li class="mb-2">項鍊造型以女性使用者為主，因此將高齡者族群鎖定為女性。結合天主教念珠形式，連接觸使用公車握把的方式與 T 字型扣環，增加手部握把空間。</li>
              <li class="mb-2">把手改成有曲線、方便手握，連接觸使用磁釦設計，另外加上可拆式的山茶花面板。</li>
              <li class="mb-2">山茶花面背面為 APP 介面，葉子為可動式，能打開與閉合，方便使用者取下。</li>
            </ul>
          </div>
        </div>
        <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-dproduct-3.jpg" alt="blossom3D3" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-dproduct-4.jpg" alt="blossom3D4" class="w-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">造型設計 — 山茶花</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              造型取自山茶花，理由來自於它的花語：白色山茶花象徵純真、理想之戀和長壽。常聽說老人跟小孩其實很像，人在一定的年紀之後反而像孩童般單純天真，能從生活中小小的事情中得到愉悅；理想之戀則是希望高齡長者在走過歲月更迭之後，能回過頭來愛自己；長壽則是希望藉由產品的運用，達到健康長壽。
            </p>
          </div>
        </div>
        <div class="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-1.png" alt="blossomProduct1" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-2.png" alt="blossomProduct2" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-3.png" alt="blossomProduct3" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-4.png" alt="blossomProduct4" class="w-full object-cover" />
          </div>
        </div>
        <div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-5.png" alt="blossomProduct5" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-6.png" alt="blossomProduct6" class="w-full object-cover" />
          </div>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-product-7.jpg" alt="blossomProduct7" class="w-full object-cover" />
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 設計特點</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">首頁</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">顯示每天運動目標的達成率、目前運動狀態的頻率。</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">健康</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">相關身體資訊：每日步數、項鍊彈力繩拉伸次數、心臟與睡眠等資訊。</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">統計</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">針對運動數據的統計資料。</p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">好友</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">好友之間的步數與睡眠顯示、關心提醒等。</p>
          </div>
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto my-8">
          <img src="../assets/images/blossom/blossom-ui.jpg" alt="blossomUI" class="w-full object-cover" />
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto my-8">
          <img src="../assets/images/blossom/blossom-show.jpg" alt="blossomShow" class="w-full object-cover" />
        </div>
      </div>

      <!-- 反思與結論 -->
      <div id="project-reflection" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">反思與結論</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 學習與反思</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-workshop-1.jpg" alt="blossomWorkshop1"
              class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-workshop-3.jpg" alt="blossomWorkshop3"
              class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">訪談方式</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              訪談不僅要規劃訪問內容，也要因應受訪者的性質做調整。高齡者的訪問會面臨到語言不同（中文／台語／外省腔等）、反應速度較慢，訪問雙方資訊落差較大；面對長輩的言行舉止更要注意禮貌。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">設計限制</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              在設計產品時，受工作坊產品限制，必須將產品延伸實際的「復健功能」。在面對設計限制，研究出來的需求與行為不一定能符合產品原本的期待，因此可以透過 MVP 驗證、根據使用者回饋再不斷迭代修正。
            </div>
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 專案結論</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">穿戴裝置技術</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              穿戴裝置的健康量測技術越來越進步，根據物理治療老師的回饋，項鍊量測脈搏變化是有可行性的。環境、動作、生理的感測，可以幫助每個人更避免急性病狀或意外傷害的發生。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">客製化產品</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              強調美觀或裝飾的產品，要考量不同人穿戴時的狀況，如項鍊的長度規劃、墜飾的大小、外觀或顏色等，以滿足使用者對產品的外觀需求。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-4">
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-workshop-4.jpg" alt="blossomWorkshop4"
              class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/blossom/blossom-elderly-couple.jpg" alt="blossomWorkshopMore"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Back to project -->
      <div class="flex justify-between items-center pt-6 md:pt-8 border-t border-gray-300 mt-8 md:mt-12">
        <RouterLink to="/"
          class="text-primary-600 hover:text-primary-900 transition-colors font-medium flex items-center"
          @click="backToHome">
          ← Back to Projects
        </RouterLink>
        <div class="flex gap-4">
          <RouterLink to="/project/iotion" class="link-underline text-primary-700 text-sm">
            ← IOTION
          </RouterLink>
          <RouterLink to="/project/moodzine" class="link-underline text-primary-700 text-sm">
            MOODZiNE →
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
