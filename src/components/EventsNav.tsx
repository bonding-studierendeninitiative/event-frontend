import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "./FormSubmitButton";

export async function filterEvents(formData: FormData) {
  "use server";

  const search = formData.get("search") as string;
  const localGroup = formData.get("localGroup") as string;

  const searchParams = new URLSearchParams({
    ...(search && { search: search.trim() }),
    ...(localGroup && { localGroup: localGroup.trim() }),
  });

  redirect(`?${searchParams.toString()}`);
}

export async function EventsNav({
  defaultValues,
}: {
  defaultValues: { search: string; localGroup: string };
}) {
  const options = [
    { value: "aachen", label: "Aachen" },
    { value: "berlin", label: "Berlin" },
    { value: "braunschweig", label: "Braunschweig" },
    { value: "bremen", label: "Bremen" },
    { value: "dresden", label: "Dresden" },
    { value: "erlangen", label: "Erlangen" },
    { value: "hamburg", label: "Hamburg" },
    { value: "karlsruhe", label: "Karlsruhe" },
    { value: "kaiserslautern", label: "Kaiserslautern" },
    { value: "nürnberg", label: "Nürnberg" },
    { value: "stuttgart", label: "Stuttgart" },
  ];
  return (
    <form
      action={filterEvents}
      className="flex flex-col sm:flex-row gap-8 items-center"
    >
      <div className="inline-flex gap-4 items-center min-w-80">
        <MagnifyingGlassIcon className="w-4" />
        <Input
          placeholder="Finde Events in deiner Nähe"
          name="search"
          defaultValue={defaultValues.search}
          className="flex-grow border-blue border-2 border-solid rounded-lg"
        />
      </div>
      <Select name="localGroup" defaultValue={defaultValues.localGroup}>
        <SelectContent className="bg-blue">
          <SelectItem className="text-white" value="alle">
            Alle Standorte
          </SelectItem>
          <SelectSeparator />
          {options.map((option) => {
            return (
              <SelectItem
                key={option.value}
                className="text-white"
                value={option.value}
              >
                {option.label}
              </SelectItem>
            );
          })}
        </SelectContent>
        <SelectTrigger className="flex gap-2 min-w-40 justify-between items-center px-5 py-3 rounded-lg bg-blue text-white">
          <SelectValue placeholder="Wähle einen Standort aus" />
        </SelectTrigger>
      </Select>
      <FormSubmitButton>Events filtern</FormSubmitButton>
    </form>
  );
}
