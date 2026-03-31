# Spec-Kit 与 OpenSpec 对比

> 规范驱动开发 (SDD) 两大框架全面对比

---

## 概览对比

| 维度 | spec-kit (GitHub) | OpenSpec (Fission AI) |
|------|-------------------|------------------------|
| **Stars** | 83K+ | 35K+ |
| **语言** | Python | TypeScript/Node.js |
| **理念** | 严格流程、宪法驱动 | 流体迭代、灵活轻量 |
| **适用场景** | 绿皮书、新项目 | 存量项目、灵活迭代 |
| **团队规模** | 中大型团队 | 小型团队、个人项目 |

---

## 核心理念

### spec-kit - 宪法驱动

> "规格是代码的源头"

- **严格流程**：5-7 个明确阶段（Constitution → Specify → Clarify → Plan → Tasks → Implement → Analyze）
- **宪法约束**：项目基本法指导所有后续开发
- **完整文档**：每个阶段产出详细 Markdown 文档
- **TDD 优先**：测试先于实现

### OpenSpec - 流体迭代

> "流体而非 rigid，迭代而非 waterfall"

- **动作驱动**：命令是可选动作，不是固定阶段
- **轻量快速**：最小化仪式感，快速上手
- **Delta 机制**：变更标记为 ADDED/MODIFIED/REMOVED，而非完整重写
- **存量友好**：专为存量项目（brownfield）设计

---

## 核心流程对比

### spec-kit 工作流

```
/speckit.constitution     → 定义宪法（一次）
    ↓
/speckit.specify         → 创建规格
    ↓
/speckit.clarify         → 澄清模糊点（可选）
    ↓
/speckit.plan            → 技术计划
    ↓
/speckit.tasks          → 拆解任务
    ↓
/speckit.implement       → 实现代码
    ↓
/speckit.analyze         → 一致性检查
    ↓
/speckit.checklist      → 质量核对
```

### OpenSpec 工作流

```
/opsx:propose            → 创建变更（快速）
    ↓
/opsx:apply             → 实现任务
    ↓
/opsx:archive          → 归档变更
```

或扩展模式：

```
/opsx:new               → 开始新变更
/opsx:ff                → 快速创建所有工件
    ↓
/opsx:apply             → 实现
/opsx:verify            → 验证实现
    ↓
/opsx:archive          → 归档
```

---

## 安装对比

### spec-kit 安装

```bash
# 前置依赖
# Python 3.11+、uv、Git

# 持久安装（推荐）
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.4.3

# 或一次性使用
uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init my-project

# 初始化
specify init my-project --ai claude
```

### OpenSpec 安装

```bash
# 前置依赖
# Node.js 20.19.0+

# 安装
npm install -g @fission-ai/openspec@latest

# 初始化
cd your-project
openspec init

# 或使用 npx
npx @fission-ai/openspec init
```

---

## 命令对比

### spec-kit 斜杠命令

| 命令 | 阶段 | 说明 |
|------|------|------|
| `/speckit.constitution` | 阶段零 | 定义项目宪法 |
| `/speckit.specify` | 阶段一 | 创建功能规格 |
| `/speckit.clarify` | 阶段 1.5 | 澄清模糊点 |
| `/speckit.plan` | 阶段二 | 技术实现计划 |
| `/speckit.tasks` | 阶段三 | 拆解任务 |
| `/speckit.implement` | 阶段四 | 实现代码 |
| `/speckit.analyze` | 阶段五 | 一致性检查 |
| `/speckit.checklist` | 补充 | 质量核对 |

### OpenSpec 斜杠命令

**快速路径（默认）**

| 命令 | 说明 |
|------|------|
| `/opsx:propose` | 创建变更并生成所有规划工件 |
| `/opsx:explore` | 探索性思考，不创建结构 |
| `/opsx:apply` | 实现任务 |
| `/opsx:archive` | 归档完成的变更 |

**扩展工作流**

| 命令 | 说明 |
|------|------|
| `/opsx:new` | 开始新变更脚手架 |
| `/opsx:continue` | 基于依赖创建下一个工件 |
| `/opsx:ff` | 快速创建所有规划工件 |
| `/opsx:verify` | 验证实现是否符合工件 |
| `/opsx:sync` | 将增量规格合并到主规格 |
| `/opsx:bulk-archive` | 批量归档多个变更 |

---

## 优劣势对比

### spec-kit 优势

| 优势 | 说明 |
|------|------|
| 🔧 **完整流程** | 7 个阶段，文档详尽 |
| 📜 **宪法机制** | 团队规范一致性保证 |
| 🧪 **V-Model 扩展** | 专为测试同学设计，需求-测试追溯 |
| 🏢 **企业友好** | 适合中大型团队、正式项目 |
| 📊 **一致性检查** | 自动检测规格-计划-代码对齐 |

### spec-kit 劣势

| 劣势 | 说明 |
|------|------|
| 📦 **重量级** | 需要 Python 环境，依赖较多 |
| 🚫 **流程刚性** | 阶段必须按顺序执行 |
| 📝 **文档量大** | 每个阶段产出大量 Markdown |
| 🔄 **完整重写** | 变更需要完整更新文档 |

### OpenSpec 优势

| 优势 | 说明 |
|------|------|
| ⚡ **轻量快速** | Node.js 一个包，快速上手 |
| 🔄 **流体迭代** | 随时可返回修改任意阶段 |
| 📁 **Delta 机制** | 变更标记 ADDED/MODIFIED/REMOVED |
| 🏠 **存量项目** | 专为已有代码库设计 |
| 🎯 **灵活工作流** | 可选扩展模式，因项目而异 |

### OpenSpec 劣势

| 劣势 | 说明 |
|------|------|
| 📊 **团队规范** | 缺乏宪法机制，团队一致性依赖约定 |
| 🧪 **测试集成** | 无官方 V-Model 扩展 |
| 📉 **大型项目** | 缺乏强制流程，可能失控 |
| 🔍 **一致性检查** | 无自动对齐检查 |

---

## 工种协作边界

### spec-kit 角色分工

| 角色 | 主要工作 | 使用阶段 |
|------|---------|---------|
| **产品经理** | 定义需求、用户故事、验收标准 | Specify → Clarify |
| **架构师** | 技术选型、数据模型设计 | Plan |
| **开发工程师** | 任务拆解、代码实现 | Tasks → Implement |
| **测试工程师** | V-Model 扩展、测试方案 | 配合 Implement |
| **Reviewer** | 一致性检查 | Analyze → Checklist |

### OpenSpec 角色分工

| 角色 | 主要工作 | 使用命令 |
|------|---------|---------|
| **产品/PM** | 定义变更提案 | propose |
| **开发** | 探索、澄清、实现 | explore → apply |
| **团队成员** | 验证、归档 | verify → archive |

**关键差异**：OpenSpec 更扁平，开发人员可以独立完成更多工作；spec-kit 更强调角色分离和流程规范。

---

## 如何选择？

### 选择 spec-kit 当：

- ✅ 需要严格的团队规范
- ✅ 中大型团队项目
- ✅ 测试角色需要深度参与
- ✅ 文档驱动的项目文化
- ✅ 需要 V-Model 测试能力

### 选择 OpenSpec 当：

- ✅ 个人或小团队开发
- ✅ 快速迭代、轻量流程
- ✅ 存量项目（brownfield）
- ✅ 偏好灵活性而非仪式感
- ✅ Node.js 技术栈

---

## MD 文件模板对比

### spec-kit 核心文件

| 文件 | 说明 | 必需 |
|------|------|------|
| `constitution.md` | 项目宪法，定义核心原则和技术约束 | 首次创建 |
| `spec.md` | 功能规格（用户场景、需求、成功标准） | ✅ |
| `plan.md` | 技术实现计划 | ✅ |
| `research.md` | 研究文档（Phase 0 输出） | 可选 |
| `data-model.md` | 数据模型设计 | 可选 |
| `contracts/` | API 接口定义目录 | 可选 |
| `tasks.md` | 可执行任务清单 | ✅ |
| `checklist.md` | 质量检查清单 | 补充 |

### OpenSpec 核心文件

| 文件 | 说明 | 必需 |
|------|------|------|
| `.openspec.yaml` | 变更元数据 | 自动生成 |
| `proposal.md` | 变更提案 | ✅ |
| `specs/*.md` | 规格文档（支持 Delta） | ✅ |
| `design.md` | 设计文档 | ✅ |
| `tasks.md` | 任务清单 | ✅ |

### spec-kit spec.md 模板结构

```markdown
# Feature Specification: [FEATURE NAME]

## User Scenarios & Testing (必需)
### User Story 1 - [Title] (Priority: P1)
**Given** [initial state], **When** [action], **Then** [expected outcome]

## Requirements (必需)
- FR-001: System MUST [specific capability]
- [NEEDS CLARIFICATION: 标记未明确的点]

## Success Criteria (必需)
- SC-001: [Measurable metric]
```

### spec-kit tasks.md 核心结构

```markdown
## Phase 1: Setup (共享基础设施)
- [ ] T001 创建项目结构

## Phase 2: Foundational (阻塞前置)
- [ ] T004 设置数据库schema

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP
### Tests (如需要)
- [ ] T010 Contract test

### Implementation
- [ ] T012 Create model
```

### OpenSpec Delta 标记

```markdown
## ADDED
- 新增需求

## MODIFIED
- 修改内容

## REMOVED
- 删除内容
```

---

## 总结对比表

| 特性 | spec-kit | OpenSpec |
|------|----------|----------|
| 安装复杂度 | 中（需 Python） | 低（Node.js 单包） |
| 上手时间 | ~30 分钟 | ~5 分钟 |
| 流程刚性 | 高 | 低 |
| 文档产出量 | ~800 行 | ~250 行 |
| 测试集成 | ✅ V-Model 扩展 | ❌ 无 |
| 存量项目支持 | 一般 | 优秀 |
| 团队规模 | 中大型 | 小型 |
| 变更追踪 | 完整重写 | Delta 标记 |

---

> **结论**：两者都是优秀的规范驱动开发工具。spec-kit 适合需要严格流程和完整文档的团队；OpenSpec 适合追求灵活性和速度的现代开发方式。

---

## 相关资源

- [spec-kit 官方仓库](https://github.com/github/spec-kit)
- [OpenSpec 官方仓库](https://github.com/Fission-AI/OpenSpec)
- [OpenSpec 官网](https://openspec.dev/)

---

> 本对比基于 GitHub spec-kit 和 OpenSpec 官方文档