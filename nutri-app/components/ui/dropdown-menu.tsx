"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, isValidElement, cloneElement } from "react";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  className?: string;
}

function DropdownMenu({ trigger, children, align = "right", className }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>
      {open && (
        <div
          className={cn(
            "absolute z-50 mt-2 min-w-[10rem] rounded-xl border border-gray-200 bg-white shadow-lg py-1 animate-fade-in",
            align === "right" ? "right-0" : "left-0",
            className
          )}
          onClick={() => setOpen(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownMenuItem({
  className,
  destructive,
  asChild,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { destructive?: boolean; asChild?: boolean }) {
  const classes = cn(
    "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",
    destructive
      ? "text-red-600 hover:bg-red-50"
      : "text-gray-700 hover:bg-gray-100",
    className
  );

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return cloneElement(child, {
      className: cn(classes, child.props.className),
    });
  }

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
}

function DropdownMenuSeparator({ className }: { className?: string }) {
  return <div className={cn("my-1 border-t border-gray-100", className)} />;
}

function DropdownMenuLabel({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-3 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider", className)}
      {...props}
    />
  );
}

export { DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, ChevronDown };
