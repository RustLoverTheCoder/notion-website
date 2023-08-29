/** @jsxImportSource react */
import { icons } from "lucide-react";
import { qwikify$ } from "@builder.io/qwik-react";
import { cn } from "@/lib/utils";

export const Icon = ({
  name,
  color,
  size,
  className,
  clsx,
}: {
  name: string;
  color?: string;
  size?: number;
  className?: string;
  clsx?: string;
}) => {
  // @ts-ignore
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    return null;
  }

  return (
    <LucideIcon color={color} size={size} className={cn(className, clsx)} />
  );
};

export const IconQwik = qwikify$(Icon);
