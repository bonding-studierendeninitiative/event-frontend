import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import {EventDetailsComponent} from './event-details/event-details.component';

const routes: Routes = [
  { path: '', component: EventListComponent, pathMatch: 'full'},
  { path: ':location', component: EventListComponent, pathMatch: 'full'},
  { path: 'eventDetails/:id', component: EventDetailsComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
