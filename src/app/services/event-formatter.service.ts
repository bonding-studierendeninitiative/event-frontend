import {Injectable} from '@angular/core';
import {Event} from '../entities/Event';
import * as dayjs from 'dayjs';
import * as UTC from 'dayjs/plugin/utc';
dayjs.extend(UTC);
import * as Timezone from 'dayjs/plugin/timezone';
dayjs.extend(Timezone);

@Injectable({
  providedIn: 'root'
})
export class EventFormatterService {

  private eventTypes = ['Engineering Competition', 'European Workshop', 'Exkursion', 'Fallstudie', 'Industry Night', 'Infoabend',
    'Infostand', 'Kamin-Abend', 'Kompass', 'Messe', 'nicht bonding', 'Runder Tisch', 'Semesterplaner', 'Sonstige Events',
    'Thementag', 'Training', 'Vortrag', 'Workshop'];

  constructor() {
  }

  formatEvent(event: Event): void {
    const adjustedStartDate = dayjs.tz(event.StartDatum, "Europe/Berlin").format('DD.MM.YYYY');
    event.StartDatum = adjustedStartDate;
    
    if (event.EndeDatum) {
      event.StartDatum += ' - ' + dayjs.tz(event.EndeDatum, "Europe/Berlin").format('DD.MM.YYYY');
    }
    if (!event.StartUhrzeit) {
      event.StartUhrzeit = 'ganztägig';
    } else {
      event.StartUhrzeit = event.StartUhrzeit.substring(0, 5);
    }
    if (event.EndeUhrzeit) {
      event.StartUhrzeit += ' - ' + event.EndeUhrzeit.substring(0, 5);
    }
    event.Typ = event.Typ.substring(0, event.Typ.length - 9);
    if (this.eventTypes.includes(event.Typ)) {
      event.TypIcon = 'assets/event_icons/' + event.Typ + '.png';
    } else {
      event.TypIcon = 'assets/event_icons/Standard.png';
    }
  }
}

