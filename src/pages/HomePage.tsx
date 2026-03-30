const commands = [
  { name: "specify init", desc: "初始化项目" },
  { name: "specify check", desc: "检查依赖工具" },
  { name: "specify version", desc: "查看版本信息" },
  { name: "specify extension", desc: "管理扩展" },
  { name: "specify preset", desc: "管理预设" },
];

const slashCommands = [
  { name: "/speckit.constitution", desc: "定宪法", phase: "阶段零" },
  { name: "/speckit.specify", desc: "写规格", phase: "阶段一" },
  { name: "/speckit.clarify", desc: "澄清模糊点", phase: "阶段1.5" },
  { name: "/speckit.plan", desc: "做计划", phase: "阶段二" },
  { name: "/speckit.tasks", desc: "拆任务", phase: "阶段三" },
  { name: "/speckit.implement", desc: "写代码", phase: "阶段四" },
  { name: "/speckit.analyze", desc: "做检查", phase: "阶段五" },
  { name: "/speckit.checklist", desc: "质量核对", phase: "补充" },
];

const phases = [
  {
    num: "零",
    name: "Constitution",
    cn: "定宪法",
    desc: "定义项目的\"基本法\"——不可违反的工程原则和技术约束",
    color: "from-amber-500 to-orange-600",
  },
  {
    num: "一",
    name: "Specify",
    cn: "写规格",
    desc: "把自然语言的需求描述转化为结构化的功能规格",
    color: "from-emerald-500 to-teal-600",
  },
  {
    num: "二",
    name: "Plan",
    cn: "做计划",
    desc: "把功能规格转化为技术实现方案",
    color: "from-cyan-500 to-blue-600",
  },
  {
    num: "三",
    name: "Tasks",
    cn: "拆任务",
    desc: "把实现计划拆解为有依赖关系的可执行任务清单",
    color: "from-indigo-500 to-purple-600",
  },
  {
    num: "四",
    name: "Implement",
    cn: "写代码",
    desc: "AI按照tasks.md逐步生成代码",
    color: "from-pink-500 to-rose-600",
  },
  {
    num: "五",
    name: "Analyze",
    cn: "做检查",
    desc: "跨文件一致性检查——确保规格计划任务代码四者对齐",
    color: "from-red-500 to-orange-600",
  },
];

const HomePage = () => {

  return (
    <div className="min-h-screen bg-[#0D1117]">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 border border-[#F97316] rounded-full" />
          <div className="absolute top-40 right-20 w-96 h-96 border border-[#F97316] rounded-full" />
          <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-[#F97316] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 mb-6 border border-[#F97316] text-[#F97316] text-sm font-mono">
            v0.4.3 · 2026-03-26
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-[#E6EDF3]">spec</span>
            <span className="text-[#F97316]">-kit</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8B949E] mb-8 max-w-2xl mx-auto">
            基于 GitHub 的规范驱动开发工具包
          </p>
          <p className="text-lg text-[#8B949E] mb-12 max-w-3xl mx-auto leading-relaxed">
            核心理念：<span className="text-[#E6EDF3]">先写规格，再生成代码。</span>
            规格不是附属文档，而是代码的源头。通过五个核心阶段将模糊的需求逐步转化为可执行的代码。
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#install" className="px-8 py-4 bg-[#F97316] text-[#0D1117] font-bold text-lg hover:bg-[#FB923C] transition-colors">
              快速开始
            </a>
            <a href="#features" className="px-8 py-4 border border-[#30363D] text-[#E6EDF3] font-bold text-lg hover:border-[#F97316] hover:text-[#F97316] transition-colors">
              了解更多
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 border border-[#30363D]">
              <div className="text-3xl font-bold text-[#F97316]">5+</div>
              <div className="text-sm text-[#8B949E]">核心阶段</div>
            </div>
            <div className="p-4 border border-[#30363D]">
              <div className="text-3xl font-bold text-[#F97316]">27+</div>
              <div className="text-sm text-[#8B949E]">AI 工具支持</div>
            </div>
            <div className="p-4 border border-[#30363D]">
              <div className="text-3xl font-bold text-[#F97316]">30+</div>
              <div className="text-sm text-[#8B949E]">扩展插件</div>
            </div>
            <div className="p-4 border border-[#30363D]">
              <div className="text-3xl font-bold text-[#F97316]">30min</div>
              <div className="text-sm text-[#8B949E]">快速上手</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#8B949E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Workflow Phases */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#E6EDF3]">核心工作流</span>
          </h2>
          <p className="text-[#8B949E] text-center mb-16 text-lg">
            五个核心阶段将需求转化为可执行代码
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#30363D] -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {phases.map((phase) => (
                <div key={phase.num} className="relative">
                  <div className={`
                    p-6 border-2 transition-all hover:scale-105 cursor-pointer
                    bg-[#161B22] border-[#30363D] hover:border-[#F97316]
                  `}>
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4
                      bg-gradient-to-br ${phase.color} text-white
                    `}>
                      {phase.num}
                    </div>
                    <h3 className="text-lg font-bold text-[#E6EDF3] mb-1">{phase.name}</h3>
                    <p className="text-[#F97316] text-sm font-mono mb-3">{phase.cn}</p>
                    <p className="text-[#8B949E] text-sm">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="install" className="py-24 px-6 bg-[#161B22]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#E6EDF3]">快速安装</span>
          </h2>
          <p className="text-[#8B949E] text-center mb-12 text-lg">
            只需三步即可开始使用 spec-kit
          </p>

          <div className="space-y-6">
            <div className="p-6 border border-[#30363D] bg-[#0D1117]">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#F97316] text-[#0D1117] font-bold">1</span>
                <span className="text-lg font-semibold text-[#E6EDF3]">安装依赖</span>
              </div>
              <div className="bg-[#0D1117] p-4 font-mono text-sm overflow-x-auto">
                <code className="text-[#7EE787]"># Python 3.11+ 和 uv 包管理器</code><br/>
                <code className="text-[#8B949E]">curl -LsSf https://astral.sh/uv/install.sh | sh</code>
              </div>
            </div>

            <div className="p-6 border border-[#30363D] bg-[#0D1117]">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#F97316] text-[#0D1117] font-bold">2</span>
                <span className="text-lg font-semibold text-[#E6EDF3]">安装 spec-kit CLI</span>
              </div>
              <div className="bg-[#0D1117] p-4 font-mono text-sm overflow-x-auto">
                <code className="text-[#7EE787]"># 推荐：持久安装</code><br/>
                <code className="text-[#8B949E]">uv tool install specify-cli --from git+https://github.com/github/spec-kit.git@v0.4.3</code><br/><br/>
                <code className="text-[#7EE787]"># 或：一次性使用</code><br/>
                <code className="text-[#8B949E]">uvx --from git+https://github.com/github/spec-kit.git@v0.4.3 specify init my-project</code>
              </div>
            </div>

            <div className="p-6 border border-[#30363D] bg-[#0D1117]">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-8 flex items-center justify-center bg-[#F97316] text-[#0D1117] font-bold">3</span>
                <span className="text-lg font-semibold text-[#E6EDF3]">初始化项目</span>
              </div>
              <div className="bg-[#0D1117] p-4 font-mono text-sm overflow-x-auto">
                <code className="text-[#8B949E]">specify init my-project --ai claude</code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commands */}
      <section id="commands" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#E6EDF3]">命令速查</span>
          </h2>
          <p className="text-[#8B949E] text-center mb-12 text-lg">
            在 Claude Code 中使用的斜杠命令
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#F97316] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                CLI 命令
              </h3>
              <div className="space-y-3">
                {commands.map((cmd) => (
                  <div key={cmd.name} className="flex items-center justify-between p-4 border border-[#30363D] bg-[#161B22] hover:border-[#F97316] transition-colors">
                    <code className="text-[#E6EDF3] font-mono">{cmd.name}</code>
                    <span className="text-[#8B949E]">{cmd.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#F97316] mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                斜杠命令
              </h3>
              <div className="space-y-3">
                {slashCommands.map((cmd) => (
                  <div key={cmd.name} className="flex items-center justify-between p-4 border border-[#30363D] bg-[#161B22] hover:border-[#F97316] transition-colors">
                    <div>
                      <code className="text-[#E6EDF3] font-mono block">{cmd.name}</code>
                      <span className="text-[#8B949E] text-sm">{cmd.desc}</span>
                    </div>
                    <span className="text-xs text-[#F97316] border border-[#F97316] px-2 py-1">{cmd.phase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* V-Model Extension */}
      <section className="py-24 px-6 bg-[#161B22]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#E6EDF3]">V-Model 测试扩展</span>
          </h2>
          <p className="text-[#8B949E] text-lg mb-8">
            spec-kit 的杀手级扩展，专为测试同学设计
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "需求编号", cmd: "/speckit.v-model.requirements", desc: "REQ-NNN 标识的需求清单" },
              { title: "验收测试", cmd: "/speckit.v-model.acceptance", desc: "三层验收测试计划" },
              { title: "系统设计", cmd: "/speckit.v-model.system-design", desc: "遵循 IEEE 1016 标准" },
              { title: "系统测试", cmd: "/speckit.v-model.system-test", desc: "遵循 ISO 29119-4 标准" },
              { title: "追溯矩阵", cmd: "/speckit.v-model.trace", desc: "需求↔设计↔测试完整映射" },
              { title: "单元测试", cmd: "/speckit.v-model.unit-test", desc: "白盒技术+依赖隔离" },
            ].map((item) => (
              <div key={item.cmd} className="p-6 border border-[#30363D] bg-[#0D1117] hover:border-[#F97316] transition-colors text-left">
                <div className="text-[#F97316] text-sm mb-2">{item.title}</div>
                <code className="text-[#E6EDF3] font-mono text-sm block mb-2">{item.cmd}</code>
                <div className="text-[#8B949E] text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 border border-[#238636] bg-[#238636]/10">
            <code className="text-[#7EE787]">specify extension add v-model</code>
            <span className="text-[#8B949E] ml-4"># 安装 V-Model 扩展</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-[#E6EDF3]">常见问题</span>
          </h2>

          <div className="space-y-4 mt-12">
            {[
              {
                q: "spec-kit 只能配合 Claude Code 使用吗？",
                a: "不是。spec-kit 支持 27+ 种 AI 编码工具，包括 GitHub Copilot、Cursor、Gemini CLI、Windsurf 等。"
              },
              {
                q: "spec-kit 可以用在已有项目上吗？",
                a: "可以。在项目根目录运行 specify init . --ai claude 即可。它不会修改你现有的代码，只会添加 .specify/ 和 .claude/ 目录。"
              },
              {
                q: "V-Model 扩展是必须装的吗？",
                a: "不是必须的。如果你的团队有测试角色，并且希望测试在早期就介入，强烈建议安装。"
              },
              {
                q: "生成的 specs/ 目录需要提交到 Git 吗？",
                a: "需要。这是 spec-kit 的核心价值之一——规格文件作为代码库的一部分永久保留，新加入的团队成员或新的 AI 对话可以随时读取历史决策。"
              },
            ].map((faq, i) => (
              <details key={i} className="group border border-[#30363D] bg-[#161B22]">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-[#E6EDF3] font-semibold text-lg">{faq.q}</span>
                  <span className="ml-4 text-[#F97316] transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-[#8B949E] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#30363D]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#8B949E] mb-4">
            基于 GitHub spec-kit + Claude Code 的规范驱动开发
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/github/spec-kit" target="_blank" rel="noopener" className="text-[#8B949E] hover:text-[#F97316] transition-colors">
              GitHub
            </a>
            <span className="text-[#30363D]">|</span>
            <span className="text-[#8B949E]">文档版本 v0.4.3</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;