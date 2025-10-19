import { useState } from 'react';
import { X } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';

interface AuthModalProps {
  type: 'login' | 'signup';
  onClose: () => void;
  onSubmit: (data: { name?: string; email: string; phone?: string; password: string }) => void;
  onSwitchType: () => void;
}

export function AuthModal({ type, onClose, onSubmit, onSwitchType }: AuthModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[#6B7280] hover:text-[#1A1A1A] transition-colors"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="mb-2">
            {type === 'login' ? 'Welcome Back' : 'Create Your Account'}
          </h2>
          <p className="text-[#6B7280] mb-6">
            {type === 'login'
              ? 'Login to continue your career exploration'
              : 'Join thousands of students discovering their career path'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {type === 'signup' && (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-1 bg-white border-[#E4E6EB]"
                />
              </div>
            )}

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="mt-1 bg-white border-[#E4E6EB]"
              />
            </div>

            {type === 'signup' && (
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-1 bg-white border-[#E4E6EB]"
                />
              </div>
            )}

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="mt-1 bg-white border-[#E4E6EB]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#5D5FEF] hover:bg-[#5D5FEF]/90 h-11"
            >
              {type === 'login' ? 'Log In' : 'Sign Up'}
            </Button>
          </form>

          <p className="text-xs text-[#6B7280] text-center mt-4">
            By continuing, you agree to our{' '}
            <button className="text-[#5D5FEF] hover:underline">Terms</button> and{' '}
            <button className="text-[#5D5FEF] hover:underline">Privacy Policy</button>.
          </p>

          <div className="mt-6 text-center">
            <button
              onClick={onSwitchType}
              className="text-[#6B7280] hover:text-[#5D5FEF] transition-colors"
            >
              {type === 'login' ? (
                <>
                  Don't have an account?{' '}
                  <span className="text-[#5D5FEF]">Sign up</span>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <span className="text-[#5D5FEF]">Log in</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
