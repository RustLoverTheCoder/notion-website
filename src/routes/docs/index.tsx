import { component$ } from "@builder.io/qwik";
import notes from "/images/taking-notes.svg";
import { ButtonQwik as Button } from "@/components/ui/button";
export default component$(() => {
  return (
    <>
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-16">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <img src={notes} alt="image" width={360} height={360} />
          <hr class="h-5" />
          <h1 class="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            The next gen of notes & docs
          </h1>
          <h2 class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Simple. Powerful. Beautiful. Communicate more efficiently with Notion’s flexible building blocks.
          </h2>
          <div class="space-x-4">
            <Button size="lg">Get Notion free</Button>
          </div>
        </div>
      </section>
    </>
  );
});
