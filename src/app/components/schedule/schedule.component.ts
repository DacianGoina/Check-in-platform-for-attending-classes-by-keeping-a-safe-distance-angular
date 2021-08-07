import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import { ClassDTOService } from "../../class-dto.service";
import {ClassDTO} from "../../class-dto";
import {count} from "rxjs/operators";
import {ClassroomDetails} from "../../classroom-details";
import {LoggedUserServiceService} from "../../logged-user.service";
import {RepartitionDTO} from "../../repartition-dto";
import {RepartitionDTOService} from "../../repartition-dto.service";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  id:number =0;
  cap: ClassroomDetails["capacity"]=0;

  starttime= new Date();
  endtime= new Date();
  classDTOobj:ClassDTO = new ClassDTO(0,0,0,'','',0,0,'','','','');
  courseNames:string[] | undefined;
  clDetails:ClassroomDetails[] | undefined;


  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private router: Router,
               private currentUser: LoggedUserServiceService) {

  }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    console.log("!!!ID OUTSIDE: " + this.id);
    this.classDTOService.getClassDTOById(this.id).subscribe(data =>{
      this.classDTOobj = data; this.cap=this.classDTOobj.capacity;
      console.log(this.classDTOobj.courseName + " predat de" + this.classDTOobj.teacherFirstName + " " + this.classDTOobj.teacherLastName + " " + this.classDTOobj.studentsNumber);
    },error => console.log(error));


    this.classDTOService.getClassroomsDetails().subscribe(data=>{
      this.clDetails = data;
      console.log("Inside get clDetails: " + this.classDTOobj.studentsNumber);
    });

    this.classDTOService.getCourseNames().subscribe(data =>{
      this.courseNames = data;
    });


  }

  sendUpdates():void{
    // get element by ID pentru cele 2 selectoare
    let classroomName = (document.getElementById("selectClassroom")) as HTMLSelectElement;
    let courseName = (document.getElementById("selectCourse")) as HTMLSelectElement;

    // pentru a obtine valorile selectate (adica alea din varf)
    let aux1 = classroomName.options[classroomName.selectedIndex];
    let val1 = (<HTMLSelectElement><unknown>aux1).innerText;

    let aux2 = courseName.options[courseName.selectedIndex];
    let val2 = (<HTMLSelectElement><unknown>aux2).value;

    let newRoomCapacity = (<HTMLSelectElement><unknown>aux1).value;

    let startTimeVal = new Date(this.starttime).toISOString();
    let endTimeVal = new Date(this.endtime).toISOString();

    // aici doar le afisez
    console.log("Nume clasa: " + val1);
    console.log("Nume curs: " + val2);
    //console.log("Start time: " + this.starttime);
    //console.log("End time: " + this.endtime);
    console.log("Start time: " + startTimeVal);
    console.log("End time: " + endTimeVal);
    console.log("Planner id: " + this.classDTOobj.id);
    console.log("Room capacity: " + newRoomCapacity);
    let currentId = this.classDTOobj.id;

    if(Number(newRoomCapacity) < this.classDTOobj.studentsNumber)
      window.alert("Sala selectata contine prea putine locuri pentru numarul de studenti deja insrisi");

    else {
      let newPlanner = new ClassDTO(0, this.classDTOobj.id, 0, startTimeVal, endTimeVal, 0, 0, '', val1, val2, '');
      this.classDTOService.updateSchedule(currentId, newPlanner).subscribe(data => {
        window.alert('update succesful');
        this.goToMainPage();
      }, error => {
        console.log(error);
        window.alert("update failed")
      });

    }

  }

  deleteSchedule(){
    let id = this.classDTOobj.id;
    console.log("Se va sterge schedule cu id: " + id);
    let bar = confirm('esti sigur?');
    console.log( bar);
    this.classDTOService.deleteSchedule(id).subscribe(data=>{
      console.log(data);
      window.alert('Schedule deleted with succes');
      this.goToMainPage();
    });

  }

  goToMainPage(){
    this.router.navigate(['/class']);
  }

  isShowDiv = true;

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  isShowButton = !(this.currentUser.getUserType() == 'ADMIN' || this.currentUser.getUserType() == 'TEACHER');



}
