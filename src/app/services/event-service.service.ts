import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../entities/Event';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private http: HttpClient) { }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.apiBaseURL + 'eventList/');
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(environment.apiBaseURL + 'eventDetails/' + id);
  }
}
