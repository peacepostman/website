const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/crezeo/Sites/website/.cache/dev-404-page.js"))),
  "component---src-pages-index-styled-ts": hot(preferDefault(require("/Users/crezeo/Sites/website/src/pages/index.styled.ts"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Users/crezeo/Sites/website/src/pages/index.tsx")))
}

