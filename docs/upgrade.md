# 升级指南

> 您已安装 Spec Kit 并希望升级到最新版本以获取新功能、错误修复或更新的斜杠命令。本指南涵盖 CLI 工具升级和项目文件更新。

## 快速参考

| 要升级的内容 | 命令 | 使用时机 |
|-------------|------|---------|
| **仅 CLI 工具** | `uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git@vX.Y.Z` | 获取最新 CLI 特性而不触碰项目文件 |
| **项目文件** | `specify init --here --force --ai <your-agent>` | 更新斜杠命令、模板和脚本 |
| **两者都升级** | 先运行 CLI 升级，然后更新项目 | 建议用于主要版本更新 |

---

## 第一部分：升级 CLI 工具

CLI 工具 (`specify`) 与您的项目文件分开。升级它以获取最新功能和错误修复。

### 如果您使用 `uv tool install` 安装

升级到特定发布版本（查看 [Releases](https://github.com/github/spec-kit/releases) 获取最新标签）：

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git@v0.4.3
```

### 如果您使用一次性 `uvx` 命令

指定所需发布标签：

```bash
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init --here --ai copilot
```

### 验证升级

```bash
specify check
```

这显示已安装的工具并确认 CLI 正常工作。

---

## 第二部分：更新项目文件

当 Spec Kit 发布新功能（如新的斜杠命令或更新的模板）时，您需要刷新项目的 Spec Kit 文件。

### 更新的内容

运行 `specify init --here --force` 将更新：

- ✅ **斜杠命令文件** (`.claude/commands/`、`.github/prompts/` 等)
- ✅ **脚本文件** (`.specify/scripts/`)
- ✅ **模板文件** (`.specify/templates/`)
- ✅ **共享内存文件** (`.specify/memory/`) - **⚠️ 见下面的警告**

### 保持不变的内容

这些文件**永远不会被升级触及**——模板包甚至不包含它们：

- ✅ **您的规格** (`specs/001-my-feature/spec.md` 等) - **确认安全**
- ✅ **您的实现计划** (`specs/001-my-feature/plan.md`、`tasks.md` 等) - **确认安全**
- ✅ **您的源代码** - **确认安全**
- ✅ **您的 git 历史** - **确认安全**

`specs/` 目录完全排除在模板包之外，在升级过程中永远不会被修改。

### 更新命令

在项目目录中运行此命令：

```bash
specify init --here --force --ai <your-agent>
```

将 `<your-agent>` 替换为您的 AI 助手。请参阅[支持的 AI 代理](../README.md#-supported-ai-agents)列表。

**示例：**

```bash
specify init --here --force --ai copilot
```

### 理解 `--force` 标志

没有 `--force`，CLI 会警告您并请求确认：

```
Warning: Current directory is not empty (25 items)
Template files will be merged with existing content and may overwrite existing files
Proceed? [y/N]
```

使用 `--force`，它会跳过确认并立即继续。

**重要：您的 `specs/` 目录始终是安全的。** `--force` 标志仅影响模板文件（命令、脚本、模板、内存）。您 `specs/` 中的功能规格、计划和任务永远不会被包含在升级包中，也无法被覆盖。

---

## 故障排除

| 问题 | 解决方案 |
|------|---------|
| 缺少新功能 | 确保同时升级 CLI 和项目文件 |
| 斜杠命令不工作 | 运行 `specify init --here --force --ai <your-agent>` |
| 模板过时 | 删除 `.specify/` 后重新运行 `specify init` |

---

> 原文：[Upgrade Guide](https://github.com/github/spec-kit/blob/main/docs/upgrade.md)