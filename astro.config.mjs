import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

export default defineConfig({
  site: "https://asterfold-dev.github.io",
  base: "/Docs",
  integrations: [
    starlight({
      title: "Asterfold Docs",
      description: "Documentation for Asterfold projects.",
      favicon: "/favicon.png",
      logo: {
        src: "./src/assets/asterfold.png",
        alt: "Asterfold",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Asterfold-dev",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/Asterfold-dev/Docs/edit/main/",
      },
      lastUpdated: true,
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        { label: "All projects", link: "/" },
        {
          label: "Aegis",
          items: [
            { label: "Overview", link: "/aegis/" },
            {
              label: "Getting started",
              items: [
                { label: "Quick start", link: "/aegis/getting-started/quick-start/" },
                { label: "Docker", link: "/aegis/getting-started/docker/" },
              ],
            },
            {
              label: "Guides",
              items: [
                { label: "Authentication", link: "/aegis/guides/authentication/" },
                { label: "Admin console", link: "/aegis/guides/admin-console/" },
                { label: "Applications", link: "/aegis/guides/applications/" },
                { label: "OIDC & groups", link: "/aegis/guides/oidc/" },
              ],
            },
            {
              label: "Operations",
              items: [
                { label: "Security", link: "/aegis/operations/security/" },
                { label: "Deployment", link: "/aegis/operations/deployment/" },
                { label: "Troubleshooting", link: "/aegis/operations/troubleshooting/" },
              ],
            },
            {
              label: "Reference",
              items: [
                { label: "Configuration", link: "/aegis/reference/configuration/" },
                { label: "Scripts", link: "/aegis/reference/scripts/" },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
