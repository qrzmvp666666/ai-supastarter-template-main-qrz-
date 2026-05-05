"use client";

import { cn } from "@repo/ui";
import {
BarChart2Icon,
BookOpenIcon,
BuildingIcon,
DatabaseIcon,
FileTextIcon,
GlobeIcon,
HardDriveIcon,
KeyIcon,
ReceiptIcon,
RocketIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

const TAB_KEYS = [

"multiTenant",
"database",
"storage",
"auth",
"payment",
"blog",
"docs",
"seo",
"deploy",
"analytics",
] as const;

type TabKey = (typeof TAB_KEYS)[number];

const TAB_ICONS: Record<TabKey, React.ElementType> = {
multiTenant: BuildingIcon,
database: DatabaseIcon,
storage: HardDriveIcon,
auth: KeyIcon,
payment: ReceiptIcon,
blog: FileTextIcon,
docs: BookOpenIcon,
seo: GlobeIcon,
deploy: RocketIcon,
analytics: BarChart2Icon,
};

export function HeroTabs() {
const t = useTranslations();
const [active, setActive] = useState<TabKey>("multiTenant");

return (
<div className="flex items-center gap-1 overflow-x-auto rounded-full border bg-muted/60 px-2 py-1.5 backdrop-blur-sm scrollbar-none [-webkit-overflow-scrolling:touch] justify-start md:justify-center">
{TAB_KEYS.map((key) => {
const Icon = TAB_ICONS[key];
const isActive = active === key;
return (
<button
key={key}
type="button"
onClick={() => setActive(key)}
className={cn(
"flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all",
isActive
? "bg-background text-foreground shadow-sm border border-border"
: "text-muted-foreground hover:text-foreground hover:bg-background/60",
)}
>
<Icon className="size-3.5 shrink-0" />
<span>{t(`home.hero.tabs.${key}`)}</span>
{isActive && (
<span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-primary" />
)}
</button>
);
})}
</div>
);
}
