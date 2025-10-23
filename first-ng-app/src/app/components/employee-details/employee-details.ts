import { Component, Input } from '@angular/core';
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
}
