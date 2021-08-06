import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import {CreatePageGuard} from "./create-page.guard";
import {EnrollComponent} from "./components/enroll/enroll.component";


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
    canActivate: [CreatePageGuard],
  },
  {
    path:'enroll/:id',
    component: EnrollComponent,
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
