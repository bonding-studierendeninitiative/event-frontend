import { Component, OnInit } from '@angular/core';
import { Event } from '../entities/Event';
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventServiceService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((data) => {
      this.events = data;
      console.log(data);
    })
    }

}
