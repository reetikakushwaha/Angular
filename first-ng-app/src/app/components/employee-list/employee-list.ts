import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/employee';
import { EmployeeDetails } from '../employee-details/employee-details';
import { Subscription } from 'rxjs';
import { EventsApi } from '../../services/events-api';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, EmployeeDetails],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css'],
})
export class EmployeeList implements OnInit {
  private _employeeServiceSubscription: Subscription;
  private _employeeApi: EventsApi = inject(EventsApi);
  protected title: string = "Welcome to Bajaj finserv Employee List Component!";
  protected subTitle: string = "Subtitle - Welcome to Bajaj finserv Employee List Component!";
  protected columns: string[] = ["employee id", "employee name", "city", "phone", "show details"];
  protected selectedEmployee: Employee | null = null;
   protected selectedEmployeeId: number;
  protected employeeChildmessage: string = '';
  protected searchChars: string = '';
  public childSubtitle: string = "Details of selected events!";

  protected employee: Employee[] = []

  protected filteredEmployee: Employee[] = [...this.employee];

  protected searchEmployee(): void {
    const searchTerm = this.searchChars.trim().toLowerCase();
    this.filteredEmployee = searchTerm
      ? this.employee.filter(emp =>
          emp.employeeName.toLowerCase().includes(searchTerm)
        )
      : [...this.employee];
      console.log(this.filteredEmployee);
  }

  protected onSelectedEmployee(id: number): void {
    // console.log("Employee selected: ", employee);
    this.selectedEmployeeId = id;
  }

  protected handleEmployeeChildMessage(message: string): void {
    this.employeeChildmessage = message;
  }
  
  ngOnInit(): void {
    
    this._employeeServiceSubscription = this._employeeApi.getAllEmployees().subscribe({
      next: employeeData => {
        this.employee = employeeData;
        this.filteredEmployee = [...this.employee];
        console.log("Employee data received: ", employeeData);
      },
      error: err => {
        console.error("Error fetching employee data: ", err);
      }
    });
  
  }
}
