"use client";

import { type FC } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/tokens";
import { cn } from "@/lib/utils";

export type WhatsAppButtonProps = {
  className?: string;
};

export const WhatsAppButton: FC<WhatsAppButtonProps> = ({ className }) => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent-green shadow-lg transition-all duration-200 hover:bg-accent-green-dark hover:shadow-xl hover:scale-105",
        className
      )}
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
};
