import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { User, Mail, Lock, Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/images/career-playbook-logo-v3.png';

interface AuthFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Partial<AuthFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<AuthFormData> = {};

    // Name validation (only for signup)
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation (only for signup)
    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (isLogin) {
        console.log('Login attempt:', { email: formData.email, password: formData.password });
        // Handle login logic here
        alert('Login successful! (This is a demo)');
      } else {
        console.log('Signup attempt:', formData);
        // Handle signup logic here
        alert('Account created successfully! (This is a demo)');
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      setErrors({});
    } catch (error) {
      console.error('Auth error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof AuthFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/50">
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
            <a href="#/find-your-path" className="text-gray-600 hover:text-gray-900 transition-colors">Find Your Path</a>
            <a href="#/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a>
            <a href="#/auth" className="text-gray-900 transition-colors">Account</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-md mt-16">
        <Card className="neomorphic-card">
          <CardHeader className="text-center pb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="neomorphic-icon-container-large">
                {isLogin ? (
                  <LogIn className="h-8 w-8 text-blue-500" />
                ) : (
                  <UserPlus className="h-8 w-8 text-green-500" />
                )}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </CardTitle>
            <p className="text-gray-600 mt-2">
              {isLogin 
                ? 'Sign in to your account to continue' 
                : 'Join The Career Playbook community'
              }
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`pl-10 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`pl-10 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                </div>
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`pl-10 pr-10 ${errors.password ? 'border-red-500 focus:border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500 focus:border-red-500' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full neomorphic-button-primary"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </div>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </Button>

              {/* Toggle Mode */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="ml-1 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {isLogin ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

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
