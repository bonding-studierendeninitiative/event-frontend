import { Events } from "@/components/Events";
import { EventsNav } from "@/components/EventsNav";
import { getEvents } from "@/lib/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const showNavigation: boolean = Boolean(searchParams?.showNavigation) || true;
  const hideLocalGroupSelector: boolean =
    searchParams?.hideLocalGroupSelector === "true";
  const search = (searchParams?.search as string) || "";
  const localGroup = (searchParams?.localGroup as string) || "alle";
  const filterValues = { search, localGroup };

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["events"],
    queryFn: getEvents,
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {showNavigation && (
          <EventsNav
            hideLocalGroupSelector={hideLocalGroupSelector}
            defaultValues={filterValues}
          />
        )}
        <Events filterValues={filterValues} />
      </HydrationBoundary>
    </>
  );
}
