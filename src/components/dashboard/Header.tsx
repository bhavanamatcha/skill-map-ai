import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Bell, 
  Search, 
  User, 
  BookOpen, 
  Target, 
  TrendingUp, 
  Settings 
} from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Career Compass</h1>
              <p className="text-xs text-muted-foreground">AI-Powered Growth Platform</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Learning Paths
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Opportunities
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 min-w-[200px]">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input 
                placeholder="Search opportunities, courses..." 
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full"></div>
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>

            {/* User Avatar */}
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                JD
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;