export const profile = {
  name: 'Ravi Nagavolu',
  role: 'Senior Frontend Developer',
  tagline:
    '8+ years of experience building scalable, responsive and high-performance web applications.',
  subline:
    'Specialized in React.js, Angular, TypeScript and JavaScript, with hands-on experience in Node.js, Python, FastAPI, REST APIs, GraphQL and modern frontend architecture.',
  email: 'ravireddy988@gmail.com',
  phone: '+91 90598 82868',
  linkedin: 'https://linkedin.com/in/nagavolu-ravi-13985b14b',
  github: 'https://github.com/',
  location: 'Hyderabad, India',
}

export const about = `I'm a Senior Frontend Developer with 8+ years of experience designing and developing scalable, responsive and user-focused web applications. My core expertise includes React.js, Angular, JavaScript and TypeScript, with hands-on experience in Node.js, Python and FastAPI.

I specialize in reusable component architecture, API integration, authentication, performance optimization, accessibility and responsive UI development. I also have experience collaborating with UI/UX teams, mentoring developers and contributing to technical decisions across Agile projects.`

export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Angular 15+',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'SCSS / SASS',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'React Ecosystem',
    skills: [
      'React Hooks',
      'React Router',
      'Redux',
      'Context API',
      'Lazy Loading',
      'Code Splitting',
      'Reusable Components',
    ],
  },
  {
    title: 'Angular',
    skills: [
      'Angular Material',
      'RxJS',
      'Angular Router',
      'Angular Animations',
      'Reactive Forms',
    ],
  },
  {
    title: 'Backend',
    skills: ['Node.js — 1.6 yrs', 'Python — 1 yr', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Authentication',
    skills: ['SSO', 'OAuth', 'Google OAuth', 'Microsoft Azure AD'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'Unit Testing', 'Accessibility / WCAG', 'Cross-browser Testing'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'VS Code', 'CI/CD'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Oracle', 'SQL'],
  },
]

export const experience = [
  {
    company: 'Lakkshion SIT Pvt. Ltd.',
    role: 'Senior Frontend Developer',
    duration: 'Sep 2025 – Present',
    project: 'MediaOps',
    tech: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'GraphQL', 'REST APIs', 'Tailwind CSS'],
    bullets: [
      'Built scalable React.js interfaces for a social media publishing and content management platform.',
      'Developed complex video player and editing workflows with playback controls, subtitles and quality selection.',
      'Built reusable and accessible UI components following WCAG standards.',
      'Integrated REST and GraphQL APIs with backend services built using Python/FastAPI.',
      'Improved frontend performance using lazy loading, code splitting and component memoization.',
      'Implemented authentication using Google OAuth and Microsoft Azure AD.',
    ],
  },
  {
    company: 'Chakravuyha Software Technologies Pvt. Ltd.',
    role: 'Front-End Developer',
    duration: 'Dec 2019 – Aug 2025',
    project: 'Accure One',
    tech: ['Angular 15', 'TypeScript', 'RxJS', 'Angular Material', 'Bootstrap'],
    bullets: [
      'Designed and implemented reusable UI components, boosting development efficiency across teams.',
      'Integrated REST APIs for live data fetching and implemented robust role-based authentication.',
      'Conducted thorough unit testing, debugging and code reviews to ensure high-quality deliverables.',
      'Contributed to Angular-based dashboard components within a hybrid architecture.',
      'Enhanced UI with Angular animations and implemented efficient client-side routing using Angular Router.',
      'Actively participated in client meetings to align Angular development approach with evolving business needs.',
    ],
  },
  {
    company: 'Chakravuyha Software Technologies Pvt. Ltd.',
    role: 'UI Developer',
    duration: 'Oct 2017 – Nov 2019',
    project: 'Aanvikshiki Art',
    tech: ['React.js', 'Redux', 'React Router', 'TypeScript', 'Bootstrap'],
    bullets: [
      'Developed scalable React.js applications using Redux for state management and reusable component-based architecture.',
      'Implemented React Router for efficient client-side navigation and dynamic page rendering.',
      'Migrated legacy systems to modern frameworks, ensuring cross-browser compatibility and mobile responsiveness.',
      'Collaborated with backend developers to integrate RESTful APIs and automate testing workflows.',
      'Optimized components and applied lazy loading techniques for measurable performance improvements.',
    ],
  },
]

export type Project = {
  slug: string
  title: string
  tagline: string
  featured: boolean
  tech: string[]
  features: string[]
  architecture?: string[]
  challenge?: {
    title: string
    problem: string
    solution: string
  }
  liveDemo?: string
  github?: string
  confidential?: boolean
}

export const projects: Project[] = [
  {
    slug: 'mediaops',
    title: 'MediaOps',
    tagline: 'Social Media Publishing & Video Editing Platform',
    featured: true,
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'GraphQL', 'REST API', 'Tailwind', 'AWS S3', 'FFmpeg'],
    features: [
      'Multi-track timeline',
      'Video/audio editing (trim, split, crop)',
      'Effects, keyframes, chroma & alpha key',
      'Video player with proxy playback',
      'Upload/resume handling',
      'Export & background rendering',
      'Social media publishing',
      'Responsive UI',
    ],
    architecture: [
      'React / TypeScript UI — Timeline, Player, Effects panels',
      'REST + GraphQL API layer',
      'Python / FastAPI backend services',
      'AWS S3 for media & proxy storage',
      'FFmpeg for background rendering',
    ],
    challenge: {
      title: 'Long-running video exports',
      problem:
        'Synchronous FFmpeg rendering could exceed API request timeout limits during long exports.',
      solution:
        'Implemented asynchronous background rendering and job-based processing so long-running exports could continue independently of the API request.',
    },
    confidential: true,
  },
  {
    slug: 'aanvikshiki-art',
    title: 'Aanvikshiki Art',
    tagline: 'E-commerce style product browsing platform',
    featured: false,
    tech: ['React.js', 'Redux', 'React Router', 'TypeScript', 'Bootstrap'],
    features: [
      'Product listing & browsing',
      'Responsive pages across devices',
      'Centralized state management with Redux',
      'Client-side routing with React Router',
      'Reusable component architecture',
    ],
    architecture: [
      'React.js UI with reusable component layer',
      'Redux store for shared application state',
      'REST API integration for product/catalog data',
    ],
    confidential: true,
  },
  {
    slug: 'accure-one',
    title: 'Accure One',
    tagline: 'Enterprise dashboard with role-based access',
    featured: false,
    tech: ['Angular 15', 'TypeScript', 'RxJS', 'Angular Material'],
    features: [
      'Role-based authentication',
      'Live data dashboards',
      'Reusable Angular components',
      'Angular animations & routing',
      'Unit-tested modules',
    ],
    architecture: [
      'Angular 15 hybrid architecture',
      'RxJS for reactive data streams',
      'REST API integration for live data',
    ],
    confidential: true,
  },
  {
    slug: 'location-management',
    title: 'Location Management',
    tagline: 'Google Maps based location workflows',
    featured: false,
    tech: ['React', 'TypeScript', 'REST APIs', 'Google Maps'],
    features: [
      'Create / Edit / View location flows',
      'Google Maps integration',
      'Form validation',
      'API-driven data sync',
    ],
    confidential: true,
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)

export const caseStudies = [
  {
    title: 'Building a Browser-Based Video Editor',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
  },
  {
    title: 'Frontend Performance Optimization',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
  },
  {
    title: 'Reusable Component & UI Architecture',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
  },
]

export const leadership = [
  'Mentoring junior developers',
  'Code reviews',
  'Architecture discussions',
  'UI standards',
  'Requirement analysis',
  'Technical estimation',
  'Production debugging',
  'Cross-functional collaboration',
  'Client communication',
  'Agile/Scrum participation',
]
