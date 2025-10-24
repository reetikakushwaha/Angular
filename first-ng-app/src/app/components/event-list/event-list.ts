import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Event } from '../../model/event';
import { EventDetails } from '../event-details/event-details';
import { DateGlobalizationPipe } from '../../pipes/date-globalization-pipe';
import { LowecaseTruncPipe } from '../../pipes/lowecase-trunc-pipe';

import { EventsApi } from '../../services/events-api';

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
  constructor(){
    this.events = this.eventApi.getAllEvents();
    this.filteredEvents = [...this.events];
  }
  private eventApi: EventsApi = inject(EventsApi);
  protected title: string = "Welcome to Bajaj finserv Event List Component!";
  protected subTitle: string = "Subtitle - Welcome to Bajaj finserv Event List Component!";
  protected columns: string[] = ["event code", "event name", "startdate", "fees", "show details"];
  protected selectedEvent!: Event;
  protected childmessage: string = '';
  public childSubtitle: string = "Details of selected events!";

  protected pageNumber: number = 1;
  protected pageSize: number = 2;

  protected searchChars: string = '';
  protected lastPageBeforeSearch: number ;

  protected events: Event[] = [];

  protected filteredEvents: Event[];

  ngOnInit(): void {
    this.filteredEvents = [...this.events];
  }

  protected searchEvents(): void {
  const searchLower = this.searchChars.trim().toLowerCase();

  if (!searchLower) {
    this.filteredEvents = [...this.events];

    this.pageNumber = this.lastPageBeforeSearch;

    const maxPage = Math.ceil(this.filteredEvents.length / this.pageSize);
    if (this.pageNumber > maxPage) {
      this.pageNumber = maxPage;
    }
  } else {
    this.lastPageBeforeSearch = this.pageNumber;

    this.filteredEvents = this.events.filter(event =>
      event.eventName.toLowerCase().includes(searchLower)
    );

    const maxPage = Math.ceil(this.filteredEvents.length / this.pageSize);
    if (this.pageNumber > maxPage) {
      this.pageNumber = maxPage;
    }
  }

  console.log(this.filteredEvents);
}


  protected onSelectedEvent(event: Event): void {
    console.log("Event selected: ", event);
    this.selectedEvent = event;
  }

  protected handleChildMessage(message: string): void {
    this.childmessage = message;
  }
}
