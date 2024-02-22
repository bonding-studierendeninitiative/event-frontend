import { Events } from "@/components/Events";
import { EventsNav } from "@/components/EventsNav";
import { EventLogic } from "./logic";

export default function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const ref = useRef<HTMLDivElement>(null);
  const search: string = (searchParams?.search as string) || "";
  const localGroup: string = (searchParams?.localGroup as string) || "alle";

  return (
    <>
      <EventLogic>
        <EventsNav
          // setLocalGroup={setLocalGroup}
          localGroup={localGroup}
          search={search}
          // setSearch={setSearch}
        />
        <Events localGroup={localGroup} search={search} />
      </EventLogic>
    </>
  );
}
