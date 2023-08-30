// import { siteConfig } from "@/config";
import { component$ } from "@builder.io/qwik";
// import { ModeToggle } from "../ModeToggle";
import { ButtonQwik as Button } from "../ui/button";
import { Link } from "@builder.io/qwik-city";
import { InputQwik as Input } from "../ui/input";

export const SiteFooter = component$(() => {
  const navigation = {
    solutions: [
      { name: "Enterprise", href: "/enterprise" },
      { name: "Teams", href: "/teams" },
      { name: "Personal", href: "/personal" },
    ],
    support: [
      { name: "Pricing", href: "/pricing" },
      { name: "Documentation", href: "/api-docs" },
      { name: "Guides", href: "/guides" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Jobs", href: "/jobs" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  };

  return (
    <>
      <footer class="container" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold leading-6 text-foreground">
                    Solutions
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          class="text-sm leading-6 text-muted-foreground hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 text-foreground">
                    Support
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          class="text-sm leading-6 text-muted-foreground hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-semibold leading-6 text-foreground">
                    Company
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          class="text-sm leading-6 text-muted-foreground hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class="mt-10 md:mt-0">
                  <h3 class="text-sm font-semibold leading-6 text-foreground">
                    Legal
                  </h3>
                  <ul role="list" class="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          class="text-sm leading-6 text-muted-foreground hover:text-foreground"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="mt-10 xl:mt-0">
              <h3 class="text-sm font-semibold leading-6 text-foreground">
                Subscribe to our newsletter
              </h3>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form class="mt-6 sm:flex sm:max-w-md">
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <Input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  placeholder="Enter your email"
                />
                <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <Button>Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
          <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
            <div class="flex space-x-6 md:order-2"></div>
            <p class="mt-8 text-xs leading-5 text-muted-foreground md:order-1 md:mt-0">
              &copy; 2020 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
});
