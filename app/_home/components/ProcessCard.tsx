import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareCheck } from "lucide-react";

type stepProps = {
  number: string;
  title: string;
  description: string;
  badge: string;
};

export default function ProcessCard({ step }: { step: stepProps }) {
  return (
    <Card className="flex flex-col h-full shadow-none justify-between px-2 py-8">
      <CardHeader className="flex flex-1 flex-col">
        <span className="text-sm uppercase text-primary">
          étape {step.number}.
        </span>
        <CardTitle className="text-3xl leading-tight">{step.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base">
          {step.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="bg-card border-t-0">
        <div className="flex gap-2 items-center pt-4">
          <SquareCheck className="w-3.5 h-3.5 text-primary" />
          <span className="text-sm text-primary">{step.badge}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
