/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import pencil from "public/images/pencil.svg";

export const MainNav = qwikify$(() => {
  const ProductList = [
    {
      title: "Wikis",
      href: "/wikis",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Projects",
      href: "/projects",
      description: "How to install dependencies and structure your app.",
    },
    {
      title: "Docs",
      href: "/docs",
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ];
  const downLoadList = [
    {
      title: "iOS",
      href: "/mobile",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Android",
      href: "/mobile",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Mac",
      href: "/desktop",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Windows",
      href: "/desktop",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Linux",
      href: "/desktop",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Web-Clipper",
      href: "/web-clipper",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ];

  const SolutionsList = [
    {
      title: "Enterprise",
      href: "/enterprise",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Teams",
      href: "/teams",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Personal",
      href: "/personal",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
  ];

  const list = [
    {
      title: "Blog",
      href: "/blog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Guides & tutorials",
      href: "/guides",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "API Docs",
      href: "/api-docs",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
  ];
  return (
    <div className="flex items-center">
      <a
        className={cn(
          buttonVariants({ variant: "ghost" })
        )}
        href="/"
      >
        <img src={pencil} alt="logo" width={24} height={24} className="w-6 h-6 mr-2" />
        <span className="hidden font-bold sm:inline-block">一笔</span>
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Product</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>

                {ProductList.map((component) => (
                  <ListItem href={component.href} title={component.title}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Download</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {downLoadList.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {SolutionsList.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                {list.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/pricing">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
});

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
