import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface RecommendationCardProps {
  recommendation: {
    name: string;
    role: string;
    context: string;
    content: string;
  };
}

export default function RecommendationCard({
  recommendation,
}: RecommendationCardProps) {
  return (
    <Card className="h-full border-primary/20">
      <CardContent className="p-5 flex flex-col h-full">
        <Quote className="size-5 text-primary mb-4" />

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          &quot;{recommendation.content}&quot;
        </p>

        <div className="mt-5 space-y-2">
          <p className="font-medium">{recommendation.name}</p>

          <p className="text-xs text-muted-foreground">{recommendation.role}</p>

          <Badge variant="outline" className="border-primary/20">
            {recommendation.context}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
