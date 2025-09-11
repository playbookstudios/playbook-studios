// Career Paths, Majors, and Colleges Data

export interface CareerPath {
  id: string;
  name: string;
  jobDescription: string;
  workExample: string;
  commonIndustries: string[];
  stabilityRating: string;
  disruptionLikelihood: string;
  entryLevelSalary: {
    median: number;
    percentile: string;
  };
  experiencedSalary: {
    median: number;
    percentile: string;
  };
  competitionLevel: string;
  difficulty: string;
  topMajors: string[];
  icon: string;
  gradient: string;
  accentColor: string;
  image?: string;
}

export interface Major {
  id: string;
  name: string;
  description: string;
  requiredClasses: string[];
  classExamples: string;
  highSchoolComparison: string;
  topUniversities: string[];
  topCareerPaths: string[];
  icon: string;
  gradient: string;
  accentColor: string;
  image?: string;
}

export interface College {
  id: string;
  name: string;
  annualCost: number;
  city: string;
  state: string;
  lifestyleDescription: string;
  topMajors: string[];
  icon: string;
  gradient: string;
  accentColor: string;
  image?: string;
}

export const careerPaths: CareerPath[] = [
  {
    id: 'software-engineer',
    name: 'Software Engineer',
    jobDescription: 'Design, develop, and maintain software applications and systems using programming languages and frameworks.',
    workExample: 'A typical day might involve writing code for a mobile app feature, debugging existing software, participating in code reviews, and collaborating with product managers to understand user requirements.',
    commonIndustries: ['Technology', 'Finance', 'Healthcare', 'E-commerce', 'Gaming', 'Startups'],
    stabilityRating: 'Very High',
    disruptionLikelihood: 'Low - While AI will change how software is written, human oversight and complex problem-solving will remain essential',
    entryLevelSalary: { median: 85000, percentile: '75th percentile' },
    experiencedSalary: { median: 140000, percentile: '85th percentile' },
    competitionLevel: 'High',
    difficulty: 'High',
    topMajors: ['computer-science', 'software-engineering', 'computer-engineering', 'mathematics'],
    icon: 'Code',
    gradient: 'from-blue-500 to-cyan-400',
    accentColor: 'bg-blue-500'
  },
  {
    id: 'data-scientist',
    name: 'Data Scientist',
    jobDescription: 'Analyze complex data sets to extract insights, build predictive models, and drive business decisions using statistical methods and machine learning.',
    workExample: 'You might spend your day cleaning customer data, building a machine learning model to predict user behavior, creating visualizations for stakeholders, and presenting findings to executive teams.',
    commonIndustries: ['Technology', 'Finance', 'Healthcare', 'Consulting', 'Retail', 'Government'],
    stabilityRating: 'Very High',
    disruptionLikelihood: 'Medium - AI will automate some tasks but human interpretation and strategic thinking remain crucial',
    entryLevelSalary: { median: 95000, percentile: '78th percentile' },
    experiencedSalary: { median: 165000, percentile: '88th percentile' },
    competitionLevel: 'Very High',
    difficulty: 'Very High',
    topMajors: ['data-science', 'statistics', 'computer-science', 'mathematics'],
    icon: 'BarChart3',
    gradient: 'from-purple-500 to-pink-400',
    accentColor: 'bg-purple-500'
  },
  {
    id: 'registered-nurse',
    name: 'Registered Nurse',
    jobDescription: 'Provide direct patient care, administer medications, coordinate with healthcare teams, and educate patients and families about health conditions.',
    workExample: 'Your shift might include assessing patient vital signs, administering medications, updating electronic health records, coordinating with doctors on treatment plans, and providing emotional support to patients and families.',
    commonIndustries: ['Hospitals', 'Clinics', 'Long-term Care', 'Home Healthcare', 'Schools', 'Government'],
    stabilityRating: 'Very High',
    disruptionLikelihood: 'Very Low - Human care and empathy cannot be replaced by technology',
    entryLevelSalary: { median: 65000, percentile: '65th percentile' },
    experiencedSalary: { median: 85000, percentile: '70th percentile' },
    competitionLevel: 'Medium',
    difficulty: 'High',
    topMajors: ['nursing', 'biology', 'health-sciences', 'psychology'],
    icon: 'Heart',
    gradient: 'from-red-400 to-pink-400',
    accentColor: 'bg-red-400'
  },
  {
    id: 'financial-analyst',
    name: 'Financial Analyst',
    jobDescription: 'Evaluate investment opportunities, analyze financial data, create financial models, and provide recommendations for business decisions.',
    workExample: 'You might build Excel models to evaluate a potential acquisition, analyze quarterly earnings reports, create presentations for senior management, and research market trends to inform investment strategies.',
    commonIndustries: ['Investment Banking', 'Corporate Finance', 'Insurance', 'Real Estate', 'Government', 'Consulting'],
    stabilityRating: 'High',
    disruptionLikelihood: 'Medium - Some analysis will be automated but strategic thinking and client relationships remain important',
    entryLevelSalary: { median: 70000, percentile: '68th percentile' },
    experiencedSalary: { median: 120000, percentile: '82nd percentile' },
    competitionLevel: 'High',
    difficulty: 'High',
    topMajors: ['finance', 'economics', 'accounting', 'business-administration'],
    icon: 'TrendingUp',
    gradient: 'from-green-500 to-emerald-400',
    accentColor: 'bg-green-500'
  },
  {
    id: 'marketing-manager',
    name: 'Marketing Manager',
    jobDescription: 'Develop and execute marketing strategies, manage campaigns, analyze market trends, and coordinate with creative teams to promote products or services.',
    workExample: 'Your day might involve planning a product launch campaign, analyzing social media metrics, coordinating with designers on ad creative, meeting with sales teams, and presenting campaign results to stakeholders.',
    commonIndustries: ['Technology', 'Consumer Goods', 'Healthcare', 'Financial Services', 'Entertainment', 'E-commerce'],
    stabilityRating: 'High',
    disruptionLikelihood: 'Medium - Digital tools will change tactics but human creativity and strategy remain essential',
    entryLevelSalary: { median: 60000, percentile: '62nd percentile' },
    experiencedSalary: { median: 95000, percentile: '75th percentile' },
    competitionLevel: 'High',
    difficulty: 'Medium',
    topMajors: ['marketing', 'business-administration', 'communications', 'psychology'],
    icon: 'Megaphone',
    gradient: 'from-orange-500 to-yellow-400',
    accentColor: 'bg-orange-500'
  },
  {
    id: 'teacher',
    name: 'Teacher (K-12)',
    jobDescription: 'Educate students, develop lesson plans, assess student progress, and create supportive learning environments in elementary, middle, or high school settings.',
    workExample: 'You might prepare interactive lesson plans, teach multiple classes throughout the day, grade assignments, meet with parents about student progress, and participate in professional development workshops.',
    commonIndustries: ['Public Schools', 'Private Schools', 'Charter Schools', 'Online Education', 'Tutoring Centers'],
    stabilityRating: 'Very High',
    disruptionLikelihood: 'Low - Human connection and mentorship in education cannot be fully automated',
    entryLevelSalary: { median: 45000, percentile: '45th percentile' },
    experiencedSalary: { median: 62000, percentile: '55th percentile' },
    competitionLevel: 'Medium',
    difficulty: 'Medium',
    topMajors: ['education', 'subject-specific-majors', 'psychology', 'liberal-arts'],
    icon: 'BookOpen',
    gradient: 'from-indigo-500 to-blue-400',
    accentColor: 'bg-indigo-500'
  },
  {
    id: 'physician',
    name: 'Physician',
    jobDescription: 'Diagnose and treat illnesses, perform medical procedures, prescribe medications, and provide comprehensive healthcare to patients.',
    workExample: 'Your day involves seeing patients for consultations, reviewing test results, making diagnoses, prescribing treatments, performing procedures, and collaborating with other medical professionals on complex cases.',
    commonIndustries: ['Hospitals', 'Private Practice', 'Clinics', 'Emergency Medicine', 'Specialized Care', 'Telemedicine'],
    stabilityRating: 'Very High',
    disruptionLikelihood: 'Low - Technology will assist but human judgment and patient care remain irreplaceable',
    entryLevelSalary: { median: 200000, percentile: '95th percentile' },
    experiencedSalary: { median: 350000, percentile: '98th percentile' },
    competitionLevel: 'Very High',
    difficulty: 'Very High',
    topMajors: ['pre-med', 'biology', 'chemistry', 'biochemistry'],
    icon: 'Stethoscope',
    gradient: 'from-teal-500 to-cyan-400',
    accentColor: 'bg-teal-500'
  },
  {
    id: 'mechanical-engineer',
    name: 'Mechanical Engineer',
    jobDescription: 'Design, develop, and test mechanical systems, machines, and devices across various industries from automotive to aerospace.',
    workExample: 'You might use CAD software to design a new engine component, run simulations to test performance, collaborate with manufacturing teams, and oversee prototype testing and validation.',
    commonIndustries: ['Automotive', 'Aerospace', 'Manufacturing', 'Energy', 'Robotics', 'HVAC'],
    stabilityRating: 'High',
    disruptionLikelihood: 'Medium - Design tools will evolve but engineering judgment and innovation remain crucial',
    entryLevelSalary: { median: 72000, percentile: '70th percentile' },
    experiencedSalary: { median: 105000, percentile: '78th percentile' },
    competitionLevel: 'Medium',
    difficulty: 'High',
    topMajors: ['mechanical-engineering', 'aerospace-engineering', 'materials-science', 'physics'],
    icon: 'Cog',
    gradient: 'from-slate-500 to-gray-400',
    accentColor: 'bg-slate-500'
  },
  {
    id: 'project-manager',
    name: 'Project Manager',
    jobDescription: 'Plan, execute, and oversee projects from initiation to completion, coordinating teams, managing timelines, and ensuring deliverables meet requirements.',
    workExample: 'You might create project timelines, facilitate team meetings, track progress against milestones, manage budgets, communicate with stakeholders, and resolve issues that arise during project execution.',
    commonIndustries: ['Technology', 'Construction', 'Healthcare', 'Finance', 'Consulting', 'Government'],
    stabilityRating: 'High',
    disruptionLikelihood: 'Low - Human leadership, communication, and problem-solving skills remain essential',
    entryLevelSalary: { median: 68000, percentile: '66th percentile' },
    experiencedSalary: { median: 115000, percentile: '80th percentile' },
    competitionLevel: 'Medium',
    difficulty: 'Medium',
    topMajors: ['business-administration', 'project-management', 'engineering', 'communications'],
    icon: 'CheckSquare',
    gradient: 'from-amber-500 to-orange-400',
    accentColor: 'bg-amber-500'
  },
  {
    id: 'accountant',
    name: 'Accountant',
    jobDescription: 'Prepare and examine financial records, ensure accuracy of financial statements, calculate taxes, and provide financial guidance to individuals or organizations.',
    workExample: 'You might prepare monthly financial statements, reconcile bank accounts, process payroll, prepare tax returns, conduct internal audits, and provide financial analysis to help guide business decisions.',
    commonIndustries: ['Public Accounting', 'Corporate Finance', 'Government', 'Non-profit', 'Small Business', 'Tax Services'],
    stabilityRating: 'High',
    disruptionLikelihood: 'Medium - Some tasks will be automated but complex analysis and client relationships remain important',
    entryLevelSalary: { median: 55000, percentile: '58th percentile' },
    experiencedSalary: { median: 78000, percentile: '68th percentile' },
    competitionLevel: 'Medium',
    difficulty: 'Medium',
    topMajors: ['accounting', 'finance', 'business-administration', 'economics'],
    icon: 'Calculator',
    gradient: 'from-emerald-500 to-green-400',
    accentColor: 'bg-emerald-500'
  }
];

export const majors: Major[] = [
  {
    id: 'computer-science',
    name: 'Computer Science',
    description: 'Study of computational systems, algorithms, and the design of computer systems and their applications. Combines mathematical rigor with creative problem-solving.',
    requiredClasses: [
      'Data Structures and Algorithms',
      'Computer Systems and Architecture',
      'Database Systems',
      'Software Engineering',
      'Operating Systems',
      'Computer Networks',
      'Programming Languages',
      'Discrete Mathematics',
      'Calculus I & II',
      'Statistics and Probability'
    ],
    classExamples: 'In Data Structures, you\'ll learn to implement efficient ways to store and access data like trees and hash tables. Software Engineering teaches you how to work in teams to build large applications using version control and testing frameworks.',
    highSchoolComparison: 'Similar to AP Computer Science A, but much more comprehensive. Like advanced math classes in terms of logical thinking and problem-solving rigor.',
    topUniversities: ['mit', 'stanford', 'carnegie-mellon', 'berkeley', 'harvard', 'princeton', 'caltech', 'georgia-tech', 'illinois', 'washington'],
    topCareerPaths: ['software-engineer', 'data-scientist', 'project-manager'],
    icon: 'Monitor',
    gradient: 'from-blue-600 to-indigo-500',
    accentColor: 'bg-blue-600'
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Interdisciplinary field combining statistics, computer science, and domain expertise to extract insights from data and build predictive models.',
    requiredClasses: [
      'Statistical Methods',
      'Machine Learning',
      'Data Mining',
      'Database Systems',
      'Programming (Python/R)',
      'Data Visualization',
      'Linear Algebra',
      'Calculus I & II',
      'Probability Theory',
      'Research Methods'
    ],
    classExamples: 'In Machine Learning, you\'ll build algorithms that can predict customer behavior or classify images. Data Visualization teaches you to create compelling charts and dashboards that tell stories with data.',
    highSchoolComparison: 'Combines the analytical thinking of AP Statistics with the programming aspects of AP Computer Science, plus the research methodology of AP Research.',
    topUniversities: ['stanford', 'mit', 'harvard', 'berkeley', 'carnegie-mellon', 'washington', 'georgia-tech', 'nyu', 'columbia', 'wisconsin'],
    topCareerPaths: ['data-scientist', 'financial-analyst', 'marketing-manager'],
    icon: 'Database',
    gradient: 'from-purple-600 to-violet-500',
    accentColor: 'bg-purple-600'
  },
  {
    id: 'nursing',
    name: 'Nursing',
    description: 'Comprehensive healthcare education focusing on patient care, medical knowledge, and healthcare systems. Combines scientific knowledge with compassionate care.',
    requiredClasses: [
      'Anatomy and Physiology',
      'Pharmacology',
      'Pathophysiology',
      'Nursing Fundamentals',
      'Medical-Surgical Nursing',
      'Psychiatric Nursing',
      'Pediatric Nursing',
      'Obstetric Nursing',
      'Community Health Nursing',
      'Clinical Rotations'
    ],
    classExamples: 'In Clinical Rotations, you\'ll work directly with patients in hospitals under supervision. Pharmacology teaches you how different medications work in the body and their potential side effects.',
    highSchoolComparison: 'Similar to AP Biology for the science foundation, but with much more hands-on patient care experience. Like health classes but at a professional medical level.',
    topUniversities: ['johns-hopkins', 'pennsylvania', 'washington', 'ucsf', 'michigan', 'yale', 'duke', 'emory', 'vanderbilt', 'case-western'],
    topCareerPaths: ['registered-nurse'],
    icon: 'HeartHandshake',
    gradient: 'from-pink-500 to-rose-400',
    accentColor: 'bg-pink-500'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Study of money management, investments, and financial systems. Learn to analyze markets, evaluate investments, and make strategic financial decisions.',
    requiredClasses: [
      'Corporate Finance',
      'Investment Analysis',
      'Financial Markets',
      'Portfolio Management',
      'Financial Modeling',
      'Risk Management',
      'International Finance',
      'Economics (Micro/Macro)',
      'Accounting Principles',
      'Statistics'
    ],
    classExamples: 'In Investment Analysis, you\'ll learn to evaluate stocks and bonds using financial ratios and valuation models. Financial Modeling teaches you to build Excel spreadsheets that forecast company performance.',
    highSchoolComparison: 'Similar to AP Economics but with much more focus on mathematical analysis and real-world application. Like advanced math in terms of quantitative problem-solving.',
    topUniversities: ['wharton', 'chicago', 'nyu', 'mit', 'stanford', 'harvard', 'columbia', 'northwestern', 'berkeley', 'michigan'],
    topCareerPaths: ['financial-analyst', 'project-manager', 'accountant'],
    icon: 'DollarSign',
    gradient: 'from-green-600 to-emerald-500',
    accentColor: 'bg-green-600'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Study of consumer behavior, brand management, and promotional strategies. Learn to create campaigns that connect products with target audiences.',
    requiredClasses: [
      'Consumer Behavior',
      'Marketing Research',
      'Digital Marketing',
      'Brand Management',
      'Advertising',
      'Social Media Marketing',
      'Sales Management',
      'Marketing Analytics',
      'International Marketing',
      'Strategic Marketing'
    ],
    classExamples: 'In Consumer Behavior, you\'ll study psychological factors that influence purchasing decisions. Digital Marketing teaches you to create and optimize online campaigns using tools like Google Ads and social media platforms.',
    highSchoolComparison: 'Similar to AP Psychology for understanding human behavior, combined with business classes and creative projects like those in art or media studies.',
    topUniversities: ['northwestern', 'wharton', 'michigan', 'nyu', 'texas', 'indiana', 'wisconsin', 'arizona-state', 'georgia', 'ohio-state'],
    topCareerPaths: ['marketing-manager', 'project-manager'],
    icon: 'Target',
    gradient: 'from-orange-600 to-amber-500',
    accentColor: 'bg-orange-600'
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Preparation for teaching careers through study of learning theories, curriculum development, and classroom management. Includes extensive student teaching experience.',
    requiredClasses: [
      'Educational Psychology',
      'Curriculum and Instruction',
      'Classroom Management',
      'Assessment and Evaluation',
      'Special Education',
      'Educational Technology',
      'Student Teaching',
      'Child Development',
      'Multicultural Education',
      'Reading Instruction'
    ],
    classExamples: 'In Student Teaching, you\'ll spend a full semester in a real classroom with a mentor teacher. Educational Psychology teaches you how students learn and develop at different ages.',
    highSchoolComparison: 'Similar to AP Psychology for understanding human development, combined with the presentation and leadership skills developed in student government or debate.',
    topUniversities: ['teachers-college', 'vanderbilt', 'harvard', 'stanford', 'wisconsin', 'michigan', 'texas', 'penn-state', 'ohio-state', 'minnesota'],
    topCareerPaths: ['teacher'],
    icon: 'GraduationCap',
    gradient: 'from-indigo-600 to-blue-500',
    accentColor: 'bg-indigo-600'
  },
  {
    id: 'pre-med',
    name: 'Pre-Medicine',
    description: 'Rigorous science preparation for medical school including biology, chemistry, physics, and math, plus MCAT preparation and clinical experience.',
    requiredClasses: [
      'General Biology',
      'Organic Chemistry',
      'General Chemistry',
      'Physics',
      'Biochemistry',
      'Anatomy and Physiology',
      'Calculus',
      'Statistics',
      'Psychology',
      'English/Writing'
    ],
    classExamples: 'In Organic Chemistry, you\'ll learn how molecules interact in biological systems. Clinical shadowing gives you direct exposure to medical practice and patient care.',
    highSchoolComparison: 'Like taking AP Biology, AP Chemistry, and AP Physics simultaneously - extremely rigorous science curriculum similar to the most challenging high school STEM programs.',
    topUniversities: ['harvard', 'johns-hopkins', 'stanford', 'pennsylvania', 'washington', 'yale', 'ucsf', 'michigan', 'duke', 'vanderbilt'],
    topCareerPaths: ['physician'],
    icon: 'Microscope',
    gradient: 'from-teal-600 to-cyan-500',
    accentColor: 'bg-teal-600'
  },
  {
    id: 'mechanical-engineering',
    name: 'Mechanical Engineering',
    description: 'Design, development, and manufacturing of mechanical systems. Combines physics, materials science, and mathematics to solve real-world problems.',
    requiredClasses: [
      'Statics and Dynamics',
      'Thermodynamics',
      'Fluid Mechanics',
      'Materials Science',
      'Machine Design',
      'Heat Transfer',
      'Control Systems',
      'Manufacturing Processes',
      'Calculus I, II, III',
      'Differential Equations'
    ],
    classExamples: 'In Machine Design, you\'ll use CAD software to design mechanical components and analyze their stress and performance. Thermodynamics teaches you how engines and power systems work.',
    highSchoolComparison: 'Similar to AP Physics and AP Calculus combined, with heavy emphasis on practical problem-solving like in engineering or robotics clubs.',
    topUniversities: ['mit', 'stanford', 'berkeley', 'georgia-tech', 'michigan', 'caltech', 'carnegie-mellon', 'illinois', 'purdue', 'texas'],
    topCareerPaths: ['mechanical-engineer', 'project-manager'],
    icon: 'Wrench',
    gradient: 'from-slate-600 to-gray-500',
    accentColor: 'bg-slate-600'
  },
  {
    id: 'business-administration',
    name: 'Business Administration',
    description: 'Broad business education covering management, finance, marketing, and operations. Develops leadership and strategic thinking skills.',
    requiredClasses: [
      'Principles of Management',
      'Organizational Behavior',
      'Operations Management',
      'Business Ethics',
      'Strategic Management',
      'Business Law',
      'International Business',
      'Entrepreneurship',
      'Business Communication',
      'Leadership'
    ],
    classExamples: 'In Strategic Management, you\'ll analyze real companies and develop business strategies. Organizational Behavior teaches you how to motivate teams and manage workplace dynamics.',
    highSchoolComparison: 'Similar to student government and business classes, but with more analytical depth. Like debate class for developing persuasion and presentation skills.',
    topUniversities: ['wharton', 'harvard', 'stanford', 'mit', 'northwestern', 'chicago', 'berkeley', 'michigan', 'virginia', 'nyu'],
    topCareerPaths: ['project-manager', 'marketing-manager', 'financial-analyst'],
    icon: 'Briefcase',
    gradient: 'from-amber-600 to-yellow-500',
    accentColor: 'bg-amber-600'
  },
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Study of financial record-keeping, analysis, and reporting. Learn to prepare financial statements and provide insights for business decisions.',
    requiredClasses: [
      'Financial Accounting',
      'Managerial Accounting',
      'Cost Accounting',
      'Auditing',
      'Tax Accounting',
      'Accounting Information Systems',
      'Business Law',
      'Corporate Finance',
      'Economics',
      'Statistics'
    ],
    classExamples: 'In Auditing, you\'ll learn to examine financial records for accuracy and compliance. Tax Accounting teaches you to prepare complex tax returns and understand tax law.',
    highSchoolComparison: 'Similar to AP Economics and business math, but with much more detail and precision. Like advanced math classes in terms of attention to detail and systematic thinking.',
    topUniversities: ['texas', 'illinois', 'pennsylvania', 'michigan', 'ohio-state', 'southern-california', 'indiana', 'georgia', 'notre-dame', 'virginia'],
    topCareerPaths: ['accountant', 'financial-analyst'],
    icon: 'FileText',
    gradient: 'from-emerald-600 to-teal-500',
    accentColor: 'bg-emerald-600'
  }
];

export const colleges: College[] = [
  {
    id: 'mit',
    name: 'Massachusetts Institute of Technology',
    annualCost: 79850,
    city: 'Cambridge',
    state: 'Massachusetts',
    lifestyleDescription: 'Intense academic environment in the heart of Boston\'s innovation corridor. Students are incredibly driven and collaborative, often working on cutting-edge research projects. The campus culture embraces "mens et manus" (mind and hand) with heavy emphasis on practical application. Dorms are unique and close-knit communities. Weather is cold but the proximity to Boston provides endless internship and networking opportunities.',
    topMajors: ['computer-science', 'mechanical-engineering', 'data-science', 'finance'],
    icon: 'Atom',
    gradient: 'from-red-600 to-orange-500',
    accentColor: 'bg-red-600'
  },
  {
    id: 'stanford',
    name: 'Stanford University',
    annualCost: 82162,
    city: 'Stanford',
    state: 'California',
    lifestyleDescription: 'Beautiful campus in Silicon Valley with year-round perfect weather and palm trees. Entrepreneurial culture where students regularly start companies. Very collaborative and less cutthroat than stereotypical elite schools. Strong work-life balance with excellent recreation facilities. The "Stanford Duck Syndrome" means students appear calm on surface while working hard underneath. Easy access to tech internships and venture capital.',
    topMajors: ['computer-science', 'data-science', 'business-administration', 'pre-med'],
    icon: 'TreePine',
    gradient: 'from-red-500 to-pink-400',
    accentColor: 'bg-red-500'
  },
  {
    id: 'harvard',
    name: 'Harvard University',
    annualCost: 79450,
    city: 'Cambridge',
    state: 'Massachusetts',
    lifestyleDescription: 'Historic campus with traditional brick buildings and ivy-covered walls. Intense academic culture with high achievers from around the world. House system creates tight-knit communities within the larger university. Strong alumni network opens doors globally. Students are incredibly accomplished but can be competitive. Rich traditions and formal atmosphere, with Boston nearby for internships and cultural experiences.',
    topMajors: ['pre-med', 'business-administration', 'education', 'data-science'],
    icon: 'Crown',
    gradient: 'from-red-700 to-red-500',
    accentColor: 'bg-red-700'
  },
  {
    id: 'berkeley',
    name: 'University of California, Berkeley',
    annualCost: 46326,
    city: 'Berkeley',
    state: 'California',
    lifestyleDescription: 'Vibrant, diverse campus with strong activist culture and social consciousness. Large public university feel with amazing academic rigor. Students are passionate about causes and social justice. The town of Berkeley is eclectic with great food and music scene. Competitive but collaborative environment. Close to San Francisco for internships and culture. Famous for free speech movement and progressive politics.',
    topMajors: ['computer-science', 'mechanical-engineering', 'data-science', 'business-administration'],
    icon: 'Sun',
    gradient: 'from-blue-600 to-yellow-400',
    accentColor: 'bg-blue-600'
  },
  {
    id: 'carnegie-mellon',
    name: 'Carnegie Mellon University',
    annualCost: 79000,
    city: 'Pittsburgh',
    state: 'Pennsylvania',
    lifestyleDescription: 'Tech-focused campus known for computer science and engineering excellence. Students are incredibly dedicated and often work on innovative projects. The campus has a collaborative maker culture with lots of hackathons and tech competitions. Pittsburgh is an affordable city with growing tech scene. Students tend to be introverted but passionate about their fields. Strong connections to Silicon Valley despite East Coast location.',
    topMajors: ['computer-science', 'data-science', 'mechanical-engineering'],
    icon: 'Cpu',
    gradient: 'from-slate-700 to-red-600',
    accentColor: 'bg-slate-700'
  },
  {
    id: 'johns-hopkins',
    name: 'Johns Hopkins University',
    annualCost: 78500,
    city: 'Baltimore',
    state: 'Maryland',
    lifestyleDescription: 'Research-intensive environment with world-renowned medical and engineering programs. Students are extremely focused on academics and research opportunities. Campus has a serious, professional atmosphere. Strong pre-med culture with exceptional research opportunities. Baltimore provides urban experience with access to top hospitals and research institutions. Students are competitive but supportive in study groups.',
    topMajors: ['pre-med', 'nursing', 'data-science'],
    icon: 'Cross',
    gradient: 'from-blue-700 to-teal-600',
    accentColor: 'bg-blue-700'
  },
  {
    id: 'georgia-tech',
    name: 'Georgia Institute of Technology',
    annualCost: 33794,
    city: 'Atlanta',
    state: 'Georgia',
    lifestyleDescription: 'Engineering powerhouse in the heart of Atlanta with strong industry connections. Male-heavy student body but increasingly diverse. Campus culture is work-hard, play-hard with great school spirit, especially around football. Co-op program provides excellent work experience. Students are practical and career-focused. Atlanta offers great internship opportunities and vibrant social scene.',
    topMajors: ['mechanical-engineering', 'computer-science', 'data-science'],
    icon: 'Zap',
    gradient: 'from-yellow-600 to-amber-500',
    accentColor: 'bg-yellow-600'
  },
  {
    id: 'northwestern',
    name: 'Northwestern University',
    annualCost: 81331,
    city: 'Evanston',
    state: 'Illinois',
    lifestyleDescription: 'Beautiful lakefront campus near Chicago with strong school spirit and vibrant social scene. Students are high-achieving but also well-rounded with strong athletics and arts programs. Greek life is prominent but not overwhelming. The quarter system moves fast but allows for diverse course selection. Easy access to Chicago for internships, especially in business and marketing. Work-hard, play-hard culture.',
    topMajors: ['marketing', 'business-administration', 'pre-med']
  },
  {
    id: 'michigan',
    name: 'University of Michigan',
    annualCost: 55069,
    city: 'Ann Arbor',
    state: 'Michigan',
    lifestyleDescription: 'Large public university with incredible school pride and Big Ten athletics culture. Ann Arbor is the quintessential college town with everything revolving around the university. Students are academically excellent but also love football Saturdays. Diverse student body with strong alumni network. Research opportunities abound. Cold winters but amazing fall and spring campus experiences.',
    topMajors: ['business-administration', 'mechanical-engineering', 'nursing', 'pre-med']
  },
  {
    id: 'nyu',
    name: 'New York University',
    annualCost: 79462,
    city: 'New York',
    state: 'New York',
    lifestyleDescription: 'Urban campus integrated into Greenwich Village with no traditional quad or campus boundaries. Students are independent and culturally sophisticated. The city is your campus with endless internship, cultural, and networking opportunities. Expensive but unparalleled access to industries like finance, media, and arts. Diverse student body from around the world. Fast-paced environment that mirrors NYC energy.',
    topMajors: ['finance', 'marketing', 'data-science', 'business-administration']
  }
];

// Helper functions to get related data
export const getCareerPathById = (id: string): CareerPath | undefined => 
  careerPaths.find(career => career.id === id);

export const getMajorById = (id: string): Major | undefined => 
  majors.find(major => major.id === id);

export const getCollegeById = (id: string): College | undefined => 
  colleges.find(college => college.id === id);

export const getCareerPathsByMajor = (majorId: string): CareerPath[] => 
  careerPaths.filter(career => career.topMajors.includes(majorId));

export const getMajorsByCareer = (careerId: string): Major[] => {
  const career = getCareerPathById(careerId);
  if (!career) return [];
  return majors.filter(major => career.topMajors.includes(major.id));
};

export const getCollegesByMajor = (majorId: string): College[] => {
  const major = getMajorById(majorId);
  if (!major) return [];
  return colleges.filter(college => major.topUniversities.includes(college.id));
};