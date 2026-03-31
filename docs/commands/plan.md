# /speckit.plan

> 阶段二：做计划

## 概述

`/speckit.plan` 将功能规格转化为技术实现方案。

## 功能

1. **规格分析**：读取并理解功能需求、用户故事和验收标准
2. **宪法合规性检查**：确保技术与项目宪法一致
3. **技术转换**：将业务需求转换为技术架构
4. **数据模型设计**：生成数据模型文档
5. **API 合约生成**：创建接口定义
6. **复杂度评估**：评估各模块的复杂度

## 输出

- `specs/NNN-feature/plan.md` - 实现计划
- `specs/NNN-feature/data-model.md` - 数据模型（如需要）
- `specs/NNN-feature/contracts/` - API 合约目录
- `specs/NNN-feature/quickstart.md` - 快速启动指南

## 使用方法

```markdown
/speckit.plan The application uses Vite with minimal number of libraries. Use vanilla HTML, CSS, and JavaScript as much as possible. Images are not uploaded anywhere and metadata is stored in a local SQLite database.
```

## plan.md 结构

```markdown
# 003-exam-registration 实现计划

## 宪法检查 ✅
- [x] 技术栈符合宪法要求
- [x] 测试策略对齐
- [x] 安全约束已纳入设计

## 技术上下文
- 语言：Java 17
- 框架：Spring Boot 3.2
- 数据库：MySQL 8.0

## 数据模型设计

### ExamRegistration 实体
| 字段 | 类型 | 约束 | 说明 |
|------|------|------|------|
| id | Long | PK, AUTO_INCREMENT | 主键 |
| userId | Long | NOT NULL, FK | 考生ID |

## 接口设计

### POST /api/v1/registrations
- 入参：CreateRegistrationRequest
- 出参：RegistrationVO
- 权限：需登录

## 复杂度评估
| 模块 | 复杂度 | 理由 |
|------|--------|------|
| 报名表单 | 低 | 标准 CRUD |
| 照片上传 | 中 | 需对接 OSS |
```

## 三个子阶段

| 子阶段 | 说明 |
|--------|------|
| Phase 0（调研） | 解决技术未知项，记录决策理由和备选方案 |
| Phase 1（设计） | 生成数据模型、接口契约、快速启动文档 |
| Phase 2（准备） | 检测技术栈，更新 AI agent 配置文件 |

---

> 原文：https://github.com/github/spec-kit