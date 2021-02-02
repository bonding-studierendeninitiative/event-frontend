import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event';
import { EventServiceService } from '../services/event-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isMobile } from 'is-mobile';
import { EventFormatterService } from '../services/event-formatter.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  isMobile = isMobile();

  constructor(private eventService: EventServiceService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private formatter: EventFormatterService) { }

  ngOnInit(): void {
    this.eventService.getEvent(this.activeRoute.snapshot.params.id).subscribe((data) => {
      this.event = data;
      this.formatter.formatEvent(this.event);
    },
      (err) => {
        console.log(err);
        this.router.navigate(['/']);
      });
  }

  register(): void {
    window.location.href = 'https://www2.bonding.de/veranstaltungen.nsf/anmeldungstud?OpenForm&id=' + this.event.ID;
  }
}
