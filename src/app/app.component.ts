import { Component } from '@angular/core';
import { CalendarView } from 'angular-calendar';

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
}
