import { EarlyAccessSection } from "@home/components/EarlyAccessSection";
import { FaqSection } from "@home/components/FaqSection";
import { HeroSection } from "@home/components/HeroSection";
import { PricingSection } from "@home/components/PricingSection";
import { TestimonialsSection } from "@home/components/TestimonialsSection";
import { setRequestLocale } from "next-intl/server";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
const { locale } = await params;
setRequestLocale(locale);

return (
<>
<HeroSection />
<PricingSection />
<TestimonialsSection />
<FaqSection />
<EarlyAccessSection />
</>
);
}
