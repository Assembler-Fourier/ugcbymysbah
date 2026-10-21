// Grouped so the long list stays easy to scan. These are also the terms
// brands search for, so they double as the page's search keywords.
export const serviceGroups = [
  {
    title: "UGC videos",
    items: [
      "Product demos",
      "Testimonials",
      "Talking head videos",
      "Unboxing",
      "ASMR",
      "Voiceovers",
      "Get ready with me (GRWM)",
      "Product reviews",
      "Tutorials and how-tos",
      "Before and after",
      "Problem and solution videos",
      "Skincare routines",
      "Day in the life",
      "Reaction videos",
      "Spokesperson videos",
      "App demos and walkthroughs",
      "Lifestyle content",
      "B-roll",
    ],
  },
  {
    title: "Ads and strategy",
    items: [
      "Paid ad UGC",
      "TikTok ads",
      "Instagram Reels",
      "Meta ads",
      "Hooks and hook variations",
      "Scriptwriting",
      "Marketing strategy",
      "Marketing campaigns",
      "Mood boards",
      "English and Urdu UGC",
    ],
  },
  {
    title: "Photo and detail shots",
    items: [
      "Product photography",
      "Texture shots",
      "Hand modeling",
      "Swatches",
      "Flat lays",
      "Close-up detail shots",
    ],
  },
];

export const serviceKeywords = serviceGroups.flatMap((group) => group.items);
