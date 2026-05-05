import { config } from "@config";
import { LocaleLink } from "@i18n/routing";
import { Logo } from "@repo/ui";
import { ColorModeToggle } from "@shared/components/ColorModeToggle";
import { LocaleSwitch } from "@shared/components/LocaleSwitch";
import { MailIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export function Footer() {
	const t = useTranslations();
	const year = new Date().getFullYear();

	return (
		<footer className="border-t bg-background text-sm text-muted-foreground">
			{/* Main grid */}
			<div className="container py-12">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr]">
					{/* Brand */}
					<div>
						<Logo />
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
							{t("common.footer.description")}
						</p>
					</div>

					{/* Features */}
					<div>
						<h3 className="mb-4 font-medium text-foreground">
							{t("common.footer.featuresTitle")}
						</h3>
						<ul className="space-y-3">
							<li>
								<a href="#features" className="transition-colors hover:text-foreground">
									{t("common.footer.features")}
								</a>
							</li>
							<li>
								<LocaleLink href="/blog" className="transition-colors hover:text-foreground">
									{t("common.footer.blog")}
								</LocaleLink>
							</li>
							<li>
								<a href="/#pricing" className="transition-colors hover:text-foreground">
									{t("common.footer.pricing")}
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h3 className="mb-4 font-medium text-foreground">
							{t("common.footer.resourcesTitle")}
						</h3>
						<ul className="space-y-3">
							{config.docsUrl && (
								<li>
									<a href={config.docsUrl} className="transition-colors hover:text-foreground">
										{t("common.footer.docs")}
									</a>
								</li>
							)}
							<li>
								<LocaleLink
									href="/changelog"
									className="transition-colors hover:text-foreground"
								>
									{t("common.footer.changelog")}
								</LocaleLink>
							</li>
							<li>
								<LocaleLink href="/contact" className="transition-colors hover:text-foreground">
									{t("common.footer.contact")}
								</LocaleLink>
							</li>
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h3 className="mb-4 font-medium text-foreground">
							{t("common.footer.legalTitle")}
						</h3>
						<ul className="space-y-3">
							<li>
								<LocaleLink
									href="/legal/privacy-policy"
									className="transition-colors hover:text-foreground"
								>
									{t("common.footer.privacyPolicy")}
								</LocaleLink>
							</li>
							<li>
								<LocaleLink href="/legal/terms" className="transition-colors hover:text-foreground">
									{t("common.footer.termsAndConditions")}
								</LocaleLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Built with + controls */}
			<div className="container flex items-center justify-between py-4">
				<a
					href="https://supastarter.dev"
					className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
					target="_blank"
					rel="noopener noreferrer"
				>
					{t("common.footer.builtWith")}
				</a>
				<div className="flex items-center gap-3">
					<ColorModeToggle />
					<Suspense>
						<LocaleSwitch />
					</Suspense>
				</div>
			</div>

			{/* Bottom copyright bar */}
			<div className="border-t border-dashed">
				<div className="container flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-muted-foreground">
						© {year}{" "}
						<a
							href="https://supastarter.dev"
							className="text-foreground transition-colors hover:opacity-80"
						>
							{config.appName}
						</a>
						, {t("common.footer.allRightsReserved")}
					</p>
					<div className="flex flex-wrap items-center gap-4">
						<LocaleLink
							href="/legal/privacy-policy"
							className="transition-colors hover:text-foreground"
						>
							{t("common.footer.privacyPolicy")}
						</LocaleLink>
						<LocaleLink href="/legal/terms" className="transition-colors hover:text-foreground">
							{t("common.footer.termsAndConditions")}
						</LocaleLink>
						<div className="flex items-center gap-3 ml-2">
							<a
								href="https://twitter.com"
								className="transition-colors hover:text-foreground"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="X / Twitter"
							>
								<svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
</svg>
							</a>
							<a
								href="https://github.com"
								className="transition-colors hover:text-foreground"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
							>
								<svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
</svg>
							</a>
							<a
								href="mailto:hello@example.com"
								className="transition-colors hover:text-foreground"
								aria-label="Email"
							>
								<MailIcon className="size-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
