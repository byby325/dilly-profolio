# 部署指南

本文檔記錄了如何部署 Dilly Portfolio 到 Firebase Hosting，包括測試環境和生產環境的設置，以及版本管理和自動化工作流程。

## 環境設置

本專案使用兩個環境：
- **測試環境**：https://dilly-portfolio.web.app
- **生產環境**：https://dillychen.com

## 前置需求

- 安裝 Node.js 和 npm
- 安裝 Firebase CLI：`npm install -g firebase-tools`
- 登入 Firebase：`firebase login`
- GitHub 帳號和倉庫
- GitHub Actions (用於 CI/CD)

## 版本管理與協作流程

### Git 分支策略

我們採用以下分支策略：

1. **main** - 生產環境分支，保持穩定
2. **develop** - 開發分支，所有功能開發完成後合併到此
3. **feature/xxx** - 功能分支，從 develop 分支創建
4. **hotfix/xxx** - 熱修復分支，從 main 分支創建，用於修復生產環境緊急問題

### 工作流程

1. 從 **develop** 分支創建新的功能分支：
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/new-component
   ```

2. 開發完成後，提交變更：
   ```bash
   git add .
   git commit -m "feat: add new component"
   git push origin feature/new-component
   ```

3. 在 GitHub 上創建 Pull Request，將功能分支合併到 develop 分支

4. 經過審核後，合併到 develop 分支

5. 當準備釋出新版本時，將 develop 合併到 main：
   ```bash
   git checkout main
   git pull
   git merge develop
   git push origin main
   ```

### 版本控制

使用語義化版本（Semantic Versioning）：

- 主版本號 (MAJOR)：不兼容的 API 變更
- 次版本號 (MINOR)：向下兼容的功能性新增
- 修訂號 (PATCH)：向下兼容的問題修正

更新版本範例：
```bash
# 安裝 npm version 工具
npm install -g semver

# 更新版本
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.1 -> 1.1.0
npm version major  # 1.1.0 -> 2.0.0
```

## CI/CD Pipeline 設置

我們使用 GitHub Actions 設置自動化工作流程：

1. 在專案根目錄創建 `.github/workflows` 目錄：
   ```bash
   mkdir -p .github/workflows
   ```

2. 創建開發環境部署工作流程文件 `dev-deploy.yml`：

   ```yaml
   name: Deploy to Development

   on:
     push:
       branches:
         - develop

   jobs:
     build_and_deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Lint
           run: npm run lint

         - name: Type check
           run: npm run type-check

         - name: Build
           run: npm run build || npx vite build

         - name: Deploy to Firebase Testing
           uses: FirebaseExtended/action-hosting-deploy@v0
           with:
             repoToken: '${{ secrets.GITHUB_TOKEN }}'
             firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
             projectId: dilly-portfolio
             channelId: testing
             target: testing
   ```

3. 創建生產環境部署工作流程文件 `prod-deploy.yml`：

   ```yaml
   name: Deploy to Production

   on:
     push:
       branches:
         - main

   jobs:
     build_and_deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'

         - name: Install dependencies
           run: npm ci

         - name: Lint
           run: npm run lint

         - name: Type check
           run: npm run type-check

         - name: Build
           run: npm run build || npx vite build

         - name: Deploy to Firebase Production
           uses: FirebaseExtended/action-hosting-deploy@v0
           with:
             repoToken: '${{ secrets.GITHUB_TOKEN }}'
             firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
             projectId: dilly-portfolio
             channelId: live
             target: production
   ```

### 設置 GitHub Secrets

為了使 GitHub Actions 能夠部署到 Firebase，您需要設置 Firebase 服務帳號密鑰：

1. 在 Firebase 控制台生成新的服務帳號密鑰：
   - 前往 [Firebase 控制台](https://console.firebase.google.com/project/dilly-portfolio/settings/serviceaccounts/adminsdk)
   - 選擇 "專案設置" > "服務帳號"
   - 點擊 "生成新的私鑰"
   - 下載 JSON 文件

2. 在 GitHub 倉庫設置密鑰：
   - 前往倉庫設置 > Secrets and variables > Actions
   - 點擊 "New repository secret"
   - 名稱設為：`FIREBASE_SERVICE_ACCOUNT`
   - 值設為下載的 JSON 文件內容

### 自動化工作流程

完成上述設置後，您的 CI/CD 流程將如下：

1. 當代碼推送到 develop 分支時：
   - GitHub Actions 會自動構建應用
   - 運行 Lint 和類型檢查
   - 部署到測試環境 (https://dilly-portfolio.web.app)

2. 當代碼推送到 main 分支時：
   - GitHub Actions 會自動構建應用
   - 運行 Lint 和類型檢查
   - 部署到生產環境 (https://dillychen.com)

### 查看部署歷史和狀態

您可以在 GitHub 倉庫的 Actions 標籤頁查看所有部署的歷史記錄和狀態。

## 實施計劃

1. **初始設置** (1天):
   - 創建 GitHub 倉庫
   - 推送當前代碼到 develop 和 main 分支
   - 設置 Firebase 服務帳號和 GitHub Secrets

2. **Pipeline 設置** (1天):
   - 創建 GitHub Actions 工作流程文件
   - 測試自動部署流程

3. **團隊適應** (1週):
   - 向團隊成員介紹新的工作流程
   - 練習使用功能分支和 PR 流程
   - 監控和調整流程

## 初始設置（已完成）

以下步驟記錄了初始設置過程，這些步驟已經完成，僅供參考：

1. 創建 Firebase 專案：
   ```bash
   firebase projects:create dilly-portfolio --display-name="Dilly Portfolio"
   ```

2. 初始化 Firebase Hosting：
   ```bash
   firebase init hosting
   ```

3. 設置多環境目標：
   ```bash
   firebase target:apply hosting testing dilly-portfolio
   firebase target:apply hosting production dilly-portfolio-custom
   ```

4. 配置 firebase.json 文件以支援多環境：
   ```json
   {
     "hosting": [
       {
         "target": "testing",
         "public": "dist",
         "ignore": [
           "firebase.json",
           "**/.*",
           "**/node_modules/**"
         ],
         "rewrites": [
           {
             "source": "**",
             "destination": "/index.html"
           }
         ]
       },
       {
         "target": "production",
         "public": "dist",
         "ignore": [
           "firebase.json",
           "**/.*",
           "**/node_modules/**"
         ],
         "rewrites": [
           {
             "source": "**",
             "destination": "/index.html"
           }
         ]
       }
     ]
   }
   ```

5. 配置 .firebaserc 文件：
   ```json
   {
     "projects": {
       "default": "dilly-portfolio"
     },
     "targets": {
       "dilly-portfolio": {
         "hosting": {
           "testing": [
             "dilly-portfolio"
           ],
           "production": [
             "dilly-portfolio-custom"
           ]
         }
       }
     },
     "etags": {}
   }
   ```

6. 在 Firebase 控制台設置自定義域名：
   - 訪問 https://console.firebase.google.com/project/dilly-portfolio/hosting/sites
   - 選擇 "dilly-portfolio-custom" 站點
   - 點擊 "添加自定義域名"
   - 輸入域名 "dillychen.com"
   - 按照指導步驟操作，設置 DNS 記錄

## 日常部署流程

### 手動部署流程 (無 CI/CD)

#### 1. 構建專案

```bash
# 進入專案目錄
cd dilly-profolio

# 構建專案
npm run build || npx vite build
```

#### 2. 部署到測試環境

```bash
firebase deploy --only hosting:testing
```

部署完成後，您可以在 https://dilly-portfolio.web.app 查看測試環境。

#### 3. 測試和驗證

在測試環境中檢查所有功能和頁面是否正常運作。確保所有更新都如預期顯示。

#### 4. 部署到生產環境

```bash
firebase deploy --only hosting:production
```

部署完成後，您可以在 https://dillychen.com 查看生產環境。

### 自動部署流程 (使用 CI/CD)

使用 CI/CD 後，部署將自動進行：

1. 開發和測試在功能分支上進行
2. 合併到 develop 分支自動部署到測試環境
3. 合併到 main 分支自動部署到生產環境

## 檢查部署狀態

查看 Firebase Hosting 站點列表：
```bash
firebase hosting:sites:list
```

## 常見問題處理

### 1. 部署失敗

如果部署失敗，請檢查：
- Firebase 配置文件是否正確
- 構建過程是否成功完成
- 是否具有足夠的權限
- GitHub Actions 日誌中的錯誤信息

### 2. 自定義域名未生效

- 確認 DNS 設置是否正確
- DNS 傳播可能需要幾小時到 24 小時不等
- 使用 `nslookup` 或 `dig` 命令檢查 DNS 記錄是否已更新

### 3. TypeScript 檢查失敗

如果 `npm run build` 命令因 TypeScript 檢查失敗，可以直接使用：
```bash
npx vite build
```

然後繼續部署流程。

### 4. GitHub Actions 工作流程失敗

檢查 GitHub Actions 日誌中的具體錯誤信息：
- 依賴項安裝問題
- 構建錯誤
- Firebase 身份驗證問題

## 重要連結

- Firebase 控制台：https://console.firebase.google.com/project/dilly-portfolio/overview
- Firebase Hosting 設置：https://console.firebase.google.com/project/dilly-portfolio/hosting/sites
- 測試環境網址：https://dilly-portfolio.web.app
- 生產環境網址：https://dillychen.com
- GitHub Actions 文檔：https://docs.github.com/en/actions 

# 克隆您的 Fork 到本地
git clone https://github.com/您的用戶名/dilly-portfolio.git
cd dilly-portfolio 

# 推送到您的 Fork
git push origin feature/new-feature 

# 確保您在 Fork 的本地複製中
cd dilly-portfolio

# 構建專案
npm run build || npx vite build

# 部署到您自己的 Firebase 項目
firebase deploy --project 您的項目ID 

# 確認您在專案目錄中
cd dilly-profolio

# 將更改添加到暫存區
git add .

# 提交更改
git commit -m "feat: 調整網站內容和版面" 

# 如果您還沒有 develop 分支，先創建並切換到該分支
git checkout -b develop

# 如果 develop 分支已存在，確保您在該分支上
git checkout develop

# 推送到遠程倉庫
git push origin develop 

# 切換到 main 分支
git checkout main 

# 合併 develop 分支
git merge develop 

# 推送到 main 分支
git push origin main 