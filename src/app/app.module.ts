import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBlockComponent } from './user-block/user-block.component';
import {HttpClientModule} from "@angular/common/http";
import { CalendarComponent } from './components/calendar/calendar.component';

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    UserBlockComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
