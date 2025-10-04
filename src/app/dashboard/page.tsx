"use client";

import React, { useState } from 'react';
import { BiStar } from 'react-icons/bi';
import { RewardsView } from '@/components/dashboard/rewardsView';
import { ProfileView } from '@/components/dashboard/profileView';
import { CommunityView } from '@/components/dashboard/communityView';
import { CoursesView } from '@/components/dashboard/courseView';
import { CgClose } from 'react-icons/cg';

const LingoDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openNav, setOpenNav] = useState(false);

  // User data
  const user = {
    name: 'Amara Johnson',
    email: 'amara@example.com',
    avatar: '👩🏿',
    level: 'Intermediate',
    points: 2450,
    streak: 12,
    completedCourses: 8,
    nfts: 5
  };

  // Navigation items
  const navItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'courses', icon: '📚', label: 'Courses' },
    { id: 'community', icon: '👥', label: 'Community' },
    { id: 'rewards', icon: '💰', label: 'Rewards' },
    { id: 'profile', icon: '👤', label: 'Profile' }
  ];

  // Sidebar Component
  const Sidebar = () => (
    <div className={`fixed top-0 left-0 h-full bg-gray-900 border-r border-blue-500/20 transition-all duration-300 z-40 hidden md:block ${sidebarOpen ? 'w-64' : 'w-20'
      }`}>
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-blue-500/20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl">
              L
            </div>
            {sidebarOpen && <span className="text-2xl font-bold text-white">Lingo</span>}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-blue-500/20">
          <div className={`flex items-center gap-3 p-3 bg-gray-800 rounded-xl ${!sidebarOpen && 'justify-center'}`}>
            <div className="text-3xl">{user.avatar}</div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold truncate">{user.name}</div>
                <div className="text-xs text-gray-400 truncate">{user.email}</div>
              </div>
            )}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
        >
          {<svg className={`w-4 h-4 transition-transform ${!sidebarOpen && 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>}
        </button>
      </div>
    </div>
  );

  const MobileSidebar = () => (
    <div className="fixed top-0 left-0 h-full bg-gray-900 border-r border-blue-500/20 transition-all duration-300 z-40  md:hidden 'w-20'
      ">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-blue-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center font-bold text-xl">
              L
            </div>
            <span className="text-2xl font-bold text-white">Lingo</span>
          </div>
          <CgClose color='white' className='w-6 h-6' onClick={()=> setOpenNav(false)} />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setOpenNav(false)}}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-blue-500/20">
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl">
            <div className="text-3xl">{user.avatar}</div>

            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold truncate">{user.name}</div>
              <div className="text-xs text-gray-400 truncate">{user.email}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Welcome back, {user.name.split(' ')[0]}!</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Points', value: user.points, icon: '⭐', color: 'from-blue-600 to-cyan-500' },
          { label: 'Day Streak', value: `${user.streak} days`, icon: '🔥', color: 'from-orange-600 to-red-500' },
          { label: 'Courses Completed', value: user.completedCourses, icon: '📚', color: 'from-purple-600 to-pink-500' },
          { label: 'NFT Badges', value: user.nfts, icon: '🎖️', color: 'from-green-600 to-emerald-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl">{stat.icon}</div>
              <div className={`px-3 py-1 bg-gradient-to-r ${stat.color} rounded-full text-xs font-semibold`}>
                Active
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Continue Learning */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Continue Learning</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Introduction to DeFi', progress: 65, lesson: 'Lesson 4 of 8', image: '💰' },
            { title: 'NFT Fundamentals', progress: 40, lesson: 'Lesson 2 of 6', image: '🎨' }
          ].map((course, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-all cursor-pointer">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {course.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 truncate">{course.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">{course.lesson}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-blue-400 mt-1">{course.progress}% complete</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Leaderboard */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: 'Completed', item: 'DeFi Basics Quiz', time: '2 hours ago', icon: '✅' },
              { action: 'Earned', item: '50 USDC Reward', time: '1 day ago', icon: '💵' },
              { action: 'Joined', item: 'Web3 Gaming Community', time: '2 days ago', icon: '🎮' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-800 rounded-xl">
                <div className="text-2xl">{activity.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm">
                    <span className="font-semibold">{activity.action}</span> {activity.item}
                  </p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Top Learners</h2>
          <div className="space-y-3">
            {[
              { name: 'Sarah K.', points: 3250, avatar: '👩', rank: 1 },
              { name: 'John M.', points: 3100, avatar: '👨🏿', rank: 2 },
              { name: 'You', points: 2450, avatar: user.avatar, rank: 3 }
            ].map((learner, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${learner.name === 'You' ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-gray-800'
                }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${i === 0 ? 'bg-yellow-500' : i === 1 ? 'bg-gray-400' : 'bg-orange-500'
                  }`}>
                  {learner.rank}
                </div>
                <div className="text-2xl">{learner.avatar}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold truncate">{learner.name}</p>
                  <p className="text-xs text-gray-400">{learner.points} points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );



  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      
      {/* mobile nsidebar */}
      { openNav && (<MobileSidebar />)}
    
      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64 ' : 'ml-0 md:ml-20'}`}>
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-gray-900/80 backdrop-blur-lg border-b border-blue-500/20">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {!openNav && (
                <button type='button' onClick={() => setOpenNav(true)} className="lg:hidden text-white">
                  {<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>}
                </button>
              )}

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, community..."
                  className="w-64 lg:w-96 px-4 py-2 pl-10 bg-gray-800 border border-blue-500/20 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all"
                />
                <svg className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center sm:gap-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                {<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>}
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* Messages */}
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors hidden sm:block">
                {<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>}
              </button>

              {/* Points Display */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
                <span className="text-lg"><BiStar fill='yellow' color='yellow' /></span>
                <span className="font-bold text-white">{user.points}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'courses' && <CoursesView />}
          {activeTab === 'community' && <CommunityView />}
          {activeTab === 'rewards' && <RewardsView />}
          {activeTab === 'profile' && <ProfileView />}
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LingoDashboard;