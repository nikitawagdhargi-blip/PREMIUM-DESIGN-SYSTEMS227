import { AnalysisEntry } from '../types'

const STORAGE_KEY = 'placement_analysis_history'

export const saveAnalysis = (entry: AnalysisEntry): void => {
  try {
    const history = getHistory()
    history.unshift(entry) // Add to beginning
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 50))) // Keep only last 50 entries
  } catch (error) {
    console.error('Failed to save analysis:', error)
  }
}

export const getHistory = (): AnalysisEntry[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    
    const parsed = JSON.parse(data)
    
    // Validate and clean data
    return parsed.filter((entry: any) => {
      try {
        // Basic validation
        return entry && 
               typeof entry.id === 'string' && 
               typeof entry.createdAt === 'string' &&
               typeof entry.jdText === 'string'
      } catch {
        return false
      }
    })
  } catch (error) {
    console.error('Failed to load history:', error)
    return []
  }
}

export const getAnalysisById = (id: string): AnalysisEntry | null => {
  const history = getHistory()
  return history.find(entry => entry.id === id) || null
}

export const updateAnalysis = (id: string, updates: Partial<AnalysisEntry>): void => {
  try {
    const history = getHistory()
    const index = history.findIndex(entry => entry.id === id)
    
    if (index !== -1) {
      history[index] = { ...history[index], ...updates, updatedAt: new Date().toISOString() }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    }
  } catch (error) {
    console.error('Failed to update analysis:', error)
  }
}

export const deleteAnalysis = (id: string): void => {
  try {
    const history = getHistory()
    const filtered = history.filter(entry => entry.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error('Failed to delete analysis:', error)
  }
}

export const clearHistory = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear history:', error)
  }
}