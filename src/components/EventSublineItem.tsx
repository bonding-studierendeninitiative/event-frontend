import { cn } from "@/lib/utils";

type EventSublineItemProps = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};
export function EventSublineItem({
  children,
  title,
  className,
}: EventSublineItemProps) {
  return (
    <span
      title={title}
      className={cn(
        "font-bold tracking-wide text-sm flex flex-nowrap items-center gap-1",
        className
      )}
    >
      {children}
    </span>
  );
}
