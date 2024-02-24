import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type EventDescriptionProps = {
  description: string;
} & HTMLAttributes<HTMLParagraphElement>;

export function EventDescription({
  description,
  className,
}: EventDescriptionProps) {
  return (
    <p
      className={cn(
        "text-smaller line-clamp-3 m-0 t-neutral-60 overflow-hidden text-sm",
        className
      )}
    >
      {description}
    </p>
  );
}
