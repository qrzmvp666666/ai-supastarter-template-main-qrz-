/**
 * Shared pravatar.cc image IDs for testimonial users.
 * Used in both TestimonialsSection and HeroSection social proof.
 */
export const TESTIMONIAL_KEYS = [
	"andy",
	"blank",
	"corey",
	"gefei",
	"james",
	"justDoIt",
] as const;

export type TestimonialKey = (typeof TESTIMONIAL_KEYS)[number];

export const AVATAR_PHOTO_IDS: Record<TestimonialKey, number> = {
	andy: 11,
	blank: 25,
	corey: 33,
	gefei: 47,
	james: 52,
	justDoIt: 64,
};
