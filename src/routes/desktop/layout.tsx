import { component$, Slot } from "@builder.io/qwik";
import RootLayout from "@/components/layout/RootLayout";
export default component$(() => {
  return (
    <RootLayout>
      <Slot />
    </RootLayout>
  );
});
