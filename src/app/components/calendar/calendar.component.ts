import { Component, OnInit} from '@angular/core';
import {addDays, subDays} from 'date-fns';






@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
 // hours= ['8:00', '9:40', '11:20', '13:00', '14:40', "16:20", "18:00", "19:40"];
  hours= ['8:00', '9:00', '10:00', "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

  constructor() {

  }

  events: Array<any> = [
    {

    }
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
