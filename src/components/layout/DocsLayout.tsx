import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <article class="container relative max-w-3xl py-6 lg:py-10 prose prose-zinc dark:prose-invert">
        <Slot />
        <hr class="mt-12" />
      </article>
    </>
  );
});
