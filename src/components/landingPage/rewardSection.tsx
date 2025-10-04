import React from 'react'

export const RewardsSection = () => (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Rewards & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">On-Chain Proof</span>
          </h2>
          <p className="text-xl text-gray-400">
            Earn real rewards and build verifiable credentials on the blockchain
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '💵', title: 'Stablecoin Rewards', desc: 'Earn USDC & cUSD for completing tasks and courses', cta: 'Start Earning', gradient: 'from-blue-600 to-cyan-500' },
            { icon: '🎖️', title: 'NFT Credentials', desc: 'Collect verifiable badges and certificates as NFTs', cta: 'View Gallery', gradient: 'from-cyan-600 to-blue-500' },
            { icon: '🔗', title: 'Blockchain Trust', desc: 'All achievements recorded on-chain for transparency', cta: 'Learn More', gradient: 'from-blue-500 to-cyan-600' }
          ].map((reward, i) => (
            <div key={i} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${reward.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
              <div className="relative bg-gray-900 border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/50 transition-all">
                <div className="text-6xl mb-4">{reward.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{reward.title}</h3>
                <p className="text-gray-400 mb-6">{reward.desc}</p>
                <button className={`px-6 py-2 bg-gradient-to-r ${reward.gradient} rounded-full font-semibold hover:shadow-lg transition-all`}>
                  {reward.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
