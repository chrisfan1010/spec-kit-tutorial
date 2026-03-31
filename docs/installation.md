# 安装指南

> 安装 spec-kit 并开始使用规范驱动开发

## 前置依赖

- **Linux/macOS**（或 Windows；PowerShell 脚本现在支持无需 WSL）
- AI 编码代理：[Claude Code](https://www.anthropic.com/claude-code)、[GitHub Copilot](https://code.visualstudio.com/)、[Codebuddy CLI](https://www.codebuddy.ai/cli)、[Gemini CLI](https://github.com/google-gemini/gemini-cli) 或 [Pi Coding Agent](https://pi.dev)
- [uv](https://docs.astral.sh/uv/) 用于包管理
- [Python 3.11+](https://www.python.org/downloads/)
- [Git](https://git-scm.com/downloads)

## 安装方式

### 方式一：持久安装（推荐）

安装一次并随时使用。固定特定发布版本以确保稳定性（查看 [Releases](https://github.com/github/spec-kit/releases) 获取最新版本）：

```bash
# 安装特定稳定版本（推荐）
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.4.3

# 或从 main 安装最新版本（可能包含未发布的更改）
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

然后直接使用工具：

```bash
# 创建新项目
specify init <PROJECT_NAME>

# 或在现有项目中初始化
specify init . --ai claude

# 检查已安装工具
specify check
```

升级 Specify：

```bash
uv tool install specify-cli --force --from git+https://github.com/github/spec-kit.git@v0.4.3
```

### 方式二：一次性使用

直接运行而无需安装：

```bash
# 创建新项目（固定到稳定版本）
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <PROJECT_NAME>

# 或在当前目录初始化
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init . --ai claude
```

### 指定 AI 代理

您可以在初始化期间主动指定您的 AI 代理：

```bash
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --ai claude
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --ai gemini
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --ai copilot
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --ai codebuddy
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --ai pi
```

### 指定脚本类型（Bash vs PowerShell）

所有自动化脚本现在都有 Bash (`.sh`) 和 PowerShell (`.ps1`) 变体。

自动行为：
- Windows 默认：`ps`
- 其他 OS 默认：`sh`
- 交互模式：除非传递 `--script`，否则会提示您

强制特定脚本类型：

```bash
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --script sh
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init <project_name> --script ps
```

## 验证

初始化后，您应该可以在 AI 代理中看到以下命令：

- `/speckit.specify` - 创建规格
- `/speckit.plan` - 生成实现计划
- `/speckit.tasks` - 分解为可操作的任务

`.specify/scripts` 目录将包含 `.sh` 和 `.ps1` 脚本。

## 故障排除

### 企业/离线安装

如果您的环境阻止访问 PyPI（运行 `uv tool install` 或 `pip install` 时看到 403 错误），您可以在连接的机器上创建便携式 wheel 包并将其传输到离线目标。

**步骤 1：在连接的机器上构建 wheel（与目标相同的 OS 和 Python 版本）**

```bash
# 克隆仓库
git clone https://github.com/github/spec-kit.git
cd spec-kit

# 构建 wheel
pip install build
python -m build --wheel --outdir dist/

# 下载 wheel 及其所有运行时依赖
pip download -d dist/ dist/specify_cli-*.whl
```

> **重要**：`pip download` 解析平台特定的 wheel（例如 PyYAML 包含本机扩展）。您必须在与离线目标**相同的 OS 和 Python 版本**的机器上运行此步骤。

**步骤 2：将 `dist/` 目录传输到离线机器**

通过 USB、网络共享或其他经批准的传输方式将整个 `dist/` 目录复制到目标机器。

**步骤 3：在离线机器上安装**

```bash
pip install --no-index --find-links=./dist specify-cli
```

**步骤 4：初始化项目（无需网络）**

```bash
# 初始化项目 — 无需 GitHub 访问
specify init my-project --ai claude --offline
```

`--offline` 标志告诉 CLI 使用 wheel 内置的模板、命令和脚本，而不是从 GitHub 下载。

> **弃用通知**：从 v0.6.0 开始，`specify init` 将默认使用内置资产，`--offline` 标志将被移除。GitHub 下载路径将被退役，因为内置资产消除了对网络访问的需要，避免代理/防火墙问题，并保证模板始终与安装的 CLI 版本匹配。无需任何操作——`specify init` 将开箱即用，无需网络访问。

> **注意**：需要 Python 3.11+。

> **Windows 注意**：离线脚手架需要 PowerShell 7+ (`pwsh`)，而不是 Windows PowerShell 5.x (`powershell.exe`)。从 https://aka.ms/powershell 安装。

---

> 原文：[Installation Guide](https://github.com/github/spec-kit/blob/main/docs/installation.md)