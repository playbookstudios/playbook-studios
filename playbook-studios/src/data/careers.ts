export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  workExample: string;
  industries: string[];
  stability: {
    rating: number; // 1-10
    disruptionRisk: string;
  };
  salary: {
    entryLevel: number;
    entryLevelPercentile: number;
    tenYears: number;
    tenYearsPercentile: number;
  };
  competition: {
    level: string;
    difficulty: string;
  };
  topMajors: string[]; // IDs of majors
  awards?: string[]; // Award IDs
}

export const careerCategories = [
  "Technology & Engineering",
  "Healthcare & Medicine",
  "Business & Finance",
  "Education & Social Services",
  "Creative & Design",
  "Legal & Public Service",
  "Science & Research",
  "Skilled Trades"
];

export const careers: Career[] = [
  // Technology & Engineering
  {
    id: "software-developer",
    title: "Software Developer",
    category: "Technology & Engineering",
    description: "Software developers design, create, test, and maintain computer programs and applications. They work on everything from mobile apps to operating systems, using programming languages to solve problems and create innovative solutions.",
    workExample: "A typical day might involve writing code for a new feature in a mobile app, debugging issues reported by users, collaborating with designers to implement user interfaces, and participating in team meetings to plan upcoming projects. For example, you might spend the morning fixing a login bug, the afternoon building a new payment feature, and end the day reviewing code written by teammates.",
    industries: ["Technology", "Finance", "Healthcare", "E-commerce", "Gaming", "Consulting"],
    stability: {
      rating: 9,
      disruptionRisk: "Low - Technology continues to expand into every industry. While AI may automate some coding tasks, demand for skilled developers who can architect systems, solve complex problems, and work with AI tools is expected to grow significantly."
    },
    salary: {
      entryLevel: 75000,
      entryLevelPercentile: 70,
      tenYears: 125000,
      tenYearsPercentile: 85
    },
    competition: {
      level: "High",
      difficulty: "Moderate to High - Requires strong problem-solving skills and continuous learning, but many resources available for self-teaching"
    },
    topMajors: ["computer-science", "software-engineering", "computer-engineering"],
    awards: ["top-earner", "tech-forward", "future-proof"]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Technology & Engineering",
    description: "Data scientists analyze complex data sets to extract insights, build predictive models, and help organizations make data-driven decisions. They combine statistics, programming, and domain knowledge to solve business problems.",
    workExample: "You might start by cleaning and organizing a dataset of customer behavior, then use Python to build a machine learning model that predicts which customers are likely to cancel their subscriptions. You'd visualize findings in dashboards, present insights to stakeholders, and recommend strategies to improve retention. For instance, you could discover that customers who don't use a certain feature within 30 days are 5x more likely to leave, leading to a new onboarding strategy.",
    industries: ["Technology", "Finance", "Healthcare", "E-commerce", "Consulting", "Research"],
    stability: {
      rating: 9,
      disruptionRisk: "Low - Data continues to grow exponentially, and organizations increasingly rely on data-driven decisions. While AI automates some tasks, interpreting results, asking the right questions, and communicating insights remain critical human skills."
    },
    salary: {
      entryLevel: 85000,
      entryLevelPercentile: 75,
      tenYears: 135000,
      tenYearsPercentile: 88
    },
    competition: {
      level: "Very High",
      difficulty: "High - Requires strong programming, statistics, and communication skills plus business acumen"
    },
    topMajors: ["data-science", "computer-science", "statistics"],
    awards: ["top-earner", "tech-forward", "fast-growing"]
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    category: "Technology & Engineering",
    description: "Mechanical engineers design, develop, and test mechanical devices and systems including tools, engines, and machines. They apply principles of physics and materials science to create solutions for manufacturing, energy, and transportation.",
    workExample: "Your work might involve using CAD software to design a new component for an electric vehicle, running simulations to test how it performs under stress, collaborating with manufacturers to ensure it can be produced cost-effectively, and testing prototypes in the lab. For example, you could design a more efficient cooling system for batteries, iterate on designs based on test results, and work with suppliers to source materials.",
    industries: ["Manufacturing", "Automotive", "Aerospace", "Energy", "Robotics", "HVAC"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Manufacturing and infrastructure always need mechanical engineers. While some design work is automated, innovation in areas like renewable energy, electric vehicles, and robotics creates new opportunities."
    },
    salary: {
      entryLevel: 68000,
      entryLevelPercentile: 66,
      tenYears: 95000,
      tenYearsPercentile: 78
    },
    competition: {
      level: "Moderate",
      difficulty: "High - Requires strong math and physics skills, spatial reasoning, and technical knowledge"
    },
    topMajors: ["mechanical-engineering", "aerospace-engineering"]
  },
  {
    id: "electrical-engineer",
    title: "Electrical Engineer",
    category: "Technology & Engineering",
    description: "Electrical engineers design, develop, and test electrical equipment and systems, from power grids to computer chips. They work on electronics, telecommunications, power generation, and control systems.",
    workExample: "Your work could involve designing circuit boards for a new consumer device, testing electrical systems to ensure they meet safety standards, troubleshooting power distribution problems, or developing control systems for manufacturing equipment. For example, you might design the electrical system for a solar power installation, including panels, inverters, and grid connection, then test and refine the system to optimize efficiency and ensure reliability.",
    industries: ["Electronics", "Power & Utilities", "Telecommunications", "Aerospace", "Automotive", "Manufacturing"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Renewable energy, electric vehicles, smart grids, and expanding electronics create strong demand. While some design tasks are automated, innovation and problem-solving require human expertise."
    },
    salary: {
      entryLevel: 70000,
      entryLevelPercentile: 68,
      tenYears: 105000,
      tenYearsPercentile: 80
    },
    competition: {
      level: "Moderate to High",
      difficulty: "High - Requires strong math and physics skills, technical knowledge, and problem-solving abilities"
    },
    topMajors: ["electrical-engineering", "computer-engineering"]
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    category: "Technology & Engineering",
    description: "Civil engineers design, build, and maintain infrastructure projects like roads, bridges, water systems, and buildings. They ensure structures are safe, sustainable, and meet community needs.",
    workExample: "You might work on designing a new highway overpass, calculating load requirements, selecting materials, creating blueprints, and overseeing construction. You'd inspect construction sites, solve problems as they arise, and coordinate with contractors, architects, and government officials. For example, you could design a stormwater management system for a new development, ensuring it prevents flooding while meeting environmental regulations.",
    industries: ["Construction", "Government", "Consulting", "Transportation", "Water Resources", "Urban Planning"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Infrastructure maintenance and development is constant. Climate change adaptation, aging infrastructure, and population growth drive ongoing demand for civil engineers."
    },
    salary: {
      entryLevel: 65000,
      entryLevelPercentile: 62,
      tenYears: 92000,
      tenYearsPercentile: 76
    },
    competition: {
      level: "Moderate",
      difficulty: "High - Requires strong math skills, spatial reasoning, knowledge of regulations, and project management"
    },
    topMajors: ["civil-engineering", "environmental-engineering"]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Technology & Engineering",
    description: "Cybersecurity analysts protect organizations from digital threats by monitoring networks, identifying vulnerabilities, responding to security incidents, and implementing protective measures.",
    workExample: "Your day might include monitoring security systems for suspicious activity, investigating potential breaches, conducting vulnerability assessments, updating security protocols, and training employees on security best practices. For instance, you could detect an attempted phishing attack, trace its source, implement filters to block similar attempts, and create a company-wide alert about the threat.",
    industries: ["Technology", "Finance", "Healthcare", "Government", "Consulting", "All Industries"],
    stability: {
      rating: 10,
      disruptionRisk: "Very Low - Cyber threats continue to increase in sophistication and frequency. Every organization needs cybersecurity, making this one of the fastest-growing fields with strong job security."
    },
    salary: {
      entryLevel: 72000,
      entryLevelPercentile: 69,
      tenYears: 115000,
      tenYearsPercentile: 82
    },
    competition: {
      level: "High",
      difficulty: "High - Requires technical knowledge, problem-solving skills, continuous learning, and often certifications"
    },
    topMajors: ["computer-science", "cybersecurity", "information-technology"]
  },

  // Healthcare & Medicine
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    category: "Healthcare & Medicine",
    description: "Registered nurses provide and coordinate patient care, educate patients and families about health conditions, and offer emotional support. They work in hospitals, clinics, nursing homes, and other healthcare settings.",
    workExample: "In a hospital setting, you might start your shift by reviewing patient charts and medications, then spend your day administering medications, monitoring vital signs, assisting doctors during procedures, updating patient records, and communicating with families. For instance, you could help a post-surgery patient manage pain, teach a diabetic patient how to monitor blood sugar, and coordinate with physical therapists for a stroke recovery patient.",
    industries: ["Healthcare", "Hospitals", "Nursing Homes", "Home Health", "Schools", "Public Health"],
    stability: {
      rating: 10,
      disruptionRisk: "Very Low - Healthcare is an essential service with an aging population creating increasing demand. While technology aids nurses, the human element of patient care is irreplaceable. Expected to be one of the fastest-growing professions."
    },
    salary: {
      entryLevel: 62000,
      entryLevelPercentile: 60,
      tenYears: 85000,
      tenYearsPercentile: 72
    },
    competition: {
      level: "Moderate",
      difficulty: "High - Requires nursing degree, passing NCLEX exam, emotional resilience, and strong multitasking abilities"
    },
    topMajors: ["nursing", "biology"],
    awards: ["social-impact", "future-proof", "helping-others"]
  },
  {
    id: "physical-therapist",
    title: "Physical Therapist",
    category: "Healthcare & Medicine",
    description: "Physical therapists help patients recover from injuries, manage pain, and improve mobility through exercise, manual therapy, and education. They work with people of all ages recovering from surgery, injury, or managing chronic conditions.",
    workExample: "Your day might involve evaluating a new patient recovering from knee surgery, creating a personalized rehabilitation plan, guiding patients through therapeutic exercises, using techniques like massage or ultrasound therapy, and documenting progress. For example, you could help an athlete regain strength after an ACL tear through progressive exercises, assist an elderly patient improve balance to prevent falls, and educate a patient with back pain on proper posture and ergonomics.",
    industries: ["Healthcare", "Hospitals", "Rehabilitation Centers", "Sports Medicine", "Private Practice", "Home Health"],
    stability: {
      rating: 9,
      disruptionRisk: "Very Low - Aging population and focus on non-surgical treatments drive increasing demand. Requires hands-on expertise and personalized care that technology cannot replace. Expected to grow much faster than average."
    },
    salary: {
      entryLevel: 70000,
      entryLevelPercentile: 68,
      tenYears: 92000,
      tenYearsPercentile: 76
    },
    competition: {
      level: "Moderate to High",
      difficulty: "High - Requires Doctor of Physical Therapy degree, clinical experience, licensing exam, and strong interpersonal skills"
    },
    topMajors: ["exercise-science", "biology", "kinesiology"],
    awards: ["helping-others", "work-life-balance", "entrepreneur-friendly"]
  },
  {
    id: "physician-assistant",
    title: "Physician Assistant",
    category: "Healthcare & Medicine",
    description: "Physician assistants examine patients, diagnose illnesses, develop treatment plans, prescribe medications, and assist in surgeries. They work under the supervision of physicians but have significant autonomy in patient care.",
    workExample: "In a family practice, you might see patients throughout the day for various concerns - diagnosing a child's ear infection, managing a diabetic patient's medications, ordering lab tests for someone with chest pain, performing minor procedures like removing skin lesions, and coordinating care with specialists. You could spend your morning seeing scheduled appointments, afternoon handling urgent walk-ins, and end the day reviewing test results and calling patients with follow-up instructions.",
    industries: ["Healthcare", "Hospitals", "Clinics", "Emergency Medicine", "Surgery", "Primary Care"],
    stability: {
      rating: 10,
      disruptionRisk: "Very Low - Growing healthcare demands and physician shortages make PAs increasingly valuable. The role expands access to healthcare in underserved areas. Strong growth expected."
    },
    salary: {
      entryLevel: 95000,
      entryLevelPercentile: 80,
      tenYears: 120000,
      tenYearsPercentile: 84
    },
    competition: {
      level: "Very High",
      difficulty: "Very High - Requires master's degree, clinical hours, strong grades, passing national exam, and excellent patient care skills"
    },
    topMajors: ["biology", "health-sciences", "exercise-science"]
  },
  {
    id: "pharmacist",
    title: "Pharmacist",
    category: "Healthcare & Medicine",
    description: "Pharmacists dispense medications, counsel patients on proper use, check for drug interactions, administer vaccines, and provide healthcare advice. They ensure safe and effective medication therapy.",
    workExample: "Your day in a retail pharmacy might include reviewing and filling prescriptions, counseling a patient on how to take a new medication and potential side effects, calling doctors about drug interactions or insurance issues, administering flu vaccines, and answering questions about over-the-counter medications. For instance, you could notice a dangerous interaction between a new prescription and a patient's existing medications, call the doctor to recommend an alternative, and educate the patient about the importance of sharing their complete medication list.",
    industries: ["Healthcare", "Retail Pharmacy", "Hospitals", "Pharmaceutical Companies", "Long-term Care"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - Retail pharmacy faces pressure from automation and mail-order services, but clinical pharmacy roles in hospitals and specialized areas are growing. Patient counseling and clinical expertise remain valuable."
    },
    salary: {
      entryLevel: 110000,
      entryLevelPercentile: 83,
      tenYears: 125000,
      tenYearsPercentile: 85
    },
    competition: {
      level: "High",
      difficulty: "Very High - Requires Doctor of Pharmacy degree, passing licensing exams, strong knowledge of medications, and attention to detail"
    },
    topMajors: ["biology", "chemistry", "health-sciences"]
  },

  // Business & Finance
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    category: "Business & Finance",
    description: "Financial analysts assess investment opportunities, analyze financial data, create financial models, and provide recommendations to businesses and individuals to help them make informed financial decisions.",
    workExample: "Your day might include building Excel models to forecast company revenue, analyzing industry trends to recommend stock investments, preparing presentations for client meetings, and researching companies' financial statements. For example, you might evaluate whether a company should acquire a competitor by modeling projected cash flows, analyzing market conditions, and presenting findings to executives.",
    industries: ["Finance", "Banking", "Investment Firms", "Insurance", "Consulting", "Corporate Finance"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - AI and automation are changing routine analysis work, but strategic thinking, relationship management, and complex decision-making remain valuable. Specialization in areas like ESG or emerging markets offers strong prospects."
    },
    salary: {
      entryLevel: 65000,
      entryLevelPercentile: 65,
      tenYears: 95000,
      tenYearsPercentile: 78
    },
    competition: {
      level: "High",
      difficulty: "High - Requires strong analytical skills, financial knowledge, and often certifications like CFA"
    },
    topMajors: ["finance", "accounting", "economics"]
  },
  {
    id: "accountant",
    title: "Accountant",
    category: "Business & Finance",
    description: "Accountants prepare and examine financial records, ensure accuracy and compliance with tax laws and regulations, and help organizations make sound financial decisions. They may work on audits, tax preparation, or financial planning.",
    workExample: "You might prepare monthly financial statements, reconcile accounts to ensure accuracy, help clients prepare tax returns, advise on tax-saving strategies, and conduct audits to verify financial records. For instance, during tax season you could work with a small business owner to maximize deductions, identify errors in their bookkeeping, and file their corporate tax return. Throughout the year, you analyze financial data to help clients make budgeting decisions.",
    industries: ["Accounting Firms", "Finance", "Government", "Healthcare", "Manufacturing", "Non-profit"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - Automation handles routine bookkeeping, but complex tax planning, auditing, forensic accounting, and strategic financial advice remain in demand. CPA designation and specialization increase job security."
    },
    salary: {
      entryLevel: 54000,
      entryLevelPercentile: 52,
      tenYears: 78000,
      tenYearsPercentile: 70
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate - Requires attention to detail, understanding of regulations, and often CPA certification"
    },
    topMajors: ["accounting", "finance"]
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    category: "Business & Finance",
    description: "Marketing managers develop and implement strategies to promote products and services, manage marketing campaigns, analyze market trends, and oversee creative teams to build brand awareness and drive sales.",
    workExample: "You might spend your morning analyzing data from last week's social media campaign, then meet with the creative team to review designs for a new product launch. The afternoon could involve presenting a marketing strategy to executives, negotiating with advertising agencies, and adjusting the budget allocation across different channels. For instance, you could launch a campaign combining Instagram ads, influencer partnerships, and email marketing to promote a new product line.",
    industries: ["Advertising", "Technology", "Retail", "Consumer Goods", "Healthcare", "Entertainment"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - Digital transformation and AI tools are changing how marketing works, but creative strategy, brand building, and understanding consumer psychology remain crucial. Demand shifts toward digital expertise."
    },
    salary: {
      entryLevel: 58000,
      entryLevelPercentile: 58,
      tenYears: 92000,
      tenYearsPercentile: 76
    },
    competition: {
      level: "High",
      difficulty: "Moderate - Requires creativity, analytical skills, and understanding of digital platforms"
    },
    topMajors: ["marketing", "business-administration", "communications"]
  },
  {
    id: "management-consultant",
    title: "Management Consultant",
    category: "Business & Finance",
    description: "Management consultants help organizations improve performance by analyzing problems, developing strategies, and implementing solutions. They work on diverse projects across industries, advising on operations, strategy, and organizational change.",
    workExample: "You might be assigned to help a retail company improve their supply chain efficiency. Your weeks could involve interviewing employees, analyzing data on inventory and delivery times, researching best practices, creating presentations with recommendations, and working with client teams to implement changes. For example, you could identify that consolidating warehouses would save $2M annually, present the business case to executives, and help manage the transition.",
    industries: ["Consulting", "All Industries"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - AI may handle some analytical work, but strategic thinking, client relationships, change management, and implementation expertise remain valuable. Specialization in digital transformation or sustainability creates opportunities."
    },
    salary: {
      entryLevel: 80000,
      entryLevelPercentile: 73,
      tenYears: 140000,
      tenYearsPercentile: 89
    },
    competition: {
      level: "Very High",
      difficulty: "High - Requires analytical skills, communication, business knowledge, and often top-tier education. Demanding work hours."
    },
    topMajors: ["business-administration", "economics", "engineering"]
  },
  {
    id: "human-resources-manager",
    title: "Human Resources Manager",
    category: "Business & Finance",
    description: "HR managers oversee recruitment, employee relations, compensation and benefits, training and development, and ensure compliance with labor laws. They help create positive work environments and align people strategy with business goals.",
    workExample: "Your responsibilities might include interviewing candidates for open positions, mediating conflicts between employees, developing training programs, designing compensation packages, and ensuring the company follows employment laws. For instance, you could lead a project to improve employee retention by conducting exit interviews, analyzing turnover data, proposing changes to benefits and career development programs, and measuring the impact of new initiatives.",
    industries: ["All Industries", "Consulting", "Healthcare", "Technology", "Manufacturing", "Retail"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - Technology automates some HR tasks like payroll and recruiting, but employee relations, culture building, conflict resolution, and strategic workforce planning require human judgment and empathy."
    },
    salary: {
      entryLevel: 60000,
      entryLevelPercentile: 58,
      tenYears: 95000,
      tenYearsPercentile: 78
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate - Requires interpersonal skills, knowledge of employment law, organizational skills, and often certification"
    },
    topMajors: ["business-administration", "psychology", "human-resources"]
  },

  // Education & Social Services
  {
    id: "teacher",
    title: "Secondary School Teacher",
    category: "Education & Social Services",
    description: "Secondary school teachers educate students in grades 6-12, developing curriculum, delivering lessons, assessing student progress, and creating a positive learning environment. They specialize in specific subjects like math, science, English, or history.",
    workExample: "Your day includes preparing lesson plans, teaching multiple classes, grading assignments, meeting with students who need extra help, and communicating with parents. For example, as a high school biology teacher, you might teach a lab on cell division, help a struggling student understand genetics during lunch, grade quizzes in the afternoon, and adjust your next lesson based on how students performed. You also attend meetings, supervise clubs, and continuously adapt to meet diverse student needs.",
    industries: ["Education", "Public Schools", "Private Schools", "Charter Schools", "Tutoring"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - While technology enhances education, the need for skilled teachers who can mentor, inspire, and adapt to individual students remains strong. Education is essential and teacher shortages exist in many areas."
    },
    salary: {
      entryLevel: 45000,
      entryLevelPercentile: 45,
      tenYears: 62000,
      tenYearsPercentile: 55
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate - Requires teaching credential, subject expertise, patience, and strong communication skills"
    },
    topMajors: ["education", "mathematics", "english", "biology"],
    awards: ["social-impact", "helping-others", "work-life-balance"]
  },
  {
    id: "social-worker",
    title: "Social Worker",
    category: "Education & Social Services",
    description: "Social workers help individuals and families cope with challenges, connect them with resources, advocate for their needs, and work to improve social conditions. They may specialize in areas like child welfare, mental health, or healthcare.",
    workExample: "You might work with families in crisis, assessing their needs and connecting them with resources like housing assistance, counseling, or job training. Your day could include home visits to check on children's welfare, coordinating with schools and healthcare providers, appearing in court to advocate for a child's placement, and facilitating support groups. For instance, you could help a family escaping domestic violence find safe housing, access legal aid, enroll children in new schools, and connect the parent with job training programs.",
    industries: ["Social Services", "Healthcare", "Schools", "Government", "Non-profit", "Mental Health"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Social issues, mental health needs, and aging populations drive demand. Requires empathy, judgment, and human connection that cannot be automated. Stable but emotionally demanding field."
    },
    salary: {
      entryLevel: 48000,
      entryLevelPercentile: 47,
      tenYears: 63000,
      tenYearsPercentile: 56
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate to High - Requires bachelor's or master's degree, licensing, emotional resilience, and strong interpersonal skills"
    },
    topMajors: ["social-work", "psychology", "sociology"]
  },
  {
    id: "school-counselor",
    title: "School Counselor",
    category: "Education & Social Services",
    description: "School counselors support students' academic, career, and social-emotional development. They help with course selection, college planning, personal challenges, and create programs that promote student success and well-being.",
    workExample: "Your work includes meeting individually with students to discuss academic struggles, college plans, or personal issues, facilitating small group sessions on topics like study skills or conflict resolution, coordinating college application workshops, and consulting with teachers and parents. For example, you might help a student struggling with anxiety develop coping strategies, guide a senior through the college application process, mediate a conflict between students, and coordinate a career day event.",
    industries: ["Education", "Public Schools", "Private Schools", "Higher Education"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Growing awareness of mental health and college readiness makes counselors increasingly important. Students need personalized guidance, emotional support, and advocacy that requires human connection."
    },
    salary: {
      entryLevel: 50000,
      entryLevelPercentile: 48,
      tenYears: 67000,
      tenYearsPercentile: 60
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate - Requires master's degree in counseling, state certification, and strong interpersonal and organizational skills"
    },
    topMajors: ["psychology", "education", "counseling"]
  },

  // Creative & Design
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    category: "Creative & Design",
    description: "Graphic designers create visual concepts to communicate ideas through typography, images, and layout. They work on everything from logos and websites to packaging and advertisements, combining art and technology.",
    workExample: "You might start your day designing a logo for a new client, then create social media graphics for a product launch, update a company website's visual elements, and present design concepts to stakeholders. For example, you could design a complete brand identity including logo, color palette, typography, business cards, and website mockups, incorporating client feedback through multiple rounds of revisions until the final design perfectly captures their vision.",
    industries: ["Advertising", "Marketing", "Publishing", "Technology", "Entertainment", "Freelance"],
    stability: {
      rating: 6,
      disruptionRisk: "Moderate to High - AI design tools are advancing rapidly, but creative strategy, understanding brand identity, client communication, and original thinking remain valuable. Specialization and adaptability are key."
    },
    salary: {
      entryLevel: 45000,
      entryLevelPercentile: 42,
      tenYears: 68000,
      tenYearsPercentile: 62
    },
    competition: {
      level: "High",
      difficulty: "Moderate - Requires creativity, technical skills with design software, understanding of design principles, and often a strong portfolio"
    },
    topMajors: ["graphic-design", "visual-arts", "communications"],
    awards: ["creative-freedom", "entrepreneur-friendly"]
  },
  {
    id: "ux-designer",
    title: "UX/UI Designer",
    category: "Creative & Design",
    description: "UX/UI designers create intuitive and engaging digital experiences by researching user needs, designing interfaces, creating prototypes, and testing usability. They bridge the gap between users and technology.",
    workExample: "Your work might involve conducting user interviews to understand pain points with a mobile app, creating wireframes and prototypes for new features, running usability tests to see how people interact with your designs, and collaborating with developers to implement your designs. For instance, you could redesign a checkout process by mapping the user journey, identifying where people abandon their carts, creating multiple design solutions, testing them with real users, and iterating based on feedback to increase conversions.",
    industries: ["Technology", "E-commerce", "Finance", "Healthcare", "Consulting", "Startups"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - As more services move digital, demand for good user experience grows. While AI assists with some tasks, understanding human behavior, conducting research, and solving complex design problems require human insight."
    },
    salary: {
      entryLevel: 70000,
      entryLevelPercentile: 67,
      tenYears: 110000,
      tenYearsPercentile: 82
    },
    competition: {
      level: "High",
      difficulty: "Moderate to High - Requires design skills, user research methods, prototyping tools, psychology understanding, and strong portfolio"
    },
    topMajors: ["graphic-design", "computer-science", "psychology"],
    awards: ["creative-freedom", "tech-forward", "fast-growing"]
  },
  {
    id: "video-producer",
    title: "Video Producer",
    category: "Creative & Design",
    description: "Video producers plan, coordinate, and oversee video production from concept to completion. They manage budgets, schedules, crews, and creative direction for commercials, documentaries, corporate videos, and online content.",
    workExample: "You might develop concepts for a marketing video campaign, scout locations, hire crew and talent, coordinate shoot schedules, direct filming, oversee editing, and deliver the final product to clients. For example, you could produce a documentary-style series for a company, interviewing employees, capturing their work, crafting a narrative, managing post-production, and ensuring the final videos align with the brand's message and budget.",
    industries: ["Entertainment", "Advertising", "Broadcasting", "Corporate Communications", "Streaming", "Freelance"],
    stability: {
      rating: 6,
      disruptionRisk: "Moderate - Video content demand is high, but competition is fierce and technology changes rapidly. Adaptability to new platforms (TikTok, YouTube, etc.) and storytelling skills remain valuable."
    },
    salary: {
      entryLevel: 48000,
      entryLevelPercentile: 46,
      tenYears: 75000,
      tenYearsPercentile: 68
    },
    competition: {
      level: "High",
      difficulty: "Moderate - Requires creativity, technical knowledge, project management, communication, and often a strong portfolio or reel"
    },
    topMajors: ["film-production", "communications", "visual-arts"]
  },
  {
    id: "architect",
    title: "Architect",
    category: "Creative & Design",
    description: "Architects design buildings and structures, balancing aesthetics, functionality, safety, and sustainability. They create plans, select materials, ensure code compliance, and oversee construction to bring their visions to life.",
    workExample: "Your work involves meeting with clients to understand their needs and vision, creating initial design sketches, developing detailed blueprints using CAD software, selecting materials and systems, coordinating with engineers and contractors, and visiting construction sites to ensure plans are followed. For example, you could design a new community center, incorporating sustainable features, accessible design, and community input while staying within budget and local building codes.",
    industries: ["Architecture", "Construction", "Real Estate Development", "Government", "Self-employed"],
    stability: {
      rating: 6,
      disruptionRisk: "Moderate - Construction cycles fluctuate with the economy. While AI aids design, creativity, client relationships, understanding of space and human needs, and managing complex regulations remain essential."
    },
    salary: {
      entryLevel: 55000,
      entryLevelPercentile: 53,
      tenYears: 85000,
      tenYearsPercentile: 73
    },
    competition: {
      level: "High",
      difficulty: "Very High - Requires professional degree, lengthy internship, passing licensing exams, creativity, technical knowledge, and business skills"
    },
    topMajors: ["architecture", "civil-engineering"]
  },

  // Legal & Public Service
  {
    id: "lawyer",
    title: "Lawyer",
    category: "Legal & Public Service",
    description: "Lawyers advise and represent clients in legal matters, including criminal and civil lawsuits, business transactions, and compliance issues. They research laws, draft documents, negotiate agreements, and argue cases in court.",
    workExample: "Your work varies by specialty but might include researching case law, drafting contracts or legal briefs, meeting with clients to discuss their cases, negotiating settlements, appearing in court to argue motions or try cases, and advising businesses on legal compliance. For example, as a corporate lawyer, you could review merger agreements, ensure regulatory compliance, negotiate terms with other parties, and advise executives on legal risks of business decisions.",
    industries: ["Law Firms", "Corporate Legal", "Government", "Non-profit", "Self-employed"],
    stability: {
      rating: 7,
      disruptionRisk: "Moderate - AI assists with legal research and document review, but judgment, strategy, negotiation, courtroom advocacy, and client relationships remain critical. Specialization in emerging areas offers opportunities."
    },
    salary: {
      entryLevel: 65000,
      entryLevelPercentile: 63,
      tenYears: 125000,
      tenYearsPercentile: 85
    },
    competition: {
      level: "Very High",
      difficulty: "Very High - Requires law degree (JD), passing bar exam, strong analytical and communication skills, and often top grades. Long hours common."
    },
    topMajors: ["political-science", "english", "economics"]
  },
  {
    id: "police-officer",
    title: "Police Officer",
    category: "Legal & Public Service",
    description: "Police officers protect communities by enforcing laws, responding to emergencies, investigating crimes, and building relationships with residents. They patrol areas, make arrests, write reports, and testify in court.",
    workExample: "Your shifts might involve patrolling assigned areas, responding to 911 calls ranging from traffic accidents to domestic disputes, writing detailed reports about incidents, investigating crimes by interviewing witnesses and collecting evidence, and appearing in court to testify. For example, you could respond to a burglary, secure the scene, interview the victim and neighbors, collect fingerprints, work with detectives to identify suspects, and later testify at trial.",
    industries: ["Law Enforcement", "Government", "Public Safety"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Public safety is essential and requires human judgment, de-escalation skills, and community relationships. While technology aids policing, the core role of protecting communities remains stable."
    },
    salary: {
      entryLevel: 52000,
      entryLevelPercentile: 50,
      tenYears: 75000,
      tenYearsPercentile: 68
    },
    competition: {
      level: "Moderate to High",
      difficulty: "Moderate - Requires police academy training, physical fitness, clean record, good judgment, and emotional resilience. Can be dangerous and stressful."
    },
    topMajors: ["criminal-justice", "psychology", "sociology"]
  },
  {
    id: "urban-planner",
    title: "Urban Planner",
    category: "Legal & Public Service",
    description: "Urban planners develop plans and programs for land use in communities, balancing economic development, environmental sustainability, and quality of life. They work on zoning, transportation, housing, and community development.",
    workExample: "You might analyze demographic data to forecast future housing needs, create zoning plans that balance residential, commercial, and green spaces, facilitate public meetings to gather community input on development projects, review development proposals for compliance, and create long-term plans for sustainable growth. For instance, you could develop a plan to revitalize a downtown area, incorporating mixed-use development, improved public transit, parks, and affordable housing while preserving historic buildings.",
    industries: ["Government", "Consulting", "Real Estate Development", "Non-profit"],
    stability: {
      rating: 7,
      disruptionRisk: "Low to Moderate - Urban challenges like housing affordability, climate change, and infrastructure needs drive demand. Requires human judgment to balance competing interests and community needs."
    },
    salary: {
      entryLevel: 58000,
      entryLevelPercentile: 56,
      tenYears: 80000,
      tenYearsPercentile: 71
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate to High - Requires master's degree, understanding of regulations, analytical skills, and ability to facilitate community engagement"
    },
    topMajors: ["urban-planning", "civil-engineering", "geography"]
  },

  // Science & Research
  {
    id: "research-scientist",
    title: "Research Scientist",
    category: "Science & Research",
    description: "Research scientists conduct experiments and studies to advance knowledge in fields like biology, chemistry, physics, or environmental science. They design studies, collect and analyze data, and publish findings.",
    workExample: "Your work might involve designing experiments to test hypotheses, conducting laboratory work or field research, analyzing data using statistical software, writing grant proposals to fund research, collaborating with other scientists, and publishing papers in scientific journals. For example, you could study how a particular protein affects cancer growth, running experiments with cell cultures, analyzing results, refining hypotheses, and ultimately contributing to understanding that could lead to new treatments.",
    industries: ["Research Institutions", "Universities", "Pharmaceutical", "Biotechnology", "Government", "Non-profit"],
    stability: {
      rating: 7,
      disruptionRisk: "Low to Moderate - Scientific advancement is ongoing, but funding can be competitive. Specialization in growing fields like climate science, biotechnology, or AI research offers strong prospects."
    },
    salary: {
      entryLevel: 65000,
      entryLevelPercentile: 62,
      tenYears: 95000,
      tenYearsPercentile: 78
    },
    competition: {
      level: "High",
      difficulty: "Very High - Usually requires PhD, strong analytical and technical skills, ability to secure funding, and persistence in face of setbacks"
    },
    topMajors: ["biology", "chemistry", "physics"]
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    category: "Science & Research",
    description: "Environmental scientists study environmental problems, conduct research to identify solutions, monitor pollution levels, and develop plans to protect the environment and public health.",
    workExample: "You might collect soil and water samples to test for contamination, analyze data on air quality, develop remediation plans for polluted sites, conduct environmental impact assessments for development projects, and advise organizations on sustainable practices. For example, you could investigate contamination at a former industrial site, testing soil and groundwater, identifying pollutants, designing a cleanup plan, monitoring progress, and ensuring the site becomes safe for redevelopment.",
    industries: ["Environmental Consulting", "Government", "Non-profit", "Energy", "Manufacturing"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Climate change, pollution, and sustainability concerns drive increasing demand. Regulations require environmental assessment and monitoring. Growing field with diverse opportunities."
    },
    salary: {
      entryLevel: 58000,
      entryLevelPercentile: 55,
      tenYears: 82000,
      tenYearsPercentile: 72
    },
    competition: {
      level: "Moderate",
      difficulty: "High - Requires bachelor's or master's degree in environmental science, strong analytical skills, fieldwork abilities, and understanding of regulations"
    },
    topMajors: ["environmental-science", "biology", "chemistry"]
  },
  {
    id: "psychologist",
    title: "Psychologist",
    category: "Science & Research",
    description: "Psychologists study human behavior and mental processes, providing therapy, conducting assessments, and helping people cope with mental health challenges, relationships, and life transitions.",
    workExample: "In clinical practice, you might conduct therapy sessions with individuals, couples, or families, perform psychological assessments to diagnose conditions, develop treatment plans, maintain detailed case notes, and sometimes conduct research or teach. For example, you could work with a patient struggling with anxiety, using cognitive-behavioral therapy techniques to identify thought patterns, teaching coping strategies, monitoring progress over weeks or months, and adjusting the treatment approach based on their response.",
    industries: ["Healthcare", "Private Practice", "Schools", "Research", "Government", "Corporate"],
    stability: {
      rating: 8,
      disruptionRisk: "Low - Growing awareness and reduced stigma around mental health drive increasing demand. Requires human empathy, judgment, and relationship-building that cannot be automated."
    },
    salary: {
      entryLevel: 60000,
      entryLevelPercentile: 58,
      tenYears: 85000,
      tenYearsPercentile: 73
    },
    competition: {
      level: "High",
      difficulty: "Very High - Requires doctoral degree (PhD or PsyD), internship, licensing, strong interpersonal skills, and emotional resilience"
    },
    topMajors: ["psychology", "neuroscience"]
  },

  // Skilled Trades
  {
    id: "electrician",
    title: "Electrician",
    category: "Skilled Trades",
    description: "Electricians install, maintain, and repair electrical systems in homes, businesses, and factories. They work with wiring, lighting, control systems, and ensure electrical work meets safety codes.",
    workExample: "Your work might involve reading blueprints to plan electrical layouts for new construction, running wire through walls and connecting circuits, installing outlets, switches, and lighting fixtures, troubleshooting electrical problems, and ensuring all work meets code requirements. For example, you could wire a new house, coordinating with other trades, testing circuits for safety, installing the electrical panel, and obtaining inspection approval before the homeowners move in.",
    industries: ["Construction", "Manufacturing", "Maintenance", "Utilities", "Self-employed"],
    stability: {
      rating: 9,
      disruptionRisk: "Very Low - Electrical work is always needed for construction, renovation, and maintenance. Growth in solar installations and electric vehicle charging creates new opportunities. Cannot be automated or outsourced."
    },
    salary: {
      entryLevel: 45000,
      entryLevelPercentile: 43,
      tenYears: 70000,
      tenYearsPercentile: 65
    },
    competition: {
      level: "Low to Moderate",
      difficulty: "Moderate - Requires apprenticeship, technical knowledge, licensing, physical work, and attention to safety. Good career path without requiring college degree."
    },
    topMajors: ["vocational-training", "engineering-technology"],
    awards: ["no-degree-needed", "future-proof", "entrepreneur-friendly"]
  },
  {
    id: "plumber",
    title: "Plumber",
    category: "Skilled Trades",
    description: "Plumbers install and repair pipes, fixtures, and systems for water, drainage, and gas. They work in residential, commercial, and industrial settings, ensuring proper function and code compliance.",
    workExample: "Your day might include installing plumbing systems in new construction, repairing leaking pipes or broken water heaters, unclogging drains, replacing fixtures like toilets and sinks, and inspecting systems to identify problems. For instance, you could respond to an emergency call about a burst pipe, shut off the water, assess the damage, replace the damaged section, test for leaks, and advise the homeowner on preventing future issues.",
    industries: ["Construction", "Plumbing Services", "Maintenance", "Self-employed"],
    stability: {
      rating: 9,
      disruptionRisk: "Very Low - Plumbing services are always in demand for new construction, repairs, and emergencies. Cannot be automated. Aging infrastructure ensures continued need. Strong job security."
    },
    salary: {
      entryLevel: 43000,
      entryLevelPercentile: 42,
      tenYears: 68000,
      tenYearsPercentile: 62
    },
    competition: {
      level: "Low to Moderate",
      difficulty: "Moderate - Requires apprenticeship, licensing, problem-solving skills, and physical work. Good income potential without requiring college degree."
    },
    topMajors: ["vocational-training"]
  },
  {
    id: "construction-manager",
    title: "Construction Manager",
    category: "Skilled Trades",
    description: "Construction managers plan, coordinate, and oversee construction projects from start to finish. They manage budgets, schedules, workers, and ensure projects meet quality and safety standards.",
    workExample: "You might develop project schedules and budgets, hire and coordinate subcontractors, ensure materials arrive on time, monitor work quality and safety compliance, solve problems as they arise, and communicate with owners, architects, and inspectors. For example, on a commercial building project, you'd coordinate multiple trades working simultaneously, adjust schedules when weather causes delays, negotiate with suppliers, ensure inspections are passed, and deliver the completed building on time and within budget.",
    industries: ["Construction", "Real Estate Development", "Government", "Self-employed"],
    stability: {
      rating: 7,
      disruptionRisk: "Low to Moderate - Construction activity fluctuates with economy, but infrastructure needs, housing demand, and commercial development provide ongoing opportunities. Experience and relationships are valuable."
    },
    salary: {
      entryLevel: 60000,
      entryLevelPercentile: 57,
      tenYears: 95000,
      tenYearsPercentile: 78
    },
    competition: {
      level: "Moderate",
      difficulty: "Moderate to High - Requires construction knowledge, project management skills, leadership, problem-solving, and often degree or extensive experience"
    },
    topMajors: ["construction-management", "civil-engineering", "business-administration"]
  },
  {
    id: "hvac-technician",
    title: "HVAC Technician",
    category: "Skilled Trades",
    description: "HVAC technicians install, maintain, and repair heating, ventilation, air conditioning, and refrigeration systems. They diagnose problems, perform preventive maintenance, and ensure systems operate efficiently.",
    workExample: "Your work includes installing new HVAC systems in buildings, performing seasonal maintenance like cleaning coils and changing filters, diagnosing why systems aren't working properly, repairing or replacing faulty components, and advising customers on energy efficiency. For example, you might respond to a call about a broken air conditioner in summer, diagnose a refrigerant leak, repair it, recharge the system, test it to ensure proper cooling, and recommend a maintenance plan to prevent future issues.",
    industries: ["Construction", "HVAC Services", "Maintenance", "Manufacturing", "Self-employed"],
    stability: {
      rating: 9,
      disruptionRisk: "Very Low - Climate control is essential in most buildings. Energy efficiency focus and transition to new refrigerants create ongoing work. Cannot be automated. Growing field with strong job security."
    },
    salary: {
      entryLevel: 42000,
      entryLevelPercentile: 41,
      tenYears: 65000,
      tenYearsPercentile: 60
    },
    competition: {
      level: "Low to Moderate",
      difficulty: "Moderate - Requires technical training or apprenticeship, certification, problem-solving, and physical work. Good career path without college degree."
    },
    topMajors: ["vocational-training", "mechanical-engineering"]
  }
];
