import { useSignal, type Signal, useVisibleTask$ } from "@builder.io/qwik";
import { createContextId, useContextProvider } from "@builder.io/qwik";

export type Theme = "dark" | "light" | "system";

export const ThemeContext = createContextId<Signal<string>>("theme");

export const useTheme = () => {
  const theme = useSignal("light");
  useContextProvider(ThemeContext, theme);
  useVisibleTask$(async () => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme.value === "system") {
      const matchMedia = window.matchMedia("(prefers-color-scheme:dark)");
      root.classList.add(matchMedia.matches ? "dark" : "light");

      // 监听主题变更
      matchMedia.onchange = function () {
        root.classList.remove("light", "dark");
        root.classList.add(matchMedia.matches ? "dark" : "light");
      };

      return;
    }

    root.classList.add(theme.value);
  });
};
