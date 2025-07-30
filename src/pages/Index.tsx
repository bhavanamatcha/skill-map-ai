import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Star, 
  Zap,
  ArrowRight,
  Brain,
  Lightbulb,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/career-compass-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Pathways",
      description: "Get personalized learning recommendations based on your role, skills, and career aspirations."
    },
    {
      icon: Target,
      title: "Smart Opportunity Matching",
      description: "Discover internal roles and projects that perfectly align with your skills and interests."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your skill development and career growth with detailed analytics and insights."
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with experienced professionals and peers for guidance and collaboration."
    }
  ];

  const stats = [
    { label: "Employee Growth Rate", value: "87%", description: "Higher retention through personalized development" },
    { label: "Internal Mobility", value: "2.3x", description: "Increase in internal role transitions" },
    { label: "Skill Development", value: "156%", description: "Faster learning pathway completion" },
    { label: "Employee Satisfaction", value: "94%", description: "Positive feedback on career guidance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Career Compass</h1>
                <p className="text-xs text-muted-foreground">AI-Powered Growth Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline">View Demo</Button>
              </Link>
              <Button variant="hero">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary py-20">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Career development illustration" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center text-white">
          <Badge className="bg-white/20 text-white border-white/30 mb-6">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Career Development
          </Badge>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Navigate Your Career Journey with
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Intelligent Guidance
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Discover personalized learning pathways, connect with mentors, and unlock internal opportunities 
            that align with your skills and aspirations. Powered by AI to accelerate your professional growth.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button variant="accent" size="xl" className="shadow-elegant">
                <Trophy className="w-5 h-5 mr-2" />
                Explore Demo Dashboard
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Empower Every Employee's Growth Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-driven platform creates personalized career pathways that align with individual goals 
              and organizational needs, driving engagement and reducing attrition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Proven Impact on Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              See how Career Compass transforms talent development and employee engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card shadow-card text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Organization's Talent Development?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies using AI to create personalized career journeys 
            that drive engagement, retention, and organizational success.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/dashboard">
              <Button variant="accent" size="xl" className="shadow-elegant">
                <Lightbulb className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Career Compass</h3>
                <p className="text-xs text-muted-foreground">AI-Powered Growth Platform</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Career Compass. Powered by AI for human potential.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;