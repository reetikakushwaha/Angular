
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
 
import { Event } from '../../model/event';
import { EventDetails } from '../event-details/event-details';
import { EventsApi } from '../../services/events-api';
import { DateGlobalizationPipe } from '../../pipes/date-globalization-pipe';
import { LowecaseTruncPipe } from '../../pipes/lowecase-trunc-pipe';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    EventDetails,
    DateGlobalizationPipe,
    LowecaseTruncPipe
  ],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css']
})
export class EventList implements OnInit {
  private eventApi: EventsApi = inject(EventsApi);
 
  protected title = "Welcome to Bajaj finserv Event List!";
  protected subTitle = "Subtitle - Event List Component";
  protected columns: string[] = ["event code", "event name", "start date", "fees", "show details"];
 
  protected events: Event[] = [];
  protected filteredEvents: Event[] = [];
  protected selectedEvent!: Event;
  protected selectedEventId: number;
 
  protected searchChars = '';
  protected pageNumber = 1;
  protected pageSize = 2;
  protected lastPageBeforeSearch = 1;
 
  protected sortColumn = '';
  protected sortDirection: 'asc' | 'desc' = 'asc';
 
  protected childmessage = '';
  public childSubtitle = "Details of selected event!";
 
  private _eventservicesubscription:Subscription;
 
  ngOnInit(): void {
  this._eventservicesubscription = this.eventApi.getAllEvents().subscribe({
    next: (eventsData) => {
      console.log(eventsData);
      this.events = eventsData;
      this.filteredEvents = [...this.events];
    },
    error: (err) => {
      console.log(err);
    }
  });
}
  // Search logic
  protected searchEvents(): void {
    const searchLower = this.searchChars.trim().toLowerCase();
    if (!searchLower) {
      this.filteredEvents = [...this.events];
      this.pageNumber = this.lastPageBeforeSearch;
    } else {
      this.lastPageBeforeSearch = this.pageNumber;
      this.filteredEvents = this.events.filter(e =>
        e.eventName.toLowerCase().includes(searchLower)
      );
      this.pageNumber = 1;
    }
  }
 
  // Sorting logic
  protected sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
 
    this.filteredEvents.sort((a: Event, b: Event) => {
      let valA: any, valB: any;
 
      switch(column.toLowerCase()) {
        case 'event code': valA = a.eventCode.toLowerCase(); valB = b.eventCode.toLowerCase(); break;
        case 'event name': valA = a.eventName.toLowerCase(); valB = b.eventName.toLowerCase(); break;
        case 'start date': valA = new Date(a.startDate).getTime(); valB = new Date(b.startDate).getTime(); break;
        case 'fees': valA = a.fees; valB = b.fees; break;
        default: valA = ''; valB = '';
      }
 
      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1; // value a is lesser hence -1
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1; //
      return 0;
    });
 
    this.pageNumber = 1;
  }
 
  // Event selection for child component
  protected onSelectedEvent(id:number): void {
    // this.selectedEvent = event;
    this.selectedEventId = id ;
  }
 
  // Receive message from child
  protected handleChildMessage(message: string): void {
    this.childmessage = message;
  }
 
  ngOnDestroy():void{
    if(this._eventservicesubscription){
      this._eventservicesubscription.unsubscribe();
    };
  }
}
 
 