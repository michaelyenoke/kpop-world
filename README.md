# KPOP World | Neural Fandom Hub

![KPOP World Design](https://images.unsplash.com/photo-1514525253361-b92474476602?q=80&w=1200&auto=format&fit=crop)

這是一個基於 **"website_oneshot.md"** 框架打造的高階 Cinematic Landing Page。本專案以 K-pop 文化為核心，融合了生物科技與數位儀器的美學風格 (Preset D - Vapor Clinic)，提供極致的視覺與互動體驗。

## 🌌 核心美學 (Aesthetic Directions)
*   **Identity**: 數位儀器風格，結合生物科技感與高端雜誌設計。
*   **Palette**: 
    *   `Deep Void (#0A0A14)` - 主色調
    *   `Plasma (#7B61FF)` - 強調色
    *   `Ghost (#F0EFF4)` - 文字與細節
*   **Typography**: 
    *   `Sora` - 標題 (Sleek Sans)
    *   `Instrument Serif Italic` - 戲劇效果文字
    *   `Fira Code` - 數據與狀態標籤

## 🛠️ 技術棧 (Tech Stack)
*   **Frontend**: React 19 + TypeScript
*   **Styling**: Tailwind CSS v3 (客製化 Noise Overlay 與 Glassmorphism)
*   **Animations**: GSAP 3 + ScrollTrigger
*   **Icons**: Lucide React
*   **Build Tool**: Vite

## ✨ 關鍵功能 (Key Features)
*   **Floating Island Navbar**: 根據捲動狀態自動切換毛玻璃外觀與比例。
*   **Interactive Micro-UIs**:
    *   **Identity Sync (Shuffler)**: 垂直循環的數據分析卡片，具備模糊深度感。
    *   **Global Pulse (Typewriter)**: 即時電傳打字機效果，發送全球粉絲訊號。
    *   **Live Protocol (Scheduler)**: SVG 自動化路徑規劃動畫。
*   **Protocol Stacking**: 使用 GSAP ScrollTrigger 實現的全螢幕卡片堆疊動畫，包含背景縮放、模糊與透明度轉場。
*   **Magnetic Buttons**: 具備自定義貝茲曲線縮放與滑動背景層的磁吸互動感。

---

## 🚀 開發說明 (Development Guide)

### 1. 本地啟動
```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

### 2. 核心代碼結構
*   `src/App.tsx`: 包含所有 UI 組件、GSAP 動畫邏輯與狀態管理。
*   `src/index.css`: 定義全域設計系統 Token、SVG 雜訊特效與自定義 Tailwind 組件。
*   `tailwind.config.js`: 配置 Preset D 的色彩空間與字體家族。

### 3. 動態效果調整
本專案使用 `gsap.context()` 管理動畫生命週期。若要調整捲動速度或卡片堆疊感，請搜尋 `App.tsx` 中的 `ScrollTrigger` 配置。

### 4. 部署
建議部署至 GitHub Pages 或 Vercel。
```bash
npm run build
```

---

*“Do not build a website; build a digital instrument. Every scroll is intentional, every animation weighted.”*
