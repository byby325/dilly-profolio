# Tailwind CSS Foundation

這是專案使用的 Tailwind CSS 設計系統基礎元素參考。

## 排版系統 (Typography)

### 字體大小 (Font Size)

| 類名 | 屬性 | 備註 |
|------|------|------|
| `text-xs` | `font-size: 0.75rem; /* 12px */`<br>`line-height: 1rem; /* 16px */` | 極小文字，用於標籤、註腳等 |
| `text-sm` | `font-size: 0.875rem; /* 14px */`<br>`line-height: 1.25rem; /* 20px */` | 小文字，用於次要文本 |
| `text-base` | `font-size: 1rem; /* 16px */`<br>`line-height: 1.5rem; /* 24px */` | 基本文字，用於正文 |
| `text-lg` | `font-size: 1.125rem; /* 18px */`<br>`line-height: 1.75rem; /* 28px */` | 大文字，用於重要段落 |
| `text-xl` | `font-size: 1.25rem; /* 20px */`<br>`line-height: 1.75rem; /* 28px */` | 較大文字，用於副標題 |
| `text-2xl` | `font-size: 1.5rem; /* 24px */`<br>`line-height: 2rem; /* 32px */` | 次級標題 |
| `text-3xl` | `font-size: 1.875rem; /* 30px */`<br>`line-height: 2.25rem; /* 36px */` | 中級標題 |
| `text-4xl` | `font-size: 2.25rem; /* 36px */`<br>`line-height: 2.5rem; /* 40px */` | 主標題 |
| `text-5xl` | `font-size: 3rem; /* 48px */`<br>`line-height: 1;` | 大標題 |
| `text-6xl` | `font-size: 3.75rem; /* 60px */`<br>`line-height: 1;` | 特大標題 |
| `text-7xl` | `font-size: 4.5rem; /* 72px */`<br>`line-height: 1;` | 極大標題 |
| `text-8xl` | `font-size: 6rem; /* 96px */`<br>`line-height: 1;` | 巨大標題 |
| `text-9xl` | `font-size: 8rem; /* 128px */`<br>`line-height: 1;` | 最大標題 |

### 字體粗細 (Font Weight)

| 類名 | 屬性 | 備註 |
|------|------|------|
| `font-thin` | `font-weight: 100;` | 極細 |
| `font-extralight` | `font-weight: 200;` | 特細 |
| `font-light` | `font-weight: 300;` | 細體 |
| `font-normal` | `font-weight: 400;` | 標準 |
| `font-medium` | `font-weight: 500;` | 中等 |
| `font-semibold` | `font-weight: 600;` | 半粗體 |
| `font-bold` | `font-weight: 700;` | 粗體 |
| `font-extrabold` | `font-weight: 800;` | 特粗體 |
| `font-black` | `font-weight: 900;` | 黑體 |

### 行高 (Line Height)

| 類名 | 屬性 | 備註 |
|------|------|------|
| `leading-none` | `line-height: 1;` | 無行間距 |
| `leading-tight` | `line-height: 1.25;` | 緊湊 |
| `leading-snug` | `line-height: 1.375;` | 較緊湊 |
| `leading-normal` | `line-height: 1.5;` | 標準 |
| `leading-relaxed` | `line-height: 1.625;` | 寬鬆 |
| `leading-loose` | `line-height: 2;` | 非常寬鬆 |

## 色彩系統 (Color)

### 主色調 (Primary) - 黑白灰階

| 類名 | 色值 | 用途 |
|------|------|------|
| `primary-50` | `#fafafa` | 背景、卡片 |
| `primary-100` | `#f4f4f5` | 淺色背景 |
| `primary-200` | `#e4e4e7` | 邊框 |
| `primary-300` | `#d4d4d8` | 分隔線 |
| `primary-400` | `#a1a1aa` | 禁用文字 |
| `primary-500` | `#71717a` | 次要文字 |
| `primary-600` | `#52525b` | 主要文字 |
| `primary-700` | `#3f3f46` | 強調文字 |
| `primary-800` | `#27272a` | 標題文字 |
| `primary-900` | `#18181b` | 主要標題 |
| `primary-950` | `#09090b` | 最深色 |

### 強調色 (Accent)

| 類名 | 色值 | 用途 |
|------|------|------|
| `accent` | `#2563eb` | 主要按鈕、連結 |
| `accent-hover` | `#1d4ed8` | 懸停狀態 |

### 狀態顏色 (Status)

| 類名 | 色值 | 用途 |
|------|------|------|
| `success` | `#10b981` | 成功狀態 |
| `error` | `#ef4444` | 錯誤狀態 |
| `warning` | `#f59e0b` | 警告狀態 |

## 間距系統 (Spacing)

Tailwind 間距系統基於 0.25rem (4px) 的增量。

### 內邊距 (Padding)

| 類名 | 值 | 等效像素 |
|------|------|------|
| `p-0` | `0` | 0px |
| `p-1` | `0.25rem` | 4px |
| `p-2` | `0.5rem` | 8px |
| `p-3` | `0.75rem` | 12px |
| `p-4` | `1rem` | 16px |
| `p-5` | `1.25rem` | 20px |
| `p-6` | `1.5rem` | 24px |
| `p-8` | `2rem` | 32px |
| `p-10` | `2.5rem` | 40px |
| `p-12` | `3rem` | 48px |
| `p-16` | `4rem` | 64px |
| `p-20` | `5rem` | 80px |
| `p-24` | `6rem` | 96px |

*你也可以使用 `pt-*`, `pr-*`, `pb-*`, `pl-*` 來指定單一方向的內邊距，或 `px-*`, `py-*` 來指定水平/垂直方向。*

### 外邊距 (Margin)

| 類名 | 值 | 等效像素 |
|------|------|------|
| `m-0` | `0` | 0px |
| `m-1` | `0.25rem` | 4px |
| `m-2` | `0.5rem` | 8px |
| `m-3` | `0.75rem` | 12px |
| `m-4` | `1rem` | 16px |
| `m-5` | `1.25rem` | 20px |
| `m-6` | `1.5rem` | 24px |
| `m-8` | `2rem` | 32px |
| `m-10` | `2.5rem` | 40px |
| `m-12` | `3rem` | 48px |
| `m-16` | `4rem` | 64px |
| `m-20` | `5rem` | 80px |
| `m-24` | `6rem` | 96px |

*你也可以使用 `mt-*`, `mr-*`, `mb-*`, `ml-*` 來指定單一方向的外邊距，或 `mx-*`, `my-*` 來指定水平/垂直方向。*

### 間距 (Gap)

用於 Flex 和 Grid 佈局中的元素間距。

| 類名 | 值 | 等效像素 |
|------|------|------|
| `gap-0` | `0` | 0px |
| `gap-1` | `0.25rem` | 4px |
| `gap-2` | `0.5rem` | 8px |
| `gap-3` | `0.75rem` | 12px |
| `gap-4` | `1rem` | 16px |
| `gap-5` | `1.25rem` | 20px |
| `gap-6` | `1.5rem` | 24px |
| `gap-8` | `2rem` | 32px |
| `gap-10` | `2.5rem` | 40px |
| `gap-12` | `3rem` | 48px |
| `gap-16` | `4rem` | 64px |

*你也可以使用 `gap-x-*` 和 `gap-y-*` 來指定水平/垂直方向的間距。*

## 響應式設計 (Responsive Design)

### 媒體查詢斷點

| 前綴 | 最小寬度 | 說明 |
|------|-------|------|
| `sm:` | 640px | 小型設備，如手機橫屏 |
| `md:` | 768px | 中型設備，如平板 |
| `lg:` | 1024px | 大型設備，如筆記本 |
| `xl:` | 1280px | 特大設備，如桌面顯示器 |
| `2xl:` | 1536px | 超大屏幕設備 |

使用示例：`text-base md:text-lg lg:text-xl`

### 容器 (Container)

容器用於在各種斷點下控制內容的最大寬度。

| 斷點 | 最大寬度 |
|------|-------|
| 默認 | 100% |
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

使用：`<div class="container mx-auto px-4 md:px-8 lg:px-16">...</div>`

## 陰影 (Shadows)

| 類名 | 說明 |
|------|------|
| `shadow-sm` | 小陰影 |
| `shadow` | 默認陰影 |
| `shadow-md` | 中等陰影 |
| `shadow-lg` | 大陰影 |
| `shadow-xl` | 特大陰影 |
| `shadow-2xl` | 超大陰影 |
| `shadow-none` | 無陰影 |

## 圓角 (Border Radius)

| 類名 | 值 | 說明 |
|------|------|------|
| `rounded-none` | `0` | 無圓角 |
| `rounded-sm` | `0.125rem` | 2px |
| `rounded` | `0.25rem` | 4px |
| `rounded-md` | `0.375rem` | 6px |
| `rounded-lg` | `0.5rem` | 8px |
| `rounded-xl` | `0.75rem` | 12px |
| `rounded-2xl` | `1rem` | 16px |
| `rounded-3xl` | `1.5rem` | 24px |
| `rounded-full` | `9999px` | 圓形 |

## 自定義組件 (Custom Components)

我們定義了一些常用的組件類：

### 按鈕 (Buttons)

```html
<!-- 主要按鈕 -->
<button class="btn btn-primary">按鈕文字</button>

<!-- 輪廓按鈕 -->
<button class="btn btn-outline">按鈕文字</button>
```

### 標題 (Headings)

```html
<h2 class="section-title">段落標題</h2>
```

### 卡片 (Cards)

```html
<div class="card">卡片內容</div>
```

## 使用建議

1. **優先使用工具類**：優先使用 Tailwind 的工具類，而不是編寫自定義 CSS
2. **保持一致性**：在整個專案中使用一致的間距、色彩和排版
3. **善用響應式前綴**：確保在所有裝置上都有良好的體驗
4. **抽取重複模式**：當發現重複的模式時，考慮創建自定義組件類

---

*這份文檔僅涵蓋了 Tailwind CSS 的一部分功能。更多詳情請參閱 [Tailwind CSS 官方文檔](https://tailwindcss.com/docs)。* 