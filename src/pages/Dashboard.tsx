import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import LearningPathCard from "@/components/dashboard/LearningPathCard";
import OpportunityCard from "@/components/dashboard/OpportunityCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  BookOpen, 
  Target, 
  Users, 
  Star,
  ArrowRight,
  Zap,
  Award
} from "lucide-react";
import heroImage from "@/assets/career-compass-hero.jpg";

const Dashboard = () => {
  // Mock data for demonstration
  const stats = [
    {
      title: "Learning Progress",
      value: "73%",
      change: "+12% this month",
      icon: BookOpen,
      trend: "up" as const
    },
    {
      title: "Skill Match Score", 
      value: "89%",
      change: "+5% improved",
      icon: Target,
      trend: "up" as const
    },
    {
      title: "Active Pathways",
      value: "4",
      change: "2 new this week",
      icon: TrendingUp,
      trend: "up" as const
    },
    {
      title: "Network Connections",
      value: "127",
      change: "+8 new mentors",
      icon: Users,
      trend: "up" as const
    }
  ];

  const learningPaths = [
    {
      title: "Data Science Leadership",
      description: "Master advanced analytics, team management, and strategic decision-making for data-driven organizations.",
      progress: 65,
      duration: "8-10 weeks",
      modules: 12,
      level: "Advanced" as const,
      skills: ["Machine Learning", "Team Leadership", "Strategic Planning", "Python", "Data Visualization"],
      featured: true
    },
    {
      title: "Product Management Essentials",
      description: "Learn core product management skills including user research, roadmap planning, and stakeholder management.",
      progress: 30,
      duration: "6-8 weeks", 
      modules: 10,
      level: "Intermediate" as const,
      skills: ["Product Strategy", "User Research", "Agile", "Analytics"]
    },
    {
      title: "AI & Machine Learning Foundations",
      description: "Build foundational knowledge in artificial intelligence and machine learning concepts and applications.",
      progress: 0,
      duration: "4-6 weeks",
      modules: 8,
      level: "Beginner" as const,
      skills: ["Machine Learning", "Python", "Statistics", "AI Ethics"]
    }
  ];

  const opportunities = [
    {
      title: "Senior Data Scientist",
      company: "TechCorp",
      department: "AI Research",
      location: "San Francisco, CA",
      type: "Full-time" as const,
      matchScore: 94,
      posted: "2 days ago",
      applicants: 23,
      skills: ["Python", "Machine Learning", "Deep Learning", "MLOps"],
      isBookmarked: true
    },
    {
      title: "Product Analytics Lead",
      company: "GrowthCo",
      department: "Product",
      location: "Remote",
      type: "Full-time" as const,
      matchScore: 87,
      posted: "1 week ago", 
      applicants: 45,
      skills: ["SQL", "Product Analytics", "A/B Testing", "Tableau"]
    },
    {
      title: "AI Ethics Advisory Panel",
      company: "Internal",
      department: "Ethics Committee",
      location: "Hybrid",
      type: "Project" as const,
      matchScore: 76,
      posted: "3 days ago",
      applicants: 12,
      skills: ["AI Ethics", "Policy", "Research", "Communication"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Welcome Section */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-primary p-8 text-white">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={heroImage} 
              alt="Career development" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-lg text-white/90 mb-6">
              Your personalized career journey continues. Discover new opportunities and accelerate your growth.
            </p>
            <div className="flex gap-4">
              <Button variant="accent" size="lg">
                <Zap className="w-5 h-5 mr-2" />
                Take Skills Assessment
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                View Profile
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Learning Paths */}
          <section className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Recommended Learning Paths</h2>
              <Button variant="outline">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningPaths.map((path, index) => (
                <LearningPathCard key={index} {...path} />
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <section className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-3" />
                  Continue last course
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-3" />
                  Update career goals
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-3" />
                  Connect with mentor
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Award className="w-4 h-4 mr-3" />
                  View achievements
                </Button>
              </CardContent>
            </Card>

            {/* This Week's Goals */}
            <Card className="bg-gradient-card shadow-card">
              <CardHeader>
                <CardTitle>This Week's Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Complete ML Module 3</span>
                    <span className="text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Network with 2 peers</span>
                    <span className="text-muted-foreground">50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Apply to 1 opportunity</span>
                    <span className="text-muted-foreground">0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Opportunities Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Matched Opportunities</h2>
            <Button variant="outline">
              Explore All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <OpportunityCard key={index} {...opportunity} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;