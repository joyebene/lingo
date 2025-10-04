import React from 'react'

export const HowItWorksSection = () => (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          How <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">It Works</span>
        </h2>

        <div className="space-y-16">
          {[
            {
              role: 'Learners',
              icon: '🎓',
              steps: ['Discover Courses', 'Learn & Practice', 'Earn Rewards', 'Grow Career'],
              color: 'blue'
            },
            {
              role: 'Founders',
              icon: '🚀',
              steps: ['Launch Product', 'Get Feedback', 'Optimize & Scale', 'Build Community'],
              color: 'cyan'
            },
            {
              role: 'Researchers',
              icon: '📊',
              steps: ['Subscribe', 'Analyze Data', 'Generate Reports', 'Publish Insights'],
              color: 'blue'
            }
          ].map((journey, i) => (
            <div key={i} className="bg-black border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{journey.icon}</div>
                <h3 className={`text-2xl font-bold ${journey.color === 'blue' ? 'text-blue-400' : 'text-cyan-400'}`}>
                  {journey.role} Journey
                </h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {journey.steps.map((step, j) => (
                  <div key={j} className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${journey.color === 'blue' ? 'from-blue-600 to-blue-400' : 'from-cyan-600 to-cyan-400'} flex items-center justify-center font-bold text-lg mb-4 shadow-lg`}>
                      {j + 1}
                    </div>
                    <h4 className="font-semibold text-white mb-2">{step}</h4>
                    <p className="text-sm text-gray-500">Experience seamless {step.toLowerCase()}</p>
                    {j < 3 && (
                      <div className={`hidden md:block absolute top-6 left-12 w-full h-0.5 bg-gradient-to-r ${journey.color === 'blue' ? 'from-blue-600/50' : 'from-cyan-600/50'} to-transparent`}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );