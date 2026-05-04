"use client";
import { PricingTable } from "@payments/components/PricingTable";

export function ChangePlan({
	organizationId,
	userId,
	activePlanId,
}: {
	organizationId?: string;
	userId?: string;
	activePlanId?: string;
}) {
	return (
		<PricingTable
			organizationId={organizationId}
			userId={userId}
			activePlanId={activePlanId}
		/>
	);
}
