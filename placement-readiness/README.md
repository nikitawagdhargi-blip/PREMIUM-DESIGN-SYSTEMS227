# KodNest Premium Build System - Placement Readiness Platform

A premium SaaS design system and placement preparation platform built with React, TypeScript, and Tailwind CSS.

## Design Philosophy

**Calm, Intentional, Coherent, Confident**
- No flashy animations or loud colors
- Consistent 4-color palette
- Generous whitespace and typography
- Professional B2C product feel

## Color System

- **Background**: #F7F6F3 (off-white)
- **Primary text**: #111111 (deep black)
- **Accent**: #8B0000 (deep red)
- **Success**: Muted green
- **Warning**: Muted amber

## Features

### 1. Landing Page (`/`)
- Job description analysis form
- Input validation with character count
- Warning for short JDs (<200 characters)
- Feature showcase grid

### 2. Dashboard (`/dashboard`)
- Overall readiness score (circular progress)
- Skill breakdown radar chart
- Continue practice section
- Weekly goals tracker
- Upcoming assessments list

### 3. Results (`/results`)
- Interactive skill self-assessment
- Live readiness score updates
- Export tools (copy/download)
- Company intelligence (heuristic)
- Round mapping engine
- 7-day preparation plan
- Round-wise checklist
- Interview questions generator

### 4. History (`/history`)
- Saved analysis entries
- Performance statistics
- Quick access to past analyses

### 5. Test Checklist (`/prp/07-test`)
- QA verification system
- Progress tracking
- Test instructions

## Technical Implementation

### Skill Extraction Engine
- Keyword-based detection across 6 categories:
  - Core CS (DSA, OOP, DBMS, OS, Networks)
  - Languages (Java, Python, JavaScript, etc.)
  - Web (React, Node.js, etc.)
  - Data (SQL, MongoDB, etc.)
  - Cloud/DevOps (AWS, Docker, etc.)
  - Testing (Selenium, Cypress, etc.)

### Readiness Scoring
- Base score: 35
- +5 per detected category (max 30)
- +10 for company provided
- +10 for role provided
- +10 for JD > 800 characters
- Live adjustments: +2 for "know", -2 for "practice"

### Data Persistence
- localStorage-based history
- Schema validation
- Automatic cleanup (50 most recent entries)
- Robust error handling

### Company Intelligence
- Heuristic size detection (Startup/Mid-size/Enterprise)
- Industry inference
- Hiring focus templates
- Round mapping based on company size + skills

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── AppShell.tsx          # Main application layout
├── pages/
│   ├── Home.tsx             # Landing page with JD form
│   ├── Dashboard.tsx        # Main dashboard
│   ├── Results.tsx          # Analysis results
│   ├── History.tsx          # Analysis history
│   ├── TestChecklist.tsx    # QA checklist
│   ├── Practice.tsx         # Placeholder
│   ├── Assessments.tsx      # Placeholder
│   ├── Resources.tsx        # Placeholder
│   └── Profile.tsx          # Placeholder
├── utils/
│   ├── analysis.ts          # Skill extraction logic
│   └── storage.ts           # localStorage utilities
├── types/
│   └── index.ts             # TypeScript interfaces
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css               # Global styles
```

## Testing Verification

Use this sample job description for comprehensive testing:

```
We're looking for a Software Engineer with experience in Java, React, and SQL. 
Must have knowledge of DSA, OOP concepts, and REST APIs. 
Experience with AWS and Docker is preferred. 
Strong problem-solving skills required.
```

### Key Test Scenarios:
1. ✅ JD required validation (empty/short/full)
2. ✅ Skill extraction accuracy
3. ✅ Readiness score calculation
4. ✅ History persistence after refresh
5. ✅ Skill confidence toggles
6. ✅ Live score updates
7. ✅ Export functionality (copy/download)
8. ✅ Company intel generation
9. ✅ Round mapping logic
10. ✅ Data model consistency

## Design System Components

### Spacing Scale
- 8px, 16px, 24px, 40px, 64px
- Consistent whitespace usage

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Max 720px text blocks

### Components
- Primary buttons: Solid deep red
- Secondary buttons: Outlined
- Cards: Subtle borders, balanced padding
- Inputs: Clean borders, clear focus states

## Deployment Ready

✅ All core functionality implemented
✅ Premium design system applied
✅ Comprehensive testing checklist
✅ Offline-first architecture
✅ No external dependencies

---
*Built with KodNest Premium Build System - Professional SaaS Design*