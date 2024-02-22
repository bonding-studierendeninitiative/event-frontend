"use client";

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

type EventsNavProps = {
  search: string;
  localGroup: string;
};
export const EventsNav = ({ search, localGroup }: EventsNavProps) => {
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
    <div className="flex flex-col sm:flex-row gap-8 items-center">
      <div className="inline-flex gap-4 items-center min-w-80">
        <MagnifyingGlassIcon className="w-4" />
        <Input
          placeholder="Finde Events in deiner Nähe"
          name="event-search"
          className="flex-grow border-blue border-2 border-solid rounded-lg"
          onChange={(e) => {
            parent.postMessage(
              {
                type: "Event-Component-Search",
                value: e.target.value,
              },
              "*"
            );
          }}
        />
      </div>
      <Select
        value={localGroup}
        onValueChange={(e) => {
          parent.postMessage(
            {
              type: "Event-Component-Local-Group",
              value: e,
            },
            "*"
          );
        }}
      >
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
    </div>
  );
};
