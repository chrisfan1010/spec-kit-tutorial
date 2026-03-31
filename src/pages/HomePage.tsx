import { useState } from 'react';

const phases = [
  { num: "零", name: "Constitution", cn: "定宪法", desc: "定义项目\"基本法\"——不可违反的工程原则", color: "from-amber-500 to-orange-600" },
  { num: "一", name: "Specify", cn: "写规格", desc: "把需求转化为结构化功能规格", color: "from-emerald-500 to-teal-600" },
  { num: "1.5", name: "Clarify", cn: "澄清", desc: "系统化解决规格中的模糊点", color: "from-yellow-500 to-amber-600" },
  { num: "二", name: "Plan", cn: "做计划", desc: "把功能规格转化为技术实现方案", color: "from-cyan-500 to-blue-600" },
  { num: "三", name: "Tasks", cn: "拆任务", desc: "拆解为有依赖关系的可执行任务清单", color: "from-indigo-500 to-purple-600" },
  { num: "四", name: "Implement", cn: "写代码", desc: "AI按任务逐步生成代码", color: "from-pink-500 to-rose-600" },
  { num: "五", name: "Analyze", cn: "做检查", desc: "跨文件一致性检查", color: "from-red-500 to-orange-600" },
];

const aiAgents = [
  "Claude Code", "GitHub Copilot", "Cursor", "Gemini CLI",
  "Windsurf", "CodeBuddy", "Qwen Code", "Kiro CLI",
  "Roo Code", "Tabnine CLI", "Trae", "OpenCode", "iFlow CLI"
];

const extensions = [
  { name: "V-Model", desc: "V-Model 配对生成开发规格和测试规格", category: "docs" },
  { name: "Jira Integration", desc: "同步 Jira Epics、Stories 和 Issues", category: "integration" },
  { name: "Azure DevOps", desc: "同步 Azure DevOps 工作项", category: "integration" },
  { name: "Plan Review Gate", desc: "要求 spec.md 和 plan.md 通过 PR 合并", category: "process" },
  { name: "Review Extension", desc: "代码质量审查", category: "code" },
  { name: "Verify Extension", desc: "验证实现代码是否符合规格", category: "code" },
];

const specKitRoles = [
  { role: "产品经理", work: "定义需求、用户故事、验收标准", phase: "Specify → Clarify" },
  { role: "架构师", work: "技术选型、数据模型设计", phase: "Plan" },
  { role: "开发工程师", work: "任务拆解、代码实现", phase: "Tasks → Implement" },
  { role: "测试工程师", work: "V-Model 扩展、测试方案", phase: "配合 Implement" },
  { role: "Reviewer", work: "一致性检查", phase: "Analyze → Checklist" },
];

const openSpecRoles = [
  { role: "产品/PM", work: "定义变更提案", phase: "propose" },
  { role: "开发", work: "探索、澄清、实现", phase: "explore → apply" },
  { role: "团队成员", work: "验证、归档", phase: "verify → archive" },
];

const openSpecPhases = [
  { name: "Propose", cn: "创建变更", desc: "快速创建变更提案", color: "from-blue-500 to-indigo-600", icon: "📝" },
  { name: "Apply", cn: "实现", desc: "执行任务实现功能", color: "from-green-500 to-emerald-600", icon: "⚡" },
  { name: "Archive", cn: "归档", desc: "完成并归档变更", color: "from-purple-500 to-pink-600", icon: "📦" },
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'speckit' | 'openspec' | 'comparison'>('speckit');

  const tabs = [
    { id: 'speckit', label: 'speckit', color: 'F97316' },
    { id: 'openspec', label: 'openspec', color: '3B82F6' },
    { id: 'comparison', label: '框架对比', color: '8B949E' },
  ] as const;

  return (
    <div className="min-h-screen bg-[#0D1117] font-sans">
      {/* Header with Tabs */}
      <header className="sticky top-0 z-50 bg-[#0D1117]/95 backdrop-blur-sm border-b border-[#30363D]">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <span className="text-[#E6EDF3]">spec-</span>
              <span className="text-[#F97316]">kit</span>
              <span className="text-[#30363D] mx-2">&</span>
              <span className="text-[#3B82F6]">openspec</span>
            </h1>
            <span className="text-[#8B949E] text-sm">规范驱动开发 (SDD)</span>
          </div>
          <nav className="flex gap-1 mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 px-6 font-medium transition-all ${
                  activeTab === tab.id
                    ? `bg-[#${tab.color}] text-white`
                    : `text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]`
                }`}
                style={activeTab === tab.id ? { backgroundColor: `#${tab.color}` } : {}}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* speckit Tab */}
        {activeTab === 'speckit' && (
          <div className="space-y-12">
            {/* Hero */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-4 border border-[#F97316] text-[#F97316] text-sm font-mono">
                <span>🌱 GitHub 官方开源项目</span>
                <span className="text-[#30363D]">|</span>
                <span>83K+ Stars</span>
              </div>
              <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">speckit</h2>
              <p className="text-xl text-[#8B949E] max-w-2xl mx-auto">
                构建高质量软件的规范驱动开发工具包
              </p>
              <p className="text-[#8B949E] mt-4">
                严格流程 · 宪法驱动 · 7+1 阶段
              </p>
            </div>

            {/* 安装 */}
            <div className="bg-[#161B22] p-6 border border-[#30363D]">
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">安装</h3>
              <div className="font-mono text-sm space-y-2">
                <code className="text-[#7EE787]"># 持久安装（推荐）</code>
                <code className="text-[#8B949E] block">uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.4.3</code>
                <code className="text-[#7EE787] block mt-4"># 初始化</code>
                <code className="text-[#8B949E] block">specify init my-project --ai claude</code>
              </div>
            </div>

            {/* 工作流 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-8 text-center">工作流（7+1 阶段）</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {phases.map((phase) => (
                  <div key={phase.num} className="p-4 border-2 bg-[#0D1117] border-[#30363D] hover:border-[#F97316] transition-all text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-3 mx-auto bg-gradient-to-br ${phase.color} text-white`}>
                      {phase.num}
                    </div>
                    <h4 className="text-lg font-bold text-[#E6EDF3] mb-1">{phase.name}</h4>
                    <p className="text-[#F97316] text-sm font-mono mb-2">{phase.cn}</p>
                    <p className="text-[#8B949E] text-xs">{phase.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <span className="inline-block px-4 py-2 bg-[#F97316] text-white rounded-lg">
                  + Checklist 质量核对
                </span>
              </div>
            </div>

            {/* 斜杠命令 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">斜杠命令</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {phases.map((phase, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-[#30363D] bg-[#161B22]">
                    <code className="text-[#F97316] font-mono">/speckit.{phase.name.toLowerCase()}</code>
                    <span className="text-[#E6EDF3]">{phase.cn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MD文件 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">核心文件（5-7个/功能）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { file: "constitution.md", desc: "项目宪法（首次创建）", required: true },
                  { file: "spec.md", desc: "功能规格", required: true },
                  { file: "plan.md", desc: "技术实现计划", required: true },
                  { file: "tasks.md", desc: "任务清单", required: true },
                  { file: "checklist.md", desc: "质量检查", required: false },
                  { file: "research.md", desc: "研究文档", required: false },
                  { file: "data-model.md", desc: "数据模型", required: false },
                  { file: "contracts/", desc: "API接口定义", required: false },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-[#30363D] bg-[#161B22]">
                    <code className="text-[#F97316] font-mono">{item.file}</code>
                    <span className="text-[#8B949E] flex-1">{item.desc}</span>
                    <span className={`text-xs px-2 py-1 ${item.required ? 'bg-[#F97316]/20 text-[#F97316]' : 'bg-[#30363D] text-[#8B949E]'}`}>
                      {item.required ? '必需' : '可选'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 支持的 AI 工具 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">支持的 AI 工具（13+）</h3>
              <div className="flex flex-wrap gap-2">
                {aiAgents.map((agent, i) => (
                  <span key={i} className="px-3 py-2 border border-[#30363D] bg-[#0D1117] text-[#E6EDF3] text-sm hover:border-[#F97316] transition-colors">
                    {agent}
                  </span>
                ))}
              </div>
            </div>

            {/* 社区扩展 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">社区扩展（30+）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {extensions.map((ext, i) => (
                  <div key={i} className="p-4 border border-[#30363D] bg-[#0D1117]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E6EDF3] font-semibold">{ext.name}</span>
                      <span className="text-xs text-[#F97316] border border-[#F97316] px-2 py-0.5">{ext.category}</span>
                    </div>
                    <p className="text-[#8B949E] text-sm">{ext.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 团队协作 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">工种协作边界</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {specKitRoles.map((item, i) => (
                  <div key={i} className="p-4 border border-[#30363D] bg-[#161B22]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E6EDF3] font-semibold">{item.role}</span>
                      <span className="text-xs text-[#F97316] border border-[#F97316] px-2 py-0.5">{item.phase}</span>
                    </div>
                    <span className="text-[#8B949E] text-sm">{item.work}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="https://github.github.com/spec-kit/" target="_blank" rel="noopener" className="inline-block px-8 py-4 border border-[#F97316] text-[#F97316] font-bold hover:bg-[#F97316] hover:text-white transition-colors">
                访问官方文档 →
              </a>
            </div>
          </div>
        )}

        {/* openspec Tab */}
        {activeTab === 'openspec' && (
          <div className="space-y-12">
            {/* Hero */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-4 py-2 mb-4 border border-[#3B82F6] text-[#3B82F6] text-sm font-mono">
                <span>⚡ Fission AI 开源项目</span>
                <span className="text-[#30363D]">|</span>
                <span>35K+ Stars</span>
              </div>
              <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">openspec</h2>
              <p className="text-xl text-[#8B949E] max-w-2xl mx-auto">
                流体迭代 · 轻量快速 · 专为存量项目设计
              </p>
              <p className="text-[#8B949E] mt-4">
                "fluid not rigid, iterative not waterfall"
              </p>
            </div>

            {/* 安装 */}
            <div className="bg-[#161B22] p-6 border border-[#30363D]">
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">安装（Node.js 20.19.0+）</h3>
              <div className="font-mono text-sm space-y-2">
                <code className="text-[#7EE787]"># 安装</code>
                <code className="text-[#8B949E] block">npm install -g @fission-ai/openspec@latest</code>
                <code className="text-[#7EE787] block mt-4"># 初始化</code>
                <code className="text-[#8B949E] block">cd your-project</code>
                <code className="text-[#8B949E] block">openspec init</code>
                <code className="text-[#7EE787] block mt-4"># 启用扩展模式（可选）</code>
                <code className="text-[#8B949E] block">openspec config profile</code>
                <code className="text-[#8B949E] block">openspec update</code>
              </div>
            </div>

            {/* 工作流 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-8 text-center">工作流（3 步快速路径）</h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                {openSpecPhases.map((phase, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`w-28 h-28 rounded-2xl flex flex-col items-center justify-center bg-gradient-to-br ${phase.color} shadow-lg`}>
                      <span className="text-4xl mb-1">{phase.icon}</span>
                      <span className="text-white font-bold">{phase.name}</span>
                    </div>
                    {i < openSpecPhases.length - 1 && (
                      <svg className="w-10 h-10 text-[#3B82F6] mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-[#8B949E]">扩展模式: new → ff → apply → verify → archive</p>
              </div>
            </div>

            {/* 斜杠命令 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">斜杠命令（11个）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { cmd: "/opsx:propose", desc: "创建变更（快速路径）", category: "快速" },
                  { cmd: "/opsx:explore", desc: "探索性思考", category: "快速" },
                  { cmd: "/opsx:apply", desc: "实现任务", category: "快速" },
                  { cmd: "/opsx:archive", desc: "归档变更", category: "快速" },
                  { cmd: "/opsx:new", desc: "开始新变更", category: "扩展" },
                  { cmd: "/opsx:continue", desc: "逐步创建工件", category: "扩展" },
                  { cmd: "/opsx:ff", desc: "快速创建全部", category: "扩展" },
                  { cmd: "/opsx:verify", desc: "验证实现", category: "扩展" },
                  { cmd: "/opsx:sync", desc: "合并规格", category: "扩展" },
                  { cmd: "/opsx:bulk-archive", desc: "批量归档", category: "扩展" },
                  { cmd: "/opsx:onboard", desc: "交互式教程", category: "扩展" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-[#30363D] bg-[#161B22]">
                    <code className="text-[#3B82F6] font-mono">{item.cmd}</code>
                    <span className="text-[#8B949E] text-sm">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* MD文件 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">核心文件（5个/变更）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { file: ".openspec.yaml", desc: "变更元数据", required: "自动" },
                  { file: "proposal.md", desc: "变更提案", required: "必需" },
                  { file: "specs/*.md", desc: "规格文档（支持Delta）", required: "必需" },
                  { file: "design.md", desc: "设计文档", required: "必需" },
                  { file: "tasks.md", desc: "任务清单", required: "必需" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 border border-[#30363D] bg-[#161B22]">
                    <code className="text-[#3B82F6] font-mono">{item.file}</code>
                    <span className="text-[#8B949E] flex-1">{item.desc}</span>
                    <span className="text-xs px-2 py-1 bg-[#3B82F6]/20 text-[#3B82F6]">{item.required}</span>
                  </div>
                ))}
              </div>

              {/* Delta 机制 */}
              <div className="mt-6 p-4 border border-[#3B82F6] bg-[#161B22]">
                <h4 className="text-lg font-bold text-[#3B82F6] mb-3">Delta 标记机制</h4>
                <div className="flex gap-4 font-mono text-sm">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded">## ADDED</span>
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded">## MODIFIED</span>
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded">## REMOVED</span>
                </div>
              </div>
            </div>

            {/* 团队协作 */}
            <div>
              <h3 className="text-2xl font-bold text-[#E6EDF3] mb-6">工种协作边界</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {openSpecRoles.map((item, i) => (
                  <div key={i} className="p-4 border border-[#30363D] bg-[#161B22]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#E6EDF3] font-semibold">{item.role}</span>
                      <span className="text-xs text-[#3B82F6] border border-[#3B82F6] px-2 py-0.5">{item.phase}</span>
                    </div>
                    <span className="text-[#8B949E] text-sm">{item.work}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <a href="https://openspec.dev/" target="_blank" rel="noopener" className="inline-block px-8 py-4 border border-[#3B82F6] text-[#3B82F6] font-bold hover:bg-[#3B82F6] hover:text-white transition-colors">
                访问官方文档 →
              </a>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#E6EDF3] mb-4">框架对比</h2>
              <p className="text-[#8B949E]">speckit vs openspec 全面对比</p>
            </div>

            {/* 对比表格 */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#30363D]">
                    <th className="text-left p-4 text-[#8B949E]">维度</th>
                    <th className="text-left p-4 text-[#F97316]">speckit</th>
                    <th className="text-left p-4 text-[#3B82F6]">openspec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">Stars</td>
                    <td className="p-4 text-[#F97316]">83K+</td>
                    <td className="p-4 text-[#3B82F6]">35K+</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">语言</td>
                    <td className="p-4 text-[#8B949E]">Python</td>
                    <td className="p-4 text-[#8B949E]">TypeScript/Node.js</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">核心理念</td>
                    <td className="p-4 text-[#8B949E]">严格流程、宪法驱动</td>
                    <td className="p-4 text-[#8B949E]">流体迭代、灵活轻量</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">适用场景</td>
                    <td className="p-4 text-[#8B949E]">绿皮书、新项目</td>
                    <td className="p-4 text-[#8B949E]">存量项目、灵活迭代</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">团队规模</td>
                    <td className="p-4 text-[#8B949E]">中大型团队</td>
                    <td className="p-4 text-[#8B949E]">小型团队、个人</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">工作流</td>
                    <td className="p-4 text-[#8B949E]">7+1 阶段（严格顺序）</td>
                    <td className="p-4 text-[#8B949E]">3 步快速路径</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">每变更核心文件</td>
                    <td className="p-4 text-[#8B949E]">5-7 个</td>
                    <td className="p-4 text-[#8B949E]">5 个</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">变更追踪</td>
                    <td className="p-4 text-[#8B949E]">完整重写</td>
                    <td className="p-4 text-[#8B949E]">Delta 标记</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">文档产出量</td>
                    <td className="p-4 text-[#8B949E]">~800 行/功能</td>
                    <td className="p-4 text-[#8B949E]">~250 行/功能</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">测试集成</td>
                    <td className="p-4 text-[#8B949E]">✅ V-Model 扩展</td>
                    <td className="p-4 text-[#8B949E]">❌ 无</td>
                  </tr>
                  <tr className="border-b border-[#30363D]">
                    <td className="p-4 text-[#E6EDF3]">存量项目支持</td>
                    <td className="p-4 text-[#8B949E]">一般</td>
                    <td className="p-4 text-[#8B949E]">✅ 专为存量设计</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 选择建议 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-[#F97316] bg-[#161B22]">
                <h3 className="text-xl font-bold text-[#F97316] mb-4">选择 speckit 当：</h3>
                <ul className="space-y-2 text-[#8B949E]">
                  <li>✅ 需要严格的团队规范</li>
                  <li>✅ 中大型团队项目</li>
                  <li>✅ 测试角色需要深度参与</li>
                  <li>✅ 文档驱动的项目文化</li>
                  <li>✅ 需要 V-Model 测试能力</li>
                </ul>
              </div>
              <div className="p-6 border border-[#3B82F6] bg-[#161B22]">
                <h3 className="text-xl font-bold text-[#3B82F6] mb-4">选择 openspec 当：</h3>
                <ul className="space-y-2 text-[#8B949E]">
                  <li>✅ 个人或小团队开发</li>
                  <li>✅ 快速迭代、轻量流程</li>
                  <li>✅ 存量项目（brownfield）</li>
                  <li>✅ 偏好灵活性而非仪式感</li>
                  <li>✅ Node.js 技术栈</li>
                </ul>
              </div>
            </div>

            <div className="text-center p-6 border border-[#30363D] bg-[#161B22]">
              <p className="text-[#E6EDF3] text-lg">
                结论：两者都是优秀的规范驱动开发工具
              </p>
              <p className="text-[#8B949E] mt-2">
                speckit 适合需要严格流程和完整文档的团队 | openspec 适合追求灵活性和速度的现代开发方式
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#30363D] text-center">
        <p className="text-[#8B949E]">
          speckit & openspec · 规范驱动开发 (SDD) 框架对比
        </p>
      </footer>
    </div>
  );
};

export default HomePage;