const siteUrl = "https://ugcbymysbah.com";
const key = "1d65067027964324bb49888a27421b01";

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: "ugcbymysbah.com",
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList: [siteUrl],
  }),
});

if (!response.ok) {
  const detail = await response.text();
  throw new Error(`IndexNow submission failed (${response.status}): ${detail}`);
}

console.log(`IndexNow accepted ${siteUrl} (${response.status}).`);
