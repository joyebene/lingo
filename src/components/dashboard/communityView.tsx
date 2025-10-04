import React from 'react'
import { BiMessage } from 'react-icons/bi';

export const CommunityView = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Community</h1>

      {/* Community Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Members', value: '10.5K', icon: '👥' },
          { label: 'Active Today', value: '2.3K', icon: '🟢' },
          { label: 'Discussions', value: '1.2K', icon: '💬' },
          { label: 'Events', value: '24', icon: '📅' }
        ].map((stat, i) => (
          <div key={i} className="bg-gray-900 border border-blue-500/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Community Features */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Forums */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span><BiMessage /></span> Forums
          </h2>
          <div className="space-y-3">
            {[
              { title: 'DeFi Discussion', posts: 234, active: '5m ago' },
              { title: 'NFT Marketplace', posts: 156, active: '15m ago' },
              { title: 'Learning Resources', posts: 423, active: '1h ago' }
            ].map((forum, i) => (
              <div key={i} className="p-3 bg-gray-800 rounded-xl hover:bg-gray-750 cursor-pointer transition-all">
                <h3 className="font-semibold text-white mb-1">{forum.title}</h3>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span>{forum.posts} posts</span>
                  <span>•</span>
                  <span>Active {forum.active}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Sessions */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🎓</span> Expert Sessions
          </h2>
          <div className="space-y-3">
            {[
              { expert: 'Sarah K.', topic: 'DeFi Security', date: 'Tomorrow, 3 PM' },
              { expert: 'John M.', topic: 'NFT Trading Tips', date: 'Friday, 5 PM' },
              { expert: 'Emily W.', topic: 'DAO Governance', date: 'Next Week' }
            ].map((session, i) => (
              <div key={i} className="p-3 bg-gray-800 rounded-xl hover:bg-gray-750 cursor-pointer transition-all">
                <h3 className="font-semibold text-white mb-1">{session.topic}</h3>
                <div className="text-xs text-gray-400 mb-2">with {session.expert}</div>
                <div className="text-xs text-blue-400">{session.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Challenges */}
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span>🏆</span> Challenges
          </h2>
          <div className="space-y-3">
            {[
              { title: '7-Day Learning Streak', reward: '100 points', participants: 234 },
              { title: 'Complete 3 Courses', reward: '50 USDC', participants: 156 },
              { title: 'Refer 5 Friends', reward: 'NFT Badge', participants: 89 }
            ].map((challenge, i) => (
              <div key={i} className="p-3 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl">
                <h3 className="font-semibold text-white mb-1">{challenge.title}</h3>
                <div className="text-xs text-blue-400 mb-2">Reward: {challenge.reward}</div>
                <div className="text-xs text-gray-400">{challenge.participants} participating</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Discussions</h2>
        <div className="space-y-4">
          {[
            { 
              user: 'Michael T.', 
              avatar: '👨🏿', 
              title: 'Best DeFi protocols for beginners?', 
              replies: 12, 
              time: '5m ago',
              likes: 8
            },
            { 
              user: 'Lisa P.', 
              avatar: '👩', 
              title: 'How to mint my first NFT?', 
              replies: 23, 
              time: '1h ago',
              likes: 15
            },
            { 
              user: 'David K.', 
              avatar: '👨', 
              title: 'DAO governance voting strategies', 
              replies: 7, 
              time: '2h ago',
              likes: 5
            }
          ].map((discussion, i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-xl hover:bg-gray-750 cursor-pointer transition-all">
              <div className="flex items-start gap-3">
                <div className="text-3xl">{discussion.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">{discussion.user}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{discussion.time}</span>
                  </div>
                  <h3 className="text-white mb-2">{discussion.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <span>💬</span> {discussion.replies} replies
                    </span>
                    <span className="flex items-center gap-1">
                      <span>👍</span> {discussion.likes} likes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );