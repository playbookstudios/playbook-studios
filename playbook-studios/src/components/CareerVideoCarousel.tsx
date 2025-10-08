import { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, DollarSign } from 'lucide-react';
import { careers } from '../data/careers';

interface CareerVideo {
  careerId: string;
  careerTitle: string;
  personName: string;
  personAge: number;
  quote: string;
  gradientFrom: string;
  gradientTo: string;
}

const careerVideos: CareerVideo[] = [
  {
    careerId: "software-developer",
    careerTitle: "Software Developer",
    personName: "Marcus Chen",
    personAge: 26,
    quote: "I build apps that millions of people use every day. Started coding in high school, now I'm creating features for a top tech company. The best part? I can work from anywhere and the pay is incredible.",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2"
  },
  {
    careerId: "registered-nurse",
    careerTitle: "Registered Nurse",
    personName: "Sarah Johnson",
    personAge: 29,
    quote: "Every day I make a real difference in people's lives. It's challenging but so rewarding. I help patients recover, comfort families, and the job security is amazing. Plus, there are so many specialties to explore.",
    gradientFrom: "#f093fb",
    gradientTo: "#f5576c"
  },
  {
    careerId: "ux-designer",
    careerTitle: "UX/UI Designer",
    personName: "Alex Rivera",
    personAge: 25,
    quote: "I turn ideas into beautiful, user-friendly designs. My art degree actually became a lucrative career! I work with developers and clients to create apps and websites that people love using.",
    gradientFrom: "#4facfe",
    gradientTo: "#00f2fe"
  },
  {
    careerId: "data-scientist",
    careerTitle: "Data Scientist",
    personName: "Priya Patel",
    personAge: 28,
    quote: "I find patterns in data that help companies make million-dollar decisions. It's like being a detective with numbers. Started with a math degree, now I'm using AI and machine learning to solve real problems.",
    gradientFrom: "#43e97b",
    gradientTo: "#38f9d7"
  },
  {
    careerId: "physical-therapist",
    careerTitle: "Physical Therapist",
    personName: "Jordan Martinez",
    personAge: 31,
    quote: "I help athletes get back in the game and seniors stay independent. Seeing someone walk again after an injury is the best feeling. Great work-life balance and I can open my own practice someday.",
    gradientFrom: "#fa709a",
    gradientTo: "#fee140"
  },
  {
    careerId: "marketing-manager",
    careerTitle: "Marketing Manager",
    personName: "Emily Thompson",
    personAge: 27,
    quote: "I create campaigns that go viral and drive sales. Every day is different - analyzing data, brainstorming creative ideas, working with influencers. If you love social media and creativity, this is it.",
    gradientFrom: "#30cfd0",
    gradientTo: "#330867"
  },
  {
    careerId: "mechanical-engineer",
    careerTitle: "Mechanical Engineer",
    personName: "David Kim",
    personAge: 30,
    quote: "I design the future - from electric cars to renewable energy systems. If you love building things and solving complex problems, engineering is incredible. The projects I work on will change the world.",
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3"
  },
  {
    careerId: "teacher",
    careerTitle: "High School Teacher",
    personName: "Michelle Brown",
    personAge: 33,
    quote: "I inspire the next generation every single day. Teaching biology means showing students how amazing science is. Seeing former students succeed in STEM careers makes everything worth it. Summers off doesn't hurt either!",
    gradientFrom: "#ff9a9e",
    gradientTo: "#fecfef"
  },
  {
    careerId: "cybersecurity-analyst",
    careerTitle: "Cybersecurity Analyst",
    personName: "Tyler Washington",
    personAge: 27,
    quote: "I'm literally protecting companies from hackers. It's like playing chess against cybercriminals. The demand is insane, job security is top-tier, and companies pay big money to keep their data safe.",
    gradientFrom: "#a18cd1",
    gradientTo: "#fbc2eb"
  }
];

export function CareerVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % careerVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simulate video starting to play
    setIsPlaying(false);
    const timer = setTimeout(() => setIsPlaying(true), 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentVideo = careerVideos[currentIndex];
  const currentCareer = careers.find(c => c.id === currentVideo.careerId);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + careerVideos.length) % careerVideos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % careerVideos.length);
  };

  return (
    <section className="py-20 px-6 bg-white/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Hear From Real Professionals</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch people talk about what they love about their careers
          </p>
        </div>

        <div className="relative">
          {/* Main Content - Split Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Information Table */}
            <Card className="neomorphic-card">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="pb-4 border-b border-gray-200">
                    <h3 className="text-3xl mb-2">{currentVideo.personName}</h3>
                    <p className="text-xl text-gray-600">{currentVideo.careerTitle}</p>
                  </div>

                  {/* Info Table */}
                  <div className="space-y-4">
                    {/* Full Name Row */}
                    <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100">
                      <span className="text-gray-600">Full Name</span>
                      <span className="text-gray-900">{currentVideo.personName}, {currentVideo.personAge}</span>
                    </div>

                    {/* Job Title Row */}
                    <div className="flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                      <span className="text-gray-600">Career</span>
                      <span className="text-blue-700">{currentVideo.careerTitle}</span>
                    </div>

                    {/* Salary Range Row */}
                    {currentCareer && (
                      <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50">
                        <div className="flex items-center gap-2 mb-3">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <span className="text-gray-600">Salary Range</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Entry Level</p>
                            <p className="text-green-700">${(currentCareer.salary.entryLevel / 1000).toFixed(0)}k/year</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">After 10 Years</p>
                            <p className="text-green-700">${(currentCareer.salary.tenYears / 1000).toFixed(0)}k/year</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quote */}
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                      <p className="text-xs text-gray-500 mb-2">What They Say</p>
                      <p className="text-gray-700 italic leading-relaxed">
                        "{currentVideo.quote}"
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="neomorphic-button-primary w-full"
                    size="lg"
                    onClick={() => window.location.hash = `#/career/${currentVideo.careerId}`}
                  >
                    Learn More About This Career
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right Side - Video */}
            <div className="relative">
              <Card 
                className="neomorphic-card overflow-hidden relative aspect-[9/16] cursor-pointer mx-auto max-w-md"
                style={{
                  background: `linear-gradient(135deg, ${currentVideo.gradientFrom}, ${currentVideo.gradientTo})`
                }}
                onClick={() => window.location.hash = `#/career/${currentVideo.careerId}`}
              >
                {/* Video overlay effect */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Play indicator (shows briefly when video loads) */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
                    <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-10 w-10 text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Person overlay on video */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-20">
                  <div className="text-center space-y-2">
                    <h4 className="text-2xl text-white">{currentVideo.personName}</h4>
                    <p className="text-lg text-white/90">{currentVideo.careerTitle}</p>
                  </div>
                </div>

                {/* Mute/Unmute Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMuted(!isMuted);
                  }}
                  className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/40 transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-white" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-white" />
                  )}
                </button>
              </Card>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 neomorphic-icon-container flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {careerVideos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600' 
                      : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 neomorphic-icon-container flex items-center justify-center hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-icon-container {
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
          border-radius: 50%;
        }

        .neomorphic-button-primary {
          background: linear-gradient(145deg, #667eea, #764ba2);
          color: white;
          box-shadow: 8px 8px 16px #5a6fd8, -8px -8px 16px #7c5fae;
          border: none;
          border-radius: 12px;
        }
        
        .neomorphic-button-primary:hover {
          box-shadow: 4px 4px 8px #5a6fd8, -4px -4px 8px #7c5fae;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}
