import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './user-block/user-block.component';
import {HttpClientModule} from "@angular/common/http";
import { CalendarComponent } from './components/calendar/calendar.component';

import { DatePipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import {LoggedUserServiceService} from "./logged-user.service";


@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    CalendarComponent,
    HeaderComponent,
    ScheduleComponent,
    AddScheduleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe, LoggedUserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
