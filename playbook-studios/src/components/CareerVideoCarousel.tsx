import React, { useEffect, useState, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Play, DollarSign, Building2, GraduationCap } from 'lucide-react';
import { careers } from '../data/careers';

interface WorkExperience {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  years: string;
}

interface CareerVideo {
  careerId: string;
  careerTitle: string;
  personName: string;
  personAge: number;
  companyName: string;
  companyLogo: string;
  quote: string;
  gradientFrom: string;
  gradientTo: string;
  videoUrl: string;
  collegeMajor: string;
  university: string;
  yearsOfExperience: number;
  workHistory: WorkExperience[];
}

const careerVideos: CareerVideo[] = [
  {
    careerId: "software-developer",
    careerTitle: "Software Developer",
    personName: "Marcus Chen",
    personAge: 26,
    companyName: "Google",
    companyLogo: "https://logo.clearbit.com/google.com",
    quote: "I build apps that millions of people use every day. Started coding in high school, now I'm creating features for a top tech company. The best part? I can work from anywhere and the pay is incredible.",
    gradientFrom: "#667eea",
    gradientTo: "#764ba2",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    collegeMajor: "Computer Science",
    university: "Stanford University",
    yearsOfExperience: 5,
    workHistory: [
      {
        companyName: "Google",
        companyLogo: "https://logo.clearbit.com/google.com",
        jobTitle: "Senior Software Engineer",
        years: "2022-Present"
      },
      {
        companyName: "Meta",
        companyLogo: "https://logo.clearbit.com/meta.com",
        jobTitle: "Software Engineer",
        years: "2020-2022"
      },
      {
        companyName: "Startup Inc",
        companyLogo: "https://logo.clearbit.com/startup.com",
        jobTitle: "Junior Developer",
        years: "2019-2020"
      }
    ]
  },
  {
    careerId: "registered-nurse",
    careerTitle: "Registered Nurse",
    personName: "Sarah Johnson",
    personAge: 29,
    companyName: "Mayo Clinic",
    companyLogo: "https://logo.clearbit.com/mayoclinic.org",
    quote: "Every day I make a real difference in people's lives. It's challenging but so rewarding. I help patients recover, comfort families, and the job security is amazing. Plus, there are so many specialties to explore.",
    gradientFrom: "#f093fb",
    gradientTo: "#f5576c",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    collegeMajor: "Nursing",
    university: "Johns Hopkins University",
    yearsOfExperience: 7,
    workHistory: [
      {
        companyName: "Mayo Clinic",
        companyLogo: "https://logo.clearbit.com/mayoclinic.org",
        jobTitle: "ICU Nurse",
        years: "2021-Present"
      },
      {
        companyName: "Cleveland Clinic",
        companyLogo: "https://logo.clearbit.com/clevelandclinic.org",
        jobTitle: "Registered Nurse",
        years: "2018-2021"
      },
      {
        companyName: "Community Hospital",
        companyLogo: "https://logo.clearbit.com/hospital.com",
        jobTitle: "Staff Nurse",
        years: "2016-2018"
      }
    ]
  },
  {
    careerId: "ux-designer",
    careerTitle: "UX/UI Designer",
    personName: "Alex Rivera",
    personAge: 25,
    companyName: "Adobe",
    companyLogo: "https://logo.clearbit.com/adobe.com",
    quote: "I turn ideas into beautiful, user-friendly designs. My art degree actually became a lucrative career! I work with developers and clients to create apps and websites that people love using.",
    gradientFrom: "#4facfe",
    gradientTo: "#00f2fe",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
    collegeMajor: "Graphic Design",
    university: "Rhode Island School of Design",
    yearsOfExperience: 4,
    workHistory: [
      {
        companyName: "Adobe",
        companyLogo: "https://logo.clearbit.com/adobe.com",
        jobTitle: "Senior UX Designer",
        years: "2023-Present"
      },
      {
        companyName: "Airbnb",
        companyLogo: "https://logo.clearbit.com/airbnb.com",
        jobTitle: "UX Designer",
        years: "2021-2023"
      },
      {
        companyName: "Design Studio",
        companyLogo: "https://logo.clearbit.com/designstudio.com",
        jobTitle: "Junior Designer",
        years: "2020-2021"
      }
    ]
  },
  {
    careerId: "data-scientist",
    careerTitle: "Data Scientist",
    personName: "Priya Patel",
    personAge: 28,
    companyName: "Netflix",
    companyLogo: "https://logo.clearbit.com/netflix.com",
    quote: "I find patterns in data that help companies make million-dollar decisions. It's like being a detective with numbers. Started with a math degree, now I'm using AI and machine learning to solve real problems.",
    gradientFrom: "#43e97b",
    gradientTo: "#38f9d7",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
    collegeMajor: "Data Science",
    university: "UC Berkeley",
    yearsOfExperience: 6,
    workHistory: [
      {
        companyName: "Netflix",
        companyLogo: "https://logo.clearbit.com/netflix.com",
        jobTitle: "Senior Data Scientist",
        years: "2022-Present"
      },
      {
        companyName: "Amazon",
        companyLogo: "https://logo.clearbit.com/amazon.com",
        jobTitle: "Data Scientist",
        years: "2019-2022"
      },
      {
        companyName: "DataTech Corp",
        companyLogo: "https://logo.clearbit.com/datatech.com",
        jobTitle: "Data Analyst",
        years: "2018-2019"
      }
    ]
  },
  {
    careerId: "physical-therapist",
    careerTitle: "Physical Therapist",
    personName: "Jordan Martinez",
    personAge: 31,
    companyName: "ATI Physical Therapy",
    companyLogo: "https://logo.clearbit.com/atipt.com",
    quote: "I help athletes get back in the game and seniors stay independent. Seeing someone walk again after an injury is the best feeling. Great work-life balance and I can open my own practice someday.",
    gradientFrom: "#fa709a",
    gradientTo: "#fee140",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    collegeMajor: "Exercise Science",
    university: "University of Southern California",
    yearsOfExperience: 8,
    workHistory: [
      {
        companyName: "ATI Physical Therapy",
        companyLogo: "https://logo.clearbit.com/atipt.com",
        jobTitle: "Senior Physical Therapist",
        years: "2020-Present"
      },
      {
        companyName: "Sports Medicine Center",
        companyLogo: "https://logo.clearbit.com/sportsmed.com",
        jobTitle: "Physical Therapist",
        years: "2017-2020"
      },
      {
        companyName: "Rehabilitation Hospital",
        companyLogo: "https://logo.clearbit.com/rehab.com",
        jobTitle: "PT Associate",
        years: "2016-2017"
      }
    ]
  },
  {
    careerId: "marketing-manager",
    careerTitle: "Marketing Manager",
    personName: "Emily Thompson",
    personAge: 27,
    companyName: "Meta",
    companyLogo: "https://logo.clearbit.com/meta.com",
    quote: "I create campaigns that go viral and drive sales. Every day is different - analyzing data, brainstorming creative ideas, working with influencers. If you love social media and creativity, this is it.",
    gradientFrom: "#30cfd0",
    gradientTo: "#330867",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    collegeMajor: "Marketing",
    university: "New York University",
    yearsOfExperience: 5,
    workHistory: [
      {
        companyName: "Meta",
        companyLogo: "https://logo.clearbit.com/meta.com",
        jobTitle: "Marketing Manager",
        years: "2022-Present"
      },
      {
        companyName: "Spotify",
        companyLogo: "https://logo.clearbit.com/spotify.com",
        jobTitle: "Marketing Specialist",
        years: "2020-2022"
      },
      {
        companyName: "Creative Agency",
        companyLogo: "https://logo.clearbit.com/agency.com",
        jobTitle: "Marketing Coordinator",
        years: "2019-2020"
      }
    ]
  },
  {
    careerId: "mechanical-engineer",
    careerTitle: "Mechanical Engineer",
    personName: "David Kim",
    personAge: 30,
    companyName: "Tesla",
    companyLogo: "https://logo.clearbit.com/tesla.com",
    quote: "I design the future - from electric cars to renewable energy systems. If you love building things and solving complex problems, engineering is incredible. The projects I work on will change the world.",
    gradientFrom: "#a8edea",
    gradientTo: "#fed6e3",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
    collegeMajor: "Mechanical Engineering",
    university: "MIT",
    yearsOfExperience: 7,
    workHistory: [
      {
        companyName: "Tesla",
        companyLogo: "https://logo.clearbit.com/tesla.com",
        jobTitle: "Senior Mechanical Engineer",
        years: "2021-Present"
      },
      {
        companyName: "SpaceX",
        companyLogo: "https://logo.clearbit.com/spacex.com",
        jobTitle: "Mechanical Engineer",
        years: "2018-2021"
      },
      {
        companyName: "Boeing",
        companyLogo: "https://logo.clearbit.com/boeing.com",
        jobTitle: "Associate Engineer",
        years: "2017-2018"
      }
    ]
  },
  {
    careerId: "teacher",
    careerTitle: "High School Teacher",
    personName: "Michelle Brown",
    personAge: 33,
    companyName: "Boston Public Schools",
    companyLogo: "https://logo.clearbit.com/bostonpublicschools.org",
    quote: "I inspire the next generation every single day. Teaching biology means showing students how amazing science is. Seeing former students succeed in STEM careers makes everything worth it. Summers off doesn't hurt either!",
    gradientFrom: "#ff9a9e",
    gradientTo: "#fecfef",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4",
    collegeMajor: "Biology",
    university: "Boston University",
    yearsOfExperience: 10,
    workHistory: [
      {
        companyName: "Boston Public Schools",
        companyLogo: "https://logo.clearbit.com/bostonpublicschools.org",
        jobTitle: "Lead Science Teacher",
        years: "2019-Present"
      },
      {
        companyName: "Cambridge High School",
        companyLogo: "https://logo.clearbit.com/cambridge.org",
        jobTitle: "Biology Teacher",
        years: "2015-2019"
      },
      {
        companyName: "Charter Academy",
        companyLogo: "https://logo.clearbit.com/charter.org",
        jobTitle: "Science Teacher",
        years: "2014-2015"
      }
    ]
  },
  {
    careerId: "cybersecurity-analyst",
    careerTitle: "Cybersecurity Analyst",
    personName: "Tyler Washington",
    personAge: 27,
    companyName: "CrowdStrike",
    companyLogo: "https://logo.clearbit.com/crowdstrike.com",
    quote: "I'm literally protecting companies from hackers. It's like playing chess against cybercriminals. The demand is insane, job security is top-tier, and companies pay big money to keep their data safe.",
    gradientFrom: "#a18cd1",
    gradientTo: "#fbc2eb",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    collegeMajor: "Cybersecurity",
    university: "Carnegie Mellon University",
    yearsOfExperience: 5,
    workHistory: [
      {
        companyName: "CrowdStrike",
        companyLogo: "https://logo.clearbit.com/crowdstrike.com",
        jobTitle: "Senior Security Analyst",
        years: "2022-Present"
      },
      {
        companyName: "Palo Alto Networks",
        companyLogo: "https://logo.clearbit.com/paloaltonetworks.com",
        jobTitle: "Security Analyst",
        years: "2020-2022"
      },
      {
        companyName: "SecureTech",
        companyLogo: "https://logo.clearbit.com/securetech.com",
        jobTitle: "Junior Analyst",
        years: "2019-2020"
      }
    ]
  }
];

export function CareerVideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Auto-advance carousel every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % careerVideos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Play video when it changes
    if (videoRef.current) {
      setIsPlaying(false);
      const timer = setTimeout(async () => {
        if (videoRef.current) {
          try {
            await videoRef.current.play();
            setIsPlaying(true);
          } catch (error) {
            console.log('Video autoplay failed:', error);
          }
        }
      }, 300);
      return () => clearTimeout(timer);
    }
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
    <div className="mt-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="relative">
          {/* Main Content - Shared Container */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center max-w-4xl mx-auto">
            {/* Video */}
            <div className="relative w-full max-w-md">
              <Card 
                className="neomorphic-card overflow-hidden relative aspect-[9/16] cursor-pointer w-full"
                style={{
                  background: `linear-gradient(135deg, ${currentVideo.gradientFrom}, ${currentVideo.gradientTo})`
                }}
                onClick={() => window.location.hash = `#/career/${currentVideo.careerId}`}
              >
                {/* Video Element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onClick={() => {
                    if (videoRef.current) {
                      if (videoRef.current.paused) {
                        videoRef.current.play();
                      } else {
                        videoRef.current.pause();
                      }
                    }
                  }}
                >
                  <source src={currentVideo.videoUrl} type="video/mp4" />
                </video>

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

            {/* Compact Information Card - Same width as video */}
            <Card className="neomorphic-card w-full max-w-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Education Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase">Education</span>
                    </div>
                    <div className="py-2 px-3 rounded-lg bg-purple-50">
                      <p className="text-sm font-medium text-purple-700">{currentVideo.collegeMajor}</p>
                      <p className="text-xs text-gray-600">{currentVideo.university}</p>
                    </div>
                  </div>

                  {/* Experience & Salary Row */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Experience Years */}
                    <div className="py-2 px-3 rounded-lg bg-blue-50 text-center">
                      <p className="text-xs text-gray-600">Experience</p>
                      <p className="text-lg font-bold text-blue-700">{currentVideo.yearsOfExperience} Years</p>
                    </div>

                    {/* Current Salary */}
                    {currentCareer && (
                      <div className="py-2 px-3 rounded-lg bg-green-50 text-center">
                        <p className="text-xs text-gray-600">Current Salary</p>
                        <p className="text-lg font-bold text-green-700">${(currentCareer.salary.tenYears / 1000).toFixed(0)}k</p>
                        <p className="text-xs text-gray-500">{currentCareer.salary.tenYearsPercentile}th percentile</p>
                      </div>
                    )}
                  </div>

                  {/* Work History */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <span className="text-xs font-semibold uppercase">Work History</span>
                    </div>
                    <div className="space-y-2">
                      {currentVideo.workHistory.map((job, index) => (
                        <div key={index} className="py-2 px-3 rounded-lg bg-gray-50 flex items-center gap-3">
                          <img 
                            src={job.companyLogo} 
                            alt={job.companyName}
                            className="w-8 h-8 rounded object-contain flex-shrink-0"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{job.jobTitle}</p>
                            <p className="text-xs text-gray-600">{job.companyName}</p>
                            <p className="text-xs text-gray-500">{job.years}</p>
                          </div>
                        </div>
                      ))}
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
    </div>
  );
}
