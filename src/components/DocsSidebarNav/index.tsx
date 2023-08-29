import { cn } from "@/lib/utils";
import { Link } from "@builder.io/qwik-city";

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
} & {
  href: string;
  items?: never;
};

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

const docsConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/guides",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/guides/documentation",
        },
        {
          title: "Contentlayer",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Components",
          href: "/guides/documentation/components",
        },
        {
          title: "Code Blocks",
          href: "/guides/documentation/code-blocks",
        },
        {
          title: "Style Guide",
          href: "/guides/documentation/style-guide",
        },
        {
          title: "Search",
          href: "/guides/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/guides/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Dashboard",
      items: [
        {
          title: "Introduction",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Layouts",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Server Components",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Authentication",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Database with Prisma",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "API Routes",
          href: "/guides/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Marketing Site",
      items: [
        {
          title: "Introduction",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "File Structure",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Tailwind CSS",
          href: "/guides/in-progress",
          disabled: true,
        },
        {
          title: "Typography",
          href: "/guides/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};

export function DocsSidebarNav() {
  const items = docsConfig.sidebarNav;
  const pathname = "";

  return items.length ? (
    <div class="w-full">
      {items.map((item, index) => (
        <div key={index} class={cn("pb-8")}>
          <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>
          {item.items ? (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items.length ? (
    <div class="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) =>
        !item.disabled && item.href ? (
          <Link
            key={index}
            href={item.href}
            class={cn(
              "flex w-full items-center rounded-md p-2 hover:underline",
              {
                "bg-muted": pathname === item.href,
              }
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
          </Link>
        ) : (
          <span
            key={index}
            class="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
          >
            {item.title}
          </span>
        )
      )}
    </div>
  ) : null;
}
