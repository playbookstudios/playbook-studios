export interface Major {
  id: string;
  name: string;
  description: string;
  coreClasses: string[];
  classExample: string;
  highSchoolComparison: string;
  topUniversities: string[]; // IDs of colleges
  topCareers: string[]; // IDs of careers
}

export const majors: Major[] = [
  {
    id: "computer-science",
    name: "Computer Science",
    description: "Computer Science is the study of computation, algorithms, data structures, and the principles of software and hardware design. Students learn programming, theoretical foundations, and how to solve complex problems using technology.",
    coreClasses: [
      "Introduction to Programming",
      "Data Structures and Algorithms",
      "Computer Architecture",
      "Operating Systems",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Theory of Computation",
      "Computer Networks",
      "Discrete Mathematics"
    ],
    classExample: "In a Data Structures and Algorithms course, you'll learn how to organize and manipulate data efficiently. For example, you might implement a search algorithm to find the shortest path between two cities, compare different sorting methods to see which is fastest for different data sizes, and analyze how much memory different approaches use. You'll write code, prove mathematical properties of algorithms, and learn to think critically about efficiency and scalability.",
    highSchoolComparison: "Like AP Computer Science, but much more in-depth. If you enjoyed solving logic puzzles, writing code to automate tasks, or building apps, you'll dive deeper into how computers actually work, why algorithms are efficient or slow, and how to build complex software systems. The math is similar to Algebra and some Calculus in analyzing patterns and solving problems.",
    topUniversities: ["mit", "stanford", "cmu", "berkeley", "illinois", "cornell", "georgia-tech", "caltech", "princeton", "ut-austin"],
    topCareers: ["software-developer", "data-scientist"]
  },
  {
    id: "nursing",
    name: "Nursing",
    description: "Nursing programs prepare students to provide patient care in various healthcare settings. Students learn anatomy, pharmacology, patient assessment, and clinical skills through classroom instruction and hands-on clinical rotations.",
    coreClasses: [
      "Anatomy and Physiology",
      "Pharmacology",
      "Medical-Surgical Nursing",
      "Pediatric Nursing",
      "Psychiatric/Mental Health Nursing",
      "Maternal and Newborn Nursing",
      "Community Health Nursing",
      "Nursing Research",
      "Pathophysiology",
      "Clinical Practice (Rotations)"
    ],
    classExample: "In a Medical-Surgical Nursing course, you'll learn to care for adult patients with various conditions. You might study a case of a patient recovering from heart surgery - learning what vital signs to monitor, which medications to administer and why, how to recognize complications early, and how to educate the patient about recovery. You'll practice skills in simulation labs before working with real patients during clinical rotations in hospitals.",
    highSchoolComparison: "Combines Biology (anatomy and how the body works) with hands-on practice and real-world application. If you enjoyed Biology and chemistry while also wanting to help people directly, nursing builds on that science knowledge but focuses on practical patient care. It's rigorous science plus developing compassion and communication skills.",
    topUniversities: ["penn", "duke", "johns-hopkins", "emory", "ucsf", "unc", "michigan", "washington", "yale", "columbia"],
    topCareers: ["registered-nurse"]
  },
  {
    id: "finance",
    name: "Finance",
    description: "Finance majors study how individuals, businesses, and institutions manage money and investments. The curriculum covers financial analysis, investment strategies, risk management, and corporate finance decisions.",
    coreClasses: [
      "Financial Accounting",
      "Corporate Finance",
      "Investment Analysis",
      "Financial Markets and Institutions",
      "Risk Management",
      "Portfolio Management",
      "Financial Modeling",
      "Derivatives and Options",
      "International Finance",
      "Business Statistics"
    ],
    classExample: "In Corporate Finance, you might analyze whether a company should invest $10 million in a new factory. You'd calculate the expected cash flows, determine the project's net present value, assess the risk, and compare it to alternative investments. You'll use Excel to build financial models, study real company decisions, and present your recommendations as if you were advising executives. The class combines math, business strategy, and economic thinking.",
    highSchoolComparison: "Builds on concepts from Economics and Algebra, but goes deeper into how money, investments, and financial markets work. If you enjoyed tracking stocks, understanding interest rates, or analyzing business decisions in Economics class, finance adds mathematical tools and real-world frameworks for making investment and business decisions.",
    topUniversities: ["penn", "nyu", "michigan", "berkeley", "mit", "ut-austin", "indiana", "unc", "usc", "virginia"],
    topCareers: ["financial-analyst", "accountant"]
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Marketing majors learn how to identify customer needs, create compelling messages, and develop strategies to promote products and services. The field combines creativity, psychology, data analysis, and business strategy.",
    coreClasses: [
      "Marketing Principles",
      "Consumer Behavior",
      "Marketing Research",
      "Digital Marketing",
      "Brand Management",
      "Advertising and Promotion",
      "Social Media Marketing",
      "Marketing Analytics",
      "Sales Management",
      "Marketing Strategy"
    ],
    classExample: "In Consumer Behavior, you'll study why people make purchasing decisions. You might analyze why someone chooses one brand of sneakers over another, conducting surveys to understand motivations, running experiments to see which advertisement is more persuasive, and using psychological theories to predict behavior. For a class project, you could develop a marketing campaign for a new product, testing different messages with focus groups and analyzing the results.",
    highSchoolComparison: "Combines creativity (like Art or English) with analytical thinking (like Math or Economics). If you enjoyed creating presentations, understanding what motivates people in Psychology class, or analyzing trends, marketing lets you apply those skills to real business challenges. It's about both creative storytelling and data-driven strategy.",
    topUniversities: ["penn", "michigan", "nyu", "texas", "indiana", "unc", "usc", "florida", "wisconsin", "ohio-state"],
    topCareers: ["marketing-manager"]
  },
  {
    id: "mechanical-engineering",
    name: "Mechanical Engineering",
    description: "Mechanical Engineering applies principles of physics, mathematics, and materials science to design, analyze, and manufacture mechanical systems. Students learn to create everything from tiny sensors to massive machinery.",
    coreClasses: [
      "Engineering Mechanics (Statics and Dynamics)",
      "Thermodynamics",
      "Fluid Mechanics",
      "Heat Transfer",
      "Machine Design",
      "Manufacturing Processes",
      "Control Systems",
      "Materials Science",
      "Computer-Aided Design (CAD)",
      "Mechanical Vibrations"
    ],
    classExample: "In Thermodynamics, you'll learn how energy converts between different forms. You might design an engine by calculating how much work it can produce from burning fuel, determining efficiency losses, and optimizing the cycle for maximum performance. You'd solve problems like 'How much heat needs to be removed to keep this laptop from overheating?' using equations, then verify your calculations with lab experiments or computer simulations.",
    highSchoolComparison: "Heavily builds on Physics (forces, motion, energy) and Calculus. If you enjoyed building things, understanding how machines work, or solving physics problems about pulleys and ramps, mechanical engineering takes those concepts to design real products. It's very hands-on with labs and projects alongside theoretical learning.",
    topUniversities: ["mit", "stanford", "berkeley", "caltech", "michigan", "georgia-tech", "illinois", "purdue", "cornell", "carnegie-mellon"],
    topCareers: ["mechanical-engineer"]
  },
  {
    id: "data-science",
    name: "Data Science",
    description: "Data Science combines statistics, computer science, and domain knowledge to extract insights from data. Students learn to collect, clean, analyze, and visualize data, and build predictive models using machine learning.",
    coreClasses: [
      "Programming for Data Science (Python/R)",
      "Statistics and Probability",
      "Machine Learning",
      "Data Mining",
      "Data Visualization",
      "Big Data Technologies",
      "Deep Learning",
      "Database Systems",
      "Natural Language Processing",
      "Ethics in Data Science"
    ],
    classExample: "In a Machine Learning course, you might build a model to predict whether an email is spam. You'd collect a dataset of emails, clean and organize the data, engineer features (like frequency of certain words), try different algorithms to find patterns, evaluate which works best, and interpret why the model makes certain predictions. You'll code in Python, use real datasets, and learn when different approaches work best.",
    highSchoolComparison: "Combines AP Statistics (analyzing data and probability) with AP Computer Science (programming). If you enjoyed finding patterns in data, creating graphs and visualizations, or automating analysis with code, data science teaches you to tackle complex real-world questions with data. It's perfect for students who like both math and programming.",
    topUniversities: ["mit", "stanford", "berkeley", "cmu", "cornell", "washington", "harvard", "columbia", "michigan", "duke"],
    topCareers: ["data-scientist", "software-developer"]
  },
  {
    id: "education",
    name: "Education",
    description: "Education majors prepare to become teachers by studying pedagogy, child development, curriculum design, and subject-specific teaching methods. Programs include classroom observations and student teaching experiences.",
    coreClasses: [
      "Educational Psychology",
      "Curriculum Development",
      "Classroom Management",
      "Teaching Methods",
      "Assessment and Evaluation",
      "Special Education",
      "Technology in Education",
      "Literacy Development",
      "Subject-Specific Methods",
      "Student Teaching (Practicum)"
    ],
    classExample: "In Educational Psychology, you'll learn how students learn and develop. You might study why some students struggle with reading, how to motivate reluctant learners, and which teaching strategies work for different age groups. You'll observe real classrooms, analyze case studies of student behavior, and practice creating lesson plans that adapt to diverse learning needs. The course combines theory (like Piaget's developmental stages) with practical teaching strategies.",
    highSchoolComparison: "Combines Psychology (understanding how people think and learn) with hands-on practice. If you enjoyed helping peers understand concepts, working with kids, or had inspiring teachers you want to emulate, education programs teach you the science and art of effective teaching. You'll spend significant time in actual classrooms learning by doing.",
    topUniversities: ["penn", "michigan", "vanderbilt", "stanford", "wisconsin", "columbia", "ucla", "texas", "northwestern", "nyu"],
    topCareers: ["teacher"]
  },
  {
    id: "exercise-science",
    name: "Exercise Science / Kinesiology",
    description: "Exercise Science studies human movement, physical fitness, and the body's response to exercise. It's a pre-professional major for careers in physical therapy, athletic training, and rehabilitation.",
    coreClasses: [
      "Anatomy and Physiology",
      "Biomechanics",
      "Exercise Physiology",
      "Motor Learning and Control",
      "Nutrition for Performance",
      "Strength and Conditioning",
      "Injury Prevention and Care",
      "Research Methods in Exercise Science",
      "Clinical Kinesiology",
      "Practicum/Internship"
    ],
    classExample: "In Biomechanics, you'll analyze human movement using physics principles. You might study how a basketball player jumps, calculating forces on joints, determining optimal technique to reduce injury risk, and using motion capture technology to analyze movements. You could design an experiment testing whether certain warm-ups prevent injuries, collecting data in the lab, and presenting findings. It combines biology, physics, and practical application to athletics and rehabilitation.",
    highSchoolComparison: "Builds heavily on Biology (how the body works) and Physics (forces and motion). If you enjoyed sports, fitness, or understanding how the body moves and adapts to training, this major provides the scientific foundation. It's ideal for students who want to work in healthcare or fitness and enjoyed both science classes and physical education.",
    topUniversities: ["michigan", "penn-state", "wisconsin", "florida", "usc", "minnesota", "illinois", "north-carolina", "oregon", "georgia"],
    topCareers: ["physical-therapist"]
  },
  {
    id: "accounting",
    name: "Accounting",
    description: "Accounting majors learn to record, analyze, and report financial information. The curriculum covers financial accounting, tax law, auditing, and prepares students for CPA certification.",
    coreClasses: [
      "Financial Accounting",
      "Managerial Accounting",
      "Intermediate Accounting I & II",
      "Cost Accounting",
      "Taxation",
      "Auditing",
      "Accounting Information Systems",
      "Advanced Financial Reporting",
      "Ethics in Accounting",
      "Business Law"
    ],
    classExample: "In Auditing, you'll learn to verify whether financial statements accurately represent a company's finances. You might examine a company's revenue records, test whether controls prevent fraud, trace transactions from original documents to final reports, and write an audit opinion. You'll study real cases of accounting fraud like Enron, learning what red flags auditors should catch. The work requires attention to detail, professional skepticism, and understanding complex regulations.",
    highSchoolComparison: "Builds on business and math skills, with lots of attention to detail and rules. If you enjoyed organizing information, solving puzzles with clear right answers, or understanding how businesses make money, accounting provides structured frameworks for analyzing financial information. It's more procedural than Economics but very practical and in-demand.",
    topUniversities: ["texas", "illinois", "penn", "byu", "usc", "indiana", "michigan", "unc", "notre-dame", "ohio-state"],
    topCareers: ["accountant", "financial-analyst"]
  },
  {
    id: "electrical-engineering",
    name: "Electrical Engineering",
    description: "Electrical Engineering focuses on electricity, electronics, and electromagnetism. Students design circuits, power systems, communication networks, and electronic devices.",
    coreClasses: [
      "Circuit Analysis",
      "Electronics",
      "Signals and Systems",
      "Digital Logic Design",
      "Electromagnetics",
      "Power Systems",
      "Control Systems",
      "Microprocessors",
      "Communication Systems",
      "VLSI Design"
    ],
    classExample: "In Circuit Analysis, you'll learn to design and analyze electrical circuits. You might calculate voltages and currents in a complex circuit, determine how to power a device efficiently, or troubleshoot why a circuit isn't working. You'll use software to simulate circuits before building them in lab, where you'll assemble actual circuits on breadboards, test them with oscilloscopes, and verify your calculations match reality. The class combines theory, math, and hands-on experimentation.",
    highSchoolComparison: "Heavily uses Physics (especially electricity and magnetism) and Calculus. If you enjoyed learning about circuits, building electronics projects, or were curious about how computers and phones actually work at the hardware level, electrical engineering goes deep into theory and design. It's math-intensive but very practical with lab work.",
    topUniversities: ["mit", "stanford", "berkeley", "caltech", "illinois", "michigan", "georgia-tech", "cmu", "cornell", "purdue"],
    topCareers: ["electrical-engineer"]
  },
  {
    id: "software-engineering",
    name: "Software Engineering",
    description: "Software Engineering focuses on the systematic design, development, and maintenance of software systems. It emphasizes engineering principles, teamwork, and building large-scale reliable software.",
    coreClasses: [
      "Object-Oriented Programming",
      "Software Design Patterns",
      "Software Architecture",
      "Requirements Engineering",
      "Software Testing and Quality Assurance",
      "Agile Development",
      "Web Development",
      "Mobile App Development",
      "DevOps and Deployment",
      "Software Project Management"
    ],
    classExample: "In Software Architecture, you'll learn to design large software systems. You might architect a social media app, deciding how to structure the code so multiple developers can work simultaneously, how to scale it to handle millions of users, and how to ensure it's secure and maintainable. You'll work in teams using version control, review each other's code, and present design decisions. It's less about algorithms and more about building real, complex software products.",
    highSchoolComparison: "Like AP Computer Science but more focused on building complete applications and working in teams. If you enjoyed creating apps or websites and want to build professional-quality software rather than just solve programming puzzles, software engineering teaches industry practices, tools, and teamwork skills you'll use in tech careers.",
    topUniversities: ["mit", "cmu", "stanford", "berkeley", "washington", "georgia-tech", "illinois", "ut-austin", "michigan", "cornell"],
    topCareers: ["software-developer"]
  },
  {
    id: "computer-engineering",
    name: "Computer Engineering",
    description: "Computer Engineering bridges electrical engineering and computer science, focusing on how hardware and software work together. Students design computer systems, embedded systems, and hardware-software interfaces.",
    coreClasses: [
      "Digital Logic Design",
      "Computer Architecture",
      "Embedded Systems",
      "Microprocessor Design",
      "Operating Systems",
      "VLSI Design",
      "Computer Networks",
      "Hardware Description Languages",
      "Signal Processing",
      "Real-Time Systems"
    ],
    classExample: "In Embedded Systems, you'll program computers that control physical devices. You might design the software and hardware for a smart thermostat - writing code that reads temperature sensors, controls the heating system, connects to WiFi, and runs efficiently on limited hardware. You'll work with actual circuit boards and microcontrollers, debugging both hardware connections and software code. It combines programming with electrical engineering.",
    highSchoolComparison: "Combines AP Computer Science (programming) with Physics (circuits and electricity). If you enjoyed both coding and building electronics, or are curious how computers work at the chip level, computer engineering teaches you to work at the intersection of hardware and software. It's more hardware-focused than computer science but more software-focused than electrical engineering.",
    topUniversities: ["mit", "berkeley", "stanford", "illinois", "georgia-tech", "michigan", "cmu", "caltech", "texas", "cornell"],
    topCareers: ["software-developer", "electrical-engineer"]
  },
  {
    id: "biology",
    name: "Biology",
    description: "Biology is the study of living organisms and life processes. Students explore genetics, ecology, cell biology, evolution, and physiology, preparing for careers in healthcare, research, or environmental science.",
    coreClasses: [
      "General Biology I & II",
      "Cell Biology",
      "Genetics",
      "Microbiology",
      "Ecology",
      "Evolution",
      "Biochemistry",
      "Molecular Biology",
      "Anatomy and Physiology",
      "Research Methods/Lab"
    ],
    classExample: "In Genetics, you'll study how traits are inherited and how DNA works. You might investigate why some genetic diseases run in families, learn to predict offspring traits using Punnett squares and more advanced methods, study how mutations cause cancer, and even perform experiments with fruit flies or bacteria to see genetic principles in action. You'll read research papers, analyze data, and understand how modern genetics enables personalized medicine.",
    highSchoolComparison: "Much more in-depth than AP Biology. If you found learning about cells, DNA, ecosystems, or how the body works fascinating, a biology major goes deeper into mechanisms and research. It's heavy on memorization but also emphasizes critical thinking and experimental design. Perfect for pre-med students or those interested in life sciences research.",
    topUniversities: ["mit", "stanford", "harvard", "berkeley", "johns-hopkins", "yale", "duke", "cornell", "ucsd", "washington"],
    topCareers: ["registered-nurse", "physical-therapist", "teacher"]
  },
  {
    id: "business-administration",
    name: "Business Administration",
    description: "Business Administration provides a broad foundation in business principles including management, finance, marketing, and operations. It's a versatile degree for various business careers.",
    coreClasses: [
      "Principles of Management",
      "Financial Accounting",
      "Business Economics",
      "Marketing Fundamentals",
      "Operations Management",
      "Business Law",
      "Organizational Behavior",
      "Business Statistics",
      "Strategic Management",
      "Business Ethics"
    ],
    classExample: "In Strategic Management, you'll analyze real companies and develop business strategies. You might study how Netflix transitioned from DVDs to streaming, evaluating competitive threats, market opportunities, and strategic decisions. You'd conduct SWOT analyses, assess industry trends, and present recommendations for a company's future direction. The course integrates concepts from marketing, finance, and management to understand how successful businesses compete and grow.",
    highSchoolComparison: "Combines elements from Economics (markets and decision-making) with practical business skills. If you're interested in entrepreneurship, how companies operate, or becoming a manager but aren't sure which specific business area interests you most, business administration offers broad exposure before specializing.",
    topUniversities: ["penn", "michigan", "berkeley", "nyu", "virginia", "cornell", "texas", "unc", "usc", "indiana"],
    topCareers: ["marketing-manager", "financial-analyst"]
  },
  {
    id: "economics",
    name: "Economics",
    description: "Economics studies how societies allocate scarce resources, analyze markets, and make decisions. Students learn economic theory, quantitative methods, and policy analysis.",
    coreClasses: [
      "Microeconomic Theory",
      "Macroeconomic Theory",
      "Econometrics",
      "Game Theory",
      "Labor Economics",
      "International Economics",
      "Public Economics",
      "Financial Economics",
      "Economic Development",
      "Statistics for Economics"
    ],
    classExample: "In Microeconomic Theory, you'll analyze how individuals and businesses make decisions. You might study how raising the minimum wage affects employment, model how companies set prices in different market structures, or analyze why some goods are taxed and others subsidized. You'll use graphs and math to predict behavior, test theories with real data, and learn to think like an economist about trade-offs and incentives. It's very analytical and research-focused.",
    highSchoolComparison: "Much more mathematical and theoretical than AP Economics. If you enjoyed thinking about trade-offs, understanding market behavior, and using graphs and logic to solve problems, economics adds rigorous mathematical modeling and statistical analysis. It's great preparation for policy work, consulting, or graduate study.",
    topUniversities: ["mit", "harvard", "stanford", "princeton", "chicago", "berkeley", "yale", "northwestern", "columbia", "penn"],
    topCareers: ["financial-analyst"]
  },
  {
    id: "communications",
    name: "Communications",
    description: "Communications majors study how people share information and create meaning through media, public relations, journalism, and interpersonal interaction. The field combines theory, creativity, and practical skills.",
    coreClasses: [
      "Introduction to Communication Theory",
      "Media Writing",
      "Public Speaking",
      "Public Relations",
      "Digital Media Production",
      "Journalism",
      "Organizational Communication",
      "Media Law and Ethics",
      "Social Media Strategy",
      "Communication Research Methods"
    ],
    classExample: "In Public Relations, you'll learn to manage an organization's image and communicate with stakeholders. You might develop a crisis communication plan for a company facing negative press, create a media campaign to launch a new product, write press releases, and practice pitching stories to journalists. You'll study real PR campaigns - both successful and disastrous - analyzing strategy, audience, and messaging. The work combines writing, strategy, and understanding human psychology.",
    highSchoolComparison: "Builds on English (writing and analysis) and combines it with media, psychology, and modern technology. If you enjoyed writing, creating videos or podcasts, public speaking, or understanding how media influences society, communications provides frameworks and skills for professional media and organizational communication careers.",
    topUniversities: ["usc", "northwestern", "penn", "texas", "syracuse", "unc", "florida", "ohio-state", "wisconsin", "boston-university"],
    topCareers: ["marketing-manager"]
  },
  {
    id: "mathematics",
    name: "Mathematics",
    description: "Mathematics majors study abstract mathematical theories, proofs, and applications. The field develops rigorous logical thinking and problem-solving skills applicable to many careers.",
    coreClasses: [
      "Calculus III (Multivariable)",
      "Linear Algebra",
      "Differential Equations",
      "Real Analysis",
      "Abstract Algebra",
      "Probability Theory",
      "Mathematical Statistics",
      "Numerical Analysis",
      "Topology",
      "Senior Research/Seminar"
    ],
    classExample: "In Real Analysis, you'll rigorously prove concepts you learned in calculus. Instead of just calculating derivatives, you'll prove why differentiation rules work, understand the precise definition of limits, and explore functions that challenge intuition. You might prove that certain infinite series converge or construct unusual functions. It's very theoretical, focused on logical reasoning and writing formal proofs. This course teaches you to think precisely and abstractly.",
    highSchoolComparison: "Very different from high school math - much more about proofs and theory than calculation. If you enjoyed the logic and patterns in math, liked explaining why formulas work (not just using them), or excelled at competition math, a math major goes deep into abstract thinking. It's challenging but develops powerful analytical skills.",
    topUniversities: ["mit", "princeton", "harvard", "stanford", "berkeley", "chicago", "caltech", "columbia", "yale", "cornell"],
    topCareers: ["data-scientist", "financial-analyst", "teacher"]
  },
  {
    id: "statistics",
    name: "Statistics",
    description: "Statistics focuses on collecting, analyzing, and interpreting data. Students learn to design experiments, build models, and make data-driven decisions in the face of uncertainty.",
    coreClasses: [
      "Probability Theory",
      "Statistical Inference",
      "Regression Analysis",
      "Experimental Design",
      "Multivariate Statistics",
      "Time Series Analysis",
      "Bayesian Statistics",
      "Statistical Computing (R/SAS)",
      "Sampling Theory",
      "Statistical Machine Learning"
    ],
    classExample: "In Regression Analysis, you'll build models to understand relationships between variables. You might analyze factors affecting house prices, creating a model that predicts price based on size, location, and age, then testing whether your model is reliable. You'll learn to check assumptions, identify when predictions are trustworthy, and communicate statistical findings to non-statisticians. It's highly practical and used everywhere from medical research to business analytics.",
    highSchoolComparison: "More rigorous and mathematical than AP Statistics, with stronger emphasis on theory and computing. If you enjoyed working with data, probability problems, and understanding variability and uncertainty, statistics provides professional tools for data analysis. It's increasingly in-demand across industries from tech to healthcare to government.",
    topUniversities: ["stanford", "berkeley", "harvard", "washington", "chicago", "cmu", "duke", "unc", "wisconsin", "michigan"],
    topCareers: ["data-scientist", "financial-analyst"]
  },
  {
    id: "kinesiology",
    name: "Kinesiology",
    description: "Kinesiology is the scientific study of human movement, integrating anatomy, physiology, biomechanics, and motor control. It's excellent preparation for healthcare and fitness professions.",
    coreClasses: [
      "Functional Anatomy",
      "Exercise Physiology",
      "Biomechanics",
      "Motor Learning and Development",
      "Sport and Exercise Psychology",
      "Nutrition",
      "Athletic Training",
      "Adapted Physical Activity",
      "Research Methods in Kinesiology",
      "Clinical Practicum"
    ],
    classExample: "In Exercise Physiology, you'll study how the body responds to physical activity. You might measure heart rate and oxygen consumption during different exercises, analyze how training improves cardiovascular fitness, and design exercise programs for specific goals. In lab, you could test classmates on treadmills while monitoring their physiological responses, then interpret the data to make training recommendations. It's hands-on and directly applicable to coaching, therapy, and fitness careers.",
    highSchoolComparison: "Similar to Exercise Science, building on Biology and interest in human performance. If you were an athlete who wanted to understand training scientifically, enjoyed anatomy in Biology, or are interested in physical therapy or athletic training, kinesiology provides the scientific foundation combined with practical application.",
    topUniversities: ["michigan", "penn-state", "wisconsin", "usc", "florida", "minnesota", "illinois", "north-carolina", "georgia", "texas"],
    topCareers: ["physical-therapist"]
  },
  {
    id: "english",
    name: "English",
    description: "English majors study literature, writing, critical analysis, and communication. The program develops strong analytical thinking, writing, and interpretive skills valuable across many careers.",
    coreClasses: [
      "British Literature Survey",
      "American Literature Survey",
      "World Literature",
      "Literary Theory and Criticism",
      "Creative Writing",
      "Shakespeare",
      "Modern and Contemporary Literature",
      "Writing and Rhetoric",
      "Genre Studies (Poetry, Fiction, Drama)",
      "Senior Seminar/Thesis"
    ],
    classExample: "In Literary Theory and Criticism, you'll learn different frameworks for analyzing texts. You might read a novel and interpret it through feminist, psychoanalytic, or postcolonial lenses, seeing how different perspectives reveal different meanings. You'll write analytical essays, debate interpretations, and develop your critical thinking. For example, analyzing how 'The Great Gatsby' reflects the American Dream requires examining symbolism, historical context, character motivation, and narrative technique.",
    highSchoolComparison: "Much deeper analysis than high school English. If you loved discussing books, enjoyed writing essays, or were curious about how language shapes meaning and culture, an English major lets you explore literature seriously while developing writing skills employers value. It's about critical thinking, not just reading for enjoyment.",
    topUniversities: ["harvard", "berkeley", "yale", "columbia", "stanford", "princeton", "cornell", "michigan", "duke", "unc"],
    topCareers: ["teacher", "marketing-manager"]
  },
  {
    id: "aerospace-engineering",
    name: "Aerospace Engineering",
    description: "Aerospace Engineering applies engineering principles to design aircraft, spacecraft, satellites, and missiles. Students learn aerodynamics, propulsion, structures, and flight mechanics.",
    coreClasses: [
      "Aerodynamics",
      "Flight Mechanics",
      "Aircraft Structures",
      "Propulsion Systems",
      "Space Systems Design",
      "Control and Stability",
      "Computational Fluid Dynamics",
      "Aerospace Materials",
      "Orbital Mechanics",
      "Senior Design Project"
    ],
    classExample: "In Aerodynamics, you'll study how air flows around objects and generates lift and drag. You might calculate the lift force on a wing, design a wing shape for optimal performance, or analyze why airplanes are shaped the way they are. You'll use computer simulations to visualize airflow and test your designs in wind tunnels. For example, you could optimize a drone design to maximize flight time by reducing drag while maintaining lift.",
    highSchoolComparison: "Heavily uses Physics (especially mechanics and forces) and Calculus. If you were fascinated by airplanes, space exploration, or rockets, and enjoyed physics problems about projectile motion and forces, aerospace engineering applies those concepts to design vehicles that fly. It's one of the most mathematically challenging engineering disciplines but very exciting for aviation and space enthusiasts.",
    topUniversities: ["mit", "stanford", "caltech", "georgia-tech", "michigan", "purdue", "illinois", "texas", "maryland", "colorado"],
    topCareers: ["mechanical-engineer"]
  }
];
