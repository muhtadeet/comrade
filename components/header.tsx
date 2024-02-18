import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
// import { auth } from '@/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from '@/components/ui/icons'
import { UserMenu } from '@/components/user-menu'
// import { SidebarMobile } from './sidebar-mobile'
// import { SidebarToggle } from './sidebar-toggle'
import { ThemeToggle } from '@/components/theme-toggle'
// import { ChatHistory } from './chat-history'

async function UserOrLogin() {
  // const session = await auth()
  return (
    <>
      <ThemeToggle />
      <div className="flex items-center">
        <IconSeparator className="size-6 text-muted-foreground/50" />

        <Button variant="link" asChild className="-ml-2">
          <Link
            href="https://comrade-flame.vercel.app/"
            className="hover:no-underline transition-all ease-in-out"
          >
            <p className="font-pRiot text-3xl bg-gradient-to-r from-indigo-400 from-15% to-red-400 to-90% inline-block text-transparent bg-clip-text hover:text-red-400 font-bold transition-all ease-in-out">
              Comrade
            </p>
          </Link>
        </Button>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-secondary backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      {/* <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/vercel/nextjs-ai-chatbot/"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <IconGitHub />
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>
        <a
          href="https://github.com/vercel/nextjs-ai-chatbot/"
          target="_blank"
          className={cn(buttonVariants())}
        >
          <IconVercel className="mr-2" />
          <span className="hidden sm:block">Deploy to Vercel</span>
          <span className="sm:hidden">Deploy</span>
        </a>
      </div> */}
    </header>
  )
}
