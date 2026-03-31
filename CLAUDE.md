---
description: SpecKit & OpenSpec 教程网站开发指南
globs: *
alwaysApply: true
inclusion: always
---

# SpecKit & OpenSpec 教程网站开发指南

## 项目概述

这是一个展示 **SpecKit** 和 **OpenSpec** 规范驱动开发（SDD）框架对比的静态网站，使用 Vercel 部署。

## 技术栈

- **前端框架**：React 19
- **构建工具**：Vite
- **样式**：Tailwind CSS + DaisyUI
- **路由**：React Router 6 (HashRouter)
- **部署平台**：Vercel
- **编程语言**：TypeScript

## 开发规范

### UI 设计规则

在生成任何 UI 代码之前，必须先阅读 `rules/ui-design/rule.md` 文件，并遵循设计规范。

### 代码风格

- 使用 TypeScript 进行类型安全开发
- 遵循 ESLint 和 Prettier 配置
- 组件使用函数式组件和 Hooks

### 目录结构

```
src/
├── components/     # 可复用组件
│   ├── Navbar.tsx
│   └── Footer.tsx
├── pages/          # 页面组件
│   └── HomePage.tsx
├── App.tsx         # 应用入口
├── main.tsx        # 渲染入口
└── index.css       # 全局样式
```

## 常用命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发
npm run build      # 构建生产版本
npm run preview    # 预览构建结果
npm run lint       # 代码检查
npm run format     # 代码格式化
```

## 部署说明

项目已配置 Vercel 部署：

1. **推送至 GitHub** - 自动触发部署
2. **或使用 Vercel CLI** - `vercel` 命令行部署

部署后访问 URL 会自动添加 query string 避免 CDN 缓存。

## 相关资源

- [SpecKit 官方文档](https://github.com/github/spec-kit)
- [OpenSpec 官方文档](https://github.com/ForceInjection/OpenSpec)
- [SpecKit 中文网](https://speckit.cn/)