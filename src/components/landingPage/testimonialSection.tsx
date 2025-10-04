import React from 'react'


export const TestimonialsSection = () => (
    <section id="community" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Community</span> Says
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              name: 'Amara O.',
              role: 'Learner from Nigeria',
              avatar: '👩🏿',
              quote: 'Lingo helped me earn my first crypto while learning about DeFi. Now I\'m working at a Web3 startup!',
              rating: 5
            },
            {
              name: 'Kwame A.',
              role: 'Founder, Ghana',
              avatar: '👨🏿',
              quote: 'Getting real feedback from African users helped us build a product that actually solves local problems.',
              rating: 5
            },
            {
              name: 'Fatima M.',
              role: 'Researcher, Kenya',
              avatar: '👩🏾',
              quote: 'The adoption data from Lingo is invaluable for understanding Web3 trends across Africa.',
              rating: 5
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-lg text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <span key={j} className="text-cyan-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button type='button' className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
            Join Our Community
              {<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>}
          </button>
        </div>
      </div>
    </section>
  );