import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Target, ArrowRight, Users, BookOpen, Building, Brain, Heart, DollarSign, Clock } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v3.png';

interface SurveyQuestion {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'scale';
  options?: string[];
  description?: string;
}

export function FindYourPathPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isStarted, setIsStarted] = useState(false);

  // Placeholder survey questions
  const surveyQuestions: SurveyQuestion[] = [
    {
      id: 'interests',
      question: 'What subjects or activities do you enjoy most?',
      type: 'multiple',
      description: 'Select all that apply',
      options: [
        'Mathematics and Numbers',
        'Science and Experiments',
        'Writing and Communication',
        'Art and Design',
        'Technology and Computers',
        'Helping People',
        'Building and Creating',
        'Business and Leadership'
      ]
    },
    {
      id: 'skills',
      question: 'Which skills do you feel most confident in?',
      type: 'multiple',
      description: 'Choose your strongest areas',
      options: [
        'Problem Solving',
        'Communication',
        'Leadership',
        'Creativity',
        'Analytical Thinking',
        'Technical Skills',
        'Organizational Skills',
        'Teamwork'
      ]
    },
    {
      id: 'work_environment',
      question: 'What type of work environment appeals to you?',
      type: 'single',
      description: 'Select one option',
      options: [
        'Office/Corporate Setting',
        'Remote/Flexible Work',
        'Outdoor/Field Work',
        'Healthcare/Medical Setting',
        'Educational Environment',
        'Creative Studio/Workspace',
        'Laboratory/Research Facility',
        'Startup/Dynamic Environment'
      ]
    },
    {
      id: 'values',
      question: 'What matters most to you in a career?',
      type: 'multiple',
      description: 'Select your top priorities',
      options: [
        'High Salary Potential',
        'Work-Life Balance',
        'Making a Difference',
        'Job Security',
        'Career Growth',
        'Creative Freedom',
        'Helping Others',
        'Innovation and Technology'
      ]
    },
    {
      id: 'education_level',
      question: 'What level of education are you willing to pursue?',
      type: 'single',
      description: 'Consider your time and financial commitment',
      options: [
        'High School Diploma',
        'Associate Degree (2 years)',
        'Bachelor\'s Degree (4 years)',
        'Master\'s Degree (6+ years)',
        'Doctorate/Professional Degree (8+ years)',
        'Certification Programs',
        'Trade School/Apprenticeship'
      ]
    }
  ];

  const handleAnswer = (questionId: string, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Survey completed - show results placeholder
      alert('Survey completed! (Results feature coming soon)');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startSurvey = () => {
    setIsStarted(true);
    setCurrentQuestion(0);
    setAnswers({});
  };

  const currentQuestionData = surveyQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#/" className="cursor-pointer">
              <img 
                src={logoImage} 
                alt="The Career Playbook" 
                className="h-12 w-auto hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#/podcast" className="text-gray-600 hover:text-gray-900 transition-colors">Episodes</a>
            <a href="#/careers" className="text-gray-600 hover:text-gray-900 transition-colors">Careers</a>
            <a href="#/majors" className="text-gray-600 hover:text-gray-900 transition-colors">College Majors</a>
            <a href="#/universities" className="text-gray-600 hover:text-gray-900 transition-colors">Universities</a>
            <a href="#/find-your-path" className="text-gray-900 transition-colors">Find Your Path</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/auth" className="text-gray-600 hover:text-gray-900 transition-colors">Account</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6">
            <div className="inline-block neomorphic-icon-container-large mb-4">
              <Target className="h-12 w-12 text-purple-500" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Find Your Path
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take our personalized survey to discover career paths, majors, and universities that align with your interests, skills, and goals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          {!isStarted ? (
            /* Start Survey Card */
            <Card className="neomorphic-card">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Discover Your Future?
                </CardTitle>
                <p className="text-gray-600 mb-6">
                  Our personalized survey will help you find the perfect career path based on your interests, skills, and aspirations.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                {/* Survey Preview */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Brain className="h-5 w-5 text-blue-500 mr-2" />
                      What We'll Ask:
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Your interests and passions</li>
                      <li>• Your natural skills and strengths</li>
                      <li>• Preferred work environment</li>
                      <li>• Career values and priorities</li>
                      <li>• Education level preferences</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <Target className="h-5 w-5 text-green-500 mr-2" />
                      What You'll Get:
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Personalized career recommendations</li>
                      <li>• Matching college majors</li>
                      <li>• Recommended universities</li>
                      <li>• Step-by-step action plan</li>
                      <li>• Resources to get started</li>
                    </ul>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">Career Paths</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">100+</div>
                    <div className="text-sm text-gray-600">Majors</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">5 Min</div>
                    <div className="text-sm text-gray-600">Survey Time</div>
                  </div>
                </div>

                <Button 
                  onClick={startSurvey}
                  className="neomorphic-button-primary text-lg px-8 py-3"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            /* Survey Questions */
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="bg-white rounded-lg p-4 neomorphic-card">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">
                    Question {currentQuestion + 1} of {surveyQuestions.length}
                  </span>
                  <span className="text-sm text-gray-500">
                    {Math.round(((currentQuestion + 1) / surveyQuestions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / surveyQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Card */}
              <Card className="neomorphic-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 mb-2">
                    {currentQuestionData.question}
                  </CardTitle>
                  {currentQuestionData.description && (
                    <p className="text-gray-600 text-sm">
                      {currentQuestionData.description}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  {/* Question Options */}
                  <div className="space-y-3">
                    {currentQuestionData.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (currentQuestionData.type === 'multiple') {
                            const currentAnswers = answers[currentQuestionData.id] || [];
                            const newAnswers = currentAnswers.includes(option)
                              ? currentAnswers.filter((a: string) => a !== option)
                              : [...currentAnswers, option];
                            handleAnswer(currentQuestionData.id, newAnswers);
                          } else {
                            handleAnswer(currentQuestionData.id, option);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          (currentQuestionData.type === 'multiple' 
                            ? (answers[currentQuestionData.id] || []).includes(option)
                            : answers[currentQuestionData.id] === option
                          )
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {(currentQuestionData.type === 'multiple' 
                            ? (answers[currentQuestionData.id] || []).includes(option)
                            : answers[currentQuestionData.id] === option
                          ) && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    <Button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      variant="outline"
                      className="px-6"
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!answers[currentQuestionData.id] || 
                        (Array.isArray(answers[currentQuestionData.id]) && 
                         answers[currentQuestionData.id].length === 0)}
                      className="neomorphic-button-primary px-6"
                    >
                      {currentQuestion === surveyQuestions.length - 1 ? 'Get Results' : 'Next'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={logoImage} 
              alt="The Career Playbook" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-4">
            Empowering high school students to discover their future
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2025 The Career Playbook. All information is for educational purposes.
          </p>
        </div>
      </footer>

      <style jsx>{`
        .neomorphic-card {
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 20px 20px 40px #d1d1d1, -20px -20px 40px #ffffff;
          border: none;
          border-radius: 20px;
        }
        
        .neomorphic-icon-container-large {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
          box-shadow: inset 12px 12px 24px #dcdcdc, inset -12px -12px 24px #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .neomorphic-button-primary {
          background: linear-gradient(145deg, #667eea, #764ba2);
          box-shadow: 8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .neomorphic-button-primary:hover {
          box-shadow: 4px 4px 8px #d1d1d1, -4px -4px 8px #ffffff;
          transform: translateY(1px);
        }

        .neomorphic-button-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
      `}</style>
    </div>
  );
}
