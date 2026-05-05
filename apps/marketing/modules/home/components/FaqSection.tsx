"use client";

import { cn } from "@repo/ui";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@repo/ui/components/accordion";
import { useTranslations } from "next-intl";

const FAQ_ITEM_KEYS = [
"whatIsShipAny",
"noCode",
"whatCanBuild",
"howLong",
"infrastructure",
"customization",
] as const;

export function FaqSection({ className }: { className?: string }) {
const t = useTranslations();

const items = FAQ_ITEM_KEYS.map((key) => ({
question: t(`faq.items.${key}.question`),
answer: t(`faq.items.${key}.answer`),
}));

return (
<section className={cn("scroll-mt-20 py-8 lg:py-12", className)} id="faq">
<div className="container">
<div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border bg-card">
<div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr]">
{/* Left panel */}
<div className="border-b px-8 py-8 lg:border-r lg:border-b-0 lg:px-10 lg:py-10">
<h2 className="font-bold text-2xl leading-tight text-foreground md:text-3xl">
{t("faq.title")}
</h2>
<p className="mt-3 text-sm leading-6 text-muted-foreground">
{t("faq.description")}
</p>
<div className="mt-6 space-y-4 text-sm leading-6 text-muted-foreground">
<div>
<p>{t("faq.contactEmailLabel")}</p>
<a
href="mailto:support@shipany.ai"
className="font-medium text-foreground transition-colors hover:opacity-80"
>
support@shipany.ai
</a>
</div>
<div>
<p>{t("faq.contactDiscordLabel")}</p>
<a
href="https://discord.com"
target="_blank"
rel="noopener noreferrer"
className="font-medium text-foreground transition-colors hover:opacity-80"
>
Discord
</a>
</div>
</div>
</div>

{/* Right accordion */}
<div className="px-6 py-4 lg:px-10 lg:py-6">
<Accordion type="single" collapsible className="w-full text-left">
{items.map((item, i) => (
<AccordionItem
key={`faq-item-${i}`}
value={`item-${i}`}
className="border-border"
>
<AccordionTrigger className="py-4 text-sm font-semibold text-left hover:no-underline md:text-base">
{item.question}
</AccordionTrigger>
<AccordionContent className="text-sm leading-7 text-muted-foreground">
{item.answer}
</AccordionContent>
</AccordionItem>
))}
</Accordion>
</div>
</div>
</div>
</div>
</section>
);
}
