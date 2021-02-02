import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event';
import { EventServiceService } from '../services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventFormatterService } from '../services/event-formatter.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];
  displayedColumns: string[] = ['Typ', 'DatumZeit', 'Veranstaltung'];
  private HSGs = ['aachen', 'berlin', 'bochum', 'braunschweig', 'bremen',
    'dresden', 'erlangen', 'hamburg', 'kaiserslautern', 'karlsruhe', 'stuttgart'];

  constructor(private eventService: EventServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formatter: EventFormatterService) {
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
      if (this.activeRoute.snapshot.params.location) {
        if (!(this.HSGs.includes(this.activeRoute.snapshot.params.location))) {
          this.router.navigate(['']);
        }
        this.events = this.events.filter(event => {
          if (event.HSG.toLocaleLowerCase() === this.activeRoute.snapshot.params.location.toString()
            || event.HSG === '- überregional -') {
            return event;
          }
        });
      }
      this.events.sort((a, b) => a.StartDatum.localeCompare(b.StartDatum));

      this.events.forEach(event => {
        this.formatter.formatEvent(event);
      });
    });
  }

  routeDetails(event: Event): void {
    if (event.Typ == 'Messe') {
      if (event.HSG != '- überregional -') {
        window.location.href = 'https://' + event.HSG + '.firmenkontaktmesse.de';
      } else {
        window.location.href = 'https://firmenkontaktmesse.de';
      }
    } else {
      this.router.navigate(['/eventDetails/', event.ID]);
    }
  }
}
