export interface CareerAward {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  criteria: (career: any) => boolean;
}

export const careerAwards: CareerAward[] = [
  {
    id: "top-earner",
    title: "Top $ Earner",
    description: "Highest earning potential",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    criteria: (career) => career.salary.tenYears >= 120000
  },
  {
    id: "social-impact",
    title: "Positive Social Impact",
    description: "Makes a difference in people's lives",
    icon: "❤️",
    color: "bg-red-100 text-red-800 border-red-200",
    criteria: (career) => 
      ["Healthcare & Medicine", "Education & Social Services", "Legal & Public Service"].includes(career.category) ||
      career.id === "social-worker" || career.id === "teacher" || career.id === "school-counselor"
  },
  {
    id: "future-proof",
    title: "Future-Proof",
    description: "Highly secure against automation",
    icon: "🛡️",
    color: "bg-blue-100 text-blue-800 border-blue-200",
    criteria: (career) => career.stability.rating >= 9
  },
  {
    id: "fast-growing",
    title: "Fast Growing",
    description: "High demand and growth potential",
    icon: "📈",
    color: "bg-green-100 text-green-800 border-green-200",
    criteria: (career) => 
      career.stability.disruptionRisk.includes("Very Low") || 
      career.stability.disruptionRisk.includes("Low") ||
      career.id === "cybersecurity-analyst" || career.id === "data-scientist" || career.id === "ux-designer"
  },
  {
    id: "creative-freedom",
    title: "Creative Freedom",
    description: "High creativity and artistic expression",
    icon: "🎨",
    color: "bg-purple-100 text-purple-800 border-purple-200",
    criteria: (career) => 
      career.category === "Creative & Design" ||
      career.id === "marketing-manager" || career.id === "architect"
  },
  {
    id: "work-life-balance",
    title: "Work-Life Balance",
    description: "Good schedule flexibility",
    icon: "⚖️",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    criteria: (career) => 
      career.id === "teacher" || career.id === "physical-therapist" || 
      career.id === "social-worker" || career.id === "school-counselor" ||
      career.category === "Skilled Trades"
  },
  {
    id: "no-degree-needed",
    title: "No Degree Needed",
    description: "Can enter without college degree",
    icon: "🎓",
    color: "bg-orange-100 text-orange-800 border-orange-200",
    criteria: (career) => 
      career.category === "Skilled Trades" ||
      career.id === "police-officer"
  },
  {
    id: "tech-forward",
    title: "Tech Forward",
    description: "Cutting-edge technology and innovation",
    icon: "💻",
    color: "bg-cyan-100 text-cyan-800 border-cyan-200",
    criteria: (career) => 
      career.category === "Technology & Engineering" ||
      career.id === "data-scientist" || career.id === "cybersecurity-analyst"
  },
  {
    id: "entrepreneur-friendly",
    title: "Entrepreneur Friendly",
    description: "Great for starting your own business",
    icon: "🚀",
    color: "bg-pink-100 text-pink-800 border-pink-200",
    criteria: (career) => 
      career.id === "graphic-designer" || career.id === "physical-therapist" ||
      career.id === "architect" || career.id === "construction-manager" ||
      career.category === "Skilled Trades"
  },
  {
    id: "helping-others",
    title: "Helping Others",
    description: "Directly helps and serves people",
    icon: "🤝",
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    criteria: (career) => 
      career.id === "registered-nurse" || career.id === "physical-therapist" ||
      career.id === "teacher" || career.id === "social-worker" ||
      career.id === "school-counselor" || career.id === "psychologist"
  }
];

export function getCareerAwards(career: any): CareerAward[] {
  return careerAwards.filter(award => award.criteria(career));
}
