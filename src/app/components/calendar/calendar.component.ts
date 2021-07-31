import { Component, OnInit} from '@angular/core';
import {addDays, subDays} from 'date-fns';






@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  hours= ['8:00', '9:40', '11:20', '13:00', '14:40', "16:20", "18:00", "19:40"];


  constructor() {

  }

  events: Array<any> = [
    {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
    {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
    {time: '09:00', subject: 'Call with HRs'},
    {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen', description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
  ];

  today: Date= new Date();
  first= this.today.getDate()-this.today.getDay();
  thisweek=this.getweek();


  getweek(){
   return [new Date(this.today.setDate(this.first)),
     addDays(new Date(this.today.setDate(this.first)), 1),
     addDays(new Date(this.today.setDate(this.first)), 2),
     addDays(new Date(this.today.setDate(this.first)), 3),
     addDays(new Date(this.today.setDate(this.first)), 4),
     addDays(new Date(this.today.setDate(this.first)), 5),
     addDays(new Date(this.today.setDate(this.first)), 6),
    ]
  }
  nextweek(){
    this.today=addDays(this.today, 7);
    this.first= this.today.getDate()-this.today.getDay()+1;
    this.thisweek=this.getweek();
  }
  lastweek(){
    this.today=subDays(this.today, 7)
    this.first= this.today.getDate()-this.today.getDay()+1;
    this.thisweek=this.getweek();
  }


  ngOnInit(): void {
  }


}
