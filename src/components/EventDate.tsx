import { CalendarIcon } from "@heroicons/react/24/outline";
import { EventSublineItem } from "./EventSublineItem";

type EventDateProps = {
  day?: number | undefined;
  month?: string;
  year?: number | undefined;
};
export function EventDate({ day, month, year }: EventDateProps) {
  return (
    <EventSublineItem>
      <CalendarIcon className="size-4 mb-1" />
      <span>
        {day} {month} {year}
      </span>
    </EventSublineItem>
  );
}
