import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side="top"
            sideOffset={8}
            className="rounded-xl bg-sky-500 px-4 py-2 text-sm text-white shadow-lg animate-in fade-in zoom-in-95"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-sky-500" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}