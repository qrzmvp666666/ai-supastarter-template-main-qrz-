import type { PaymentsConfig } from "./types";

export const config: PaymentsConfig = {
	billingAttachedTo: "user",
	requireActiveSubscription: false,
	plans: {
		pro: {
			recommended: true,
			prices: [
				// ── Pro Monthly ──────────────────────────────────────────────
				{
					type: "subscription",
					paymentMethod: "card",
					priceId: (process.env.PRICE_ID_PRO_MONTHLY_CARD ??
						process.env.PRICE_ID_PRO_MONTHLY) as string,
					interval: "month",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_MONTHLY_CARD ?? 29),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_MONTHLY_CARD ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
				{
					type: "subscription",
					paymentMethod: "wechat_person",
					priceId: (process.env.PRICE_ID_PRO_MONTHLY_WECHAT ??
						process.env.PRICE_ID_PRO_MONTHLY) as string,
					interval: "month",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_MONTHLY_WECHAT ?? 29),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_MONTHLY_WECHAT ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
				{
					type: "subscription",
					paymentMethod: "alipay_person",
					priceId: (process.env.PRICE_ID_PRO_MONTHLY_ALIPAY ??
						process.env.PRICE_ID_PRO_MONTHLY) as string,
					interval: "month",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_MONTHLY_ALIPAY ?? 29),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_MONTHLY_ALIPAY ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
				// ── Pro Yearly ───────────────────────────────────────────────
				{
					type: "subscription",
					paymentMethod: "card",
					priceId: (process.env.PRICE_ID_PRO_YEARLY_CARD ??
						process.env.PRICE_ID_PRO_YEARLY) as string,
					interval: "year",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_YEARLY_CARD ?? 290),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_YEARLY_CARD ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
				{
					type: "subscription",
					paymentMethod: "wechat_person",
					priceId: (process.env.PRICE_ID_PRO_YEARLY_WECHAT ??
						process.env.PRICE_ID_PRO_YEARLY) as string,
					interval: "year",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_YEARLY_WECHAT ?? 290),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_YEARLY_WECHAT ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
				{
					type: "subscription",
					paymentMethod: "alipay_person",
					priceId: (process.env.PRICE_ID_PRO_YEARLY_ALIPAY ??
						process.env.PRICE_ID_PRO_YEARLY) as string,
					interval: "year",
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_PRO_YEARLY_ALIPAY ?? 290),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_PRO_YEARLY_ALIPAY ?? "USD",
					seatBased: true,
					trialPeriodDays: 7,
				},
			],
		},
		lifetime: {
			prices: [
				// ── Lifetime ─────────────────────────────────────────────────
				{
					type: "one-time",
					paymentMethod: "card",
					priceId: (process.env.PRICE_ID_LIFETIME_CARD ??
						process.env.PRICE_ID_LIFETIME) as string,
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_LIFETIME_CARD ?? 799),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_LIFETIME_CARD ?? "USD",
				},
				{
					type: "one-time",
					paymentMethod: "wechat_person",
					priceId: (process.env.PRICE_ID_LIFETIME_WECHAT ??
						process.env.PRICE_ID_LIFETIME) as string,
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_LIFETIME_WECHAT ?? 799),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_LIFETIME_WECHAT ?? "USD",
				},
				{
					type: "one-time",
					paymentMethod: "alipay_person",
					priceId: (process.env.PRICE_ID_LIFETIME_ALIPAY ??
						process.env.PRICE_ID_LIFETIME) as string,
					amount: Number(process.env.NEXT_PUBLIC_PRICE_AMOUNT_LIFETIME_ALIPAY ?? 799),
					currency: process.env.NEXT_PUBLIC_PRICE_CURRENCY_LIFETIME_ALIPAY ?? "USD",
				},
			],
		},
		enterprise: {
			isEnterprise: true,
		},
	},
};
