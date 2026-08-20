import type { WhyMeItem } from "@/app/data/whyMeData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WhyMeCard({ item }: { item: WhyMeItem }) {
  const Icon = item.icon;

  return (
    <Card className="flex flex-col items-center sm:items-start text-center sm:text-left h-full shadow-none">
      <CardHeader className="flex flex-col items-center sm:items-start space-y-1.5 py-4 px-6">
        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        <CardTitle className="text-2xl">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="py-2 px-6 pt-0">
        <CardDescription className="text-base leading-relaxed">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
