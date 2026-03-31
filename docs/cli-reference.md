# CLI 命令参考

> `specify` 命令行工具的完整参考

## 命令

| 命令 | 描述 |
|------|------|
| `init` | 从最新模板初始化新的 Specify 项目 |
| `check` | 检查已安装的工具：Git 和所有配置的基于 CLI 的代理 |
| `version` | 显示版本信息 |
| `extension` | 管理扩展（子命令组） |
| `preset` | 管理预设（子命令组） |

## `specify init` 参数和选项

| 参数/选项 | 类型 | 描述 |
|-----------|------|------|
| `<PROJECT_NAME>` | 位置 | 要创建的项目名称 |
| `--ai` | 选项 | 指定 AI 代理：claude、gemini、copilot、codebuddy、pi、cursor 等 |
| `--here` | 标志 | 在当前目录初始化 |
| `--script` | 选项 | 脚本类型：`sh` (Bash) 或 `ps` (PowerShell) |
| `--ignore-agent-tools` | 标志 | 跳过代理工具检查 |
| `--offline` | 标志 | 使用离线模式（内置资产，无需网络） |

## 斜杠命令

在 AI 代理（Claude Code、Copilot 等）中使用这些斜杠命令：

| 命令 | 描述 | 产出 |
|------|------|------|
| `/speckit.constitution` | 定义项目核心原则和技术约束 | `.specify/memory/constitution.md` |
| `/speckit.specify` | 创建功能规格 | `specs/NNN-feature/spec.md` |
| `/speckit.clarify` | 澄清规格中的模糊点 | 更新的 `spec.md` |
| `/speckit.plan` | 创建技术实现计划 | `plan.md` + `data-model.md` + `contracts/` |
| `/speckit.tasks` | 分解为可执行任务 | `tasks.md` |
| `/speckit.implement` | 执行任务生成代码 | 实际代码文件 |
| `/speckit.analyze` | 一致性检查 | 分析报告 |
| `/speckit.checklist` | 质量核对清单 | 质量检查清单 |
| `/speckit.taskstoissues` | 转换为 GitHub Issues | GitHub Issues |

## 工作流流程

```
/speckit.constitution     → 定义项目宪法（只需一次）
    ↓
/speckit.specify         → 创建功能规格
    ↓
/speckit.clarify         → 澄清模糊点（可选）
    ↓
/speckit.plan           → 生成技术计划
    ↓
/speckit.tasks          → 拆解任务
    ↓
/speckit.implement      → 执行实现
    ↓
/speckit.analyze        → 一致性检查
```

## 扩展管理

```bash
# 搜索扩展
specify extension search <keyword>

# 安装扩展
specify extension add <name>

# 列出已安装扩展
specify extension list

# 卸载扩展
specify extension remove <name>

# 启用/禁用扩展
specify extension enable <name>
specify extension disable <name>
```

## 预设管理

```bash
# 搜索预设
specify preset search <keyword>

# 安装预设
specify preset add <name> --priority <N>

# 列出已安装预设
specify preset list

# 卸载预设
specify preset remove <name>

# 启用/禁用预设
specify preset enable <name>
specify preset disable <name>
```

## 常见用法示例

```bash
# 创建新项目
specify init my-project --ai claude

# 在当前目录初始化
specify init . --ai copilot

# 跳过工具检查
specify init my-project --ai claude --ignore-agent-tools

# 强制使用 PowerShell 脚本
specify init my-project --script ps

# 检查环境
specify check

# 查看版本
specify version
```

---

> 基于 spec-kit 官方文档