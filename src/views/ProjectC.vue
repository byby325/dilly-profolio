<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProjectNavbar from '../components/ProjectNavbar.vue'

// 定義專案頁面中的導航項目
const navItems = [
  { id: 'project-overview', title: '專案概述' },
  { id: 'project-background', title: '專案背景' },
  { id: 'competitor-analysis', title: '競品分析' },
  { id: 'user-research', title: '使用者研究' },
  { id: 'problem-definition', title: '定義問題' },
  { id: 'interface-planning', title: '介面規劃' },
  { id: 'prototype-design', title: '原型設計' },
  { id: 'usability-testing', title: '使用性測試' },
  { id: 'project-reflection', title: '反思與結論' }
];

// 回到首頁並滾動到 selected-projects 部分
function backToHome() {
  setTimeout(() => {
    const selectedProjectsSection = document.getElementById('selected-projects');
    if (selectedProjectsSection) {
      selectedProjectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({
        top: 800,
        behavior: 'smooth'
      });
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
              <img src="../assets/images/iotion/iotion-icon.png" alt="IOTION app icon"
                class="object-cover w-full h-full rounded-xl" />
            </div>
          </div>

          <div class="min-w-0 flex-1 flex flex-col justify-center text-center md:text-left">
            <span class="eyebrow eyebrow-accent eyebrow-dot mx-auto md:mx-0 mb-3">Case study · 2019</span>
            <h1 class="text-display-lg font-display font-semibold tracking-tight">IOTION</h1>
            <p class="text-base md:text-lg text-primary-500 mt-2 italic">Being in motion and taking action.</p>
            <div class="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
              <span class="tag-soft">UI/UX Design</span>
              <span class="tag-soft">User Research</span>
              <span class="tag-soft">Usability Test</span>
            </div>
          </div>
        </div>

        <div v-reveal class="img-wrap aspect-[16/9] md:aspect-[16/8] mb-10">
          <img src="../assets/images/iotion/iotion-landing.png" alt="iotionLanding"
            class="w-full h-full object-cover" />
        </div>

        <div v-reveal.stagger class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-2">
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Timeline</div>
            <p class="text-primary-900 font-medium">2019.04 – 2019.06</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Role</div>
            <p class="text-primary-900 font-medium">個人 Side Project</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Outcome</div>
            <p class="text-primary-900 font-medium">研究與產品計畫</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4">
            <div class="text-[11px] uppercase tracking-[0.2em] text-primary-500 mb-1">Tools</div>
            <p class="text-primary-900 font-medium">Adobe XD · Illustrator</p>
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
          行動裝置與網路普及，社交不再侷限於現實生活中面對面的交流與認識，大多人生活圈不同，少了很多接觸人群的機會。科技便利與社會形態的改變，交友軟體的便利性受到群眾歡迎，使用者期望情感需求與被動歸屬需求的滿足。
        </p>
        <p class="text-base md:text-lg mb-4">
          本專案透過<strong>問卷調查</strong>、<strong>競品分析</strong>、<strong>使用性測試</strong>來探討交友 APP 使用行為與使用性研究，並重新設計一款交友 APP ，提出原型設計、使用測試與結論。 <strong>iotion 為一款交友 APP</strong>，企圖打造輕鬆交友、打破社交障礙、給予更準確的配對機制與活動參與。
        </p>
      </div>

      <!-- 專案背景 -->
      <div id="project-background" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">專案背景</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">網路交友盛行</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              科技影響了民眾面對面的社交障礙，人與人的關係愈來愈被動。2005 年至 2012 年，美國人民認識配偶的管道以線上(35%)為大宗，其次是職場與朋友圈 (Rosenfeld, 2012)。社交數位產品從電腦網頁至行動裝置 APP，數量龐大且競爭激烈，產品因應不同客群，<strong>交友方式</strong>也有所不同。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">交友軟體使用動機</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              交友軟體的使用者在人際交往上可能常常是被動的，且期待與現實有落差的，因而使用交友軟體。使用者可分為：
            </p>
            <ul class="text-base mb-4">
              <li class="mb-1">(1) 跟著流行動機與行為者</li>
              <li class="mb-1">(2) 為尋求特定目的與行為者（張淳萱，2018）</li>
            </ul>
            <p class="text-base mb-4">
              現今交友軟體的主要服務是透過定位：
            </p>
            <ul class="text-base mb-4">
              <li class="mb-1">(1) 搜尋附近使用者</li>
              <li class="mb-1">(2) 搜尋使用者配對（配對成功即成為好友）</li>
            </ul>
            <p class="text-base mb-4">
              社交過程僅透過網路社交，較少將網路與現實結合，且國家與地區不同，交友觀念也有所差異。有鑑於此，希望透過研究，設計出真實與有趣的互動模式。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">核心洞察</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base mt-4">
              <li class="mb-2">→ 多數交友 APP 的操作體驗過程僅在網路進行，鮮少與現實結合</li>
              <li class="mb-2">→ 使用者的使用動機不一定是交友，有可能是一時跟隨流行</li>
              <li class="mb-2">→ 風土民情不同，交友 APP 的受眾也有所差異</li>
            </ul>
          </div>
        </div>
        <div class="my-8">
          <div class="rounded-lg overflow-hidden shadow-sm mb-2">
            <img src="../assets/images/iotion/iotion-process.png" alt="iotionProcess" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">設計流程</span>
        </div>
      </div>

      <!-- 競品分析 -->
      <div id="competitor-analysis" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">競品分析</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 競品介紹</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8">
          <div class="md:col-span-2">
            <p class="text-base md:text-lg mb-4">
              交友 APP 利用了網路與互動的特性，將沒有關係的陌生人聚集在一起，提供使用者尋找伴侶、結交新朋友的方式，是一種新穎的社交管道。隨著科技進步與應用程式的普及，交友 APP 的市場愈來愈競爭，也不斷以新的型態現身，提供使用者更多元的選擇。
            </p>
            <p class="text-base md:text-lg mb-4">
              本研究整理其功能具代表性、以及臺灣較熱門的 6 款交友 APP：Wootalk, Tinder, Skout, GoodNight, Eatgether, Rooit。
            </p>
          </div>
          <div class="relative">
            <div class="bg-gray-200 rounded-2xl p-4 relative">
              <div
                class="absolute left-5 -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-gray-200 border-r-[10px] border-r-transparent">
              </div>
              <p class="text-sm md:text-base text-center">
                透過競品蒐集與分析，了解現有產品特性、定位產品方向，再以使用性測試修正問題與目標。
              </p>
            </div>
          </div>
        </div>

        <!-- 6 款交友 APP -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-wootalk.png" alt="Wootalk" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">A. Wootalk</span>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-tinder.png" alt="Tinder" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">B. Tinder</span>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-skout.png" alt="Skout" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">C. Skout</span>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-goodnight.png" alt="Goodnight" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">D. Goodnight</span>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-eatgether.png" alt="Eatgether" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">E. Eatgether</span>
          </div>
          <div class="text-center">
            <div class="overflow-hidden rounded-lg mb-2">
              <img src="../assets/images/iotion/iotion-app-rooit.png" alt="Rooit" class="w-full object-cover" />
            </div>
            <span class="text-sm font-bold">F. Rooit</span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">Wootalk</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Wootalk 提供網站與 APP，功能大致相同，為最單純的「匿名聊天」，使用者登入後立即進入匿名聊天視窗，並有密語模式：可輸入密語（如：演唱會），密語相同者即配對進入匿名聊天視窗。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-4">
          <div>
            <h3 class="text-xl font-bold mb-2">Tinder</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Tinder 配對操作方式為：設定搜尋年齡、性別、距離直覺操作配對（往右滑喜歡，往左滑不喜歡），互相喜歡即成為朋友（可開始聊天）。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-4">
          <div>
            <h3 class="text-xl font-bold mb-2">Skout</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Skout 為全球性的社交網路，使用族群多以西方國家、洋人、華僑、異國戀為多數。操作直性，利用手機定位功能，可直接觀看附近有哪些線上陌生人，觀看個人簡介及直接聊天。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-4">
          <div>
            <h3 class="text-xl font-bold mb-2">Goodnight</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Goodnight 主要功能為「匿名聊天」，但是以語音、講電話的方式來取代文字的匿名。以聲音為首要感官辨識，若互相有興趣才能成為朋友。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-4">
          <div>
            <h3 class="text-xl font-bold mb-2">Eatgether</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Eatgether 功能以「社群聊天」為主，將社群限制為「一起吃飯」的實體活動舉辦，透過飯局，使用者能實際接觸人群。使用者也會得到活動的「舉辦」、「參與」的評價分數，讓自己或其他人檢視，給予飯局活動更有保障。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-4">
          <div>
            <h3 class="text-xl font-bold mb-2">Rooit</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              Rooit 功能為「匿名聊天」，但在雙方聊天之中加入了「情境」、「AI 機器人」，提供更有氛圍與方向的聊天環境，降低社交障礙。
            </p>
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">2. 競品比較</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">APP 綜合評比</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              整理 6 款 APP 的交友方式、評論熱度與綜合表現（資料來源：appbot, 2017/3 - 2019/3），可以看出多數 APP 仍以「匿名聊天」與「配對」為主軸，少數產品結合活動或情境設計。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-competitor-table.jpg" alt="iotionCompetitorTable"
              class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">競品功能與評論比較</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">十字象限分析</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              以<strong>產品功能複雜度</strong>與<strong>社交能力的門檻</strong>劃分十字象限。多數的 APP 功能都很單純：配對、匿名聊天、匿名語音，對於初學者較容易上手；而結合實體活動的 APP 則需要使用者跨出更大的社交一步。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-competitor-matrix.jpg" alt="iotionCompetitorMatrix"
              class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">競品十字象限分析</span>
        </div>
      </div>

      <!-- 使用者研究 -->
      <div id="user-research" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">使用者研究</span>
        </h2>

        <h3 class="text-2xl font-bold mb-8">1. 問卷調查</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">問卷背景</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              本問卷實測於 2019 年 5 月，目的為了解民眾對於「交友 APP」的使用偏好與觀感。問卷以有無使用經驗分為 2 款：透過<strong>「無使用經驗者」</strong>了解不使用原因及觀感；透過<strong>「有使用經驗者」</strong>了解偏好及觀感。
            </p>
            <p class="text-base mb-4">
              <strong>共回收 44 則有效問卷，有使用經驗者 28 位，無使用經驗者 16 位。</strong>
            </p>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-section-01.png" alt="iotionSurvey01" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">有使用經驗者 — 個人資料與 APP 使用經驗</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">有使用經驗者</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">1. 個人資料</ul>
              <p class="text-base">女性 16 位 (57%)、男性 12 位 (43%)；年齡在 18–22 歲 7 位 (26%)、23–27 歲 17 位 (59%)、28–31 歲 1 位 (4%)、32 歲以上 3 位 (11%)。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">2. APP 使用經驗</ul>
              <p class="text-base">使用過的交友 APP 從多至少依序為：Tinder、Wootalk、Wechat、探探、Goodnight、Skout…</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">3. 偏好的交友 APP</ul>
              <p class="text-base">比例最高是「使用者沒有特定偏好的 APP」。調查指出，使用特定 APP 的原因為：操作簡單、介面清楚。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">4. APP 使用原因與感受</ul>
              <p class="text-base">採 Likert 5 點量表。 APP 主要使用原因是方便、消磨時間、滿足好奇心，其次才是社交上的需求。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">5. APP 重視項目</ul>
              <p class="text-base">使用者較為重視個人隱私、使用者素質與介面設計，其次才是功能內容。</p>
            </div>
            <div>
              <ul class="text-base font-bold">6. APP 觀感與印象</ul>
              <p class="text-base">採 Likert 5 點量表。有使用經驗者認為，交友 APP 形象是負面的，甚至不想讓友人知道自身有使用交友 APP。</p>
            </div>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-section-02.png" alt="iotionSurvey02" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">無使用經驗者 — 不使用原因與觀感</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">無使用經驗者</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">1. 個人資料</ul>
              <p class="text-base">女性 13 位 (81%)、男性 3 位 (19%)；年齡在 18–22 歲 4 位 (25%)、23–27 歲 11 位 (69%)、32 歲以上 1 位 (6%)。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">2. 不曾使用交友 APP 的原因</ul>
              <p class="text-base">主因是網路交友不真實、不信任 APP 及自身不感興趣。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">3. 不使用原因與感受</ul>
              <p class="text-base">採 Likert 5 點量表。除了不信任網路交友，主要也是自身對網路社交的能力感到有障礙。</p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">4. APP 觀感與印象</ul>
              <p class="text-base">無使用經驗者對於交友 APP 「軟體」的印象，仍以負面居多。</p>
            </div>
            <div>
              <ul class="text-base font-bold">5. APP 如何改善能吸引你</ul>
              <p class="text-base">多數希望網路交友有機會參與實體活動，或是將配對功能做得更完善。</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm my-8">
          <h3 class="text-xl md:text-2xl font-bold text-center mb-4">問卷小結</h3>
          <p class="text-base md:text-lg leading-relaxed text-primary-800 mb-3">
            <strong>有使用經驗者</strong>沒有最喜歡的交友方式；使用原因主要為消磨時間、方便、滿足好奇心。重視個人隱私、其他使用者素質與介面設計，並擔心被朋友知道。
          </p>
          <p class="text-base md:text-lg leading-relaxed text-primary-800">
            <strong>無使用經驗者</strong>認為網路交友不真實、自身不感興趣、不信任配對。多認為交友 APP 無法填補空虛感；若能更實際地認識朋友、配對更完整、降低社交障礙，也許更願意嘗試。
          </p>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">2. 競品使用性測試</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">測試方法</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              根據前述分析，整理 3 款不同交友功能的交友 APP：<strong>Tinder, Skout, Eatgether</strong>，透過<strong>「配對」、「定位」、「活動」</strong>的方式來達到聊天、交友的目的。透過使用性測試了解整體操作與功能看法，以利後續交友 APP 的設計。
            </p>
            <p class="text-base mb-4">
              <strong>受測者共有 6 位，3 位有使用經驗者（2 女 1 男）、3 位無使用經驗者（2 女 1 男），年齡介於 23–27 歲。</strong>
            </p>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-section-03.png" alt="iotionSusCompetitor" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">競品 SUS 分數結果</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">SUS 分數結果</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              使用經驗對於 SUS 分數結果差異不大，其平均分數由高而低為：<strong>Eatgether &gt; Tinder &gt; Skout</strong>。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">檢討與訪談</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">Tinder</ul>
              <ul class="text-base list-disc pl-5">
                <li class="mb-1">3 名受測者認為「設定條件、尋找他人聊天」最困難</li>
                <li class="mb-1">較有保密性，隱私權較高</li>
                <li class="mb-1">成功配對之後比較有安全感，聊天前能讓彼此有基本認知</li>
              </ul>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">Skout</ul>
              <ul class="text-base list-disc pl-5">
                <li class="mb-1">所有受測者皆認為「設定條件、尋找他人聊天」最困難</li>
                <li class="mb-1">交友方式為直接聊天，快速、方便，可直接瀏覽</li>
                <li class="mb-1">介面設計不佳，icon 過小不易點擊、操作不直覺</li>
              </ul>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">Eatgether</ul>
              <ul class="text-base list-disc pl-5">
                <li class="mb-1">介面清楚、操作簡單、符合直覺性</li>
                <li class="mb-1">交友方式較為有趣，不限制於 1 對 1 聊天情境</li>
                <li class="mb-1">舉辦活動步驟稍顯繁雜，選項名稱容易誤導使用者</li>
                <li class="mb-1">為測試結果使用性最好的 APP</li>
              </ul>
            </div>
            <div>
              <ul class="text-base font-bold">測後感想</ul>
              <ul class="text-base list-disc pl-5">
                <li class="mb-1">受測者對「匿名聊天」接受度較低，希望聊天建立在知曉對方基本資料後進行，比較有安全感</li>
                <li class="mb-1">最喜歡的交友功能是 Tinder 的配對方式；對 Eatgether 以實體活動建立交友的方式，部分使用者較排斥</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 定義問題 -->
      <div id="problem-definition" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">定義問題</span>
        </h2>

        <div class="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm my-2">
          <h3 class="text-xl md:text-2xl font-bold text-center mb-4">How Might We</h3>
          <div class="text-xl md:text-3xl text-center font-medium leading-relaxed text-primary-800">
            打造一款<span class="text-primary-900 font-bold">輕鬆、顧及隱私</span>，<br>
            讓使用者能透過<span class="text-primary-900 font-bold">實體活動</span>自然交友的 APP
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">目標與方向</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">設計目標</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5 mb-4">
              <li class="mb-1">使用輕鬆、顧及隱私，具實體活動互動的交友體驗</li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">目標族群</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5 mb-4">
              <li class="mb-1">18 – 40 歲成年人</li>
              <li class="mb-1">想交朋友但有社交障礙的內向族群</li>
              <li class="mb-1">想透過網路來參與活動認識朋友</li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">產品目標</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5 mb-4">
              <li class="mb-1">滿足使用者對交友的需求</li>
              <li class="mb-1">降低使用者對社交心態的門檻</li>
              <li class="mb-1">提升更高的成功交友機率</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 介面規劃 -->
      <div id="interface-planning" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">介面規劃</span>
        </h2>

        <h3 class="text-2xl font-bold mb-8">1. User Story</h3>
        <div class="text-lg mb-4">
          根據競品分析、競品使用性測試、問卷調查彙整交友 APP 的相關資訊及功能設計想法，將使用者的問題與需求描述出來，再與 User Flow 驗證其設計規劃。
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/iotion/iotion-section-04.png" alt="iotionUserNeeds" class="w-full object-cover" />
        </div>
        <h4 class="text-xl font-bold mb-4">User Needs / User Story</h4>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/iotion/iotion-section-05.png" alt="iotionUserStory" class="w-full object-cover" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">功能參考</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">Tinder</ul>
              <p>右滑喜歡、左滑不喜歡的功能始祖，提供快速配對交友的方式，盛行全球。</p>
            </div>
            <div>
              <ul class="text-base font-bold">Eatgether</ul>
              <p>以社群聊天、舉辦／參與實體活動的功能為名，透過活動更實際接觸人群的交友方式。</p>
            </div>
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">2. User Flow</h3>
        <div class="text-lg mb-4">
          根據研究結果，使用者的<strong>交友體驗流程</strong>從配對開始，到後續參與實體活動，與朋友共同參與活動為一個完整體驗，讓使用者能拓展交友圈。
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-06.png" alt="iotionUserFlow" class="w-full object-cover" />
          <span class="flex items-center justify-center text-base">User Story Mapping</span>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">3. 頁面架構</h3>
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          <div class="md:w-1/2">
            <p class="text-base mb-4">
              將使用者需求與功能建立架構，主要分為：尋找配對、社群（好友訊息欄）、實體活動、個人檔案（編輯）。
            </p>
          </div>
          <div class="md:w-1/2">
            <div class="overflow-hidden">
              <img src="../assets/images/iotion/iotion-layout.jpg" alt="iotionLayout" class="w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-07.png" alt="iotionInfoArch" class="w-full object-cover" />
          <span class="flex items-center justify-center text-base">Simple IA — 資訊架構圖</span>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">4. User Journey</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">User Journey Map</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              將研究資料與使用流程對應，列出使用者行為、功能、情緒曲線等，假設使用者的體驗過程。
            </p>
          </div>
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-08.png" alt="iotionUserJourney" class="w-full object-cover" />
        </div>
      </div>

      <!-- 原型設計 -->
      <div id="prototype-design" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">原型設計</span>
        </h2>

        <h3 class="text-2xl font-bold mb-8">1. 設計特點</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">設計重點</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              整理功能與架構後，視覺設計上期望帶給使用者令人放鬆的感受、視覺化的資訊圖表與紀錄方式；社群平台以遊戲互動的方式鼓勵好友互相關心，提升使用黏著度。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">匹配程度</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              將各種興趣內容設立主題標籤 (Hashtag)，提供配對時能產生即時的配對分數、匹配程度，標籤符合愈多分數愈高。
            </p>
          </div>
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/iotion/iotion-section-09.png" alt="iotionMatch" class="w-full object-cover" />
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">實體活動</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              好友之間可舉辦實體活動，如：看電影、咖啡廳、運動、唱歌等，並可設定一對一、多人實體活動。
            </p>
          </div>
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/iotion/iotion-section-10.png" alt="iotionActivity" class="w-full object-cover" />
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">朋友圈限制</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              配對功能是唯一可加入好友名單的管道，同時舉辦／參與的活動只能限制朋友圈能夠參加，提升信任與安全感。
            </p>
          </div>
        </div>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/iotion/iotion-section-11.png" alt="iotionFriendCircle" class="w-full object-cover" />
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">2. 介面展示</h3>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-12.png" alt="iotionUiDemo01" class="w-full object-cover" />
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-13.png" alt="iotionUiDemo02" class="w-full object-cover" />
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/iotion/iotion-section-14.png" alt="iotionUiDemo03" class="w-full object-cover" />
        </div>

        <div class="flex justify-center mt-4">
          <a href="https://reurl.cc/V3DpW5" target="_blank" rel="noopener noreferrer"
            class="my-4 btn btn-lg btn-primary cursor-pointer">
            PROTOTYPE <span class="ml-2 text-white">→</span>
          </a>
        </div>
      </div>

      <div class="w-full border-t border-gray-300 my-8"></div>

      <!-- 使用性測試 -->
      <div id="usability-testing" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">使用性測試</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">測試對象</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              受測者共有 6 位，3 位有使用經驗者（2 男 1 女）、3 位無使用經驗者（2 男 1 女），年齡介於 23–27 歲，受測者與競品使用性測試不相同。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">操作流程</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base list-decimal pl-5 mb-4">
              <li class="mb-1">註冊／登入</li>
              <li class="mb-1">設定個人資料</li>
              <li class="mb-1">設定條件尋找配對</li>
              <li class="mb-1">查詢社群頁面</li>
            </ul>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-stars.png" alt="iotionSusScores" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">SUS 分數結果</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">SUS 分數結果</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              使用者間的分數結果差異不大，<strong>平均分數 77.9 分</strong>，是及格的使用性分數，但有可能是 prototype 介面設計較為單一，使用者操作較不會發散。
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">額外觀察</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              根據螢幕錄製觀察，有經驗的使用者平均操作時長較短、且錯誤率較低。可發現有些人會在「查詢社群頁面」時，可以找到實體活動動態消息，但因為 icon 不夠明確，導致檢查活動時的操作錯誤。
            </p>
            <p class="text-base mb-4">
              此款 APP 主要交友功能包含：配對功能、實體活動、匹配度參考。根據使用者訪談回饋，其中<strong>匹配度有助於配對的參考價值</strong>。
            </p>
          </div>
        </div>

        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/iotion/iotion-comments.png" alt="iotionComments" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">使用者回饋摘錄</span>
        </div>
      </div>

      <!-- 反思與結論 -->
      <div id="project-reflection" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-1 h-8 rounded-full bg-primary-900 mr-4"></span>
          <span class=" flex items-center font-bold">反思與結論</span>
        </h2>

        <h3 class="text-2xl font-bold mb-8">1. 專案反思</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">交友的愉悅體驗</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              以交友軟體而言，使用者的「愉悅體驗」重點來自與其他使用者的互動，並非講求操作時間上的高效率、或是極低的錯誤率，而是重視使用上的體驗與感受。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">競品功能比較</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              透過競品的使用性測試與訪談，有助於了解使用者在操作此類產品上的行為與需求，定義產品目標與功能偏好。但不能將創意侷限於競品上，必須思考產品真正的價值為何。
            </p>
          </div>
        </div>

        <div class="w-full border-t border-gray-300 my-8"></div>

        <h3 class="text-2xl font-bold mb-8">2. 結論與建議</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">結論</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              使用者對於交友 APP 的「個人隱私」、「其他使用者的素質」較為重視，而大多數人使用交友 APP 的原因來自於好奇心、消磨時間。有使用經驗者認為交友 APP 能夠真的認識朋友；無使用經驗者則認為自己對交友 APP 有社交障礙、無法填補空虛感。多數人在觀感上認為這種交友方式並不好，若能更實際地認識朋友、配對更完整、增加互動與降低社交障礙，也許更能讓無經驗者願意嘗試。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">建議</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              本次專案的使用性研究侷限於使用者「操作過程」的效率與流暢度，較疏於使用者社交障礙的突破、或使用者之間互動可能產生的摩擦。研究若能針對交友 APP 不同程度的使用者，在操作時的感受，可以更實質的幫助目標使用者。
            </p>
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
      </div>
    </div>
  </div>
</template>
