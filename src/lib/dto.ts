import { API_V0_Event } from "./api";
import { EventCategory, formatEventType, strip } from "./events";

export type Event = {
  title: string;
  location: string;
  localGroup: string;
  id: string;
  signUpStatus: string;
  type: EventCategory;
  description: string;
  startDate:
    | {
        minute: number;
        hour: number;
        day: number;
        month: string;
        year: number;
        date: string;
      }
    | undefined;
  endDate:
    | {
        minute: number;
        hour: number;
        day: number;
        month: string;
        year: number;
        date: string;
      }
    | undefined;
};

export const adaptEventResource: (event: API_V0_Event) => Event = (event) => {
  const startDate = new Date(event.StartDatum) || undefined;
  const endDate = new Date(event.EndeDatum) || undefined;
  const endTime = new Date(event.EndeUhrzeit) || undefined;
  const startTime = new Date(event.StartUhrzeit) || undefined;
  const months = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];

  return {
    title: event.Titel,
    location: event.Ort,
    localGroup: event.HSG,
    id: event.ID,
    signUpStatus: event.Anmeldung,
    type: formatEventType(event),
    description: strip(event.WebText),
    startDate: event.StartDatum
      ? {
          minute: startTime.getMinutes(),
          hour: startTime.getHours(),
          day: startDate.getDate(),
          month: months[startDate.getMonth()],
          year: startDate.getFullYear(),
          date: event.StartDatum,
        }
      : undefined,
    endDate: event.EndeDatum
      ? {
          minute: endTime.getMinutes(),
          hour: endTime.getHours(),
          day: endDate.getDate(),
          month: months[endDate.getMonth()],
          year: endDate.getFullYear(),
          date: event.EndeDatum,
        }
      : undefined,
  };
};
