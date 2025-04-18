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
  { id: 'project-reflection', title: '反思與回饋' }
];

// 回到首頁並滾動到 selected-projects 部分
function backToHome() {
  // 這個函數會在路由導航完成後執行
  setTimeout(() => {
    const selectedProjectsSection = document.getElementById('selected-projects');
    if (selectedProjectsSection) {
      selectedProjectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 如果找不到元素，則嘗試使用窗口滾動到估計位置
      window.scrollTo({
        top: 800, // 估計的位置，可能需要根據實際頁面調整
        behavior: 'smooth'
      });
    }
  }, 300); // 增加延遲時間確保頁面加載完成
}
</script>

<template>
  <div class="max-w-6xl mx-auto py-12 px-4 bg-white text-primary-900" lang="zh-Hant,en">
    <!-- 側邊導航組件 -->
    <ProjectNavbar :nav-items="navItems" :show-on-mobile="true" />
    
    <!-- 專案概述 -->
    <div id="project-overview">
      <!-- 新的標題佈局 -->
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 mb-12">
        <!-- 左側圖標 -->
        <div class="w-32 h-32 bg-white rounded-3xl shadow-md flex-shrink-0 overflow-hidden p-3 md:p-4 mx-auto md:mx-0">
          <div class="w-full h-full bg-pink-200 rounded-2xl flex items-center justify-center">
            <img src="../assets/images/moodzine/moodzine-appIcon.jpg" alt="moodzine-appIcon"
              class="object-cover w-full h-full rounded-2xl" />
          </div>
        </div>

        <!-- 右側標題內容 -->
        <div class="flex flex-col justify-center mt-4 md:mt-0 text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-2">MOODZiNE</h1>
          <p class="text-lg md:text-xl text-gray-600 mb-4 italic">Feel who you are, embrace who you are</p>
          <div class="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
            <span class="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">Emotional Management</span>
            <span class="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">UI/UX Design</span>
            <span class="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded">Interview Research</span>
          </div>
        </div>
      </div>

      <div class="bg-gray-800 h-72 md:h-96 lg:h-[500px] w-full rounded-lg mb-12">
        <img src="../assets/images/moodzine/moodzine-landing.jpg" alt="moodzineLanding"
          class="w-full h-full object-cover rounded-lg" />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-16">
        <div>
          <h3 class="text-xl font-medium mb-2 md:mb-4">專案期間</h3>
          <p class="text-primary-700">2019.01 - 2019.06</p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2 md:mb-4">負責角色</h3>
          <p class="text-primary-700">共同策劃、UI / UX 設計師</p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2 md:mb-4">成果產出</h3>
          <p class="text-primary-700 mb-1">輔大應用美術研究所展覽</p>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2 md:mb-4">工具軟體</h3>
          <p class="text-primary-700 mb-1">Adobe XD, Illustrator</p>
        </div>
      </div>

      <!-- Overview -->
      <div class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Overview</h2>
        <p class="text-base md:text-lg mb-4">
          根據青少年、諮商心理師訪談研究，情緒困擾者容易在乎他人的異樣眼光，而不敢尋求幫助；使用藥物治療也可能有戒斷症狀，無法根治。最有效的方法是去認識自己、了解自己，發覺自己的心理問題，才能從情緒的根本上解決問題。
        </p>
        <p class="text-base md:text-lg mb-4">
          我們設計一款情緒管理APP，MOODZiNE ，以視覺化的符碼、遊戲化的互動方式，鼓勵使用者能每日紀錄情緒，了解自身的情緒變化及原因，就像寫了一本專屬於自己的 ZINE
          。在需要協助時能即時提供求助管道，並能與親友連結加強人與人之間的陪伴。
        </p>
        <ul>
          UI Design: Yi Chen / Po Yuan Chen
        </ul>
        <ul>
          UX Design: Po Yuan Chen / Yi Chen
        </ul>
        <ul>
          Prototype: Po Yuan Chen
        </ul>
      </div>

      <!-- 專案背景 -->
      <div id="project-background" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">專案背景</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">憂鬱患者不計其數</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              根據聯合國世界衛生組織報告，全球目前超過3.5億人罹患憂鬱症。台灣衛生署國民健康局指出，國內憂鬱症狀者超過300萬人，使用抗憂鬱藥物人數達120萬人（衛福部保健署，2017），受情緒困擾者不計其數。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">青少年的情緒不適應</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              青少年期是介於兒童與成年之間的過渡階段，必須面對生理、心理、社會文化的挑戰，常出現不適應的情緒化反應，在面對父母與同儕的壓力，時常受情緒困擾卻找不到出口，長期壓抑累積下來，容易有憂鬱、焦慮的病狀發生。
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">情緒症狀定義不明確</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              根據美國聯邦政府調查顯示，相當高比例的青少年受情緒症狀困擾，許多情感性症狀定義與診斷標準仍未完全明確，導致許多有情緒症狀的青少年在成長階段受到忽視，影響了成長的發展。然而，僅依賴藥物治療、物理治療並非根本解決之道。
            </p>
            <ul class="text-base mt-4">
              <li class="mb-2">→ 心理症狀無法單純依靠醫師得知病情</li>
              <li class="mb-2">→ 短暫的情緒起伏不一定符合情感性症狀標準</li>
              <li class="mb-2">→ 面對情緒必須認識自己及長期自我觀察</li>
            </ul>
          </div>
        </div>
        <div class="my-8">
          <div class="rounded-lg overflow-hidden shadow-sm mb-2">
            <img src="../assets/images/moodzine/moodzine-process.jpg" alt="moodzineProcess" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">設計流程</span>
        </div>
      </div>

      <!-- 競品分析 -->
      <div id="competitor-analysis" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">競品分析</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mb-8">
          <div class="md:col-span-2">
            <p class="text-base md:text-lg mb-4">
              心理症狀最好還是透過「心理治療」，談論自己、了解自己，遠離負面情緒與心理症狀。現今台灣社會，行動裝置與網路普及， 行動裝置與 APP
              使用方便，希望幫助使用者的情緒困擾得以便利紀錄。為了解各種抒發或認識心理的產品，蒐集內容不限於 APP
              形式，產品功能主要包含：情緒與圖文紀錄、情緒變化追蹤、心靈健康資訊，透過自我心理探索，來認識自己的人格特質與精神變化。
            </p>
          </div>
          <div class="relative">
            <!-- 對話框 -->
            <div class="bg-gray-200 rounded-2xl p-4 relative">
              <div
                class="absolute left-5 -bottom-3 w-0 h-0 border-l-[10px] border-l-transparent border-t-[12px] border-t-gray-200 border-r-[10px] border-r-transparent">
              </div>
              <p class="text-sm md:text-base text-center">
                蒐集資料與分析競品，了解現有產品特性，並定義產品方向，後續透過使用性研究再加以修正問題與目標。
              </p>
            </div>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/moodzine/moodzine-competitors.jpg" alt="moodzineCompetitors"
              class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">設計流程</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">產品共同點</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">1. 紀錄方式容易操作</ul>
              <p>‍盡量讓使用者避免輸入文字，改以選擇的方式引導使用者快速分類情緒、紀錄內容，並提供資訊圖表了解情緒變化。</p>
            </div>
            <div>
              <ul class="text-base font-bold">2. 介面排版俐落</ul>
              <p>‍介面色調簡單，情緒變化以時間軸呈現，多以圖形取代文字，提高使用者瀏覽資訊的效率。</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">關鍵差異點</h3>
          </div>
          <div class="md:col-span-2">
            <div class="mb-4">
              <ul class="text-base font-bold">1. 可紀錄內容的不同</ul>
              <p class="text-base">‍Remente, Moodigo 功能較為複雜，可紀錄待辦事項、社群互動、專業文章瀏覽，亦能與其他 App 連動，將不同管道的資訊整合。</p>
            </div>
            <div>
              <ul class="text-base font-bold">2. 功能相似但 TA 不同</ul>
              <p class="text-base">‍Remente 這類較為複雜，提供較多心靈探索、訓練自主性的使用模式較適合成年人；而 Daylio, Mr.Mood, Expereal
                主要是紀錄每日情緒感受，不提供情緒變化之外的價值觀探索，功能較為單純， TA 較不受限於年齡。</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">十字象限分析</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              以產品功能與紀錄方式劃分十字象限，有與其他資訊整合或社群互動的產品，在紀錄方式上較為複雜。 MOODZiNE 目標方向以使用者方便紀錄，並提供情緒紀錄以外的功能，增加使用者與 App
              的互動，實際幫助到情緒困擾的使用者。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/moodzine/moodzine-analysis.jpg" alt="moddzineAnalysis"
              class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">競品十字象限分析</span>
        </div>
      </div>

      <!-- 使用者研究 -->
      <div id="user-research" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">使用者研究 - 訪談研究</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">專家訪談 - 諮商心理師</h3>
          </div>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              專家訪談對象為諮商心理師，曾任國中輔導老師，目的為探討情緒不穩定者的傾訴方式、不同年齡差異與輔導方式
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">1. 傾訴方式</ul>
              <p class="text-base">
                青少年遇到情緒不穩定症狀時，輔導會盡量提供量化的方式，如：調查作息、做什麼事，事後反應為何等。受到情緒困擾者，多半不會明講他現在情緒如何，多是講述事件。因此輔導室以傾聽為主，並避免給予明確建議，讓對方去找出答案與方向。
              </p>
            </div>
            <div class="mb-4">
              <ul class="text-base font-bold">2. 年齡差異</ul>
              <p class="text-base">情緒紀錄的時間不一，有些人能一週內就察覺自己行為的變化，對於未成年者，諮商要斟酌不想談起家人的問題，青少年多半是希望被關注。</p>
            </div>
            <div>
              <ul class="text-base font-bold">3. 輔導方式</ul>
              <p class="text-base">
                輔導並非上對下的關係，而是強調「合作」，因此青少年必須是「願意來談」，才得以近一步的談心與輔導。要透過持續性的正視內心情緒起伏，除了談天，青少年也可以透過書寫、畫畫、打坐、冥想、纏繞畫等來分享情緒。受賀爾蒙影響的成長階段，也要發展（如：同儕、練習獨立）任務來學習。
              </p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 mt-8">
          <div>
            <h3 class="text-xl font-bold mb-2">使用者訪談</h3>
          </div>
          <div class="md:col-span-2">
            <p class="text-base mb-4">
              我們訪談了3名受情緒困擾者，其年齡介於 18 - 22 歲，有情緒紀錄或寫日記習慣。訪談主要討論
              (1)情緒低落原因、(2)紀錄情緒方式、(3)症狀求助管道經驗、(4)個人情緒管理、(5)APP紀錄情緒的看法，針對「寫日記」這件事將其訪談內容製作 Persona 。
            </p>
          </div>
        </div>
        <div class="my-8">
          <div class="overflow-hidden max-w-4xl mx-auto mb-2">
            <img src="../assets/images/moodzine/moodzine-persona.jpg" alt="moodzinePersona" class="w-full object-cover" />
          </div>
          <span class="flex items-center justify-center text-base">目標使用者 Persona</span>
        </div>
      </div>

      <!-- 定義問題 -->
      <div id="problem-definition" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">定義問題</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 定義問題</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">不同心理症狀的使用者需求不同</h3>
          </div>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              民眾引發心理症狀的原因大有不同，心理療法因人而異，不同年齡層也有不同的心理問題，必須釐清目標族群與產品定位。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">情緒紀錄對心理治療的幫助效果</h3>
          </div>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              心理治療的常用療法有：認知行為治療、精神分析取向心理治療、人際取向的心理治療與藝術或音樂療法。若使用者以 APP 為紀錄途徑，必須探討如何讓使用者願意使用、如何紀錄能發揮效果。
            </div>
          </div>
        </div>
        <div class="bg-gray-100 p-6 md:p-8 rounded-lg shadow-sm my-2">
          <h3 class="text-xl md:text-2xl font-bold text-center mb-4">How Might We</h3>
          <div class="text-xl md:text-3xl text-center font-medium leading-relaxed text-primary-800">
            讓受情緒困擾者，願意<span class="text-primary-900 font-bold">持續紀錄情緒變化</span>，<br>
            有效<span class="text-primary-900 font-bold">正視自己心理症狀</span>
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 目標與定位</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">服務內容</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5">
              <li class="mb-1">提供受情緒困擾者，進行長期的情緒檢測
              </li>
              <li class="mb-1">提供社群互動方式，即時了解使用者與親友的情緒變化
              </li>
              <li class="mb-1">提供使用者治療管道查詢的諮商資訊
              </li>
            </ul>
            <div class="overflow-hidden max-w-4xl mx-auto mb-8">
              <img src="../assets/images/moodzine/moodzine-target.jpg" alt="moodzineTarget" class="w-full object-cover" />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">目標族群</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5 mb-8">
              <li class="mb-1">長期受情緒困擾者
              </li>
              <li class="mb-1">想關懷友人/彼此的情緒變化
              </li>
              <li class="mb-1">在乎情緒變化、期望了解自身心理症狀
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">產品目標</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5 mb-8">
              <li class="mb-1">滿足使用者情緒紀錄的需求
              </li>
              <li class="mb-1">與人互動的社群功能
              </li>
              <li class="mb-1">視覺化的資訊圖表
              </li>
            </ul>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <div>
            <h3 class="text-xl font-bold mb-2">設計方向</h3>
          </div>
          <div class="md:col-span-2">
            <ul class="text-base text-primary-700 list-disc pl-5">
              <li class="mb-1">介面 － 版面設計清楚、圖表容易閱讀
              </li>
              <li class="mb-1">紀錄 － 直覺容易操作的紀錄功能
              </li>
              <li class="mb-1">個性 － 個人化的心情色彩渲染圖表、親友互動與提醒
              </li>
              <li class="mb-1">溫暖 － 親近使用者的情緒，有溫度的視覺設計
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 介面規劃 -->
      <div id="interface-planning" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">介面規劃</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. User Flow</h3>
        <div class="text-lg mb-4">根據競品分析與訪談內容，我們研究將「情緒紀錄」設為長期規劃，使用者能依據近期情緒狀態切換操作功能。 </div>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/moodzine/moodzine-userFlow.png" alt="moodzineUserFlow" class="w-full object-cover" />
        </div>
        <h4 class="text-xl font-bold mb-4">新增情緒紀錄｜Add Diary Flow Chart</h4>
        <div class="overflow-hidden max-w-4xl mx-auto mb-8">
          <img src="../assets/images/moodzine/moodzine-flowChart.jpg" alt="moodzineFlowChart"
            class="w-full object-cover" />
        </div>
        <h4 class="text-xl font-bold mb-4">新增情緒紀錄流程｜Add Diary UI Flow</h4>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/moodzine/moodzine-uiFlow.png" alt="moodzineUiFlow" class="w-full object-cover" />
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 資訊架構</h3>
        <div class="flex flex-col md:flex-row gap-6 md:gap-8 mb-8">
          <div class="md:w-1/2">
            <p class="text-base mb-4">
              將使用流程的功能整理，我們規劃介面設計的可行性。先以紙本線框稿討論視覺色彩、功能切換、資訊層級的分類，再進一步建立資訊架構，讓功能服務能有效地被使用者執行、清楚知道哪些頁面可以切換。
            </p>
          </div>
          <div class="md:w-1/3 grid grid-cols-2 gap-3">
            <div class="overflow-hidden">
              <img src="../assets/images/moodzine/moodzine-draft1.jpg" alt="moodzineDraft1"
                class="w-full object-cover rounded-lg" />
            </div>
            <div class="overflow-hidden">
              <img src="../assets/images/moodzine/moodzine-draft2.jpg" alt="moodzineDraft2"
                class="w-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
        <div class="overflow-hidden w-full mb-8">
          <img src="../assets/images/moodzine/moodzine-infoArch.jpg" alt="moodzineInfoArch" class="w-full object-cover" />
          <span class="flex items-center justify-center text-base">資訊架構圖</span>
        </div>
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>
      <h3 class="text-2xl font-bold mb-8">3. 產品功能</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
        <div>
          <h3 class="text-xl font-bold mb-2">設計重點</h3>
        </div>
        <div class="md:col-span-2">
          <div class="text-base mb-4">
            視覺設計上期望帶給使用者令人放鬆的感受、直覺的圖表紀錄，以及遊戲性的社群鼓勵好友們互相關心，提升使用黏著度以保持觀察情緒變化的習慣。
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
        <div>
          <h3 class="text-xl font-bold mb-2">情緒視覺化</h3>
        </div>
        <div class="md:col-span-2">
          <div class="text-base mb-4">
            不同情緒代表著不同色彩，透過視覺化的紀錄方式，讓使用者能一目了然自己的情緒變化。
          </div>
        </div>
      </div>
      <div class="overflow-hidden max-w-4xl mx-auto mb-8">
        <img src="../assets/images/moodzine/moodzine-uiLanding.png" alt="moodzineUiLanding" class="w-full object-cover" />
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
        <div>
          <h3 class="text-xl font-bold mb-2">情緒紀錄</h3>
        </div>
        <div class="md:col-span-2">
          <div class="text-base mb-4">
            以有趣的圖示代替冰冷的文字，並提供使用者長時間的檢測情緒。
          </div>
        </div>
      </div>
      <div class="overflow-hidden max-w-4xl mx-auto mb-8">
        <img src="../assets/images/moodzine/moodzine-uiRecord.png" alt="moodzineUiRecord" class="w-full object-cover" />
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
        <div>
          <h3 class="text-xl font-bold mb-2">即時諮商地圖</h3>
        </div>
        <div class="md:col-span-2">
          <div class="text-base mb-4">
            當使用者需要諮商協助時，能以選填方式快速了解需求，提供相關心理諮商機構。
          </div>
        </div>
      </div>
      <div class="overflow-hidden max-w-4xl mx-auto mb-8">
        <img src="../assets/images/moodzine/moodzine-uiMap.png" alt="moodzineUiMap" class="w-full object-cover" />
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
        <div>
          <h3 class="text-xl font-bold mb-2">親友互動</h3>
        </div>
        <div class="md:col-span-2">
          <div class="text-base mb-4">
            使用者能與親友連結，提供互相關心的管道，宇宙與星球的遊戲化介面設計，鼓勵使用者以輕鬆、有趣的方式互動。
          </div>
        </div>
      </div>
      <div class="overflow-hidden max-w-4xl mx-auto mb-8">
        <img src="../assets/images/moodzine/moodzine-uiInteraction.png" alt="moodzineUiInteraction"
          class="w-full object-cover" />
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>
      <h3 class="text-2xl font-bold mb-8">4. 設計系統</h3>
      <!-- 情緒符碼區塊 -->
      <div class="mb-12">
        <!-- 移動端佈局：垂直排列 -->
        <div class="block md:hidden">
          <h4 class="text-xl font-bold mb-4">情緒符碼</h4>
          <p class="text-base mb-6">
            情緒困擾者常無法找出情緒的痛點，根據訪談了解，部分使用者常不明白自己，關於開心與難過的明確原因。心情icon代替了文字說明，使用者不需思考今天的情緒是開心的興奮的、焦慮的還是悲傷的。使用者僅需透過不同表情去做紀錄，不必受到情緒形容詞在文字上的標籤化。
          </p>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-code.jpg" alt="moodzineCode" class="w-full object-cover" />
          </div>
        </div>
        <!-- 桌面端佈局：左文右圖 -->
        <div class="hidden md:flex gap-8">
          <div class="w-2/3">
            <h4 class="text-xl font-bold mb-4">情緒符碼</h4>
            <p class="text-base">
              情緒困擾者常無法找出情緒的痛點，根據訪談了解，部分使用者常不明白自己，關於開心與難過的明確原因。心情icon代替了文字說明，使用者不需思考今天的情緒是開心的興奮的、焦慮的還是悲傷的。使用者僅需透過不同表情去做紀錄，不必受到情緒形容詞在文字上的標籤化。
            </p>
          </div>
          <div class="w-1/3">
            <div class="overflow-hidden rounded-lg h-full flex items-center">
              <img src="../assets/images/moodzine/moodzine-code.jpg" alt="moodzineCode" class="w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <!-- 情緒視覺圖像區塊 -->
      <div class="mb-8">
        <!-- 移動端佈局：垂直排列 -->
        <div class="block md:hidden">
          <h4 class="text-xl font-bold mb-4">情緒視覺圖像</h4>
          <p class="text-base mb-6">
            利用使用者每天紀錄不同程度的情緒，日復一日為星球著色其色彩混合成為個人化的情緒星球，透過視覺能直接了解自身最近的情緒綜合變化，也能在自己的宇宙中觀察好友的情緒變化，給予適切的關心。
          </p>
          <div class="overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-gradient.jpg" alt="moodzineGradient"
              class="w-full object-cover" />
          </div>
        </div>
        <!-- 桌面端佈局：左圖右文 -->
        <div class="hidden md:flex gap-8 mb-12">
          <div class="w-1/3">
            <div class="overflow-hidden rounded-lg h-full flex items-center">
              <img src="../assets/images/moodzine/moodzine-gradient.jpg" alt="moodzineGradient"
                class="w-full object-cover" />
            </div>
          </div>
          <div class="w-2/3">
            <h4 class="text-xl font-bold mb-4">情緒視覺圖像</h4>
            <p class="text-base">
              利用使用者每天紀錄不同程度的情緒，日復一日為星球著色其色彩混合成為個人化的情緒星球，透過視覺能直接了解自身最近的情緒綜合變化，也能在自己的宇宙中觀察好友的情緒變化，給予適切的關心。
            </p>
          </div>
        </div>
        <h4 class="text-xl font-bold mb-4">色彩規劃</h4>
        <div class="overflow-hidden max-w-4xl mx-auto mb-12">
          <img src="../assets/images/moodzine/moodzine-colorSystem.jpg" alt="moodzineColorSystem"
            class="w-full object-cover" />
        </div>
        <h4 class="text-xl font-bold mb-4">文字系統</h4>
        <div class="overflow-hidden max-w-md mx-auto mb-12">
          <img src="../assets/images/moodzine/moodzine-typography.png" alt="moodzineTypography"
            class="w-full object-cover" />
        </div>
      </div>

      <!-- 原型設計 -->
      <div id="prototype-design" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">原型設計</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">介面展示</h3>
        <div class="w-full my-8 relative">
          <img src="../assets/images/moodzine/moodzine-uiDemo.png" alt="moodzineUiDemo" class="w-full object-cover" />
          <div class="flex justify-center mt-4">
            <a href="https://xd.adobe.com/view/1eb57491-06e5-4925-b11e-cf7ee2ee9360-4be6/?fullscreen" target="_blank"
              rel="noopener noreferrer"
              class="my-4 px-8 py-4 bg-coral-500 text-white rounded-md hover:bg-coral-600 transition-colors text-lg font-medium flex items-center cursor-pointer">
              PROTOTYPE <span class="ml-2 text-white">→</span>
            </a>
          </div>
        </div>
      </div>
      <div class="w-full border-t border-gray-300 my-8"></div>

      <!-- 反思與回饋 -->
      <div id="project-reflection" class="mb-12 md:mb-16">
        <h2 class="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 flex items-center">
          <span class="inline-block w-2 h-8 bg-coral-500 mr-4"></span>
          <span class=" flex items-center font-bold">反思與回饋</span>
        </h2>
        <h3 class="text-2xl font-bold mb-8">1. 專案反思</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-retro1.jpg" alt="moodzineRetro1"
              class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-retro2.jpg" alt="moodzineRetro2"
              class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">設計流程重要性</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              設計要賦予產品意義，必須研究使用者需求與確立問題與目標。實際執行研究、分析與設計，才讓我們可以更靈活、有方向性地設計產品。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">專案目標與實踐</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              我們希望真正幫助到使用者（受情緒困擾者），很多想法要透過分析或訪談來不斷修正，才能找到正確的解決方案。
            </div>
          </div>
        </div>
        <div class="w-full border-t border-gray-300 my-8"></div>
        <h3 class="text-2xl font-bold mb-8">2. 展覽回饋</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">介面設計與專案發展</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              MOODZiNE 受時程限制沒有正式的使用者測試紀錄，我們把握參與研究所聯展的機會，向觀者介紹並訪問產品的見解，蒐集了來自不同領域的使用者回饋。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-exhibition1.jpg" alt="moodzineExhibition1"
              class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-exhibition2.jpg" alt="moodzineExhibition2"
              class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">色彩規劃</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              整體的粉色調是令人放鬆的，但少數人會誤認為目標使用者是以女性為主。暖色代表正面情緒、冷色代表負面情緒，長期紀錄的色彩成為自己的漸層色，設計上可能不夠直觀，少數人必須透過說明才能了解。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">情緒隱私</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              使用者情緒紀錄的隱私很重要，社群互動有幫助持續紀錄的使用動機。但在社群分享上應該可以更自由的設定隱私開放的程度，如：只顯示最近一週心情、隱藏活動紀錄等。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12">
          <h3 class="text-xl font-bold mb-2">發展經營</h3>
          <div class="md:col-span-2">
            <div class="text-base mb-4">
              多數情緒紀錄競品的商業考量多以 APP
              訂閱制、免費但有廣告的經營模式發展。學校輔導老師提及，電子化的紀錄方式有助於更多元觀察受情緒困擾者的便利性及機動性，能更了解對方需求與心理感受。如產品測試後能有效幫助使用者，實行可以從政府或學校單位推廣，建立更完整的模型。
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-exhibition3.jpg" alt="moodzineExhibition3"
              class="w-full h-full object-cover" />
          </div>
          <div class="aspect-[16/9] overflow-hidden rounded-lg">
            <img src="../assets/images/moodzine/moodzine-exhibition4.jpg" alt="moodzineExhibition4"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Back to project -->
      <div class="flex justify-between items-center pt-6 md:pt-8 border-t border-gray-300 mt-8 md:mt-12">
        <RouterLink to="/"
          class="text-primary-600 hover:text-accent-500 transition-colors font-medium flex items-center"
          @click="backToHome">
          ← Back to Projects
        </RouterLink>
      </div>
    </div>
  </div>
</template>
