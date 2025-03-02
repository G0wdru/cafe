import { cn } from "@/lib/utils";
import React, { ButtonHTMLAttributes, forwardRef, CSSProperties } from "react";

// Button Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean; // Added this prop
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    // If asChild is true, we render the children directly
    // This is a simplified version of the asChild pattern
    if (asChild && children) {
      const child = React.Children.only(children) as React.ReactElement;
      return React.cloneElement(child, {
        className: cn(
          "btn",
          {
            "btn-primary": variant === "primary",
            "btn-outline": variant === "outline",
            "btn-secondary": variant === "secondary",
            "btn-accent": variant === "accent",
            "bg-transparent hover:bg-secondary/50": variant === "ghost",
            "px-3 py-2 text-xs": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        ),
        ref,
        ...props
      });
    }

    return (
      <button
        ref={ref}
        className={cn(
          "btn",
          {
            "btn-primary": variant === "primary",
            "btn-outline": variant === "outline",
            "btn-secondary": variant === "secondary",
            "btn-accent": variant === "accent",
            "bg-transparent hover:bg-secondary/50": variant === "ghost",
            "px-3 py-2 text-xs": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Section Heading Component
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        "mb-10 space-y-2",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// Badge/Tag Component
interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "accent";
  className?: string;
}

export const Badge = ({ 
  children, 
  variant = "default",
  className 
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-primary/10 text-primary": variant === "default",
          "border border-primary/30 text-primary": variant === "outline",
          "bg-accent/10 text-accent": variant === "accent",
        },
        className
      )}
    >
      {children}
    </span>
  );
};

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("container mx-auto px-4 md:px-6", className)}>
      {children}
    </div>
  );
};

// Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("section-padding", className)}>
      {children}
    </section>
  );
};

// Card Component
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className, hover = false }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-6 shadow-sm",
        hover && "hover-lift",
        className
      )}
    >
      {children}
    </div>
  );
};
