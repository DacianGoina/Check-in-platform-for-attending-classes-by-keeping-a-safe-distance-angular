import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
const routes: Routes = [
  {
    path:'class',
    component:CalendarComponent,
  },
  {
    path: 'class/:id',
    component: ScheduleComponent,
  },
  {
    path: 'addSchedule',
    component: AddScheduleComponent,
  },
  {
    path: '**',
    redirectTo: '/class',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
