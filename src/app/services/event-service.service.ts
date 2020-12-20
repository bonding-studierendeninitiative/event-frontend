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
    const url = environment.apiBaseURL + 'eventList/';
    return this.http.get<Event[]>(url);
  }
}
