import React from "react";
import { cn } from "@/lib/utils";

interface RaizeTextProps {
  className?: string;
}

export function RaizeText({ className }: RaizeTextProps) {
  return (
    <span className={cn("font-semibold", className)}>
      r<span className="text-primary">AI</span>ze
    </span>
  );
}
