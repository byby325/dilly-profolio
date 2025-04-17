<script setup lang="ts">
  const calculateDuration = (startDate: string, endDate: string = new Date().toISOString()) => {
    const start = new Date(startDate)
    const end = endDate === 'present' ? new Date() : new Date(endDate)

    let years = end.getFullYear() - start.getFullYear()
    let months = end.getMonth() - start.getMonth()

    if (months < 0) {
      years--
      months += 12
    }

    return {
      years,
      months,
      totalMonths: years * 12 + months,
    }
  }

  // Titansoft 總時間
  const titanSoftStartDate = '2021-06-01'
  const titanSoftDuration = calculateDuration(titanSoftStartDate)
  const titanSoftTotalDuration = `${titanSoftDuration.years} 年 ${titanSoftDuration.months} 個月`

  // Senior Product Designer 時間
  const seniorStartDate = '2024-01-01'
  const seniorDuration = calculateDuration(seniorStartDate)
  const seniorPeriod = `${seniorDuration.years} 年 ${seniorDuration.months} 個月`

  // Product Designer 時間
  const designerStartDate = '2021-06-01'
  const designerEndDate = '2023-12-31'
  const designerDuration = calculateDuration(designerStartDate, designerEndDate)
  const designerPeriod = `${designerDuration.years} 年 ${designerDuration.months} 個月`

  // Research Assistant 時間
  const researchStartDate = '2019-07-01'
  const researchEndDate = '2020-07-31'
  const researchDuration = calculateDuration(researchStartDate, researchEndDate)
  const researchPeriod = `${researchDuration.years} 年 ${researchDuration.months} 個月`
  
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
  <div class="min-h-screen bg-gray-50">
    <div class="w-full">
      <!-- Intro Section -->
      <section class="w-full bg-gradient-to-r py-8 md:py-16">
        <div class="container mx-auto px-4 md:px-8 lg:px-16">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <!-- Text Content -->
            <div class="w-full md:w-3/5 order-2 md:order-1">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Hi, I'm Dilly 👋</h1>
              <div class="space-y-4">
                <p class="text-primary-700 text-md md:text-base">
                  我是擁有五年經驗的資深產品設計師，專注於打造 SaaS 數位產品，擅長從用戶需求出發，結合商業目標與互動設計，提供 end-to-end 解決方案。
                </p>
                <p class="text-primary-700 text-md md:text-base">
                  一路走來，我持續跨領域學習，累積了研究、分析、設計、測試及前端基礎開發等多元能力。具備 Scrum 團隊開發經驗，對 DesignOps 有深厚興趣
                </p>
                <p class="text-primary-700 text-md md:text-base">
                  致力於優化設計流程、降低跨部門溝通成本，並推動設計知識的傳承與團隊成長。我相信以使用者為中心的設計，能創造超越期待的產品體驗，也樂於透過不斷優化，為產品帶來更多價值
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/dilly-chen/"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-6 inline-block px-8 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-lg"
              >
                LINKEDIN →
              </a>
            </div>
            
            <!-- Profile Image -->
            <div class="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end">
              <div class="max-w-[350px] max-h-[350px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="../assets/images/about/profile.jpg"
                  alt="DillyProfile"
                  class="w-full h-full object-cover"
                  @error="handleImageError"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise & Skills Section -->
      <section class="w-full bg-gray-50">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <!-- Expertise -->
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-1/2">
              <h2 class="text-2xl md:text-3xl font-bold mb-4">專長 Expertise</h2>
              <p class="text-gray-700 mb-6 text-md md:text-base leading-relaxed">
                我善於產品設計、研究與後期的數據分析，包含探討需求與定義問題，規劃需求、原型設計與使用性測試等，並且具備網頁前端設計經驗。
              </p>
              <div class="flex flex-wrap gap-3 mb-8">
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">使用者研究</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">規劃需求</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">互動設計</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">原型設計</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">網頁前端設計</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">數據分析</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">設計系統</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">專案管理</span>
                <span class="px-4 py-2 bg-gray-100 text-gray-800 rounded-full shadow-sm font-medium hover:bg-gray-200 transition-colors">設計流程管理</span>
              </div>
            </div>

            <div class="hidden lg:block w-px bg-gray-200"></div>

            <!-- Skills -->
            <div class="lg:w-1/2">
              <h2 class="text-2xl md:text-3xl font-bold mb-4">技能 Skills</h2>
              <p class="text-gray-700 mb-6 text-md md:text-base leading-relaxed">
                主要使用 Figma 來設計介面與原型、使用 Cursor 進行開發、也使用 Notion, Jira, Confluence 等專案管理工具。
              </p>
              <div class="space-y-12">
                <div>
                  <div class="grid grid-cols-5 gap-6">
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-figma.svg"
                        alt="FigmaLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Figma</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-framer.svg"
                        alt="FramerLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Framer</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-photoshop.svg"
                        alt="PhotoshopLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Photoshop</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-illustrator.svg"
                        alt="IllustratorLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Illustrator</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-webflow.svg"
                        alt="WebflowLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Webflow</span>
                    </div>
                  </div>
                  <div class="grid grid-cols-5 gap-6 mt-6">
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-builderio.svg"
                        alt="BuilderioLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Builder.io</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-cursor.svg"
                        alt="CursorLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Cursor</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-notion.svg"
                        alt="NotionLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Notion</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-jira.svg"
                        alt="JiraLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Jira</span>
                    </div>
                    <div class="flex flex-col items-center gap-2">
                      <img
                        src="../assets/icons/icon-color-confluence.svg"
                        alt="ConfluenceLogo"
                        class="h-16 w-16 hover:scale-110 transition-transform"
                        @error="handleImageError"
                      />
                      <span class="text-sm text-gray-600">Confluence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="w-full bg-gray-50">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl md:text-3xl font-bold">工作經歷</h2>
          </div>

          <div class="space-y-8">
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                  <img
                    src="../assets/images/logos/logo-titansoft.jpeg"
                    alt="TitansoftLogo"
                    class="w-16 h-16 object-contain rounded-md"
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-1">Titansoft Pte Ltd</h3>
                <p class="text-gray-500 text-sm">全職 · {{ titanSoftTotalDuration }}</p>

                <div class="mt-4 space-y-6">
                  <!-- Senior Product Designer -->
                  <div>
                    <h4 class="font-bold text-lg">Senior Product Designer</h4>
                    <p class="text-gray-500 text-sm mb-3">2024年1月 － 現在 · {{ seniorPeriod }}</p>
                    <div class="space-y-4 text-gray-700">
                      <!-- Continuous Improvement Process -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">
                          [Continuous Improvement Process]
                        </h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            Led the design team in continuously improving design processes and
                            workflows to clarify task objectives and enhance design quality. This
                            involved implementing workflow automation, improving communication in
                            scrum sprint meetings, and establishing Figma project templates.
                            Increase 20% in work efficiency at least.
                          </li>
                        </ul>
                      </div>

                      <!-- Design System -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">[Design System]</h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            Planning the architecture and development of the product design system.
                            Implementing atomic design principles, variables, and components
                            management. Ensured product consistency, flexibility, and scalability,
                            while improving the efficiency of design tasks.
                          </li>
                        </ul>
                      </div>

                      <!-- Figma Trainer -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">[Figma Trainer]</h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            Served as the company's Figma Trainer, providing training on basic
                            operations, prototyping, version control, variables, components, and
                            advanced operations like UI layer management and auto layout.
                          </li>
                        </ul>
                      </div>

                      <!-- Projects end-to-end -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">[Projects end-to-end]</h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            I have participated in multiple end-to-end SaaS projects. and I can take
                            responsibility for delivering projects end-to-end in the design process,
                            from kick-off meetings to exploratory research, qualitative and
                            quantitative analysis, user flow planning, wireframing, high-fidelity
                            prototyping, usability testing, and front-end slicing.
                          </li>
                        </ul>
                      </div>

                      <!-- Data-Informed -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">[Data-Informed]</h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            Utilized quantitative analysis, like GA4, to find user behavior and
                            inform design decisions. Combined these insights with competitor
                            surveys, qualitative research, and academic reports to ensure that
                            designs deliver value and meet business objectives.
                          </li>
                        </ul>
                      </div>

                      <!-- Project Management -->
                      <div>
                        <h5 class="font-medium text-base mb-1.5">[Project Management]</h5>
                        <ul class="list-disc pl-4 space-y-1 text-sm">
                          <li>
                            FWe use Atlassian tools like Jira for project management and Confluence
                            for knowledge management, facilitating a more structured and efficient
                            workflow for the team.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- Product Designer -->
                  <div class="mt-4">
                    <h4 class="font-bold text-lg">Product Designer</h4>
                    <p class="text-gray-500 text-sm">
                      2021年6月 － 2023年12月 · {{ designerPeriod }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Research Assistant -->
            <div class="flex gap-6">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <img
                    src="../assets/images/logos/logo-fju.jpeg"
                    alt="FjuLogo"
                    class="w-16 h-16 object-contain rounded-md"
                    @error="handleImageError"
                  />
                </div>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-xl mb-1">Research Assistant</h3>
                <p class="text-gray-500 text-sm mb-1">
                  天主教輔仁大學 Fu Jen Catholic University 兼職
                </p>
                <p class="text-gray-500 text-sm mb-4">
                  2019年7月 － 2020年7月 · {{ researchPeriod }}
                </p>
                <div class="space-y-3 text-gray-700">
                  <p class="font-bold">
                    Research Project: Applying biological information visualization to interactive
                    design — the development of mobile applications for Taiwan's endemic birds
                  </p>
                  <p>
                    I assisted with early-stage research and design tasks, including avian
                    visualization design, organizing references, analyzing interviews, planning user
                    flows, and designing app wireframes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 社群分享與文章 Section -->
      <section class="w-full bg-gray-50">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 py-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-8">社群分享與文章</h2>
          <p class="text-gray-700 mb-8 text-md md:text-base max-w-4xl">
            我相信設計的價值不只存在於產品本身，也在於分享與傳承。透過演講、文章和工作坊，將我在產品設計中的實戰經驗與反思帶給更多設計師，與社群夥伴們共同成長，啟發彼此，在不斷交流中拓展設計視野。
          </p>
          
          <div class="space-y-8">
            <!-- 卡片 1 -->
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                  <img 
                    src="../assets/images/community/community-titansoft-ccp.jpg" 
                    alt="CcpPresentation"
                    class="w-[390px] h-[233px] object-cover rounded-md"
                    @error="handleImageError"
                  />
                </div>
                <div class="md:flex-1">
                  <div class="mb-2 text-sm text-gray-500">2025</div>
                  <h3 class="font-bold text-xl mb-3">UI/UX 設計師的成長與實戰心法</h3>
                  <p class="text-gray-600 mb-3">講者｜成大職涯教練計畫</p>
                  <p class="text-gray-700 mb-6 text-sm">透過職涯經驗與實戰案例，帶領初學者認識 UI/UX 設計師的核心能力，從入門到職場求生攻略，建構清晰的成長路徑。</p>
                  <a 
                    href="https://www.canva.com/design/DAGf8JH-fGc/rNPqQvPTzQlgz02xnDbpOg/view?utm_content=DAGf8JH-fGc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hcbf5ec034c"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
                  >
                    閱讀簡報內容
                  </a>
                </div>
              </div>
            </div>
            
            <!-- 卡片 2 -->
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                  <img
                    src="../assets/images/community/community-titansoftDay2024.jpg"
                    alt="TitansoftDay2024"
                    class="w-[390px] h-[233px] object-cover rounded-md"
                    @error="handleImageError"
                  />
                </div>
                <div class="md:flex-1">
                  <div class="mb-2 text-sm text-gray-500">2024</div>
                  <h3 class="font-bold text-xl mb-3">Value-Driven！發揮 UX 影響力的關鍵</h3>
                  <p class="text-gray-600 mb-3">講者｜2024 Titansoft Days Conference</p>
                  <p class="text-gray-700 mb-6 text-sm">設計師經常思考使用者體驗。但面對企業的產品利益，身為設計師如何發揮影響力，讓利益關係人理解 UX 價值，能夠幫助使用者也幫助產品成長？</p>
                  <a 
                    href="https://medium.com/titansoft/value-driven-%E7%99%BC%E6%8F%AE-ux-%E5%BD%B1%E9%9F%BF%E5%8A%9B%E7%9A%84%E9%97%9C%E9%8D%B5-2024-titansoft-tech-days-%E7%B2%BE%E9%81%B8%E8%AD%B0%E7%A8%8B-fbd1637cc980"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
                  >
                    閱讀文章內容
                  </a>
                </div>
              </div>
            </div>
            
            <!-- 卡片 3 -->
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                  <img
                    src="../assets/images/community/community-designerDay2024.jpg"
                    alt="DesignerDay2024"
                    class="w-[390px] h-[233px] object-cover rounded-md"
                    @error="handleImageError"
                  />
                </div>
                <div class="md:flex-1">
                  <div class="mb-2 text-sm text-gray-500">2024</div>
                  <h3 class="font-bold text-xl mb-1">團隊品質進化：敏捷開發的自動化工作流</h3>
                  <p class="text-gray-500 mb-4 italic">Team Quality Evolution: Automation Workflow in Scrum</p>
                  <p class="text-gray-600 mb-3">講者｜2024 Plus Ultra Conference</p>
                  <p class="text-gray-700 mb-6 text-sm">分享如何在 Scrum 團隊中導入自動化工作流程，提升團隊品質與開發效率，讓成員可以更專注在開發上。</p>
                </div>
              </div>
            </div>
            
            <!-- 卡片 4 -->
            <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div class="flex flex-col md:flex-row gap-8">
                <div class="md:flex-shrink-0 mb-4 md:mb-0 mx-auto md:mx-0">
                  <img 
                    src="../assets/images/community/community-titansoft-career.webp" 
                    alt="TitansoftCareerImage"
                    class="w-[390px] h-[233px] object-cover rounded-md"
                    @error="handleImageError"
                  />
                </div>
                <div class="md:flex-1">
                  <div class="mb-2 text-sm text-gray-500">2023</div>
                  <h3 class="font-bold text-xl mb-3">從 UX 設計師到「產品設計師」，T 型人才的菜鳥求職記</h3>
                  <p class="text-gray-600 mb-3">鈦坦訪談｜Medium</p>
                  <p class="text-gray-700 mb-6 text-sm">從個人的學習經驗，分享從學生時期到業界工作的成長經歷、以及身為產品設計師的價值觀分享。</p>
                  <a 
                    href="https://medium.com/titansoft/%E5%BE%9E-ux-%E8%A8%AD%E8%A8%88%E5%B8%AB%E5%88%B0-%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E5%B8%AB-t-%E5%9E%8B%E4%BA%BA%E6%89%8D%E7%9A%84%E8%8F%9C%E9%B3%A5%E6%B1%82%E8%81%B7%E8%A8%98-61e29ded4205"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
                  >
                    閱讀文章內容
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Besides Section -->
      <section class="w-full bg-gray-50">
        <div class="container mx-auto px-4 md:px-8 lg:px-16 pt-8 pb-16">
          <h2 class="text-2xl md:text-3xl font-bold mb-8">Besides...</h2>
          <p class="text-gray-700 mb-8 text-md md:text-base max-w-4xl">
            經歷工程與設計的跨領域求學階段，培養了對視覺設計與科技應用的興趣，經常參與 UI / UX 設計社群、活動講座、工作坊，以及藝文展覽等。我喜歡透過參與社群建立人際關係，吸收不同設計師的心路歷程，從各個角度來學習設計思考、執行、驗證。
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="../assets/images/about/besides1.jpg"
              alt="WorkshopPhoto1"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
            <img
              src="../assets/images/about/besides2.jpg"
              alt="WorkshopPhoto2"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
            <img
              src="../assets/images/about/besides3.jpg"
              alt="WorkshopPhoto3"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
            <img
              src="../assets/images/about/besides4.jpg"
              alt="WorkshopPhoto4"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
            <img
              src="../assets/images/about/besides5.jpg"
              alt="WorkshopPhoto5"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
            <img
              src="../assets/images/about/besides6.jpg"
              alt="WorkshopPhoto6"
              class="rounded-lg w-full h-64 object-cover hover:scale-105 transition-transform"
              @error="handleImageError"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  /* 移除這些樣式，它們會導致布局問題 */
  /* section {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  } */
</style>
