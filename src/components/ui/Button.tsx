import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-none border text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kreeda-blue focus-visible:ring-offset-2 focus-visible:ring-offset-near-black disabled:pointer-events-none disabled:opacity-50 min-h-11 px-6 py-3",
  {
    variants: {
      variant: {
        primary:
          "border-kreeda-blue bg-kreeda-blue/10 text-white hover:bg-kreeda-blue hover:text-near-black",
        secondary:
          "border-metallic-gray/30 bg-transparent text-white hover:border-kreeda-blue hover:text-kreeda-blue",
        ghost:
          "border-transparent bg-transparent text-muted-gray hover:text-white hover:border-metallic-gray/20",
      },
      size: {
        default: "min-h-11 px-6 py-3",
        sm: "min-h-9 px-4 py-2 text-[10px]",
        lg: "min-h-12 px-8 py-3.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      showArrow = true,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            <span className="relative z-10 flex items-center gap-2">
              {children}
            </span>
            {showArrow && (
              <ArrowRight
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            )}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
