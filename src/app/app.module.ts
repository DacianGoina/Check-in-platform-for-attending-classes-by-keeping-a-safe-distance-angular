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



@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    CalendarComponent,
    HeaderComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
