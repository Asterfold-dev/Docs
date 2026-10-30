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
]
