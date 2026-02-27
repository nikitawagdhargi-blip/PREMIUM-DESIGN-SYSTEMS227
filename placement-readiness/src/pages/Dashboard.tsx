import React, { useState } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import { ChevronRight } from 'lucide-react'

export default function Dashboard() {
  const [readinessScore] = useState(72)
  
  const skillData = [
    { subject: 'DSA', A: 75, fullMark: 100 },
    { subject: 'System Design', A: 60, fullMark: 100 },
    { subject: 'Communication', A: 80, fullMark: 100 },
    { subject: 'Resume', A: 85, fullMark: 100 },
    { subject: 'Aptitude', A: 70, fullMark: 100 },
  ]

  const upcomingAssessments = [
    { title: 'DSA Mock Test', date: 'Tomorrow', time: '10:00 AM' },
    { title: 'System Design Review', date: 'Wed', time: '2:00 PM' },
    { title: 'HR Interview Prep', date: 'Friday', time: '11:00 AM' },
  ]

  return (
    <div className="p-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Placement Prep</h1>
          <p className="text-gray-500">Step 1 / 4</p>
        </div>
        <div className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
          In Progress
        </div>
      </div>

      {/* Context Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-serif font-bold mb-3">Track Your Placement Readiness</h2>
        <p className="text-xl text-gray-600 max-w-3xl">
          Monitor your progress across key skills and prepare effectively for your upcoming interviews.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Primary Workspace - Overall Readiness */}
        <div className="space-y-8">
          <div className="card">
            <h3 className="text-2xl font-serif font-semibold mb-6">Overall Readiness</h3>
            <div className="flex items-center justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="8"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#8B0000"
                    strokeWidth="8"
                    strokeDasharray={`${283 * (readinessScore / 100)} 283`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-1000 ease-in-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">{readinessScore}</span>
                  <span className="text-sm text-gray-500">Readiness Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="card">
            <h3 className="text-2xl font-serif font-semibold mb-6">Skill Breakdown</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#8B0000"
                    fill="#8B0000"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Continue Practice */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Continue Practice</h3>
            <div className="mb-4">
              <p className="text-foreground font-medium mb-2">Dynamic Programming</p>
              <div className="progress-bar mb-2">
                <div 
                  className="progress-fill" 
                  style={{ width: '30%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-500">3/10 completed</p>
            </div>
            <button className="btn-primary w-full">Continue</button>
          </div>
        </div>

        {/* Secondary Panel */}
        <div className="space-y-8">
          {/* Weekly Goals */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Weekly Goals</h3>
            <div className="mb-6">
              <p className="text-foreground font-medium mb-2">Problems Solved: 12/20 this week</p>
              <div className="progress-bar mb-4">
                <div 
                  className="progress-fill" 
                  style={{ width: '60%' }}
                ></div>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">This Week's Activity</p>
              <div className="flex space-x-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                  <div 
                    key={day}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                      index < 5 ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Assessments */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Upcoming Assessments</h3>
            <div className="space-y-4">
              {upcomingAssessments.map((assessment, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{assessment.title}</p>
                    <p className="text-sm text-gray-500">{assessment.date}, {assessment.time}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proof Footer */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-lg font-serif font-semibold mb-4">Progress Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {['UI Built', 'Logic Working', 'Test Passed', 'Deployed'].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center">
                <span className="text-xs text-transparent">✓</span>
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}