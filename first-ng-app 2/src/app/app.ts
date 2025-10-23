import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventList } from './components/event-list/event-list'
import { EmployeeList } from "./components/employee-list/employee-list";

// import {EventListTs} from "./components/event-list.ts/event-list.ts";

@Component({
  selector: 'app-root',
  imports: [EventList, EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = "Welcome to bajaj angular app";
  protected readonly Subtitle = "Subtitle - Welcome to bajaj angular app";
  protected isEnabled:boolean = false;
  // protected isEnabled:boolean = false;

  protected onTitleChange():void {
    this.title = "Title changed - Welcome to bajaj angular app!";
  }
}
