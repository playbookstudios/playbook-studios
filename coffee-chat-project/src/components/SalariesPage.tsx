import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, MapPin, Briefcase, DollarSign, Users, Award } from 'lucide-react';

const salaryData = {
  'Software Engineer': [
    { experience: '0-1 years', salary: 95000, city: 'San Francisco', company: 'Google' },
    { experience: '2-3 years', salary: 135000, city: 'San Francisco', company: 'Meta' },
    { experience: '4-6 years', salary: 180000, city: 'San Francisco', company: 'Netflix' },
    { experience: '7+ years', salary: 250000, city: 'San Francisco', company: 'Stripe' },
  ],
  'Product Manager': [
    { experience: '0-1 years', salary: 110000, city: 'New York', company: 'Spotify' },
    { experience: '2-3 years', salary: 145000, city: 'New York', company: 'Airbnb' },
    { experience: '4-6 years', salary: 195000, city: 'New York', company: 'Uber' },
    { experience: '7+ years', salary: 280000, city: 'New York', company: 'Amazon' },
  ],
  'Data Scientist': [
    { experience: '0-1 years', salary: 100000, city: 'Seattle', company: 'Microsoft' },
    { experience: '2-3 years', salary: 130000, city: 'Seattle', company: 'Tesla' },
    { experience: '4-6 years', salary: 170000, city: 'Seattle', company: 'Apple' },
    { experience: '7+ years', salary: 220000, city: 'Seattle', company: 'Meta' },
  ],
};

const cityComparison = [
  { city: 'San Francisco', avgSalary: 165000, costOfLiving: 100 },
  { city: 'New York', avgSalary: 157500, costOfLiving: 95 },
  { city: 'Seattle', avgSalary: 155000, costOfLiving: 85 },
  { city: 'Austin', avgSalary: 130000, costOfLiving: 70 },
  { city: 'Chicago', avgSalary: 125000, costOfLiving: 75 },
  { city: 'Remote', avgSalary: 140000, costOfLiving: 65 },
];

const industryDistribution = [
  { name: 'Tech', value: 45, color: '#8884d8' },
  { name: 'Finance', value: 25, color: '#82ca9d' },
  { name: 'Healthcare', value: 15, color: '#ffc658' },
  { name: 'Consulting', value: 10, color: '#ff7300' },
  { name: 'Other', value: 5, color: '#00ff88' },
];

export function SalariesPage() {
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [selectedExperience, setSelectedExperience] = useState([2]);
  const [selectedCity, setSelectedCity] = useState('San Francisco');

  const roles = Object.keys(salaryData);
  const cities = ['San Francisco', 'New York', 'Seattle', 'Austin', 'Chicago', 'Remote'];
  
  const currentRoleData = salaryData[selectedRole as keyof typeof salaryData];
  const experienceLevel = selectedExperience[0];
  
  const getExperienceRange = (level: number) => {
    switch(level) {
      case 0: return '0-1 years';
      case 1: return '2-3 years';
      case 2: return '4-6 years';
      case 3: return '7+ years';
      default: return '4-6 years';
    }
  };

  const getCurrentSalaryEstimate = () => {
    const expRange = getExperienceRange(experienceLevel);
    const roleData = currentRoleData.find(item => item.experience === expRange);
    return roleData ? roleData.salary : 0;
  };

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Salary Explorer</h1>
        <p className="text-muted-foreground text-lg">
          Get data-driven salary insights for your field and experience level
        </p>
      </div>

      {/* Salary Calculator */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5" />
            <span>Salary Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Role</label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {roles.map(role => (
                    <SelectItem key={role} value={role}>{role}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Experience Level</label>
              <div className="px-2">
                <Slider
                  value={selectedExperience}
                  onValueChange={setSelectedExperience}
                  max={3}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Entry</span>
                  <span>Mid</span>
                  <span>Senior</span>
                  <span>Staff+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cities.map(city => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2">
                ${getCurrentSalaryEstimate().toLocaleString()}
              </h3>
              <p className="opacity-90">
                Estimated salary for {selectedRole} with {getExperienceRange(experienceLevel)} experience in {selectedCity}
              </p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Salary by Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Salary Progression - {selectedRole}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentRoleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="experience" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Salary']} />
                <Bar dataKey="salary" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* City Comparison */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Salary by City</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cityComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Avg Salary']} />
                <Line type="monotone" dataKey="avgSalary" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Industry Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5" />
              <span>Industry Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={industryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {industryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {industryDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">15,000+</div>
              <div className="text-sm text-muted-foreground">Salary Reports</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">12%</div>
              <div className="text-sm text-muted-foreground">Avg YoY Growth</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Salary Ranges Table */}
      <Card>
        <CardHeader>
          <CardTitle>Salary Ranges by Role & Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Role</th>
                  <th className="text-left p-3">Entry Level</th>
                  <th className="text-left p-3">Mid Level</th>
                  <th className="text-left p-3">Senior Level</th>
                  <th className="text-left p-3">Staff+</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(salaryData).map(([role, data]) => (
                  <tr key={role} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{role}</td>
                    {data.map((item, index) => (
                      <td key={index} className="p-3">
                        <div className="space-y-1">
                          <div className="font-medium">${item.salary.toLocaleString()}</div>
                          <Badge variant="outline" className="text-xs">
                            {item.city}
                          </Badge>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="mt-8 bg-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want More Detailed Insights?</h3>
          <p className="text-lg opacity-90 mb-6">
            Get personalized salary reports and negotiate with confidence
          </p>
          <Button size="lg" variant="secondary">
            Get Premium Access
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}