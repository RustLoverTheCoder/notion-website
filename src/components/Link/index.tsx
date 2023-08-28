import { Slot, component$ } from "@builder.io/qwik";
import { type LinkProps, useNavigate } from "@builder.io/qwik-city";

export const Link = component$<LinkProps>((props) => {
  const nav = useNavigate();

  return (
    <a
      preventdefault:click
      onClick$={() => {
        // eslint-disable-next-line qwik/valid-lexical-scope
        nav(props.href);
      }}
      {...props}
    >
      <Slot />
    </a>
  );
});
