import FAQSection from "@/components/shared/faq/FAQSection";
import { getActivePricings } from "@/lib/api/pricings";
import { generateFaqData } from "@/lib/faq";

export default async function FAQ() {
  const pricings = await getActivePricings();

  const faqData = generateFaqData(pricings);

  return <FAQSection items={faqData} />;
}
