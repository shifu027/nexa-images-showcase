import { FAQItem } from "@/data/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({ items, title }: FAQSectionProps) {
  return (
    <div>
      {title && (
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-center mb-8">{title}</h2>
      )}
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-sm font-medium hover:text-primary py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
