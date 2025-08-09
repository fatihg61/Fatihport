export const profile = {
  name: "Fatih G",
  taglines: ["Front-end Developer", "Microsoft 365 Cloud Engineer"],
  location: "Amsterdam, NL",
  email: "mailto:contact@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourgithub" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yourlinkedin" },
    { label: "X/Twitter", url: "https://twitter.com/yourtwitter" }
  ],
  summary: `Ervaren Front-end Developer en Microsoft 365 Engineer.
  Ik bouw snelle, moderne interfaces (Svelte/React) en automatiseer
  productieve cloudomgevingen met M365/SharePoint/Teams/Exchange.`,
  skills: {
    frontend: ["SvelteKit", "React", "JavaScript", "Vite", "Svelte", "Node.js", "Vercel"],
    cloud: ["Microsoft 365", "Exchange", "SharePoint", "OneDrive", "Teams", "Graph API", "PowerShell"],
    tooling: ["ESLint", "Prettier", "Vitest", "Playwright", "GitHub Actions"]
  },
  projects: [
    {
      title: "Launch Explorer (SpaceX)",
      desc: "Zoeken/filteren door SpaceX-launches met favorieten en offline caching.",
      links: [{label:"Code", url:"https://github.com/yourgithub/spacex-explorer"}],
      badges: ["SvelteKit","API"]
    },
    {
      title: "M365 Provisioner",
      desc: "Automatisering voor Teams/SharePoint sites met Graph API + PowerShell.",
      links: [{label:"Case study", url:"#"}],
      badges: ["Microsoft 365","Automation"]
    },
    {
      title: "Test",
      desc: "Automatisering voor Teams/SharePoint sites met Graph API + PowerShell.",
      links: [{label:"Case study", url:"#"}],
      badges: ["Microsoft 365","Automation"]
    },    {
      title: "Test",
      desc: "Automatisering voor Teams/SharePoint sites met Graph API + PowerShell.",
      links: [{label:"Case study", url:"#"}],
      badges: ["Microsoft 365","Automation"]
    }    
  ]
};
