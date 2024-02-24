import { Events } from "@/components/Events";
import { EventsNav } from "@/components/EventsNav";

export default function Home({
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
    <div className="w-full flex flex-col items-center gap-8 py-8">
      {showNavigation && (
        <EventsNav
          hideLocalGroupSelector={hideLocalGroupSelector}
          defaultValues={filterValues}
        />
      )}
      <Events filterValues={filterValues} />
    </div>
  );
}
