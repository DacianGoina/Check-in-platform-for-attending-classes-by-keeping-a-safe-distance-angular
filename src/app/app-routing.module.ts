import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {ScheduleComponent} from "./components/schedule/schedule.component";
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import {CreatePageGuard} from "./create-page.guard";
import {EnrollComponent} from "./components/enroll/enroll.component";
import {AddClassComponent} from "./components/add-class/add-class.component";
import {AddClassroomComponent} from "./components/add-classroom/add-classroom.component";
import {AdminGuard} from "./admin.guard";


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
    path:'class/:id/enroll',
    component: EnrollComponent,
  },
  {
    path:'createClass',
    component: AddClassComponent,
    canActivate: [AdminGuard],
  },
  {
    path:'createClassroom',
    component: AddClassroomComponent,
    canActivate: [AdminGuard],
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
