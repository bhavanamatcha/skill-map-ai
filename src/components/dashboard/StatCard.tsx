import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  trend: "up" | "down" | "neutral";
  className?: string;
}

const StatCard = ({ title, value, change, icon: Icon, trend, className = "" }: StatCardProps) => {
  const trendColor = {
    up: "text-green-600",
    down: "text-red-600", 
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <Card className={`bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className={`text-xs font-medium ${trendColor}`}>
              {change}
            </p>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;