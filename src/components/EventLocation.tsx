import { MapPinIcon } from "@heroicons/react/24/outline";
import { EventSublineItem } from "./EventSublineItem";

type EventLocationProps = {
  location: string;
};
export function EventLocation({ location }: EventLocationProps) {
  return (
    <EventSublineItem title={location} className="text-blue">
      <MapPinIcon className="size-4 mb-1" />
      <span>{location}</span>
    </EventSublineItem>
  );
}
