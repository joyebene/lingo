import React from 'react'

export const CoursesView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Courses</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm md:text-base bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors">
            All Courses
          </button>
          <button className="px-4 py-2 text-sm md:text-base bg-gray-800 rounded-lg text-gray-400 font-medium hover:text-white transition-colors">
            My Courses
          </button>
        </div>
      </div>

      {/* Course Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {['All', 'DeFi', 'NFTs', 'DAOs', 'Blockchain', 'Smart Contracts'].map((category) => (
          <button
            key={category}
            className="px-4 py-2 bg-gray-900 border border-blue-500/20 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:border-blue-500/50 transition-all whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { 
            title: 'Introduction to DeFi', 
            instructor: 'Sarah Johnson', 
            students: 1234, 
            rating: 4.8, 
            lessons: 8, 
            duration: '4 hours',
            image: '💰',
            level: 'Beginner',
            progress: 65
          },
          { 
            title: 'NFT Masterclass', 
            instructor: 'Michael Chen', 
            students: 892, 
            rating: 4.9, 
            lessons: 6, 
            duration: '3 hours',
            image: '🎨',
            level: 'Intermediate',
            progress: 40
          },
          { 
            title: 'Smart Contract Development', 
            instructor: 'David Smith', 
            students: 2341, 
            rating: 4.7, 
            lessons: 12, 
            duration: '8 hours',
            image: '⚡',
            level: 'Advanced',
            progress: 0
          },
          { 
            title: 'DAO Governance', 
            instructor: 'Emily Wong', 
            students: 567, 
            rating: 4.6, 
            lessons: 5, 
            duration: '2.5 hours',
            image: '🏛️',
            level: 'Intermediate',
            progress: 0
          },
          { 
            title: 'Blockchain Fundamentals', 
            instructor: 'James Brown', 
            students: 3456, 
            rating: 4.9, 
            lessons: 10, 
            duration: '5 hours',
            image: '⛓️',
            level: 'Beginner',
            progress: 0
          },
          { 
            title: 'Web3 Gaming Basics', 
            instructor: 'Lisa Park', 
            students: 1123, 
            rating: 4.5, 
            lessons: 7, 
            duration: '4.5 hours',
            image: '🎮',
            level: 'Beginner',
            progress: 0
          }
        ].map((course, i) => (
          <div key={i} className="group bg-gray-900 border border-blue-500/20 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <div className="text-6xl">{course.image}</div>
              {course.progress > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900">
                  <div 
                    className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {course.level}
                </span>
                {course.progress > 0 && (
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">by {course.instructor}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{course.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>👥</span>
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📚</span>
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
              <button className="w-full py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );