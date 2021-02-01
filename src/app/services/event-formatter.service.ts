import {Injectable} from '@angular/core';
import {Event} from '../entities/Event';

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
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    event.StartDatum = new Date(event.StartDatum).toLocaleDateString('de-DE', options);
    if (event.EndeDatum) {
      event.StartDatum += ' - ' + new Date(event.EndeDatum).toLocaleDateString('de-DE', options);
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
