import { Component, OnInit} from '@angular/core';
import {addDays, subDays,  setHours, isSameHour } from 'date-fns';
import {User} from "../../user";
import {ClassDTO} from "../../class-dto";
import {UserService} from "../../user.service";
import {ClassDTOService} from "../../class-dto.service";
import { Router } from '@angular/router';






@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  hours=[8,9,10,11,12,13,14,15,16,17,18,19,20]
  // tablouri care transporta date
  users:User[] | undefined;
  classDTOarray:ClassDTO[] | undefined;

  constructor(private userService: UserService, private classDTOService: ClassDTOService, public router: Router) {


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


//obtinerea zilelor saptamanii
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


  event:ClassDTO={
    id: 0,
    classroomId:0,
    classId:0,
    startDate:'',
    endDate:'',
    courseName:'',
    roomName:'',
    teacherLastName:'',
    capacity:0,

  };


  eventIsNow(thisdate: Date, hour:number):any{
    let cond: boolean=false;
    let times= setHours(thisdate, hour)
    let day= new Date;
    // @ts-ignore
    for(let a of this.classDTOarray){
      day= new Date(a.startDate);
      if(isSameHour(day, times)){
        cond= true;
        this.event=a;
      }
    }
    return cond;
  }

  clickedEvent(){

  }
}
