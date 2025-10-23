import { Component, Input } from '@angular/core';
import { Event } from '../../model/event'

@Component({
  selector: 'app-event-details',
  imports: [],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  protected title: string = "Details of - ";
  @Input() public event:Event ;
  @Input() public subTitle:string ;

}
