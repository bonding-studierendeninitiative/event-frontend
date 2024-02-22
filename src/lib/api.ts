export const getEvents: () => Promise<API_V0_Event[]> = async () => {
  const response = await fetch("https://events.bonding.de/api/v0/eventList");
  return await response.json();
};

export type API_V0_Event = {
  Titel: string;
  HSG: string;
  ID: string;
  Anmeldung: string;
  StartDatum: string;
  StartUhrzeit: string;
  EndeDatum: string;
  EndeUhrzeit: string;
  Typ: string;
  Ort: string;
  WebText: string;
};
