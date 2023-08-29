/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icons";

export const ModeToggle = qwikify$(() => {
  const setTheme = (theme: "light" | "dark" | "system") => {
    console.log(theme);
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
            <Icon
              className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              name="Sun"
            />
            <Icon
              className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              name="Moon"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            <Icon className="mr-2 h-4 w-4" name="Sun" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            <Icon className="mr-2 h-4 w-4" name="Moon" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            <Icon className="mr-2 h-4 w-4" name="Laptop" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
});
