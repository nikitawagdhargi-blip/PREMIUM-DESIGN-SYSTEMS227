import React, { useState } from 'react'
import { CheckCircle, XCircle, Circle } from 'lucide-react'

export default function TestChecklist() {
  const [tests, setTests] = useState([
    { id: 1, title: 'JD required validation works', completed: false },
    { id: 2, title: 'Short JD warning displays', completed: false },
    { id: 3, title: 'Skill extraction accuracy', completed: false },
    { id: 4, title: 'Readiness score calculation', completed: false },
    { id: 5, title: 'History persistence', completed: false },
    { id: 6, title: 'Skill confidence toggles', completed: false },
    { id: 7, title: 'Live score updates', completed: false },
    { id: 8, title: 'Export functionality', completed: false },
    { id: 9, title: 'Company intel generation', completed: false },
    { id: 10, title: 'Round mapping logic', completed: false }
  ])

  const toggleTest = (id: number) => {
    setTests(prev => prev.map(test => 
      test.id === id ? { ...test, completed: !test.completed } : test
    ))
  }

  const completedCount = tests.filter(test => test.completed).length
  const isAllCompleted = completedCount === tests.length

  return (
    <div className="p-8">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif font-semibold">Test Checklist</h1>
          <p className="text-gray-500">Step 4 / 4</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          isAllCompleted 
            ? 'bg-green-100 text-green-700' 
            : 'bg-yellow-100 text-yellow-700'
        }`}>
          {isAllCompleted ? 'All Tests Passed' : `${completedCount}/${tests.length} Tests Passed`}
        </div>
      </div>

      {/* Context Header */}
      <div className="mb-10">
        <h2 className="text-4xl font-serif font-bold mb-3">Quality Assurance Checklist</h2>
        <p className="text-xl text-gray-600 max-w-3xl">
          Verify all core functionality before shipping the Placement Readiness Platform.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Primary Workspace */}
        <div className="lg:col-span-2">
          <div className="card">
            <h3 className="text-2xl font-serif font-semibold mb-6">Core Functionality Tests</h3>
            <div className="space-y-4">
              {tests.map((test) => (
                <div 
                  key={test.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => toggleTest(test.id)}
                      className="flex-shrink-0"
                    >
                      {test.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : (
                        <Circle className="h-6 w-6 text-gray-300 hover:text-gray-400" />
                      )}
                    </button>
                    <span className={`text-lg ${
                      test.completed ? 'text-gray-500 line-through' : 'text-foreground'
                    }`}>
                      {test.title}
                    </span>
                  </div>
                  {test.completed && (
                    <XCircle 
                      className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                      onClick={() => toggleTest(test.id)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Panel */}
        <div className="space-y-6">
          {/* Progress Summary */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Test Progress</h3>
            <div className="text-center py-6">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#8B0000"
                    strokeWidth="8"
                    strokeDasharray={`${283 * (completedCount / tests.length)} 283`}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">{completedCount}</span>
                  <span className="text-sm text-gray-500">/ {tests.length}</span>
                </div>
              </div>
              <p className="text-gray-600">
                {isAllCompleted 
                  ? 'All tests passed! Ready for shipping.' 
                  : `${tests.length - completedCount} tests remaining`}
              </p>
            </div>
          </div>

          {/* Test Instructions */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Test Instructions</h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-foreground mb-1">1. JD Validation</p>
                <p>Test with empty JD, short JD (&lt;200 chars), and full JD (&gt;800 chars)</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">2. Skill Extraction</p>
                <p>Use JD with various tech stacks (Java, React, SQL, AWS, etc.)</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">3. Interactive Features</p>
                <p>Toggle skill confidence and verify live score updates</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">4. Data Persistence</p>
                <p>Refresh page and verify history/scores persist</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">5. Export Tools</p>
                <p>Test copy and download functionality</p>
              </div>
            </div>
          </div>

          {/* Sample Test Data */}
          <div className="card">
            <h3 className="text-xl font-serif font-semibold mb-4">Sample Test JD</h3>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <p className="mb-2">Use this sample for comprehensive testing:</p>
              <p className="font-mono text-xs bg-white p-3 rounded border">
                "We're looking for a Software Engineer with experience in Java, React, and SQL. 
                Must have knowledge of DSA, OOP concepts, and REST APIs. 
                Experience with AWS and Docker is preferred. 
                Strong problem-solving skills required."
              </p>
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
              <div className={`w-5 h-5 rounded flex items-center justify-center ${
                index < (isAllCompleted ? 4 : completedCount > 7 ? 3 : completedCount > 4 ? 2 : 1)
                  ? 'bg-green-500 border-green-500'
                  : 'border-2 border-gray-300'
              }`}>
                {index < (isAllCompleted ? 4 : completedCount > 7 ? 3 : completedCount > 4 ? 2 : 1) && (
                  <span className="text-white text-xs">✓</span>
                )}
              </div>
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}