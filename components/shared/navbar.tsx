'use client'

import { useState, Suspense, SetStateAction, Dispatch } from 'react'
import { Github, Menu } from 'lucide-react'
import Link from 'next/link'

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { ToggleTheme } from '@/components/layout/toogle-theme'
import { ToogleLocale } from '@/components/layout/toogle-locale'
import { KinotioLogo } from '@/components/logos/kinotio-logo'

import { useScopedI18n } from '@/locales/client'

import { DATA } from '@/data'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const translate = useScopedI18n('navbar')

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <KinotioLogo width={100} height={30} className="ml-2" />
      </Link>

      {/* <!-- Mobile --> */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} translate={translate} />

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              {translate('products')}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[500px] grid-cols-1 gap-5 p-4">
                <div className="flex flex-col gap-2">
                  {DATA.products.map(({ name, description, href }, idx) => (
                    <Link
                      key={idx}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mb-1 font-semibold leading-none text-foreground">
                        {name}
                      </span>
                      <span className="line-clamp-2 text-muted-foreground">
                        {description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {DATA.navbar.map(({ href, name }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {translate(name as keyof typeof translate)}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <Suspense>
          <ToogleLocale />
        </Suspense>
        <ToggleTheme />
        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href={DATA.social_url.github}
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  translate,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  translate: any
}) => {
  return (
    <div className="flex items-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer lg:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
        >
          <div>
            <SheetHeader className="mb-4 ml-4">
              <SheetTitle className="flex items-center">
                <Link href="/" className="flex items-center">
                  <KinotioLogo width={100} height={30} className="ml-2" />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-2">
              {DATA.navbar.map(({ href, name }) => (
                <Button
                  key={href}
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href={href}>{translate(name)}</Link>
                </Button>
              ))}
            </div>
          </div>

          <SheetFooter className="flex-col sm:flex-col justify-start items-start">
            <Separator className="my-4" />
            <Suspense>
              <ToogleLocale />
            </Suspense>
            <Separator className="my-4" />
            <ToggleTheme />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
