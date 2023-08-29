import { component$, Slot } from "@builder.io/qwik";
import RootLayout from "@/components/layout/RootLayout";
import { DocsSidebarNav } from "@/components/DocsSidebarNav";
import DocsLayout from "@/components/layout/DocsLayout";
export default component$(() => {
  return (
    <RootLayout bordered>
      <div class="container flex-1">
        <div class="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside class="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
            <DocsSidebarNav />
          </aside>
          <DocsLayout>
            <Slot />
          </DocsLayout>
        </div>
      </div>
    </RootLayout>
  );
});
