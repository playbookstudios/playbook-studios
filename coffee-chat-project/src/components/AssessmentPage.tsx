import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { CheckCircle, Circle, ArrowLeft, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

const assessmentQuestions: Question[] = [
  {
    id: 1,
    question: "What's your current career stage?",
    options: ["Student", "Recent Graduate", "Career Changer", "Professional (1-3 years)", "Professional (3+ years)"],
    category: "Experience"
  },
  {
    id: 2,
    question: "Which industry interests you most?",
    options: ["Technology", "Finance", "Healthcare", "Consulting", "Marketing", "Other"],
    category: "Industry"
  },
  {
    id: 3,
    question: "What type of role are you targeting?",
    options: ["Software Engineering", "Product Management", "Data Science", "Design (UX/UI)", "Marketing", "Business Development"],
    category: "Role"
  },
  {
    id: 4,
    question: "How would you describe your technical skills?",
    options: ["Beginner", "Some experience", "Intermediate", "Advanced", "Expert"],
    category: "Skills"
  },
  {
    id: 5,
    question: "What's your preferred work environment?",
    options: ["Remote", "In-office", "Hybrid", "No preference"],
    category: "Environment"
  },
  {
    id: 6,
    question: "What's most important to you in a job?",
    options: ["High salary", "Work-life balance", "Learning opportunities", "Company culture", "Career advancement"],
    category: "Values"
  },
  {
    id: 7,
    question: "How confident are you in interviews?",
    options: ["Very nervous", "Somewhat nervous", "Neutral", "Somewhat confident", "Very confident"],
    category: "Confidence"
  },
  {
    id: 8,
    question: "What's your biggest career challenge?",
    options: ["Getting interviews", "Technical skills", "Soft skills", "Networking", "Salary negotiation"],
    category: "Challenges"
  }
];

const recommendations = {
  "Technical Focus": {
    title: "Technical Skills Development",
    description: "Focus on building strong technical foundations",
    actions: [
      "Complete coding challenges and technical assessments",
      "Practice system design interviews",
      "Build portfolio projects",
      "Attend technical workshops"
    ],
    resources: ["Coding Interview Library", "System Design Course", "Project Templates"]
  },
  "Leadership Focus": {
    title: "Leadership & Strategy Development",
    description: "Develop strategic thinking and leadership skills",
    actions: [
      "Practice case study interviews",
      "Develop business acumen",
      "Build presentation skills",
      "Network with industry leaders"
    ],
    resources: ["Case Study Library", "Business Fundamentals", "Leadership Workshops"]
  },
  "Creative Focus": {
    title: "Creative & Design Skills",
    description: "Enhance your creative and design abilities",
    actions: [
      "Build a strong design portfolio",
      "Practice design challenges",
      "Learn user research methods",
      "Study design systems"
    ],
    resources: ["Design Portfolio Guide", "UX Research Tools", "Design System Examples"]
  },
  "Balanced Focus": {
    title: "Well-Rounded Development",
    description: "Develop a balanced skill set across multiple areas",
    actions: [
      "Practice various interview types",
      "Build both technical and soft skills",
      "Expand your network",
      "Explore different career paths"
    ],
    resources: ["Comprehensive Interview Guide", "Skill Assessment", "Career Explorer"]
  }
};

export function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const totalSteps = assessmentQuestions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers(prev => ({
        ...prev,
        [assessmentQuestions[currentStep].id]: selectedAnswer
      }));
      setSelectedAnswer('');
      
      if (currentStep < totalSteps - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsComplete(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setSelectedAnswer(answers[assessmentQuestions[currentStep - 1].id] || '');
    }
  };

  const getRecommendation = () => {
    const roleAnswer = answers[3]; // Role question
    const skillsAnswer = answers[4]; // Skills question
    
    if (roleAnswer?.includes('Software') || roleAnswer?.includes('Data')) {
      return recommendations["Technical Focus"];
    } else if (roleAnswer?.includes('Product') || roleAnswer?.includes('Business')) {
      return recommendations["Leadership Focus"];
    } else if (roleAnswer?.includes('Design')) {
      return recommendations["Creative Focus"];
    } else {
      return recommendations["Balanced Focus"];
    }
  };

  if (isComplete) {
    const recommendation = getRecommendation();
    
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-3xl">Assessment Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">{recommendation.title}</h3>
              <p className="text-muted-foreground text-lg">{recommendation.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recommendation.actions.map((action, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Circle className="h-4 w-4 mt-0.5 text-primary" />
                        <span className="text-sm">{action}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommended Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recommendation.resources.map((resource, index) => (
                      <Button key={index} variant="outline" className="w-full justify-start">
                        {resource}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Your personalized development plan has been created based on your responses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  View Full Plan
                </Button>
                <Button size="lg" variant="outline">
                  Retake Assessment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = assessmentQuestions[currentStep];

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Career Assessment</h1>
          <span className="text-sm text-muted-foreground">
            {currentStep + 1} of {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="w-full" />
      </div>

      <Card>
        <CardHeader>
          <div className="mb-2">
            <span className="text-sm text-primary font-medium">{currentQuestion.category}</span>
          </div>
          <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 0}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="flex items-center space-x-2"
            >
              <span>{currentStep === totalSteps - 1 ? 'Complete' : 'Next'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        <p>This assessment takes about 3-4 minutes to complete.</p>
      </div>
    </div>
  );
}