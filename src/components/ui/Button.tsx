import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "main" | "ghost" | "second";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

export default function Button({
  children,
  variant = "main",
  className,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    main: "bg-[#00A86B] text-white hover:bg-[#00945f]",
    ghost:
      "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
    second: "bg-white/10 text-white hover:bg-white/20",
  };

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}