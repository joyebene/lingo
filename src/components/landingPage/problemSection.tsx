import React from 'react'

export const ProblemSection = () => (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Lingo?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Web3 adoption in Africa is limited by education, access, and opportunities.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: '🎓', title: 'Learners', desc: 'Upskill & earn while learning', gradient: 'from-blue-600 to-blue-400' },
            { icon: '🚀', title: 'Founders', desc: 'Get feedback & early users', gradient: 'from-cyan-600 to-cyan-400' },
            { icon: '🔗', title: 'Protocols', desc: 'Drive Web3 adoption', gradient: 'from-blue-500 to-cyan-500' },
            { icon: '📊', title: 'Researchers', desc: 'Access adoption insights', gradient: 'from-cyan-500 to-blue-500' }
          ].map((item, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 from-blue-600/20 to-cyan-600/20 rounded-2xl blur-xl transition-opacity"></div>
              <div className="relative bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-3xl p-8 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Lingo bridges the gap by providing <span className="text-blue-400 font-semibold">quality education</span>, 
            <span className="text-cyan-400 font-semibold"> earning opportunities</span>, and 
            <span className="text-blue-400 font-semibold"> real-world Web3 experience</span> — all in one platform.
          </p>
        </div>
      </div>
    </section>
  );