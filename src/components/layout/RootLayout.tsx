import { component$, Slot } from "@builder.io/qwik";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";
import { SiteFooter } from "../SiteFooter";
import { cn } from "@/lib/utils";

export default component$(({ bordered = false }: { bordered?: boolean }) => {
  return (
    <>
      <div class="hidden flex-col md:flex min-h-screen">
        <div class="container">
          <div class="flex h-16 items-center px-4">
            <MainNav client:hover />
            <div class="ml-auto flex items-center space-x-4">
              <a href="/login" class={buttonVariants({ variant: "ghost" })}>
                Log in
              </a>
              <a href="/login" class={buttonVariants({ variant: "default" })}>
                Get Notion free
              </a>
            </div>
          </div>
        </div>
        <main class={cn("flex-1", bordered && "border-t")}>
          <Slot />
        </main>
        <SiteFooter />
      </div>
    </>
  );
});
