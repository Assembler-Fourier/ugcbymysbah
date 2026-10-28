// Where Mysbah wants brands to find her. Main markets first, then markets
// where she leads with affordable rates.
export const mainMarkets = [
  { name: "United States", code: "US" },
  { name: "United Kingdom", code: "GB" },
  { name: "Ireland", code: "IE" },
];

export const affordableMarkets = [
  { name: "Canada", code: "CA" },
  { name: "Malaysia", code: "MY" },
  { name: "Indonesia", code: "ID" },
];

// schema.org areaServed: countries plus Europe as a whole.
export const areaServed = [
  ...[...mainMarkets, ...affordableMarkets].map((country) => ({
    "@type": "Country",
    name: country.name,
    identifier: country.code,
  })),
  { "@type": "Continent", name: "Europe" },
];

// Marketing roles Mysbah is also hired for (matches the "What I can do for you" section).
export const roleKeywords = [
  "content strategist",
  "social media manager",
  "marketing coordinator",
  "PR and brand communications",
  "content strategist and UGC creator",
  "remote social media manager",
  "beauty and skincare social media manager",
];

export const regionKeywords = [
  "UGC creator USA",
  "UGC creator UK",
  "UGC creator Ireland",
  "UGC creator Europe",
  "UGC creator for US brands",
  "UGC creator for UK brands",
  "UGC creator for European brands",
  "skincare UGC creator UK",
  "beauty UGC creator USA",
  "UGC creator Canada",
  "UGC creator Malaysia",
  "UGC creator Indonesia",
  "affordable UGC creator",
  "affordable UGC videos",
  "budget-friendly UGC creator",
  "hire UGC creator online",
  "remote UGC creator",
  "English UGC creator",
];
