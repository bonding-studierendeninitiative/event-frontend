import { Events } from "@/components/Events";
import { EventsNav } from "@/components/EventsNav";

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
  const category = (searchParams?.category as string) || "alle";
  const filterValues = { search, localGroup, category };

  return (
    <>
      {showNavigation && (
        <EventsNav
          hideLocalGroupSelector={hideLocalGroupSelector}
          defaultValues={filterValues}
        />
      )}
      <Events filterValues={filterValues} />
    </>
  );
}
