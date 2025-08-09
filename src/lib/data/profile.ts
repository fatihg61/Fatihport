export const profile = {
  name: "Seyfullah Isa Güler",
  taglines: ["Front-end Developer", "Microsoft 365 Cloud Engineer"],
  location: "Amsterdam, NL",
  email: "mailto:seyfullah@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourname" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourname" },
    { label: "X/Twitter", url: "https://twitter.com/yourname" }
  ],
  summary: `Ervaren Front‑end Developer en Microsoft 365 Engineer.
  Ik bouw snelle, moderne interfaces met Svelte/React en automatiseer
  productieve cloudomgevingen met M365/SharePoint/Teams/Exchange.`,
  skills: {
    frontend: ["SvelteKit", "React", "TypeScript", "Vite", "Svelte", "Node.js", "Vercel"],
    cloud: ["Microsoft 365", "Exchange", "SharePoint", "OneDrive", "Teams", "Graph API", "PowerShell"],
    tooling: ["ESLint", "Prettier", "Vitest", "Playwright", "GitHub Actions"]
  },
  projects: [
    {
      title: "Launch Explorer (SpaceX)",
      desc: "Zoeken/filteren door SpaceX-launches met favorieten en offline caching.",
      links: [{label:"Code", url:"https://github.com/yourname/spacex-explorer"}],
      badges: ["SvelteKit","TypeScript","API"]
    },
    {
      title: "M365 Provisioner",
      desc: "Automatisering voor Teams/SharePoint sites met Graph API + PowerShell.",
      links: [{label:"Case study", url:"#"}],
      badges: ["Microsoft 365","Automation"]
    },
    {
      title: "Design System",
      desc: "Lichtgewicht UI-componenten zonder CSS-frameworks, focus op A11y.",
      links: [{label:"Docs", url:"#"}],
      badges: ["Design","A11y"]
    }
  ]
};
