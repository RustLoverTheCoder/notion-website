import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";

export default component$(() => {
  return (
    <>
      <div class="hidden flex-col md:flex">
        <div class="border-b">
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
        <div class="flex-1 space-y-4 p-8 pt-6">123123</div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
