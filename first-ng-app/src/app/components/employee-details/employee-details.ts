import { Component, Input, Output, EventEmitter, OnChanges, OnDestroy, inject, SimpleChanges } from '@angular/core';
import { Employee } from '../../model/employee';
import { CommonModule } from '@angular/common';
import { EventsApi } from '../../services/events-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails implements OnChanges, OnDestroy{
  private _employeeApi = inject(EventsApi);
  private _employeeApiSubsrcition:Subscription;
  ngOnDestroy(): void {
    if(this._employeeApiSubsrcition){
      this._employeeApiSubsrcition.unsubscribe();
    }
  };

  ngOnChanges(changes: SimpleChanges): void {
    this._employeeApi.getEmployeeDetails(this.employeeid).subscribe({
      next: data => {
        this.employee = data;

      },
      error: err => {
        console.log(err);
      }
    });
  }

  protected title: string = "Details of - ";
  @Input() public employeeid: number;
  @Input() public employee: Employee;
  @Input() public subTitle: string;

  @Output() public sendConfirmationMessage: EventEmitter<string> = new EventEmitter<string>();
  

  protected onEventProcessed(): void {
    //fire an evnt to send data to parent component
    this.sendConfirmationMessage.emit(`The event ${this.employee.employeeName} has been processed successfully!`);
  }
}
