import React from 'react'

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

export  const ProfileView = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Profile</h1>

      {/* Profile Header */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-4 sm:p-6 md:p-8">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-6xl">
            {user.avatar}
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
            <p className="text-blue-100 mb-3">{user.email}</p>
            <div className="flex gap-3">
              <span className="text-[12px] px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full md:text-sm font-semibold">
                {user.level} Level
              </span>
              <span className="text-[12px] px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full md:text-sm font-semibold">
                {user.points} Points
              </span>
            </div>
          </div>
          <button className="text-sm md:text-base px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Personal Information */}
        <div className="md:col-span-2 bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { label: 'Full Name', value: user.name },
              { label: 'Email', value: user.email },
              { label: 'Phone', value: '+234 800 000 0000' },
              { label: 'Country', value: 'Nigeria' },
              { label: 'Joined', value: 'January 2024' },
              { label: 'Language', value: 'English' }
            ].map((field, i) => (
              <div key={i} className="p-4 bg-gray-800 rounded-xl">
                <div className="text-sm text-gray-400 mb-1">{field.label}</div>
                <div className="text-white font-medium">{field.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Achievements</h2>
          <div className="space-y-3">
            {[
              { title: 'First Course', icon: '🎓', earned: true },
              { title: '7-Day Streak', icon: '🔥', earned: true },
              { title: 'NFT Collector', icon: '🎖️', earned: true },
              { title: 'Community Hero', icon: '⭐', earned: false },
              { title: 'Course Master', icon: '👑', earned: false }
            ].map((achievement, i) => (
              <div key={i} className={`p-3 rounded-xl ${
                achievement.earned ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30' : 'bg-gray-800 opacity-50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-white">{achievement.title}</div>
                    {achievement.earned && (
                      <div className="text-xs text-blue-400">Unlocked</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Learning Progress</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { category: 'DeFi', courses: 3, progress: 75 },
            { category: 'NFTs', courses: 2, progress: 50 },
            { category: 'Blockchain', courses: 3, progress: 40 }
          ].map((category, i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-xl">
              <h3 className="font-semibold text-white mb-2">{category.category}</h3>
              <p className="text-sm text-gray-400 mb-3">{category.courses} courses in progress</p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                  style={{ width: `${category.progress}%` }}
                ></div>
              </div>
              <p className="text-xs text-blue-400">{category.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>

      {/* NFT Collection */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">NFT Collection</h2>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: 'DeFi Master', icon: '💰', rarity: 'Rare' },
            { name: 'NFT Pioneer', icon: '🎨', rarity: 'Epic' },
            { name: 'First Course', icon: '🎓', rarity: 'Common' },
            { name: 'Community Star', icon: '⭐', rarity: 'Rare' },
            { name: 'Blockchain Pro', icon: '⛓️', rarity: 'Legendary' }
          ].map((nft, i) => (
            <div key={i} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition-transform">
                <div className="text-5xl mb-2">{nft.icon}</div>
                <div className="text-xs font-semibold text-white mb-1">{nft.name}</div>
                <div className={`text-xs font-medium ${
                  nft.rarity === 'Legendary' ? 'text-yellow-400' :
                  nft.rarity === 'Epic' ? 'text-purple-400' :
                  nft.rarity === 'Rare' ? 'text-blue-400' : 'text-gray-300'
                }`}>
                  {nft.rarity}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Settings</h2>
        <div className="space-y-3">
          {[
            { label: 'Email Notifications', enabled: true },
            { label: 'Push Notifications', enabled: true },
            { label: 'Weekly Progress Report', enabled: false },
            { label: 'Community Updates', enabled: true }
          ].map((setting, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
              <span className="text-white font-medium">{setting.label}</span>
              <button className={`w-12 h-6 rounded-full transition-colors ${
                setting.enabled ? 'bg-blue-600' : 'bg-gray-600'
              }`}>
                {<div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  setting.enabled ? 'translate-x-7' : 'translate-x-1'
                }`}></div>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
