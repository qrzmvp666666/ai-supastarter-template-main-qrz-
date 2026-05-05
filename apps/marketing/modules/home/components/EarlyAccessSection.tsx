import { config } from "@config";
import { Button } from "@repo/ui/components/button";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export function EarlyAccessSection() {
const t = useTranslations();

return (
<section className="py-8 lg:py-12">
<div className="container">
<div className="mx-auto max-w-4xl rounded-2xl border bg-card px-8 py-10 text-center shadow-sm md:px-14 md:py-12">
<h2 className="font-bold text-2xl leading-snug text-balance text-foreground md:text-3xl">
{t("home.earlyAccess.title")}
</h2>

<p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
{t("home.earlyAccess.subtitle")}
</p>

<div className="mt-6 gap-2 flex items-center justify-center">
{config.saasUrl && (
<Button size="lg" variant="primary" asChild>
<a href={config.saasUrl}>
{t("home.hero.getStarted")}
<ArrowRightIcon className="ml-2 size-4" />
</a>
</Button>
)}
{config.docsUrl && (
<Button variant="ghost" size="lg" asChild>
<a href={config.docsUrl}>{t("home.hero.documentation")}</a>
</Button>
)}
</div>
</div>
</div>
</section>
);
}
