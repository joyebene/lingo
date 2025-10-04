import Link from 'next/link';
import React from 'react'

export const HeroSection = () => (
    <section className="relative min-h-screen bg-black text-white overflow-hidden pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-400">
              🚀 Web3 Education Platform for Africa
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn. Earn.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600">
                Build Web3.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-400 leading-relaxed">
              Gamified blockchain learning & microtask platform empowering Africans to thrive in the Web3 economy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/signup" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2">
                Start Learning
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <button  className="px-8 py-4 bg-white/5 border-2 border-blue-500/30 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2">
                For Founders 
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400">10K+</div>
                <div className="text-sm text-gray-500">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-500">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">$100K+</div>
                <div className="text-sm text-gray-500">Rewards Paid</div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* 3D Card Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl transform rotate-6 scale-95 opacity-20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">📚</div>
                    <div>
                      <div className="font-semibold">Learn Blockchain</div>
                      <div className="text-sm text-gray-400">50+ Courses Available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-2xl">💰</div>
                    <div>
                      <div className="font-semibold">Earn Rewards</div>
                      <div className="text-sm text-gray-400">Get paid in stablecoins</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">🚀</div>
                    <div>
                      <div className="font-semibold">Build Career</div>
                      <div className="text-sm text-gray-400">Access Web3 opportunities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );