
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/shubhi/gatsaby2/packages/site/.cache/dev-404-page.js")),
  "component---gatsby-theme-1-src-pages-app-dashboard-js": preferDefault(require("/home/shubhi/gatsaby2/packages/gatsby-theme-1/src/pages/app/dashboard.js")),
  "component---src-pages-index-js": preferDefault(require("/home/shubhi/gatsaby2/packages/site/src/pages/index.js"))
}

