export const profile = {
  name: 'Ravi Nagavolu',
  role: 'Senior Frontend Developer',
  stack: 'React.js • Angular • TypeScript • JavaScript',
  tagline: '8+ years building scalable, responsive and high-performance web applications.',
  subline:
    'Specialized in React.js, Angular, TypeScript and JavaScript, with hands-on experience in Node.js, Python, FastAPI, REST APIs, GraphQL and modern frontend architecture.',
  availability: 'Available for Full-Time, Contract & Freelance Projects',
  email: 'ravireddy988@gmail.com',
  phone: '+91 90598 82868',
  linkedin: 'https://linkedin.com/in/nagavolu-ravi-13985b14b',
  github: 'https://github.com/ravireddy988',
  location: 'Hyderabad, India',
}

export const heroBadges = [
  '8+ Years Experience',
  'React + Angular',
  'Frontend Architecture',
  'API Integration',
  'Performance Optimization',
]

export const stats = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Projects Delivered', value: 6, suffix: '+' },
  { label: 'Primary Expertise', value: 0, suffix: '', display: 'React + Angular' },
  { label: 'APIs Integrated', value: 0, suffix: '', display: 'REST + GraphQL' },
]

export const about = `I'm a Senior Frontend Developer with 8+ years of experience designing and developing scalable, responsive and user-focused web applications. My core expertise includes React.js, Angular, JavaScript and TypeScript, with hands-on experience in Node.js, Python and FastAPI.

I specialize in reusable component architecture, API integration, authentication, performance optimization, accessibility and responsive UI development. I also have experience collaborating with UI/UX teams, mentoring developers and contributing to technical decisions across Agile projects.`

export const skillGroups = [
  {
    title: 'Frontend Engineering',
    skills: ['React.js', 'Angular 15+', 'TypeScript', 'JavaScript'],
  },
  {
    title: 'State Management',
    skills: ['Redux', 'RxJS', 'Context API', 'Angular Signals'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'UI & Design',
    skills: ['HTML5', 'CSS3', 'SCSS / SASS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Authentication',
    skills: ['SSO', 'OAuth', 'Google OAuth', 'Microsoft Azure AD'],
  },
  {
    title: 'Testing & Quality',
    skills: ['Jest', 'Unit Testing', 'Accessibility / WCAG', 'Cross-browser Testing'],
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS S3', 'Git', 'GitHub', 'GitLab', 'Jira', 'CI/CD'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Oracle', 'SQL'],
  },
]

export const experience = [
  {
    company: 'LakkshionsIT Pvt. Ltd.',
    role: 'Senior Frontend Developer',
    duration: 'Sep 2025 – Present',
    project: 'MediaOps',
    tech: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'REST APIs', 'Tailwind CSS'],
    bullets: [
      'Built scalable React.js interfaces for a social media publishing and content management platform.',
      'Developed complex video player and editing workflows with playback controls, subtitles and quality selection.',
      'Built reusable and accessible UI components following WCAG standards.',
      'Integrated REST APIs with backend services built using Python/FastAPI.',
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

export type ProjectCategory = 'React' | 'Angular' | 'Full Stack'

export type Project = {
  slug: string
  title: string
  tagline: string
  featured: boolean
  category: ProjectCategory
  size?: 'lg' | 'md'
  highlight?: string
  architectureFlow?: string
  tech: string[]
  features: string[]
  architecture?: string[]
  challenge?: {
    title: string
    problem: string
    solution: string
  }
  liveDemo?: string
  confidential?: boolean
}

export const projectFilters: Array<'All' | ProjectCategory> = ['All', 'React', 'Angular', 'Full Stack']

export const projects: Project[] = [
  {
    slug: 'mediaops',
    title: 'MediaOps',
    tagline: 'Social Media Publishing & Video Editing Platform',
    featured: true,
    size: 'lg',
    category: 'Full Stack',
    highlight:
      'My most complex frontend project — a browser-based social media publishing and video editing platform involving multi-track timelines, video/audio editing, effects, keyframes, proxy playback, media uploads, asynchronous rendering and publishing workflows.',
    architectureFlow: 'React → API Layer → FastAPI → Media Processing → S3 → Publishing',
    tech: ['React', 'TypeScript', 'Python', 'FastAPI', 'REST API', 'Tailwind', 'AWS S3', 'FFmpeg'],
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
      'REST API layer',
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
    category: 'React',
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
    category: 'Angular',
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
    slug: 'cero-hero',
    title: 'Cero Hero',
    tagline: 'Sustainability & carbon tracking platform',
    featured: false,
    category: 'Angular',
    size: 'lg',
    tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material', 'REST APIs'],
    features: [
      'User sustainability dashboard',
      'Carbon-impact tracking UI',
      'Sustainability challenges & rewards screens',
      'REST API integration for user activity data',
      'Responsive Angular UI',
    ],
    architecture: [
      'Angular / TypeScript UI with Angular Material',
      'RxJS for reactive data streams',
      'REST API integration with backend services',
    ],
    confidential: true,
  },
  {
    slug: 'bmr-innovations',
    title: 'BMR Innovations',
    tagline: 'Corporate consulting website',
    featured: false,
    category: 'React',
    tech: ['React.js', 'TypeScript', 'HTML5', 'CSS3', 'REST APIs'],
    features: [
      'Responsive corporate website UI',
      'Service & consulting content sections',
      'Reusable UI components',
      'Contact/inquiry workflows',
      'Cross-browser responsive design',
    ],
    confidential: true,
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)

export type CaseStudy = {
  title: string
  eyebrow: string
  description: string
  steps: string[]
  color: 'accent' | 'teal' | 'accent-2'
  stats?: { value: string; label: string }[]
  detail?: {
    challenge: string[]
    solution: string[]
    result: string[]
  }
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Building a Browser-Based Video Editor',
    eyebrow: 'Core Product',
    description:
      'A powerful in-browser video editing tool with seamless playback, editing and export capabilities.',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
    color: 'accent',
    detail: {
      challenge: [
        'Handle large video files in browser',
        'Smooth playback & buffering',
        'Timeline synchronization',
        'Long FFmpeg processing times',
        'API Gateway timeout issues',
      ],
      solution: [
        'Proxy video workflow',
        'Range-based playback',
        'Background FFmpeg rendering (async)',
        'S3-based media handling',
        'Resumable uploads & error recovery',
      ],
      result: [
        'Better playback workflow',
        'No more API timeouts',
        'Scalable media processing',
        'Supports large videos efficiently',
      ],
    },
  },
  {
    title: 'Frontend Performance Optimization',
    eyebrow: 'Performance',
    description:
      'Improved performance and user experience for smooth editing even with complex timelines and effects.',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
    color: 'teal',
    stats: [
      { value: '60%', label: 'Faster Load' },
      { value: '70%', label: 'Lower Memory' },
      { value: '3x', label: 'Smoother Playback' },
      { value: '50%', label: 'Smaller Bundle' },
    ],
    detail: {
      challenge: [
        'Slow UI with multiple tracks',
        'High memory usage',
        'Playback lag with effects',
        'Inefficient re-renders',
        'Large project loading issues',
      ],
      solution: [
        'Optimized state management',
        'Virtualized timeline rendering',
        'Memoization & lazy loading',
        'Web Workers for heavy tasks',
        'Performance profiling & bundle optimization',
      ],
      result: [
        'Faster load times',
        'Smooth 60fps playback',
        'Reduced memory usage',
        'Better user experience',
        'Handles complex projects efficiently',
      ],
    },
  },
  {
    title: 'Reusable Component & UI Architecture',
    eyebrow: 'Architecture',
    description:
      'Built a scalable, maintainable and reusable component system for a complex video editing application.',
    steps: ['Problem', 'Requirements', 'Architecture', 'Implementation', 'Challenges', 'Solution', 'Result'],
    color: 'accent-2',
    detail: {
      challenge: [
        'Hard to maintain UI components',
        'Inconsistent design patterns',
        'Scaling features became difficult',
        'Code duplication',
      ],
      solution: [
        'Built reusable, modular components',
        'Created a design system (UI library)',
        'Implemented scalable state architecture',
        'Followed clean folder structure & best practices',
        'Used TypeScript for type safety',
      ],
      result: [
        'Faster feature development',
        'Consistent and maintainable codebase',
        'Easier collaboration',
        'Scalable for future features',
        'Reduced development time',
      ],
    },
  },
]

export const freelanceServices = [
  'React.js / Angular development',
  'Frontend UI development',
  'Figma → Pixel-perfect implementation',
  'Existing application improvements',
  'API integration',
  'Dashboard development',
  'Performance optimization',
  'Bug fixing & production support',
  'Responsive/mobile UI development',
  'Video/media application UI',
  'Frontend architecture & technical consulting',
]

export const helpWith = [
  { title: 'Build', description: 'New React / Angular applications from scratch' },
  { title: 'Improve', description: 'Existing frontend performance, UI and architecture' },
  { title: 'Fix', description: 'Production bugs, API issues and frontend problems' },
  { title: 'Modernize', description: 'Legacy frontend migration and component refactoring' },
  { title: 'Integrate', description: 'REST APIs, GraphQL, authentication and third-party services' },
  { title: 'Consult', description: 'Frontend architecture and technical implementation' },
]

export const process = [
  { step: '01', title: 'Understand', description: 'Requirements, existing application and goals.' },
  { step: '02', title: 'Plan', description: 'Technical approach, scope and timeline.' },
  { step: '03', title: 'Build', description: 'Develop responsive and maintainable frontend.' },
  { step: '04', title: 'Test', description: 'Cross-browser testing, debugging and quality checks.' },
  { step: '05', title: 'Deliver', description: 'Deployment support, documentation and handover.' },
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
