import React from 'react'

export  const FeaturesSection = () => (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Features</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '📚', title: 'Learning Management System', desc: 'Interactive courses, videos, quizzes, and blockchain certificates', gradient: 'from-blue-600 to-cyan-500' },
            { icon: '💰', title: 'Earn Through Microtasks', desc: 'Test products, complete surveys, earn stablecoins (USDC/cUSD)', gradient: 'from-cyan-600 to-blue-500' },
            { icon: '👥', title: 'Community Hub', desc: 'Connect with experts, join forums, collaborate with peers', gradient: 'from-blue-500 to-cyan-600' },
            { icon: '📊', title: 'Analytics Dashboard', desc: 'Track your progress and Web3 adoption metrics in real-time', gradient: 'from-cyan-500 to-blue-600' },
            { icon: '🚀', title: 'Protocol Growth Tools', desc: 'Help Web3 projects grow with structured user feedback', gradient: 'from-blue-600 to-cyan-400' },
            { icon: '🎖️', title: 'NFT Credentials', desc: 'Earn verifiable on-chain badges and certificates', gradient: 'from-cyan-600 to-blue-400' }
          ].map((feature, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`}></div>
              <div className="relative bg-gray-900 border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
