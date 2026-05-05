import type React from "react";

interface BorderBeamProps {
	size?: number;
	duration?: number;
	delay?: number;
	colorFrom?: string;
	colorTo?: string;
	borderWidth?: number;
	className?: string;
}

export function BorderBeam({
	size = 200,
	duration = 8,
	delay = 0,
	colorFrom = "#ffaa40",
	colorTo = "#9c40ff",
	borderWidth = 2,
	className,
}: BorderBeamProps) {
	return (
		<div
			style={
				{
					"--size": size,
					"--duration": `${duration}s`,
					"--delay": `-${delay}s`,
					"--color-from": colorFrom,
					"--color-to": colorTo,
					"--border-width": `${borderWidth}px`,
				} as React.CSSProperties
			}
			className={[
				"pointer-events-none absolute inset-0 rounded-[inherit]",
				"[border:var(--border-width)_solid_transparent]",
				"![mask-clip:padding-box,border-box]",
				"![mask-composite:intersect]",
				"[mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
				"after:absolute after:aspect-square after:w-[calc(var(--size)*1px)]",
				"after:animate-[border-beam_var(--duration)_infinite_linear]",
				"after:[animation-delay:var(--delay)]",
				"after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
				"after:[offset-anchor:90%_50%]",
				"after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		/>
	);
}
