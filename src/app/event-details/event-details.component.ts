import { Component, OnInit } from '@angular/core';
import {Event} from '../entities/Event';
import {EventServiceService} from '../services/event-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {isMobile} from 'is-mobile';

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
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.isMobile);
    this.eventService.getEvent(this.activeRoute.snapshot.params.id).subscribe((data) => {
      this.event = data;
      const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
      this.event.StartDatum = new Date(this.event.StartDatum).toLocaleDateString('de-DE', options);
      if (this.event.EndeDatum) {
        this.event.StartDatum += ' - ' + new Date(this.event.EndeDatum).toLocaleDateString('de-DE', options);
          }
      if (!this.event.StartUhrzeit) {
        this.event.StartUhrzeit = 'ganztägig';
      } else {
        this.event.StartUhrzeit = this.event.StartUhrzeit.substring(0, 5);
      }
      if (this.event.EndeUhrzeit) {
        this.event.StartUhrzeit += ' - ' + this.event.EndeUhrzeit.substring(0, 5);
          }
      if (this.event.Typ) {
        this.event.TypIcon = 'assets/event_icons/' + this.event.Typ.substring(0, this.event.Typ.length - 9) + '.png';
        this.event.Typ = this.event.Typ.substring(0, this.event.Typ.length - 9);
      }
    },
      (err) => {
      console.log(err);
      this.router.navigate(['/']);
    });
  }

  register(): void {
    console.log('test');
    window.location.href = 'https://www2.bonding.de/veranstaltungen.nsf/anmeldungstud?OpenForm&id=' + this.event.ID;
  }
}
