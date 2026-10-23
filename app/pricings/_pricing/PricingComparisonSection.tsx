import Section from "@/components/Section";
import type {
  PricingComparisonConfig,
  PricingComparisonValue,
} from "@/lib/pricings/categories";
import { Check, X } from "lucide-react";

type PricingComparisonSectionProps = {
  comparison: PricingComparisonConfig;
};

function ComparisonValue({ value }: { value: PricingComparisonValue }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check aria-label="Inclus" className="mx-auto size-5 text-primary" />
    ) : (
      <X
        aria-label="Non inclus"
        className="text-muted-foreground mx-auto size-4"
      />
    );
  }

  return <span className="text-sm text-foreground">{value}</span>;
}

export default function PricingComparisonSection({
  comparison,
}: PricingComparisonSectionProps) {
  return (
    <Section className="py-12 md:py-16">
      <div className="container mx-auto md:px-5">
        <div className="mb-12 space-y-5 md:mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            {comparison.eyebrow}
          </p>

          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
            {comparison.heading}
          </h2>

          <p className="max-w-2xl text-muted-foreground">
            {comparison.description}
          </p>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-170 border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th
                  scope="col"
                  className="w-[35%] px-4 py-6 text-left text-sm font-medium"
                >
                  Fonctionnalités
                </th>

                {comparison.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-4 py-6 text-center text-sm font-medium"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.label} className="border-b border-border">
                  <th
                    scope="row"
                    className="px-4 py-5 text-left text-sm font-normal border-r border-border"
                  >
                    {row.label}
                  </th>

                  {row.values.map((value, index) => (
                    <td key={index} className="px-4 py-5 text-center">
                      <ComparisonValue value={value} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground md:hidden">
          Faites glisser le tableau horizontalement pour voir toutes les
          formules.
        </p>
      </div>
    </Section>
  );
}
