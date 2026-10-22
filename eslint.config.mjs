import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    // ImageResponse only renders plain <img> tags. Set here rather than inline:
    // the rule skips this file on Linux but not on Windows, so an inline
    // disable comment fails as "unused" in CI.
    files: ["app/opengraph-image.tsx"],
    rules: { "@next/next/no-img-element": "off" },
  },
];

export default eslintConfig;
