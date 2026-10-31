import * as React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "dark";

export type ButtonSize = "sm" | "md" | "lg" | "icon" | "icon-sm";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
    href?: undefined;
  };

export type ButtonAsAnchor = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#ff0000] text-white hover:bg-[#d90000] active:bg-[#b80000] focus-visible:outline-[#ff0000]",
  secondary:
    "bg-[#333333] text-white hover:bg-[#ff0000] active:bg-[#222222] focus-visible:outline-[#333333]",
  tertiary:
    "border border-white/25 bg-white/10 text-white backdrop-blur-md shadow-xs hover:bg-white hover:text-[#171717] focus-visible:outline-white",
  outline:
    "border border-black/15 bg-white text-[#333333] hover:border-[#ff0000] hover:text-[#ff0000] focus-visible:outline-[#ff0000]",
  ghost:
    "bg-transparent text-[#333333] hover:bg-black/[0.05] hover:text-[#ff0000] focus-visible:outline-[#ff0000]",
  dark:
    "border border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-[#333333] focus-visible:outline-white",
};

/**
 * Mobile-first responsive sizing:
 * - Keeps a strict minimum accessible touch target height (min-h-[38px] for sm, min-h-[42px] for md, min-h-[46px] for lg)
 * - Minimum font size is text-[12.5px] scaling to text-[13.5px] - text-[15px]
 * - Horizontal padding and gap adapt fluidly between mobile and sm/md breakpoints
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-[38px] px-3 py-1.5 text-[12.5px] sm:text-[13px] sm:px-3.5 gap-1.5 sm:gap-2",
  md: "min-h-[42px] sm:min-h-11 px-4 py-2 sm:px-5 sm:py-2.5 text-[13px] sm:text-[14px] gap-2 sm:gap-2.5",
  lg: "min-h-[46px] sm:min-h-12 px-5 py-2.5 sm:px-6 sm:py-3 text-[13.5px] sm:text-[15px] gap-2.5 sm:gap-3",
  icon: "size-10 sm:size-11 p-0 shrink-0",
  "icon-sm": "size-8.5 sm:size-9 p-0 shrink-0",
};

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    className = "",
    children,
    disabled,
    ...rest
  } = props;

  const baseStyles =
    "inline-flex items-center justify-center font-medium select-none cursor-pointer rounded-lg transition-all duration-200 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

  const resolvedClasses = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {isLoading ? (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      ) : (
        leftIcon
      )}
      {children}
      {!isLoading && rightIcon}
    </>
  );

  if (props.as === "a") {
    const { as: _as, href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };
    return (
      <a
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={resolvedClasses}
        {...anchorRest}
      >
        {content}
      </a>
    );
  }

  const buttonRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      type={buttonRest.type || "button"}
      disabled={disabled || isLoading}
      className={resolvedClasses}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";
