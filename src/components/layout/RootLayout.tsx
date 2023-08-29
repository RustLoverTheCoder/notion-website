import { component$, Slot } from "@builder.io/qwik";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import { SiteFooter } from "../SiteFooter";

export default component$(() => {
  return (
    <>
      <div class="hidden flex-col md:flex min-h-screen">
        <div class="container">
          <div class="flex h-16 items-center px-4">
            <MainNav client:hover />
            <div class="ml-auto flex items-center space-x-4">
              <a href="/" class={buttonVariants({ variant: "ghost" })}>
                Log in
              </a>
              <a href="/" class={buttonVariants({ variant: "default" })}>
                Get Notion free
              </a>
            </div>
          </div>
        </div>
        <main class="flex-1">
          <Slot />
        </main>
        <SiteFooter />
      </div>
    </>
  );
});
