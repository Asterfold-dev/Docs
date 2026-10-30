export type Project = {
  name: string
  description: string
  href: string
  status?: string
}

export const projects: Project[] = [
  {
    name: "Aegis",
    description:
      "Self-hosted OpenID Connect, passkeys, TOTP, groups, and an auditable admin console.",
    href: "aegis/",
    status: "Available",
  },
  {
    name: "Vigil",
    description:
      "Self-hosted server monitoring with a small outbound-only agent, host metrics, checks, and alerts.",
    href: "vigil/",
    status: "Early",
  },
]
