import React from 'react'
import FadeInSection from '../home/FadeInSection'

const AIChat = () => {
  return (
<FadeInSection className="flex-1 overflow-hidden flex">
        {/* Chat Window */}
        <div className="flex-1 flex flex-col relative">
          <div
            className="flex-1 overflow-y-auto px-xl py-lg space-y-lg custom-scrollbar"
            id="chat-messages"
          >
            {/* AI Message */}
            <div className="flex gap-md max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex-shrink-0 flex items-center justify-center text-white shadow-soft">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-soft border border-outline-variant/10 ai-border-gradient">
                  <p className="text-body-md text-on-surface leading-relaxed">
                    Hello! I'm your Cognitive Flow AI Tutor. Today we're diving
                    into{" "}
                    <span className="font-bold text-brand-primary">
                      Graph Data Structures
                    </span>
                    . We've previously covered Trees, but Graphs allow for more
                    complex relationships between nodes.
                  </p>
                  <p className="mt-4 text-body-md text-on-surface leading-relaxed">
                    How would you like to start? We can look at{" "}
                    <span className="italic">Adjacency Lists</span>, explore{" "}
                    <span className="italic">Dijkstra's Algorithm</span>, or try
                    a hands-on coding challenge.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="text-[11px] font-semibold text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors">
                    Explain Adjacency Matrix
                  </button>
                  <button className="text-[11px] font-semibold text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary/5 transition-colors">
                    Show Dijkstra Code
                  </button>
                </div>
              </div>
            </div>
            {/* User Message */}
            <div className="flex gap-md max-w-3xl ml-auto flex-row-reverse">
              <div className="w-10 h-10 rounded-xl bg-white flex-shrink-0 flex items-center justify-center text-brand-primary shadow-soft border border-outline-variant/20 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Close up of a professional learner's face, warm lighting, minimalist background."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIghBwXR_3iCbw39dSORaDkTbppa8YSlK3LNZl18FDe8GSiedbkmDM3iEGN4eRob5l2-EC0YDAPiFh5ZSAAUx6cm6a0L860tbZBPOeU4JNrfTdpIk1kKyyk7-cmUc7XOaOfHrbGfl_qp4Eve44JErQeI9E72fjey--_aNqQPYFaBtzJiI5OT9hnd8XBpdvWA5a0gXfUIIn7uYQhjFO2fe56xq6H5yM1l11lOCSBU96q7CkoJnNDpp9bU_K80G0k57F3bj37Wk7Cac"
                />
              </div>
              <div className="bg-primary-container text-white p-6 rounded-2xl rounded-tr-none shadow-soft">
                <p className="text-body-md leading-relaxed">
                  Can you explain recursion in the context of Depth First
                  Search? I always get confused about how the stack handles the
                  backtracking.
                </p>
              </div>
            </div>
            {/* AI Message */}
            <div className="flex gap-md max-w-3xl">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex-shrink-0 flex items-center justify-center text-white shadow-soft">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <div className="bg-white p-6 rounded-2xl rounded-tl-none shadow-soft border border-outline-variant/10 ai-border-gradient">
                <p className="text-body-md text-on-surface leading-relaxed">
                  Great question! Recursion in DFS is essentially an implicit
                  stack. Think of it like this:
                </p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-on-surface-variant text-sm">
                  <li>
                    When you visit a node, you 'dive' into its first neighbor.
                  </li>
                  <li>
                    The current function state is saved on the call stack.
                  </li>
                  <li>
                    When a node has no unvisited neighbors, the function
                    'returns', effectively 'popping' back to the previous node.
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 font-mono text-sm overflow-x-auto">
                  <span className="text-secondary">def</span>{" "}
                  <span className="text-brand-primary">dfs</span>(node,
                  visited):
                  <br />
                  &nbsp;&nbsp;visited.add(node)
                  <br />
                  &nbsp;&nbsp;<span className="text-secondary">for</span>{" "}
                  neighbor <span className="text-secondary">in</span>{" "}
                  node.neighbors:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-secondary">if</span> neighbor{" "}
                  <span className="text-secondary">not in</span> visited:
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dfs(neighbor, visited){" "}
                  <span className="text-outline"># Recursive dive</span>
                </div>
              </div>
            </div>
          </div>
          {/* Input Area */}
          <div className="p-xl border-t border-outline-variant/10 bg-brand-warm-cream">
            <div className="max-w-4xl mx-auto relative group">
              <div className="absolute inset-0 bg-brand-primary/5 blur-xl group-focus-within:bg-brand-accent/5 transition-all -z-10 rounded-2xl" />
              <div className="bg-white rounded-2xl shadow-soft border border-outline-variant/20 p-2 flex items-end gap-2 focus-within:border-brand-primary/50 transition-all">
                <button className="p-3 text-on-surface-variant hover:text-brand-primary hover:bg-surface-container-low rounded-xl transition-all">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <textarea
                  className="flex-1 bg-transparent border-none focus:ring-0 py-3 px-2 resize-none max-h-48 custom-scrollbar text-body-md"
                  oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'"
                  placeholder="Ask your tutor anything about recursion..."
                  rows={1}
                  defaultValue={""}
                />
                <button className="p-3 text-on-surface-variant hover:text-brand-primary hover:bg-surface-container-low rounded-xl transition-all">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <button className="bg-brand-accent text-white p-3 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-soft">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <p className="text-center mt-3 text-[10px] text-on-surface-variant uppercase tracking-widest opacity-50">
                AI can make mistakes. Verify important information.
              </p>
            </div>
          </div>
        </div>
        {/* Right Context Panel */}
        <aside className="w-80 border-l border-outline-variant/10 bg-surface-container-low/50 flex flex-col p-md space-y-md overflow-y-auto custom-scrollbar">
          {/* Current Goal */}
          <div className="bg-white p-5 rounded-2xl shadow-soft border border-outline-variant/10">
            <h3 className="text-label-md font-bold text-brand-primary mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">flag</span>
              Current Goal
            </h3>
            <div className="p-3 bg-brand-warm-cream rounded-xl border border-brand-accent/20">
              <p className="text-sm font-semibold text-on-surface">
                Implement Dijkstra
              </p>
              <p className="text-xs text-on-surface-variant mt-1">
                Part of: Shortest Path Module
              </p>
            </div>
          </div>
          {/* Suggested Prompts */}
          <div>
            <h3 className="text-label-md font-bold text-brand-primary mb-3 px-2">
              Try Asking
            </h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 text-xs bg-white rounded-xl border border-outline-variant/10 hover:border-brand-accent/40 hover:translate-x-1 transition-all shadow-sm">
                "Explain recursion visually"
              </button>
              <button className="w-full text-left p-3 text-xs bg-white rounded-xl border border-outline-variant/10 hover:border-brand-accent/40 hover:translate-x-1 transition-all shadow-sm">
                "Review my roadmap progress"
              </button>
              <button className="w-full text-left p-3 text-xs bg-white rounded-xl border border-outline-variant/10 hover:border-brand-accent/40 hover:translate-x-1 transition-all shadow-sm">
                "Show real-world graph apps"
              </button>
            </div>
          </div>
          {/* Relevant Resources */}
          <div className="flex-1">
            <h3 className="text-label-md font-bold text-brand-primary mb-3 px-2">
              Resources
            </h3>
            <div className="space-y-3">
              {/* Article Card */}
              <div className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-video mb-2 shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="Abstract digital visualization of a neural network or complex data graph with glowing blue nodes and thin white connections over a dark textured background, illustrating high-level computer science concepts."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOHwkWSiQqQHJbQA857V-68ML4ThLT7KX8HjuWZeUreJ61b4pydTT8swBMnvHfWjL9EQiUpEvvmM5KXPnY-LSHZkBRzn9tSmecAhm3Tdv26pYCvgbxlNwUQecj3YLIIPfx4fHrt-7yURTDRz9Hdg13H2160S-4bnWmCZwrTK6FnIenAMucKetFA0fh6PqjG0Usd_r8uAcLC_DJbJfKdSkzTBhi6a1Qz7Pi0jgnrQ17z0BXola2zH0PnhmGQEMrfcWiwpiB0Zp_810"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 rounded text-[9px] font-bold text-brand-primary">
                    ARTICLE
                  </div>
                </div>
                <h4 className="text-xs font-bold leading-tight group-hover:text-brand-accent transition-colors">
                  Graph Theory for Beginners
                </h4>
                <p className="text-[10px] text-on-surface-variant mt-1">
                  12 min read • 4.9 ★
                </p>
              </div>
              {/* Video Card */}
              <div className="group cursor-pointer">
                <div className="relative rounded-xl overflow-hidden aspect-video mb-2 shadow-sm">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-alt="High-tech glowing circuit board with flowing light pulses, cybernetic aesthetics, soft periwinkle and slate blue tones, captured in a cinematic close-up."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQv4GRPKAx9mbZHQEMVjBtL3oWNLWfcQlZGH5OlaoiQ9IloVXvWOsHVH3ux-8eeCuYtKpcV6qXYJXWk1gXN5Th4AAg5dAmDfQtIF033wJr4Gws0llYzKoWSFsMIaIPC5bqSphKLTzY0G0jWZllGR6YRq5_n0q4xLlhV8nA6kRlOPrQx4ShmmUYRQXw1v7m2WRqGOEc1gAe6P9toVTRGiMe7yUt6jh5uS_HpSrZ1jko3HwOLPZhRuBlu9EYTC9ESwNcd5TdvrpnNE"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontVariationSettings: '"FILL" 1' }}
                      >
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 rounded text-[9px] font-bold text-brand-primary">
                    VIDEO
                  </div>
                </div>
                <h4 className="text-xs font-bold leading-tight group-hover:text-brand-accent transition-colors">
                  Dijkstra's Algorithm Walkthrough
                </h4>
                <p className="text-[10px] text-on-surface-variant mt-1">
                  15:30 • By Prof. Aris
                </p>
              </div>
            </div>
          </div>
          {/* Promo/Upgrade */}
          <div className="mt-auto bg-brand-primary p-5 rounded-2xl text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
            <h4 className="text-sm font-bold mb-1">Upgrade to Pro</h4>
            <p className="text-[10px] text-white/70 mb-4">
              Unlimited AI queries &amp; deep context analysis.
            </p>
            <button className="w-full bg-brand-accent py-2 rounded-xl text-xs font-bold shadow-lg hover:brightness-110 transition-all">
              Go Premium
            </button>
          </div>
        </aside>
      </FadeInSection>
        )
}

export default AIChat