import { Injectable, inject } from '@angular/core';
import { Event } from '../../app/model/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EventsApi {
  private _baseUrl: string = 'http://localhost:9090/api';
  private _httpClient = inject(HttpClient);
  
  public getAllEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(`${this._baseUrl}/events`);
  }

  public getEventDetails(eventId: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this._baseUrl}/events/${eventId}`);
  }

  public getAllEmployees(): Observable<Employee[]> {
    return this._httpClient.get<Employee[]>(`${this._baseUrl}/employees`);
  }

  public getEmployeeDetails(employeeId: number): Observable<Employee> {
    return this._httpClient.get<Employee>(`${this._baseUrl}/employees/${employeeId}`);
  }
}

