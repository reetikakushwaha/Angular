import { Component } from '@angular/core';
import { Event } from '../../model/event'
import { EventDetails } from '../event-details/event-details';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  imports: [CommonModule,EventDetails],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventList {
  protected title: string = "Welcome to Bajaj finserv Event List Component!";
  protected subTitle: string = "Subtitle - Welcome to Bajaj finserv Event List Component!";
  protected columns:string[] = ["event code", "event name","startdate","fees", "show details"];
  protected selectedEvent:Event ;
  protected childmessage:string ;
  protected onSelectedEvent(event:Event):void {
    console.log("Event selected: ", event);
    this.selectedEvent = event;
  }
  protected handleChildMessage(message:string):void {
    this.childmessage = message;
  }
  public childSubtitle:string = "Details of selected events!";
    protected events:Event[] = [
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
            logo: 'images/ng1.png'
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
            logo: 'images/ng2.png'
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
            logo: 'images/ng2.png'
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
    ]
}
