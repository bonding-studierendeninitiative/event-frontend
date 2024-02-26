import { getEvents } from "@/lib/api";
import { adaptEventResource } from "@/lib/dto";
import { NoEvents } from "./NoEvents";
import { _bondingEvent } from "./Event";

export async function Events({
  filterValues,
}: {
  filterValues: {
    search: string;
    localGroup: string;
    category?: string;
    count: number;
  };
}) {
  const localGroup = filterValues.localGroup;
  const search = filterValues.search;
  const category = filterValues.category;

  const events = await getEvents();

  const filteredEvents =
    events
      ?.map(adaptEventResource)
      ?.sort(
        (a, b) =>
          Date.parse(a.startDate?.date || "") -
          Date.parse(b.startDate?.date || "")
      )
      .filter((item) => {
        if (!localGroup || localGroup === "alle") {
          return true;
        } else {
          return localGroup == item.localGroup.toLowerCase();
        }
      })
      .filter((item) => {
        if (!category || category === "alle") {
          return true;
        } else {
          return item.type.toLowerCase().includes(category);
        }
      })
      .filter((item) => {
        if (!search || search.length < 3) {
          return true;
        } else {
          const { title, location, description, localGroup } = item;
          return [title, location, description, localGroup]
            .join("\n")
            .toLowerCase()
            .includes(search.toLowerCase());
        }
      })
      .slice(0, filterValues.count > 0 ? filterValues.count : undefined) || [];

  if (filteredEvents.length == 0) {
    return <NoEvents />;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-center">
      {filteredEvents.map((event) => {
        return <_bondingEvent key={event.id} event={event} />;
      })}
    </div>
  );
}
