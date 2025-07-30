import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Trophy, Play } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  description: string;
  progress: number;
  duration: string;
  modules: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  skills: string[];
  featured?: boolean;
}

const LearningPathCard = ({ 
  title, 
  description, 
  progress, 
  duration, 
  modules, 
  level, 
  skills,
  featured = false 
}: LearningPathCardProps) => {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700", 
    Advanced: "bg-red-100 text-red-700"
  };

  return (
    <Card className={`bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </div>
          {featured && (
            <Badge className="bg-gradient-accent text-accent-foreground">
              <Trophy className="w-3 h-3 mr-1" />
              Recommended
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            {modules} modules
          </div>
          <Badge variant="secondary" className={levelColors[level]}>
            {level}
          </Badge>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Skills You'll Learn</p>
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Action */}
        <Button 
          className="w-full" 
          variant={progress > 0 ? "default" : "hero"}
        >
          <Play className="w-4 h-4 mr-2" />
          {progress > 0 ? "Continue Learning" : "Start Path"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default LearningPathCard;