"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import {
AVATAR_PHOTO_IDS,
TESTIMONIAL_KEYS,
} from "../lib/testimonials";

export function TestimonialsSection() {
const t = useTranslations();

const items = TESTIMONIAL_KEYS.map((key) => ({
key,
quote: t(`home.testimonials.items.${key}.quote`),
name: t(`home.testimonials.items.${key}.name`),
role: t(`home.testimonials.items.${key}.role`),
}));

return (
<section className="py-8 lg:py-12">
<div className="container">
<div className="mb-6 text-center">
<h2 className="font-semibold text-2xl text-foreground md:text-3xl">
{t("home.testimonials.title")}
</h2>
<p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
{t("home.testimonials.subtitle")}
</p>
</div>

<div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-2 xl:grid-cols-3">
{items.map((item) => (
<article
key={item.key}
className="flex flex-col justify-between bg-card p-6"
>
<p className="text-sm leading-7 text-foreground md:text-base md:leading-7">
"{item.quote}"
</p>

<div className="mt-5 flex items-center gap-3">
<div className="size-10 overflow-hidden rounded-lg border shrink-0">
<Image
src={`https://i.pravatar.cc/80?img=${AVATAR_PHOTO_IDS[item.key]}`}
alt={item.name}
width={40}
height={40}
className="size-full object-cover"
unoptimized
/>
</div>
<div>
<p className="text-sm font-semibold text-foreground">{item.name}</p>
<p className="text-xs text-muted-foreground">{item.role}</p>
</div>
</div>
</article>
))}
</div>
</div>
</section>
);
}
