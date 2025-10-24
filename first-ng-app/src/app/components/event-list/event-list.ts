import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Event } from '../../model/event';
import { EventDetails } from '../event-details/event-details';
import { DateGlobalizationPipe } from '../../pipes/date-globalization-pipe';
import { LowecaseTruncPipe } from '../../pipes/lowecase-trunc-pipe';

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

  protected events: Event[] = [
    {
      eventId: 1001,
      eventCode: 'SEMJQ3',
      eventName: 'Seminar on jQuery 3.x',
      description: 'Seminar will discuss all the new features of jQuery 3.x',
      startDate: new Date(),
      endDate: new Date(),
      fees: 800,
      seatsFilled: 70,
      logo: 'images/images.jpeg'
    },
    {
      eventId: 1002,
      eventCode: 'SEMNG1',
      eventName: 'Seminar on Angular JS 1.5.x',
      description: 'Seminar will discuss all the new features of Angular JS 1.5.x',
      startDate: new Date(),
      endDate: new Date(),
      fees: 600,
      seatsFilled: 50,
      logo: 'images/img.webp'
    },
    {
      eventId: 1003,
      eventCode: 'SEMNG2',
      eventName: 'Seminar on Angular 2.x',
      description: 'Seminar will discuss all the new features of Angular 2.x',
      startDate: new Date(),
      endDate: new Date(),
      fees: 1000,
      seatsFilled: 80,
      logo: 'images/view.jpeg'
    },
    {
      eventId: 1004,
      eventCode: 'SEMNG4',
      eventName: 'Seminar on Angular 4.x',
      description: 'Seminar will discuss all the new features of Angular 4.x',
      startDate: new Date(),
      endDate: new Date(),
      fees: 1000,
      seatsFilled: 76,
      logo: 'favicon.ico'
    },
    {
      eventId: 1005,
      eventCode: 'SEMBS3',
      eventName: 'Seminar on Bootstrap 3.x',
      description: 'Seminar will discuss all the new features of Bootstrap 3.x',
      startDate: new Date(),
      endDate: new Date(),
      fees: 500,
      seatsFilled: 34,
      logo: 'images/bs3.png'
    }
  ];

  protected filteredEvents: Event[] = [];

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


  // protected searchEvents(): void {
  //   if (!this.searchChars.trim()) {
  //     this.filteredEvents = [...this.events];
  //   } else {
  //     const searchLower = this.searchChars.toLowerCase();
  //     this.filteredEvents = this.events.filter(event =>
  //       event.eventName.toLowerCase().includes(searchLower)
  //     );
  //   }
  //   this.pageNumber = 1;
  //   console.log(this.filteredEvents);
  // }

  protected onSelectedEvent(event: Event): void {
    console.log("Event selected: ", event);
    this.selectedEvent = event;
  }

  protected handleChildMessage(message: string): void {
    this.childmessage = message;
  }
}
