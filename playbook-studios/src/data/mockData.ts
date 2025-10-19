export interface Episode {
  id: string;
  title: string;
  guestName: string;
  jobTitle: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  keyTakeaways: string[];
  industry: string;
  salaryRange: string;
  educationLevel: string;
}

export const mockEpisodes: Episode[] = [
  {
    id: '1',
    title: 'From College Dropout to Tech Founder',
    guestName: 'Sarah Chen',
    jobTitle: 'CEO & Founder',
    company: 'TechVentures Inc.',
    thumbnail: 'https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA2MTM4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Sarah shares her journey from dropping out of college to building a multi-million dollar tech startup.',
    keyTakeaways: [
      'Take calculated risks early in your career',
      'Build a strong network of mentors',
      'Focus on solving real problems',
      'Persistence is more important than perfection',
      'Learn to embrace failure as a learning opportunity'
    ],
    industry: 'Technology',
    salaryRange: '$150k+',
    educationLevel: 'Some College'
  },
  {
    id: '2',
    title: 'Life as a Software Engineer at Google',
    guestName: 'Marcus Johnson',
    jobTitle: 'Senior Software Engineer',
    company: 'Google',
    thumbnail: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwY29kaW5nfGVufDF8fHx8MTc2MDY3NjcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Marcus discusses what it\'s really like working at one of the world\'s top tech companies.',
    keyTakeaways: [
      'Build side projects to showcase your skills',
      'Master data structures and algorithms',
      'Soft skills matter as much as technical skills',
      'Work-life balance is possible in tech',
      'Continuous learning is essential'
    ],
    industry: 'Technology',
    salaryRange: '$100k-$150k',
    educationLevel: 'Bachelor\'s Degree'
  },
  {
    id: '3',
    title: 'Breaking Into Medicine: A Resident\'s Story',
    guestName: 'Dr. Emily Rodriguez',
    jobTitle: 'Medical Resident',
    company: 'Johns Hopkins Hospital',
    thumbnail: 'https://images.unsplash.com/photo-1666886573230-2b730505f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yfGVufDF8fHx8MTc2MDY3NjcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Dr. Rodriguez talks about the challenges and rewards of pursuing a career in medicine.',
    keyTakeaways: [
      'Shadowing doctors early helps confirm your path',
      'Medical school is intense but manageable',
      'Building resilience is crucial',
      'Patient care is the most rewarding aspect',
      'Specialization options are vast'
    ],
    industry: 'Healthcare',
    salaryRange: '$50k-$75k',
    educationLevel: 'Doctorate/Professional'
  },
  {
    id: '4',
    title: 'Creative Director at a Top Agency',
    guestName: 'Alex Kim',
    jobTitle: 'Creative Director',
    company: 'Ogilvy',
    thumbnail: 'https://images.unsplash.com/photo-1623932078839-44eb01fbee63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNyZWF0aXZlJTIwd29ya3xlbnwxfHx8fDE3NjA2NzY3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Alex shares insights on breaking into the competitive world of advertising and design.',
    keyTakeaways: [
      'Build a strong portfolio from day one',
      'Internships are your foot in the door',
      'Learn to pitch your ideas confidently',
      'Stay updated with design trends',
      'Collaboration drives the best creative work'
    ],
    industry: 'Creative',
    salaryRange: '$75k-$100k',
    educationLevel: 'Bachelor\'s Degree'
  },
  {
    id: '5',
    title: 'Investment Banking 101',
    guestName: 'Michael Thompson',
    jobTitle: 'Investment Analyst',
    company: 'Goldman Sachs',
    thumbnail: 'https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGludGVydmlld3xlbnwxfHx8fDE3NjA2NzY3MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Michael breaks down what it takes to succeed in the demanding world of investment banking.',
    keyTakeaways: [
      'Excel skills are non-negotiable',
      'Networking opens doors to opportunities',
      'Long hours, but high rewards',
      'Financial modeling is a core skill',
      'Target your internships strategically'
    ],
    industry: 'Finance',
    salaryRange: '$100k-$150k',
    educationLevel: 'Bachelor\'s Degree'
  },
  {
    id: '6',
    title: 'From Intern to Marketing Manager',
    guestName: 'Jessica Williams',
    jobTitle: 'Marketing Manager',
    company: 'Nike',
    thumbnail: 'https://images.unsplash.com/photo-1758691736542-c437fea2c673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJlc2VudGF0aW9ufGVufDF8fHx8MTc2MDYzMzY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Jessica\'s path from a college intern to leading marketing campaigns at Nike.',
    keyTakeaways: [
      'Start with internships to gain experience',
      'Digital marketing skills are essential',
      'Data-driven decisions win campaigns',
      'Brand storytelling creates impact',
      'Career growth requires proactive learning'
    ],
    industry: 'Marketing',
    salaryRange: '$75k-$100k',
    educationLevel: 'Bachelor\'s Degree'
  },
  {
    id: '7',
    title: 'Building Products at Startup',
    guestName: 'David Park',
    jobTitle: 'Product Manager',
    company: 'Stripe',
    thumbnail: 'https://images.unsplash.com/photo-1758876019673-704b039d405c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjA2NDg0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'David explains the role of a product manager and how to break into product.',
    keyTakeaways: [
      'User research drives product decisions',
      'Learn to work cross-functionally',
      'Technical knowledge helps but isn\'t required',
      'Prioritization is a key skill',
      'Startups offer rapid learning opportunities'
    ],
    industry: 'Technology',
    salaryRange: '$100k-$150k',
    educationLevel: 'Bachelor\'s Degree'
  },
  {
    id: '8',
    title: 'Entrepreneurship in Your 20s',
    guestName: 'Rachel Green',
    jobTitle: 'Founder',
    company: 'GreenTech Solutions',
    thumbnail: 'https://images.unsplash.com/photo-1760432346910-8561becac1b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYwNjc2NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Rachel shares her journey of starting a sustainable tech company right after college.',
    keyTakeaways: [
      'Validate your idea before building',
      'Find co-founders who complement your skills',
      'Fundraising requires preparation and persistence',
      'Build in public to gain traction',
      'Customer feedback shapes your product'
    ],
    industry: 'Sustainability',
    salaryRange: 'Varies',
    educationLevel: 'Bachelor\'s Degree'
  }
];
