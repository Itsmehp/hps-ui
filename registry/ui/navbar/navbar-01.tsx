import React from "react"

interface NavbarProps {
  logo?: React.ReactNode
  links: { label: string; href: string }[]
  className?: string
}

export function Navbar({
  logo,
  links,
  className = "",
}: NavbarProps) {
  return (
    <nav className={`w-full border-b border-neutral-200 dark:border-neutral-800 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div>{logo}</div>
        <div className="flex gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
