import { component$, useSignal } from "@builder.io/qwik";
import { cn } from "@/lib/utils";
import { ButtonQwik as Button } from "@/components/ui/button";
import { LabelQwik as Label } from "../ui/label";
import { InputQwik as Input } from "../ui/input";
import { IconQwik as Icon } from "../ui/icons";

export const UserAuthForm = component$(({ className, ...props }: any) => {
  const loading = useSignal<boolean>(false);
  return (
    <>
      <div class={cn("grid gap-6", className)} {...props}>
        <form
          onSubmit$={(e) => {
            e.stopPropagation();
            loading.value = true;
            setTimeout(() => {
              loading.value = false;
            }, 3000);
            return false;
          }}
        >
          <div class="grid gap-2">
            <div class="grid gap-1">
              {/* eslint-disable-next-line qwik/no-react-props */}
              <Label clsx="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={loading.value}
              />
            </div>
            <Button disabled={loading.value} clsx="w-full">
              {loading.value && (
                <Icon clsx="mr-2 h-4 w-4 animate-spin" name="Loader2" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          variant="outline"
          type="button"
          disabled={loading.value}
          clsx="w-full"
        >
          {loading.value ? (
            <Icon clsx="mr-2 h-4 w-4 animate-spin" name="Loader2" />
          ) : (
            <Icon clsx="mr-2 h-4 w-4" name="Github" />
          )}{" "}
          Github
        </Button>
      </div>
    </>
  );
});
