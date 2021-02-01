import {Component, OnInit} from '@angular/core';
import {Event} from '../entities/Event';
import {EventServiceService} from '../services/event-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];
  displayedColumns: string[] = ['Typ', 'DatumZeit', 'Veranstaltung'];

  constructor(private eventService: EventServiceService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.eventService.getAllEvents().subscribe((data) => {
        this.events = data;
        if (this.activeRoute.snapshot.params.location) {
          this.events = this.events.filter(event => {
            if (event.HSG.toLocaleLowerCase() === this.activeRoute.snapshot.params.location.toString()
              || event.HSG === '- überregional -') {
              return event;
            }
          });
        }
        this.events.sort((a, b) => a.StartDatum.localeCompare(b.StartDatum));

        this.events.forEach(event => {
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
        });
      });
    }
}
