import { component$, Slot } from "@builder.io/qwik";
import BlogLayout from "@/components/layout/BlogLayout";
export default component$(() => {
  return (
    <>
      <BlogLayout>
        <Slot />
      </BlogLayout>
    </>
  );
});
