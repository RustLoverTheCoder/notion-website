import { component$ } from "@builder.io/qwik";
export default component$(() => {
  return (
    <>
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            
          <h1 class="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            An example app built using Next.js 13 server components.
          </h1>
          <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            I&apos;m building a web app with Next.js 13 and open sourcing
            everything. Follow along as we figure this out together.
          </p>
        </div>
      </section>
    </>
  );
});
