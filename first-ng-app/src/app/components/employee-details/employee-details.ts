import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  protected title: string = "Details of - ";
  @Input() public employee:Employee ;
  @Input() public subTitle:string ;

  @Output() public sendConfirmationMessage: EventEmitter<string> = new EventEmitter<string>();
  

  protected onEventProcessed():void {
    //fire an evnt to send data to parent component
    this.sendConfirmationMessage.emit(`The event ${this.employee.employeeName} has been processed successfully!`);
  }
}
