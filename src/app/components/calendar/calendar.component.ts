import { Component, OnInit} from '@angular/core';
import {addDays, subDays, addHours, isToday, setHours, isEqual, isSameHour} from 'date-fns';
import {User} from "../../user";
import {ClassDTO} from "../../class-dto";
import {UserService} from "../../user.service";
import {ClassDTOService} from "../../class-dto.service";






@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
 // hours= ['8:00', '9:40', '11:20', '13:00', '14:40', "16:20", "18:00", "19:40"];
 // hours= ['8:00', '9:00', '10:00', "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
hours=[8,9,10,11,12,13,14,15,16,17,18,19,20]
  // tablouri care transporta date
  users:User[] | undefined;
  classDTOarray:ClassDTO[] | undefined;


  constructor(private userService: UserService, private classDTOService: ClassDTOService) {


  }

  evenimente: Array<any> = [
    {
      courseName: 'Info',
      roomName: 'Stefan',
      startDate: new Date(),
      endDate: addHours(new Date(), 2)
    },
    {
      courseName: 'Info',
      roomName: 'Stefan',
      startDate: addDays(new Date(), 2),
      endDate: addHours(new Date(), 2)
    }
    ];

  today: Date= new Date();
  first= this.today.getDate()-this.today.getDay();
  thisweek=this.getweek();
  dayclick:any;

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
    this.first= this.today.getDate()-this.today.getDay();
    this.thisweek=this.getweek();
  }
  lastweek(){
    this.today=subDays(this.today, 7)
    this.first= this.today.getDate()-this.today.getDay();
    this.thisweek=this.getweek();
  }
  clickedhour(dayClicked: Date, hourClicked: any){
    this.dayclick=setHours(dayClicked, hourClicked);


  }

  ngOnInit(): void {
    console.log("pagina cu calendarul!");
    console.log("USERS:");
    this.userService.getUsersList().subscribe(data =>{
      this.users = data;

      let str = JSON.stringify(data);
      str = JSON.stringify(data, null, 4); // pentru indentare
      console.log(str);
    });



    console.log("CLASSES:");
    this.classDTOService.getClassDTOList().subscribe(data=>{
      this.classDTOarray = data;
      let str = JSON.stringify(data);
      str = JSON.stringify(data, null, 4);
      console.log(str);
      });

    // aici se face return la datele despre class dto, apoi se poti folosi pentru {{}}
    this.getClassesDTO();
  }


  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      this.users = data;
    });
  }

  private getClassesDTO(){
    this.classDTOService.getClassDTOList().subscribe(data=>{
      this.classDTOarray = data;
    });
  }


  eventIsNow(thisdate: Date, hour:number):any{
    let times= setHours(thisdate, hour)
    for(let a of this.evenimente){
      if(isSameHour(a.startDate, times)){
        return true;
      }
    }
    return false;
  }

  datefunc(){
    for(let a of this.evenimente){
      console.log(a.startDate);
    }
  }


}
