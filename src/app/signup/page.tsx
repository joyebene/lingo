"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LingoSignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    phoneNumber: '',
    interests: [],
    agreeToTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

type FormDataType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  phoneNumber: string;
  interests: string[];
  agreeToTerms: boolean;
};



  const handleInputChange =
    (field: keyof FormDataType) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };


const handleInterestToggle = (interest: string) => {
  setFormData((prev: FormDataType) => ({
    ...prev,
    interests: prev.interests.includes(interest)
      ? prev.interests.filter((i) => i !== interest)
      : [...prev.interests, interest],
  }));
};


  const countries = [
    'Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Egypt',
    'Tanzania', 'Uganda', 'Ethiopia', 'Rwanda', 'Senegal'
  ];

  const interestOptions = [
    { id: 'defi', label: 'DeFi', icon: '💰' },
    { id: 'nft', label: 'NFTs', icon: '🎨' },
    { id: 'dao', label: 'DAOs', icon: '🏛️' },
    { id: 'blockchain', label: 'Blockchain Dev', icon: '⛓️' },
    { id: 'crypto', label: 'Cryptocurrency', icon: '₿' },
    { id: 'web3', label: 'Web3 Gaming', icon: '🎮' }
  ];

  // Step 1: Choose User Type
  const UserTypeSelection = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome to Lingo</h2>
        <p className="text-gray-400">Choose how you want to join our community</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            type: 'learner',
            icon: '🎓',
            title: 'Learner',
            desc: 'Learn Web3 & earn rewards',
            gradient: 'from-blue-600 to-cyan-500'
          },
          {
            type: 'founder',
            icon: '🚀',
            title: 'Founder',
            desc: 'Get feedback & grow',
            gradient: 'from-cyan-600 to-blue-500'
          },
          {
            type: 'researcher',
            icon: '📊',
            title: 'Researcher',
            desc: 'Access adoption data',
            gradient: 'from-blue-500 to-cyan-600'
          }
        ].map((option) => (
          <button
            key={option.type}
            onClick={() => {
              setUserType(option.type);
              setCurrentStep(2);
            }}
            className={`group relative p-6 rounded-2xl border-2 transition-all text-left ${
              userType === option.type
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-blue-500/20 bg-gray-900 hover:border-blue-500/50 hover:bg-gray-800'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
            <div className="relative">
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-sm text-gray-400">{option.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Step 2: Basic Information
  const BasicInformation = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Tell Us About Yourself</h2>
        <p className="text-gray-400">We need some basic information to get started</p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange('password')}
              placeholder="Create a strong password"
              className="w-full pl-10 pr-12 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="w-5 h-5 text-gray-500 hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                {showPassword ? (
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              placeholder="Confirm your password"
              className="w-full pr-12 px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="w-5 h-5 text-gray-500 hover:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                {showConfirmPassword ? (
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.country}
            onChange={handleInputChange('country')}
            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="bg-gray-900">Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country} className="bg-gray-900">{country}</option>
            ))}
          </select>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
            placeholder="+234 800 000 0000"
            className="w-full px-4 py-3 bg-gray-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>
    </div>
  );

  // Step 3: Interests & Preferences
  const InterestsPreferences = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Your Interests</h2>
        <p className="text-gray-400">Select topics you're interested in learning</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {interestOptions.map((interest) => (
          <button
            key={interest.id}
            onClick={() => handleInterestToggle(interest.id)}
            className={`p-4 rounded-xl border-2 transition-all text-center ${
              formData.interests.includes(interest.id)
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-blue-500/20 bg-gray-900 hover:border-blue-500/50 hover:bg-gray-800'
            }`}
          >
            <div className="text-3xl mb-2">{interest.icon}</div>
            <div className="text-sm font-semibold text-white">{interest.label}</div>
          </button>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="terms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange('agreeToTerms')}
            className="mt-1 w-4 h-4 text-blue-600 bg-gray-900 border-blue-500/30 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I agree to Lingo's{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
          </label>
        </div>
      </div>
    </div>
  );

  // Progress Bar
  const ProgressBar = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center flex-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
              currentStep >= step
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                : 'bg-gray-800 text-gray-500'
            }`}>
              {step}
            </div>
            {step < 3 && (
              <div className={`flex-1 h-1 mx-2 rounded-full transition-all ${
                currentStep > step ? 'bg-gradient-to-r from-blue-600 to-cyan-500' : 'bg-gray-800'
              }`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>User Type</span>
        <span>Basic Info</span>
        <span>Interests</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Header */}
      <div className="relative border-b border-blue-500/20 bg-black/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl">
                L
              </div>
              <span className="text-2xl font-bold text-white">Lingo</span>
            </div>
            <div className="text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/signin" className="text-blue-400 hover:text-blue-300 font-semibold">Sign In</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            {currentStep > 1 && <ProgressBar />}

            {currentStep === 1 && <UserTypeSelection />}
            {currentStep === 2 && <BasicInformation />}
            {currentStep === 3 && <InterestsPreferences />}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="flex-1 px-6 py-3 bg-gray-800 border border-blue-500/20 rounded-full font-semibold text-white hover:bg-gray-700 transition-all"
                >
                  Back
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  Continue
                </button>
              ) : (
                <button
                  disabled={!formData.agreeToTerms}
                  onClick={() => {setTimeout(()=> {router.push("/dashboard")}, 2000)}}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create Account 🚀
                </button>
              )}
            </div>

            {/* Social Sign Up */}
            {currentStep === 1 && (
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-blue-500/20"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-900 text-gray-400">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 border border-blue-500/20 rounded-full font-semibold text-white hover:bg-gray-700 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 border border-blue-500/20 rounded-full font-semibold text-white hover:bg-gray-700 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    GitHub
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure & Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
              <span>10K+ Active Learners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LingoSignUpPage;