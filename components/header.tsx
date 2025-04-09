"use client"

// import Image from "next/image"
import Link from "next/link"
// import LogoDark from "@/public/logo-dark.svg"
// import Logo from "@/public/logo.svg"
import { RiGithubFill, RiMenu2Line, RiTwitterXFill } from "@remixicon/react"
import { SquareCheckIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import HeaderLink from "@/components/header-link"
import ThemeToggle from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

const links = [{ text: "Easing Classes", href: "/easings", isNew: false }]

export default function Header() {
  const isMobile = useIsMobile()

  return (
    <header className="before:bg-[linear-gradient(to_right,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mb-14 before:absolute before:-inset-x-32 before:bottom-0 before:h-px">
      <div
        className="before:bg-ring/50 after:bg-ring/50 before:absolute before:-bottom-px before:-left-12 before:z-10 before:-ml-px before:size-[3px] after:absolute after:-right-12 after:-bottom-px after:z-10 after:-mr-px after:size-[3px]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between gap-3">
        <Link
          className="group flex shrink-0 items-center gap-1"
          href="/"
          aria-label="Home"
        >
          <SquareCheckIcon className="lucide lucide-check-square text-primary-foreground fill-primary group-hover:text-primary-foreground/80 group-hover:fill-primary/80 size-7 transition-colors duration-300" />
          <span className="group-hover:text-primary/80 text-xl font-bold transition-colors duration-300">
            Slay UI
          </span>
        </Link>
        <div className="flex items-center">
          {!isMobile && (
            <>
              <div className="flex items-center gap-4 md:gap-10">
                {links.map((link) => (
                  <HeaderLink
                    key={link.href}
                    text={link.text}
                    href={link.href}
                    isNew={link.isNew}
                  />
                ))}
              </div>
              <div
                className="bg-input ms-4 me-4 h-5 w-px md:ms-10"
                aria-hidden="true"
              ></div>
            </>
          )}
          <div className="flex items-center gap-1">
            <a
              className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]"
              href="https://x.com/mb_ramani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X</span>
              <RiTwitterXFill size={20} />
            </a>
            <a
              className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]"
              href="https://github.com/mbramani/slayui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <RiGithubFill size={20} />
            </a>
            <ThemeToggle />
            {isMobile && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-muted-foreground hover:text-foreground/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex size-9 items-center justify-center rounded outline-none focus-visible:ring-[3px]">
                    <RiMenu2Line className="size-5" size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {links.map((link) => (
                    <DropdownMenuItem
                      className="cursor-pointer focus:bg-transparent focus:underline"
                      key={link.href}
                      asChild
                    >
                      <HeaderLink text={link.text} href={link.href} />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
