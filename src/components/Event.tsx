import { Event } from "@/lib/dto";
import { EventTitle } from "./EventTitle";
import { EventDate } from "./EventDate";
import { EventTypeBadge } from "./EventTypeBadge";
import { EventLocation } from "./EventLocation";
import { EventDescription } from "./EventDescription";
import { getTypeByCategory, strip } from "@/lib/events";

export function _bondingEvent({ event }: { event: Event }) {
  return (
    <div className="border-neutral-20 border shadow-md max-w-[45ch] flex flex-col rounded-xl">
      <div className="p-4 flex flex-col flex-grow gap-2 items-start">
        <EventTitle title={event.title} />
        <div className="flex gap-x-4 gap-y-2 items-center flex-wrap">
          <EventDate {...event.startDate} />
          {event.localGroup && <EventLocation location={event.localGroup} />}
          <EventTypeBadge type={getTypeByCategory(event.type)} />
        </div>
        <EventDescription description={strip(event.description)} />
      </div>
      <div className="flex items-center justify-center px-4 pt-2 pb-4">
        <a
          href={`https://www2.bonding.de/veranstaltungen.nsf/anmeldungstud?OpenForm&id=${event.id}`}
          className="text-white bg-blue text-center flex-grow rounded-full px-4 py-2 no-underline"
        >
          Mehr Informationen & Anmeldung
        </a>
      </div>
    </div>
  );
}
