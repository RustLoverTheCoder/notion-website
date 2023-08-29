import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { IconQwik as Icon } from "@/components/ui/icons";
import { UserAuthForm } from "@/components/UserAuthForm";

export default component$(() => {
  return (
    <div class="min-h-screen">
      <div class="container flex h-screen w-screen flex-col items-center justify-center">
        <Link
          href="/"
          class={cn(
            "absolute left-4 top-4 md:left-8 md:top-8",
            buttonVariants({ variant: "ghost" })
          )}
        >
          <>
            <Icon clsx="mr-2 h-4 w-4" name="ChevronLeft" />
            Back
          </>
        </Link>
        <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div class="flex flex-col space-y-2 text-center">
            {/* <Icons.logo class="mx-auto h-6 w-6" /> */}
            <h1 class="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p class="text-sm text-muted-foreground">
              Enter your email to sign in to your account
            </p>
          </div>
          <UserAuthForm />
          <p class="px-8 text-center text-sm text-muted-foreground">
            <Link
              href="/register"
              class="hover:text-brand underline underline-offset-4"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
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
