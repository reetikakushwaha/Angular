import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../../model/event'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-details',
  imports: [CommonModule],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  protected title: string = "Details of - ";
  @Input() public event:Event ;
  @Input() public subTitle:string ;
  @Output() public sendConfirmationMessage: EventEmitter<string> = new EventEmitter<string>();
  

  protected onEventProcessed():void {
    //fire an evnt to send data to parent component
    this.sendConfirmationMessage.emit(`The event ${this.event.eventName} has been processed successfully!`);
  }
}
