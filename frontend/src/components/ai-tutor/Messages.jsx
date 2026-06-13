import React from 'react'

const AImessage = () => {
  return (
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
            </div>  )
}

const AImessage2 = () => {
  return (
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
              )
}




const Usermessage = (props) => {
  return (
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
                  {
                    props.text
                  }
                </p>
              </div>
            </div>
             )
}



export { AImessage,Usermessage,AImessage2}