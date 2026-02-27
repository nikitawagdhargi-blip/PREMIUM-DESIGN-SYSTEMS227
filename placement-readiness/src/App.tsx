import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Results from './pages/Results'
import History from './pages/History'
import TestChecklist from './pages/TestChecklist'
import Practice from './pages/Practice'
import Assessments from './pages/Assessments'
import Resources from './pages/Resources'
import Profile from './pages/Profile'
import AppShell from './components/AppShell'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<AppShell><Dashboard /></AppShell>} />
          <Route path="/practice" element={<AppShell><Practice /></AppShell>} />
          <Route path="/assessments" element={<AppShell><Assessments /></AppShell>} />
          <Route path="/resources" element={<AppShell><Resources /></AppShell>} />
          <Route path="/profile" element={<AppShell><Profile /></AppShell>} />
          <Route path="/results" element={<AppShell><Results /></AppShell>} />
          <Route path="/history" element={<AppShell><History /></AppShell>} />
          <Route path="/prp/07-test" element={<AppShell><TestChecklist /></AppShell>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App