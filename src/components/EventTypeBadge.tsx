import { EventSize, EventType } from "@/lib/events";
import { EventSublineItem } from "./EventSublineItem";
import { cn } from "@/lib/utils";

type EventTypeProps = {
  type: EventType;
};
export function EventTypeBadge({ type }: EventTypeProps) {
  const Icon = type.icon;
  const color = (eventSize?: EventSize) => {
    switch (eventSize) {
      case "small":
        return "text-darkblue";
      case "medium":
        return "text-red";
      case "large":
        return "text-turquoise";
      default:
        return "text-neutral";
    }
  };
  return (
    <EventSublineItem title={type.category} className={cn(color(type.size))}>
      <Icon className="size-4 mb-1" />
      <span>{type.category}</span>
    </EventSublineItem>
  );
}
