import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "py-3 px-4 bg-piscine rounded text-sm w-full font-semibold text-[#000] transition-colors hover:bg-piscine-500 focus:ring-2 ring-piscine",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
