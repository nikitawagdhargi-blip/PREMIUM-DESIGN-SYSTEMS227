import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Code, Video, BarChart3 } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [jdText, setJdText] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const features = [
    {
      icon: Code,
      title: 'Practice Problems',
      description: 'Master coding challenges with our curated problem sets and detailed solutions.'
    },
    {
      icon: Video,
      title: 'Mock Interviews',
      description: 'Experience real interview scenarios with AI-powered feedback and evaluation.'
    },
    {
      icon: BarChart3,
      title: 'Track Progress',
      description: 'Monitor your improvement with detailed analytics and personalized insights.'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (jdText.length < 200) {
      setShowWarning(true)
      return
    }
    
    navigate('/results', { state: { company, role, jdText } })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="section-padding spacing-xl">
        <div className="content-container text-center">
          <h1 className="font-serif font-bold text-foreground mb-6">
            Ace Your Placement
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Practice, assess, and prepare for your dream job with our comprehensive placement readiness platform.
          </p>
          <button 
            onClick={() => navigate('/dashboard')}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Analysis Form */}
      <div className="section-padding spacing-xl bg-white border-y border-gray-200">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Analyze Job Description</h2>
              <p className="text-xl text-gray-600">Get personalized preparation roadmap based on your target role</p>
            </div>
            
            <form onSubmit={handleSubmit} className="card">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="input-field"
                    placeholder="e.g., Google, Microsoft, Startup Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Role/Position (Optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input-field"
                    placeholder="e.g., Software Engineer, Data Analyst"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Job Description *
                </label>
                <textarea
                  value={jdText}
                  onChange={(e) => {
                    setJdText(e.target.value)
                    if (e.target.value.length >= 200) {
                      setShowWarning(false)
                    }
                  }}
                  className="input-field min-h-[200px]"
                  placeholder="Paste the complete job description here..."
                  required
                />
                {showWarning && (
                  <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-yellow-700">
                      This JD is too short to analyze deeply. Paste full JD for better output.
                    </p>
                  </div>
                )}
                <p className="mt-2 text-sm text-gray-500">
                  {jdText.length} characters • {jdText.length < 200 ? 'Minimum 200 characters required' : jdText.length > 800 ? 'Great! Full JD detected' : 'Good length for analysis'}
                </p>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Analyze & Get Preparation Plan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="section-padding spacing-xl">
        <div className="content-container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="content-container text-center">
          <p className="text-gray-500">
            © 2026 KodNest Premium Build System. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}