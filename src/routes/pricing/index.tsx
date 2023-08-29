import RootLayout from "@/components/layout/RootLayout";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <RootLayout>
        <div class="flex-1 space-y-4 p-8 pt-6">Pricing</div>
      </RootLayout>
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
