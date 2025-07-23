import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import PropTypes from "prop-types";
import { cn } from "../../lib/utils";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: { // keep all default colors
      primary: "#2563eb",
      "primary-foreground": "#fff",
      secondary: "#e5e7eb",
      "secondary-foreground": "#1f2937",
      destructive: "#dc2626",
      "destructive-foreground": "#fff",
      "game-success": "#22c55e",
      "game-disabled": "#9ca3af",
      accent: "#fbbf24",
      "accent-foreground": "#fff",
    },
    extend: {
      // You can keep boxShadow, backgroundImage, etc. here if needed
    },
  },
  plugins: [],
};

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold tracking-wide uppercase ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95 border border-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:shadow-lg hover:scale-105 active:scale-95 border border-secondary/20",
        danger:
          "bg-destructive text-destructive-foreground hover:shadow-lg hover:scale-105 active:scale-95 border border-destructive/20",
        success:
          "bg-game-success text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95 border border-game-success/20",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:scale-105 active:scale-95",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95",
        disabled:
          "bg-game-disabled text-gray-400 cursor-not-allowed opacity-60",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "default",
      asChild = false,
      isLoading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isDisabled = disabled || isLoading || variant === "disabled";
    return (
      <Comp
        className={cn(
          buttonVariants({
            variant: isDisabled ? "disabled" : variant,
            size,
            className,
          }),
          isLoading && "animate-pulse-glow"
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
        {/* Gaming button shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      </Comp>
    );
  }
);
Button.displayName = "Button";

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "success",
    "outline",
    "ghost",
    "disabled",
    "link",
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
  asChild: PropTypes.bool,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

export { Button, buttonVariants };
