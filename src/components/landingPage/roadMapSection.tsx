import React from 'react'

export const RoadmapSection = () => (
    <section id="roadmap" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Roadmap</span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { phase: 'Q1 2024', title: 'MVP Launch', status: 'Completed', items: ['Platform beta', 'First 10 courses', 'Community building'], statusColor: 'bg-green-500' },
              { phase: 'Q2 2024', title: 'Growth Phase', status: 'In Progress', items: ['50+ courses', 'Microtask system', 'Partnership program'], statusColor: 'bg-blue-500' },
              { phase: 'Q3 2024', title: 'Analytics Platform', status: 'Upcoming', items: ['Data dashboard', 'Research tools', 'API access'], statusColor: 'bg-cyan-500' },
              { phase: 'Q4 2024', title: 'Regional Scale', status: 'Planned', items: ['Multi-language', '10+ countries', 'Mobile app'], statusColor: 'bg-gray-500' }
            ].map((milestone, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity"></div>
                <div className="relative bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm text-blue-400 font-semibold mb-2">{milestone.phase}</div>
                      <h3 className="text-2xl font-bold text-white">{milestone.title}</h3>
                    </div>
                    <div className={`${milestone.statusColor} w-3 h-3 rounded-full`}></div>
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    {milestone.status}
                  </div>
                  <ul className="space-y-2">
                    {milestone.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-400 text-sm">
                        <span className="text-cyan-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
