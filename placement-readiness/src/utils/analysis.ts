import { SkillCategory, AnalysisEntry } from '../types'

export const extractSkills = (jdText: string): SkillCategory => {
  const text = jdText.toLowerCase()
  
  const skills: SkillCategory = {
    coreCS: [],
    languages: [],
    web: [],
    data: [],
    cloud: [],
    testing: [],
    other: []
  }

  // Core CS keywords
  const coreCSKeywords = ['dsa', 'oop', 'dbms', 'os', 'networks', 'operating system', 'database']
  coreCSKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.coreCS.push(keyword.toUpperCase())
    }
  })

  // Language keywords
  const languageKeywords = ['java', 'python', 'javascript', 'typescript', 'c++', 'c#', 'go', 'rust']
  languageKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.languages.push(keyword.charAt(0).toUpperCase() + keyword.slice(1))
    }
  })

  // Web keywords
  const webKeywords = ['react', 'next.js', 'node.js', 'express', 'rest', 'graphql', 'angular', 'vue']
  webKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.web.push(keyword === 'next.js' ? 'Next.js' : keyword.charAt(0).toUpperCase() + keyword.slice(1))
    }
  })

  // Data keywords
  const dataKeywords = ['sql', 'mongodb', 'postgresql', 'mysql', 'redis', 'elasticsearch']
  dataKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.data.push(keyword.toUpperCase())
    }
  })

  // Cloud/DevOps keywords
  const cloudKeywords = ['aws', 'azure', 'gcp', 'docker', 'kubernetes', 'ci/cd', 'linux', 'jenkins']
  cloudKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.cloud.push(keyword.toUpperCase())
    }
  })

  // Testing keywords
  const testingKeywords = ['selenium', 'cypress', 'playwright', 'junit', 'pytest', 'jest']
  testingKeywords.forEach(keyword => {
    if (text.includes(keyword)) {
      skills.testing.push(keyword.charAt(0).toUpperCase() + keyword.slice(1))
    }
  })

  // If no skills detected, provide general fresher stack
  if (Object.values(skills).every(arr => arr.length === 0)) {
    skills.other = ['Communication', 'Problem solving', 'Basic coding', 'Projects']
  }

  return skills
}

export const generateChecklist = (skills: SkillCategory): any[] => {
  return [
    {
      roundTitle: 'Round 1: Aptitude / Basics',
      items: [
        'Quantitative aptitude practice',
        'Logical reasoning preparation',
        'Basic computer fundamentals',
        'Mathematics refresher',
        'English comprehension',
        'Time management strategies'
      ]
    },
    {
      roundTitle: 'Round 2: DSA + Core CS',
      items: [
        'Data structures revision (Arrays, Linked Lists, Trees)',
        'Algorithms practice (Sorting, Searching)',
        'Time and space complexity analysis',
        'DBMS fundamentals',
        'Operating System concepts',
        'Networking basics'
      ]
    },
    {
      roundTitle: 'Round 3: Tech Interview',
      items: [
        'Project explanation preparation',
        'Technical stack deep dive',
        'Coding problem solving',
        'System design basics',
        'Behavioral questions practice',
        'Code optimization techniques'
      ]
    },
    {
      roundTitle: 'Round 4: Managerial / HR',
      items: [
        'Strengths and weaknesses discussion',
        'Why this company/role?',
        'Salary negotiation preparation',
        'Team collaboration examples',
        'Problem-solving approach',
        'Career goals alignment'
      ]
    }
  ]
}

export const generate7DayPlan = (skills: SkillCategory): any[] => {
  const hasWebSkills = skills.web.length > 0
  const hasDataSkills = skills.data.length > 0
  const hasCloudSkills = skills.cloud.length > 0

  return [
    {
      day: 'Day 1-2',
      focus: 'Basics + Core CS',
      tasks: [
        'Revise data structures fundamentals',
        'Practice basic algorithms',
        'DBMS concepts review',
        'OS and networking basics',
        'Aptitude practice (2 hours)'
      ]
    },
    {
      day: 'Day 3-4',
      focus: 'DSA + Coding Practice',
      tasks: [
        'Solve 5-10 coding problems daily',
        'Focus on time complexity',
        'Practice on LeetCode/HackerRank',
        'Mock coding interviews',
        'Review solutions and optimize'
      ]
    },
    {
      day: 'Day 5',
      focus: 'Project + Resume Alignment',
      tasks: [
        'Review and refine projects',
        'Align resume with job description',
        'Prepare project explanations',
        'Update portfolio/GitHub',
        'Practice STAR methodology'
      ]
    },
    {
      day: 'Day 6',
      focus: 'Mock Interview Questions',
      tasks: [
        'Practice common interview questions',
        'System design basics (if applicable)',
        'Technical stack deep dive',
        'Behavioral questions preparation',
        'Mock interview with peer'
      ]
    },
    {
      day: 'Day 7',
      focus: 'Revision + Weak Areas',
      tasks: [
        'Revise weak topics identified',
        'Final mock test',
        'Relax and mental preparation',
        'Gather interview materials',
        'Plan interview day logistics'
      ]
    }
  ]
}

export const generateQuestions = (skills: SkillCategory): string[] => {
  const questions: string[] = []

  if (skills.coreCS.includes('DSA') || skills.coreCS.includes('DATA STRUCTURES')) {
    questions.push(
      'Explain the difference between arrays and linked lists with real-world examples.',
      'How would you optimize search in a sorted array? Compare different approaches.',
      'What is the time complexity of merge sort and when would you prefer it over quicksort?'
    )
  }

  if (skills.data.some(skill => ['SQL', 'MYSQL', 'POSTGRESQL'].includes(skill))) {
    questions.push(
      'Explain database indexing and when it helps performance.',
      'What are the different types of SQL joins and their use cases?',
      'How would you optimize a slow-running SQL query?'
    )
  }

  if (skills.web.some(skill => ['REACT', 'NEXT.JS'].includes(skill))) {
    questions.push(
      'Explain React state management options and when to use each.',
      'How does React reconciliation work under the hood?',
      'What are the differences between client-side and server-side rendering?'
    )
  }

  if (skills.languages.some(skill => ['JAVASCRIPT', 'TYPESCRIPT'].includes(skill))) {
    questions.push(
      'Explain the event loop in JavaScript with examples.',
      'What are closures and practical use cases?',
      'How does prototypal inheritance work in JavaScript?'
    )
  }

  if (skills.cloud.some(skill => ['AWS', 'AZURE', 'GCP'].includes(skill))) {
    questions.push(
      'Explain the difference between vertical and horizontal scaling.',
      'What are the key components of a microservices architecture?',
      'How would you design a scalable web application?'
    )
  }

  // Add generic questions if none were added
  if (questions.length === 0) {
    questions.push(
      'Tell me about a challenging project you worked on.',
      'How do you approach debugging a complex issue?',
      'Describe your problem-solving methodology.',
      'What interests you most about this role?',
      'How do you stay updated with technology trends?',
      'Explain a time you had to work under pressure.',
      'What are your strengths and areas for improvement?',
      'Where do you see yourself in 5 years?',
      'Why should we hire you for this position?',
      'What questions do you have for us?'
    )
  }

  return questions.slice(0, 10)
}

export const calculateReadinessScore = (
  skills: SkillCategory,
  company: string,
  role: string,
  jdLength: number
): number => {
  let score = 35 // Base score

  // +5 per detected category (max 30)
  const categories = Object.values(skills).filter(arr => arr.length > 0).length
  score += Math.min(categories * 5, 30)

  // +10 if company provided
  if (company.trim()) score += 10

  // +10 if role provided
  if (role.trim()) score += 10

  // +10 if JD length > 800 chars
  if (jdLength > 800) score += 10

  return Math.min(score, 100)
}

export const getCompanyIntel = (companyName: string) => {
  const enterpriseCompanies = [
    'amazon', 'google', 'microsoft', 'apple', 'meta', 'facebook', 'netflix', 
    'infosys', 'tcs', 'wipro', 'accenture', 'cognizant', 'ibm', 'oracle',
    'salesforce', 'adobe', 'intel', 'nvidia', 'amd'
  ]

  const companyNameLower = companyName.toLowerCase()
  const isEnterprise = enterpriseCompanies.some(comp => companyNameLower.includes(comp))

  return {
    name: companyName,
    industry: isEnterprise ? 'Technology Services' : 'Technology',
    size: isEnterprise ? 'Enterprise' : 'Startup',
    hiringFocus: isEnterprise 
      ? 'Structured process with emphasis on DSA, core fundamentals, and system design'
      : 'Practical problem-solving, hands-on experience, and stack depth'
  }
}