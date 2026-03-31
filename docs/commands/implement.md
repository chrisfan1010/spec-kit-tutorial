# /speckit.implement

> 阶段四：写代码

## 概述

`/speckit.implement` 是核心的实现阶段。AI 按照 tasks.md 逐步生成代码。

## 功能

1. **加载任务列表**：读取 tasks.md、plan.md 和其他辅助文档
2. **检查清单验证**：检查是否有未完成的 checklist
3. **按序执行**：按 Phase 顺序执行任务：Setup → Tests → Core → Integration → Polish
4. **依赖管理**：有依赖的任务等待前置任务完成后才开始
5. **并行执行**：标记 `[P]` 的任务可并行执行
6. **进度标记**：每完成一个任务，在 tasks.md 中标记为 `[x]`
7. **错误处理**：遇到非并行任务失败时暂停并报告错误

## 使用方法

```markdown
/speckit.implement
```

## 执行流程

```
1. 加载 tasks.md
2. 加载 plan.md、data-model.md、contracts/
3. 检查 .specify/memory/constitution.md（确保遵循宪法）
4. 检查是否有未完成的 checklist
5. 按 Phase 顺序执行：
   - Phase 1: Setup（基础设施）
   - Phase 2: Tests（测试先行 - TDD 红-绿-重构）
   - Phase 3: Core（核心业务逻辑）
   - Phase 4: Integration（集成）
   - Phase 5: Polish（收尾）
6. 标记完成任务为 [x]
7. 输出完成报告
```

## 关键行为

- AI 会持续参考宪法文件，确保生成的代码符合团队规范
- 测试先写、实现后写（TDD 模式）
- 每个文件路径都明确写在 tasks.md 中
- 扩展插件可以在实现前后自动执行钩子

## 重要提示

- **TDD 模式**：测试必须先于实现
- **遵循宪法**：所有代码必须符合项目宪法中的规则
- **分阶段实现**：对于复杂项目，建议分阶段实现以避免上下文饱和

## 分阶段实现示例

对于大型项目（如 Taskify），可以分阶段：

- **阶段 1**：基本项目/任务结构
- **阶段 2**：Kanban 功能
- **阶段 3**：评论和分配

每个阶段验证后再进入下一阶段。

---

> 原文：https://github.com/github/spec-kit