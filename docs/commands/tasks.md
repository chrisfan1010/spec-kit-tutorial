# /speckit.tasks

> 阶段三：拆任务

## 概述

`/speckit.tasks` 将实现计划拆解为有依赖关系的、可执行的任务清单。

## 功能

1. **输入读取**：读取 `plan.md`（必需）和（如果存在）`data-model.md`、`contracts/`、`research.md`
2. **任务派生**：将合约、实体和场景转换为具体任务
3. **并行化标记**：标记独立任务 `[P]`，并识别可并行执行的组
4. **依赖分析**：确保任务顺序正确

## 输出

- `specs/NNN-feature/tasks.md` - 任务清单

## 使用方法

```markdown
/speckit.tasks
```

## tasks.md 结构

```markdown
# 003-exam-registration 任务清单

## Phase 1: Setup（基础设施）
- [ ] [T001] 创建数据库迁移脚本
- [ ] [T002] [P] 创建 ExamRegistration 实体类
- [ ] [T003] [P] 创建 Mapper 接口

## Phase 2: Tests（测试先行）
- [ ] [T004] [US1] 编写报名创建单元测试
- [ ] [T005] [US1] 编写身份证校验测试

## Phase 3: Implementation（实现 - US1 报名提交）
- [ ] [T007] [US1] 实现 ExamRegistrationService
- [ ] [T008] [US1] 实现身份证校验器
- [ ] [T009] [US1] 实现 RegistrationController

## Phase 4: Implementation（实现 - US2 修改报名）
- [ ] [T010] [US2] 扩展 Service 的 update 方法

## Phase 5: Polish（收尾）
- [ ] [T012] 添加 API 文档注解
- [ ] [T013] 运行全量测试
```

## 任务标记说明

| 标记 | 含义 |
|------|------|
| `[T001]` | 任务唯一编号 |
| `[P]` | 可并行执行（不依赖其他任务） |
| `[US1]` | 关联的用户故事编号 |

## 任务依赖顺序

```
Setup → Tests → Models → Services → Controllers → Integration → Polish
```

## 执行策略

| 策略 | 适用场景 | 执行方式 |
|------|---------|---------|
| MVP 优先 | 快速验证 | Setup + US1 任务，跳过 US2/US3 |
| 增量交付 | 稳步推进 | 按 Phase 顺序逐个完成 |
| 并行开发 | 多人协作 | 不同人负责不同 US 的任务 |

---

> 原文：https://github.com/github/spec-kit