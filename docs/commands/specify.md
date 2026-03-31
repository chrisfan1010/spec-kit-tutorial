# /speckit.specify

> 阶段一：写规格

## 概述

`/speckit.specify` 将自然语言的需求描述转化为结构化的功能规格。这是 spec-kit 工作流的核心阶段。

## 功能

1. **自动功能编号**：扫描现有 specs 目录，确定下一个功能编号（如 001、002）
2. **分支创建**：从描述生成语义分支名称并自动创建
3. **目录结构**：创建 `specs/[branch-name]/` 目录
4. **模板生成**：基于 spec-template.md 生成结构化规格文档

## 输出

- `specs/NNN-feature-name/spec.md` - 功能规格文件
- 自动创建的 Git 分支

## 使用方法

```markdown
/speckit.specify Build an application that can help me organize my photos in separate photo albums. Albums are grouped by date and can be re-organized by dragging and dropping on the main page.
```

## spec.md 结构

```markdown
# 003-exam-registration 功能规格

## 用户场景

### P1（核心场景）
**作为**考生，**我想**在线报名参加考试，**以便**不用去现场排队

#### 验收标准（Gherkin 格式）
- Given 考生已登录且资格审核通过
- When 考生选择考试科目并提交报名
- Then 系统生成报名确认单并发送短信通知

## 功能需求
- FR-001：报名表单需包含姓名、身份证号、报考科目
- FR-002：身份证号需实时校验格式和重复性

## 边界条件
- 同一身份证号同一考试只能报名一次
- 报名截止时间由管理员配置

## 成功标准
- SC-001：考生可在 3 步内完成报名
```

## 关键特性

- **优先级分层**：P1 是 MVP 必须做的，P2/P3 可以后续迭代
- **Gherkin 格式**：Given/When/Then 让测试可直接据此编写
- **`[NEEDS CLARIFICATION]` 标记**：AI 遇到模糊点会主动标记
- **用户故事独立**：每个用户故事独立可测试、可单独上线

---

> 原文：https://github.com/github/spec-kit