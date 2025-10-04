import React from 'react'

export const ImpactSection = () => (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Our Mission
        </h2>
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto">
          Onboard <span className="font-bold text-cyan-400">1 Million Africans</span> into Web3 by 2030
        </p>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            { number: '10K+', label: 'Active Users' },
            { number: '50+', label: 'Courses' },
            { number: '20+', label: 'Partners' },
            { number: '$100K+', label: 'Paid Out' }
          ].map((stat, i) => (
            <div key={i} className="bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2 text-cyan-400">{stat.number}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8">
          <p className="text-xl leading-relaxed">
            &qout;We&apos;re building the infrastructure for Web3 education and adoption across Africa, 
            empowering the next generation of blockchain innovators and creators.&quot;
          </p>
        </div>
      </div>
    </section>
  );