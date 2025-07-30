import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  TrendingUp,
  Building2,
  Bookmark
} from "lucide-react";

interface OpportunityCardProps {
  title: string;
  company: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Project" | "Mentorship";
  matchScore: number;
  posted: string;
  applicants: number;
  skills: string[];
  isBookmarked?: boolean;
}

const OpportunityCard = ({
  title,
  company,
  department,
  location,
  type,
  matchScore,
  posted,
  applicants,
  skills,
  isBookmarked = false
}: OpportunityCardProps) => {
  const typeColors = {
    "Full-time": "bg-blue-100 text-blue-700",
    "Part-time": "bg-green-100 text-green-700",
    "Project": "bg-purple-100 text-purple-700",
    "Mentorship": "bg-orange-100 text-orange-700"
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 75) return "text-yellow-600"; 
    return "text-gray-600";
  };

  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold text-foreground">{title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="w-4 h-4" />
              <span>{company}</span>
              <span>•</span>
              <span>{department}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className={`text-lg font-bold ${getMatchColor(matchScore)}`}>
                {matchScore}%
              </div>
              <div className="text-xs text-muted-foreground">Match</div>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-accent' : ''}`} />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {posted}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {applicants} applied
          </div>
        </div>

        {/* Type Badge */}
        <div className="flex items-center gap-2">
          <Badge className={typeColors[type]}>{type}</Badge>
          {matchScore >= 90 && (
            <Badge className="bg-gradient-accent text-accent-foreground">
              <Star className="w-3 h-3 mr-1" />
              Perfect Match
            </Badge>
          )}
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Required Skills</p>
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

        {/* Actions */}
        <div className="flex gap-2">
          <Button className="flex-1" variant="default">
            Apply Now
          </Button>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default OpportunityCard;