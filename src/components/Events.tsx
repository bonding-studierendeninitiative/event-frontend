"use server";

import { getEvents } from "@/lib/api";
import { adaptEventResource } from "@/lib/dto";
import { NoEvents } from "./NoEvents";
import { _bondingEvent } from "./Event";

export const Events = async ({
  localGroup,
  search,
}: {
  localGroup: string;
  search: string;
}) => {
  /* const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["events"],
    queryFn: getEvents,
    enabled: mounted,
  });*/

  const data = await getEvents();

  const filteredEvents =
    data
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
        if (!search || search.length < 3) {
          return true;
        } else {
          const { title, location, description, localGroup } = item;
          return [title, location, description, localGroup]
            .join("\n")
            .toLowerCase()
            .includes(search.toLowerCase());
        }
      }) || [];

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
};
