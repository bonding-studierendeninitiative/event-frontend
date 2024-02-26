import { Event } from "@/lib/dto";
import { EventTitle } from "./EventTitle";
import { EventDate } from "./EventDate";
import { EventTypeBadge } from "./EventTypeBadge";
import { EventLocation } from "./EventLocation";
import { EventDescription } from "./EventDescription";
import { getTypeByCategory, strip } from "@/lib/events";

export function _bondingEvent({ event }: { event: Event }) {
  return (
    <div className="border-neutral-20 border shadow max-w-[45ch] flex flex-col px-8 pt-6 pb-7 gap-4 rounded-3xl">
      <EventTitle title={event.title} />
      <div className="flex gap-x-4 gap-y-2 items-center flex-wrap">
        <EventDate {...event.startDate} />
        {event.localGroup && <EventLocation location={event.localGroup} />}
        <EventTypeBadge type={getTypeByCategory(event.type)} />
      </div>
      <EventDescription
        className="flex-grow"
        description={strip(event.description)}
      />
      <a
        href={`https://www2.bonding.de/veranstaltungen.nsf/anmeldungstud?OpenForm&id=${event.id}`}
        className="text-white bg-blue text-center rounded-full px-4 py-2 no-underline"
        target="_blank"
      >
        Mehr Informationen & Anmeldung
      </a>
    </div>
  );
}
