"use client";
import { cn } from "@repo/ui";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { Check, Copy, Loader2 } from "lucide-react";
import { useState } from "react";

export function LLMCopyButton({ markdownContent }: { markdownContent: string }) {
	const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

	async function handleClick() {
		if (state === "loading") return;
		setState("loading");
		try {
			await navigator.clipboard.writeText(markdownContent);
			setState("done");
			setTimeout(() => setState("idle"), 1500);
		} catch (err) {
			console.error("[LLMCopyButton] failed:", err);
			setState("error");
			setTimeout(() => setState("idle"), 2000);
		}
	}

	return (
		<button
			type="button"
			disabled={state === "loading"}
			className={cn(
				buttonVariants({
					color: "secondary",
					size: "sm",
					className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground",
				}),
			)}
			onClick={handleClick}
		>
			{state === "loading" ? (
				<Loader2 className="animate-spin" />
			) : state === "done" ? (
				<Check />
			) : (
				<Copy />
			)}
			{state === "error" ? "复制失败" : "Copy Markdown"}
		</button>
	);
}
