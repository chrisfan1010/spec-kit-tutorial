# /speckit.constitution

> 阶段零：定宪法

## 概述

`/speckit.constitution` 是 spec-kit 工作流的起点。它用于定义项目的"基本法"——不可违反的工程原则和技术约束。

## 功能

1. **创建宪法文件**：在 `.specify/memory/constitution.md` 中创建项目宪法
2. **定义核心原则**：技术栈约束、代码规范、测试策略等
3. **建立治理规则**：确保所有后续开发都遵循这些原则

## 输出

- `.specify/memory/constitution.md` - 项目宪法文件

## 使用方法

```markdown
/speckit.constitution This project follows a "Library-First" approach. All features must be implemented as standalone libraries first. We use TDD strictly. We prefer functional programming patterns.
```

## 宪法内容示例

```markdown
# 项目宪法 v1.0.0

## 核心原则

### 原则一：技术栈约束
- 后端：Java 17 + Spring Boot 3.x
- 前端：Vue 3 + TypeScript
- 数据库：MySQL 8.0

### 原则二：测试优先
- 所有业务逻辑必须有单元测试
- 测试覆盖率不低于 80%

### 原则三：安全边界
- 所有接口必须经过权限校验
- 敏感数据必须脱敏处理
```

## 重要提示

- 宪法文件只需要创建一次
- 后续所有阶段的 AI 都会自动参考这份宪法
- 修改宪法会影响未来所有功能开发

---

> 原文：https://github.com/github/spec-kit