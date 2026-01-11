import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 19,
        period: "month",
        features: [
            "50 AI thumbnails per month",
            "Basic templates",
            "Standard resolution",
            "No watermark",
            "Email support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 49,
        period: "month",
        features: [
            "Unlimited AI thumbnails",
            "Premium templates",
            "4K resolution",
            "A/B testing tools",
            "Priority support",
            "Custom fonts",
            "Brand kit analysis"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 99,
        period: "month",
        features: [
            "Everything in Pro",
            "API access",
            "Team collaboration",
            "Custom branding",
            "Dedicated account manager"
        ],
        mostPopular: false
    }
];
