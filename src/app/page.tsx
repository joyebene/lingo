"use client";

import React from 'react';
import { HeroSection } from '@/components/landingPage/hero';
import { Navigation } from '@/components/landingPage/nav';
import { ProblemSection } from '@/components/landingPage/problemSection';
import { HowItWorksSection } from '@/components/landingPage/howItWorks';
import { FeaturesSection } from '@/components/landingPage/featureSection';
import { ValuePropsSection } from '@/components/landingPage/valuePropsSec';
import { RewardsSection } from '@/components/landingPage/rewardSection';
import { ImpactSection } from '@/components/landingPage/impactSection';
import { RoadmapSection } from '@/components/landingPage/roadMapSection';
import { TestimonialsSection } from '@/components/landingPage/testimonialSection';
import { CTABanner } from '@/components/landingPage/ctaButtonSection';
import { Footer } from '@/components/landingPage/footer';

const LingoLandingPage = () => {
 

  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ValuePropsSection />
      <RewardsSection />
      <ImpactSection />
      <RoadmapSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />

      {/* Scroll to Top Button */}
      <button 
        type='button'
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-700 {
          animation-delay: 700ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default LingoLandingPage;