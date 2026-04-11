import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular: boolean;
  badge?: string;
}

interface PricingCardProps {
  plan: Plan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-200",
        plan.popular
          ? "border-primary-500 bg-primary-600 shadow-2xl scale-105"
          : "border-gray-200 bg-white shadow-sm hover:shadow-card-hover"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1.5 rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-bold text-yellow-900">
            <Zap className="h-3.5 w-3.5" />
            Mais Popular
          </div>
        </div>
      )}

      {/* Plan header */}
      <div className="mb-8">
        <h3 className={cn("text-lg font-bold mb-1", plan.popular ? "text-white" : "text-gray-900")}>
          {plan.name}
        </h3>
        <p className={cn("text-sm mb-6", plan.popular ? "text-primary-100" : "text-gray-500")}>
          {plan.description}
        </p>
        <div className="flex items-baseline gap-1">
          <span className={cn("text-4xl font-bold", plan.popular ? "text-white" : "text-gray-900")}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={cn("text-sm", plan.popular ? "text-primary-100" : "text-gray-500")}>
              /{plan.period}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-full flex-shrink-0 mt-0.5",
                plan.popular ? "bg-primary-400" : "bg-primary-100"
              )}
            >
              <Check
                className={cn(
                  "h-3 w-3",
                  plan.popular ? "text-white" : "text-primary-600"
                )}
              />
            </div>
            <span
              className={cn(
                "text-sm",
                plan.popular ? "text-primary-50" : "text-gray-600"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        asChild
        variant={plan.popular ? "white" : "default"}
        size="lg"
        className="w-full"
      >
        <Link href={plan.href}>{plan.cta}</Link>
      </Button>
    </div>
  );
}
