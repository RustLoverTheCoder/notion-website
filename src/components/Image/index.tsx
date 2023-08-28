import { component$ } from "@builder.io/qwik";

interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  class: string;
}

const ImageDom = (props: ImageProps) => {
  return (
    <img
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      class={props.class}
    />
  );
};

export const Image = component$(ImageDom);
