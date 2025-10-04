import React from 'react'

export const CTABanner = () => (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Join the Future of Web3 in Africa
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100">
          Start your Web3 journey today. Learn, earn, and build with Africa&apos;s leading blockchain education platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-10 py-5 bg-white text-blue-600 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl">
            Start Learning Free
          </button>
          <button className="px-10 py-5 bg-black/30 backdrop-blur-sm border-2 border-white/50 rounded-full text-xl font-bold hover:bg-black/50 transition-all">
            Partner with Us
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-blue-100">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Free to Join</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Earn Stablecoins</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">NFT Certificates</span>
          </div>
        </div>
      </div>
    </section>
  );