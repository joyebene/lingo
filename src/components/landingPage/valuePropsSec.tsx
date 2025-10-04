import React from 'react'

export const ValuePropsSection = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'For Learners',
              tagline: 'Earn While Learning',
              icon: '🎓',
              benefits: ['Free courses', 'Stablecoin rewards', 'Job opportunities', 'Scholarships', 'NFT certificates'],
              cta: 'Start Learning',
              gradient: 'from-blue-600 to-cyan-500'
            },
            {
              title: 'For Founders',
              tagline: 'Get Real Feedback',
              icon: '🚀',
              benefits: ['Structured testing', 'Early adopters', 'User insights', 'Growth analytics', 'Community building'],
              cta: 'Launch Product',
              gradient: 'from-cyan-600 to-blue-500'
            },
            {
              title: 'For Researchers',
              tagline: 'Access Real Data',
              icon: '📊',
              benefits: ['Adoption metrics', 'User behavior', 'Market insights', 'Trend analysis', 'Custom reports'],
              cta: 'Subscribe Now',
              gradient: 'from-blue-500 to-cyan-600'
            }
          ].map((prop, i) => (
            <div key={i} className="bg-black border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all">
              <div className="text-5xl mb-4">{prop.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{prop.title}</h3>
              <p className={`text-lg mb-6 bg-gradient-to-r ${prop.gradient} bg-clip-text text-transparent font-semibold`}>
                {prop.tagline}
              </p>
              <ul className="space-y-3 mb-8">
                {prop.benefits.map((benefit, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-300">
                    <span className="text-cyan-400">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold bg-gradient-to-r ${prop.gradient} hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2`}>
                {prop.cta} 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );