import { Component, Input, Output, EventEmitter ,inject, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { Event } from '../../model/event'
import { CommonModule } from '@angular/common';
import { EventsApi } from '../../services/events-api';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-event-details',
  imports: [CommonModule],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
}) 
export class EventDetails implements OnChanges , OnDestroy{
  private _eventsApi = inject(EventsApi);
  private _eventsApiSubsrcition:Subscription;
  ngOnDestroy(): void {
    if(this._eventsApiSubsrcition){
      this._eventsApiSubsrcition.unsubscribe();
    }
  }
 
ngOnChanges(changes: SimpleChanges): void {
  this._eventsApi.getEventDetails(this.eventid).subscribe({
    next: data => {
      this.event = data;

    },
    error: err => {
      console.log(err);
    }
  });
}
 
  protected title: string = "Details of - ";
  // @Input() public event:Event ;
  @Input() public eventid:number ;
  protected event:Event;
  @Input() public subTitle:string ;
  @Output() public sendConfirmationMessage: EventEmitter<string> = new EventEmitter<string>();
  
 
  protected onEventProcessed():void {
    //fire an evnt to send data to parent component
    this.sendConfirmationMessage.emit(`The event ${this.event.eventName} has been processed successfully!`);
  }
}
 
 