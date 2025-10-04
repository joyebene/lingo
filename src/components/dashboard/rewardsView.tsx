import React from 'react'

export const RewardsView = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Rewards & Earnings</h1>

      {/* Balance Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
          <div className="text-sm opacity-90 mb-2">Total Earnings</div>
          <div className="text-4xl font-bold mb-4">$245.50</div>
          <div className="text-sm opacity-90">USDC/cUSD</div>
        </div>
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Available Balance</div>
          <div className="text-4xl font-bold text-white mb-4">$125.00</div>
          <button className="px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-700 transition-colors">
            Withdraw
          </button>
        </div>
        <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
          <div className="text-sm text-gray-400 mb-2">Pending Rewards</div>
          <div className="text-4xl font-bold text-white mb-4">$120.50</div>
          <div className="text-sm text-cyan-400">Processing...</div>
        </div>
      </div>

      {/* Earning Opportunities */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Earn More Rewards</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: 'Complete Course Quiz', reward: '$10 USDC', icon: '📝', difficulty: 'Easy' },
            { title: 'Test New DeFi Product', reward: '$25 USDC', icon: '🧪', difficulty: 'Medium' },
            { title: 'Write Course Review', reward: '$5 USDC', icon: '✍️', difficulty: 'Easy' },
            { title: 'Refer a Friend', reward: '$15 USDC', icon: '👥', difficulty: 'Easy' }
          ].map((task, i) => (
            <div key={i} className="p-4 bg-gray-800 rounded-xl hover:bg-gray-750 cursor-pointer transition-all">
              <div className="flex items-center gap-4">
                <div className="text-4xl">{task.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{task.title}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400 font-medium">{task.reward}</span>
                    <span className="text-gray-500">•</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      task.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {task.difficulty}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 rounded-lg text-white text-sm font-medium hover:bg-blue-700 transition-colors">
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-gray-900 border border-blue-500/20 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-white mb-4">Transaction History</h2>
        <div className="space-y-3">
          {[
            { type: 'Earned', description: 'Completed DeFi Quiz', amount: '+$10.00', date: '2 hours ago', status: 'Completed' },
            { type: 'Earned', description: 'Course Review Reward', amount: '+$5.00', date: '1 day ago', status: 'Completed' },
            { type: 'Withdrawn', description: 'To Wallet', amount: '-$50.00', date: '3 days ago', status: 'Completed' },
            { type: 'Earned', description: 'Product Testing', amount: '+$25.00', date: '5 days ago', status: 'Completed' }
          ].map((transaction, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                transaction.type === 'Earned' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
              }`}>
                {transaction.type === 'Earned' ? '↓' : '↑'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white">{transaction.description}</div>
                <div className="text-sm text-gray-400">{transaction.date}</div>
              </div>
              <div className="text-right">
                <div className={`font-bold ${
                  transaction.type === 'Earned' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {transaction.amount}
                </div>
                <div className="text-xs text-gray-400">{transaction.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );