# /speckit.checklist

> 补充：质量核对

## 概述

`/speckit.checklist` 基于 spec.md 的需求，自动生成可勾选的质量检查清单。

## 功能

1. **需求提取**：从 spec.md 中提取所有需求和验收标准
2. **清单生成**：生成可勾选的检查项列表
3. **状态跟踪**：标记已验证的检查项
4. **覆盖率验证**：确保所有需求都有对应的检查

## 使用方法

```markdown
/speckit.checklist
```

## 适用场景

- 实现完成后、提 MR 前
- 逐条核对是否所有需求都已满足
- 团队 Code Review 时作为检查依据
- 客户验收时的确认清单

## 检查清单内容

```markdown
# 质量检查清单

## 功能需求

- [ ] FR-001: 报名表单包含姓名、身份证号、报考科目、照片上传
- [ ] FR-002: 身份证号实时校验格式
- [ ] FR-003: 身份证号实时校验重复性

## 验收标准

- [ ] SC-001: 考生可在 3 步内完成报名
- [ ] SC-002: 报名信息可在管理后台实时查看

## 边界条件

- [ ] 同一身份证号同一考试只能报名一次
- [ ] 报名关闭后不可修改

## 非功能需求

- [ ] 响应时间 < 500ms
- [ ] 支持 1000 并发
- [ ] 符合安全审计要求
```

## 配合使用

建议与以下命令配合使用：

```
/speckit.specify      → 创建规格
/speckit.clarify      → 澄清模糊点
/speckit.plan        → 创建计划
/speckit.tasks       → 拆解任务
/speckit.implement   → 实现代码
/sspeckit.analyze    → 一致性检查
/speckit.checklist   → 质量核对 ✅ 最后一步
```

## 重要提示

- 此命令在 Implement 阶段之后使用
- 逐项检查，确保所有需求都被满足
- 发现遗漏时，返回 Implement 阶段补充

---

> 原文：https://github.com/github/spec-kit