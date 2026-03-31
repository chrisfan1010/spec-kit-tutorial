# SpecKit & OpenSpec 教程网站

规范驱动开发（Spec-Driven Development, SDD）框架对比展示网站。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com)

## 项目简介

这是一个展示 **SpecKit** 和 **OpenSpec** 两大规范驱动开发框架的对比教程网站，帮助开发者理解并选择适合的 SDD 工具。

### 核心内容

- **SpecKit** - GitHub 官方规范驱动开发工具包（83K+ Stars）
- **OpenSpec** - 轻量级规范驱动开发框架（35K+ Stars）
- 框架对比、功能特性、安装方式、工作流程等

## 技术栈

- **框架**：React 19
- **构建工具**：Vite
- **样式**：Tailwind CSS + DaisyUI
- **部署**：Vercel

## 开始使用

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 部署到 Vercel

```bash
# 方法1: 通过 Vercel CLI
npm i -g vercel
vercel

# 方法2: 通过 GitHub 推送
# 推送到 GitHub，连接到 Vercel 即可自动部署
```

## 目录结构

```
├── src/
│   ├── components/       # 可复用组件
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/            # 页面组件
│   │   └── HomePage.tsx
│   ├── App.tsx           # 应用入口
│   ├── main.tsx          # 渲染入口
│   └── index.css         # 全局样式
├── public/               # 静态资源
├── index.html            # HTML 模板
├── vite.config.ts        # Vite 配置
├── tailwind.config.js    # Tailwind 配置
├── postcss.config.js     # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖
```

## 相关资源

- [SpecKit 官方仓库](https://github.com/github/spec-kit)
- [OpenSpec 官方仓库](https://github.com/ForceInjection/OpenSpec)
- [SpecKit 中文文档](https://speckit.cn/)
- [规范驱动开发 (SDD) 介绍](https://jimmysong.io/zh/book/ai-handbook/sdd/)

## 许可证

MIT