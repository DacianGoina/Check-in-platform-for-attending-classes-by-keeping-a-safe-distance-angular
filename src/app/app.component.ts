import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-frontend';

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  setView(view: CalendarView) {
    this.view = view;
  }
  events: CalendarEvent[] = [
    {
      start: new Date('2021-07-28'),
      title: 'an event',
    },
    {
      start: new Date('2021-07-24'),
      title: 'another event',
    },
    {
      start: new Date('2021-07-16'),
      title: 'you get the idea ',
    }
  ]
}
