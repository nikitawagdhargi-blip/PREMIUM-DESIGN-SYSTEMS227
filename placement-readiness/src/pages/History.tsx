import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getHistory } from '../utils/storage'
import { AnalysisEntry } from '../types'
import { Calendar, Building, User, ChevronRight } from 'lucide-react'

export default function History() {
  const navigate = useNavigate()
  const [history, setHistory] = useState<AnalysisEntry[]>([])

  useEffect(() => {
    setHistory(getHistory())
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleEntryClick = (entry: AnalysisEntry) => {
    navigate('/results', { state: { ...entry, id: entry.id } })
  }

  return (
    <div className="p-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Analysis History</h1>
          <p className="text-gray-500">Step 3 / 4</p>
        </div>
        <div className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          History
        </div>
      </div>

      {/* Context Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-serif font-bold mb-3">Your Previous Analyses</h2>
        <p className="text-xl text-gray-600 max-w-3xl">
          Review and revisit your past placement readiness assessments.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Primary Workspace */}
        <div className="lg:col-span-2">
          {history.length === 0 ? (
            <div className="card text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Analysis History</h3>
              <p className="text-gray-500 mb-6">Start by analyzing a job description to see your history here.</p>
              <button 
                onClick={() => navigate('/')}
                className="btn-primary"
              >
                Analyze JD
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((entry) => (
                <div 
                  key={entry.id}
                  onClick={() => handleEntryClick(entry)}
                  className="card cursor-pointer hover:shadow-md transition-all duration-200 border-l-4 border-l-accent"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {entry.company && (
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4 text-gray-500" />
                            <span className="font-medium text-foreground">{entry.company}</span>
                          </div>
                        )}
                        {entry.role && (
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4 text-gray-500" />
                            <span className="text-gray-600">{entry.role}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">
                        Analyzed on {formatDate(entry.createdAt)}
                      </p>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-accent rounded-full"></div>
                          <span className="text-sm font-medium text-foreground">
                            Score: {entry.finalScore}/100
                          </span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {Object.values(entry.extractedSkills).flat().length} skills detected
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Secondary Panel */}
        <div className="space-y-6">
          {/* Stats Summary */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">History Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Analyses</span>
                <span className="font-semibold text-foreground">{history.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Score</span>
                <span className="font-semibold text-foreground">
                  {history.length > 0 
                    ? Math.round(history.reduce((sum, entry) => sum + entry.finalScore, 0) / history.length)
                    : 0}/100
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Skills Tracked</span>
                <span className="font-semibold text-foreground">
                  {history.reduce((sum, entry) => 
                    sum + Object.values(entry.extractedSkills).flat().length, 0
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Recent Skills */}
          {history.length > 0 && (
            <div className="card">
              <h3 className="text-xl font-serif font-semibold mb-4">Recently Detected Skills</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(
                  new Set(
                    history.slice(0, 3).flatMap(entry => 
                      Object.values(entry.extractedSkills).flat()
                    )
                  )
                ).slice(0, 12).map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button 
                onClick={() => navigate('/')}
                className="w-full btn-primary"
              >
                New Analysis
              </button>
              <button 
                onClick={() => navigate('/dashboard')}
                className="w-full btn-secondary"
              >
                View Dashboard
              </button>
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