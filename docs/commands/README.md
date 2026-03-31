# 📋 斜杠命令参考

> 在 AI 代理（Claude Code、Copilot 等）中使用的命令

## 工作流顺序

```
/speckit.constitution     → 阶段零：定宪法
    ↓
/speckit.specify         → 阶段一：写规格
    ↓
/speckit.clarify         → 阶段 1.5：澄清（可选）
    ↓
/speckit.plan           → 阶段二：做计划
    ↓
/speckit.tasks          → 阶段三：拆任务
    ↓
/speckit.implement      → 阶段四：写代码
    ↓
/speckit.analyze        → 阶段五：做检查
    ↓
/speckit.checklist      → 补充：质量核对
```

## 命令列表

| 命令 | 阶段 | 说明 | 产出 |
|------|------|------|------|
| `/speckit.constitution` | 阶段零 | 定义项目核心原则和技术约束 | `constitution.md` |
| `/speckit.specify` | 阶段一 | 将需求转化为结构化功能规格 | `spec.md` |
| `/speckit.clarify` | 阶段 1.5 | 识别并解决规格中的歧义 | 更新的 `spec.md` |
| `/speckit.plan` | 阶段二 | 制定技术实现方案 | `plan.md` + `data-model.md` |
| `/speckit.tasks` | 阶段三 | 拆解为可执行的任务清单 | `tasks.md` |
| `/speckit.implement` | 阶段四 | AI 按任务逐步生成代码 | 实际代码文件 |
| `/speckit.analyze` | 阶段五 | 跨文件一致性检查 | 分析报告 |
| `/speckit.checklist` | 补充 | 基于规格的质量检查清单 | 检查清单 |

## 详细文档

- [宪法命令](constitution.md) - 定义项目基本法
- [规格命令](specify.md) - 创建功能规格
- [澄清命令](clarify.md) - 解决规格歧义
- [计划命令](plan.md) - 生成技术实现计划
- [任务命令](tasks.md) - 拆解任务清单
- [实现命令](implement.md) - 执行代码生成
- [检查命令](analyze.md) - 一致性分析
- [核对命令](checklist.md) - 质量检查清单

## 使用示例

```markdown
# 1. 定义宪法
/speckit.constitution This is a security-first project...

# 2. 创建规格
/speckit.specify Build a photo album app...

# 3. 澄清模糊点
/speckit.clarify Focus on security...

# 4. 创建计划
/speckit.plan Use React + Node.js...

# 5. 拆解任务
/speckit.tasks

# 6. 实现代码
/speckit.implement

# 7. 一致性检查
/speckit.analyze

# 8. 质量核对
/speckit.checklist
```

---

> 基于 GitHub spec-kit 官方文档