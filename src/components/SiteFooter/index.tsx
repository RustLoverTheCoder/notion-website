import { siteConfig } from "@/config";
import { component$ } from "@builder.io/qwik";
import { ModeToggle } from "../ModeToggle";

export const SiteFooter = component$(() => {
  return (
    <>
      <footer class="">
        <div class="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            {/* <Icons.logo /> */}
            <p class="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
              >
                shadcn
              </a>
              . Hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
              >
                Vercel
              </a>
              . Illustrations by{" "}
              <a
                href="https://popsy.co"
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
              >
                Popsy
              </a>
              . The source code is available on{" "}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <ModeToggle client:hover />
        </div>
      </footer>
    </>
  );
});
