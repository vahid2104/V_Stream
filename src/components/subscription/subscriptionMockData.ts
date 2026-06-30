export type BillingCycle = "monthly" | "yearly";

export type Plan = {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  isPopular?: boolean;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    description:
      "Enjoy an essential library of movies and series with regularly updated content.",
    monthlyPrice: 9.99,
  },
  {
    id: "standard",
    name: "Standard Plan",
    description:
      "Access a wider selection of movies and shows, including new releases and exclusive content.",
    monthlyPrice: 12.99,
    isPopular: true,
  },
  {
    id: "premium",
    name: "Premium Plan",
    description:
      "Access the widest selection of titles, premium quality, offline viewing and family sharing.",
    monthlyPrice: 14.99,
  },
];

export const planFeatures = [
  {
    feature: "Price",
    basic: "$9.99/Month",
    standard: "$12.99/Month",
    premium: "$14.99/Month",
  },
  {
    feature: "Content",
    basic: "Access to selected movies and shows.",
    standard: "Access to more movies, new releases and exclusive content.",
    premium: "Access to all movies, series, new releases and premium content.",
  },
  {
    feature: "Devices",
    basic: "Watch on one device simultaneously.",
    standard: "Watch on two devices simultaneously.",
    premium: "Watch on four devices simultaneously.",
  },
  {
    feature: "Free Trial",
    basic: "7 Days",
    standard: "7 Days",
    premium: "7 Days",
  },
  {
    feature: "Cancel Anytime",
    basic: "Yes",
    standard: "Yes",
    premium: "Yes",
  },
  {
    feature: "HDR",
    basic: "No",
    standard: "Yes",
    premium: "Yes",
  },
  {
    feature: "Dolby Atmos",
    basic: "No",
    standard: "Yes",
    premium: "Yes",
  },
  {
    feature: "Ad-Free",
    basic: "No",
    standard: "Yes",
    premium: "Yes",
  },
  {
    feature: "Offline Viewing",
    basic: "No",
    standard: "Yes, for selected titles.",
    premium: "Yes, for all titles.",
  },
  {
    feature: "Family Sharing",
    basic: "No",
    standard: "Yes, up to 5 family members.",
    premium: "Yes, up to 6 family members.",
  },
];