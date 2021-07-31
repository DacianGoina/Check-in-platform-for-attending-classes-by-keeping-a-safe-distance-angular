import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./components/calendar/calendar.component";

const routes: Routes = [
  {
    path:'class',
    component:CalendarComponent,
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
