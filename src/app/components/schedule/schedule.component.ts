import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClassDTOService } from "../../class-dto.service";
import {ClassDTO} from "../../class-dto";
import {count} from "rxjs/operators";
import {ClassroomDetails} from "../../classroom-details";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  id:number =0;
  cap:number= 1;
  classDTOobj:ClassDTO = new ClassDTO(0,0,0,'','',0,0,'','','','');
  courseNames:string[] | undefined;
  clDetails:ClassroomDetails[] | undefined;
  //classDTOobj: ClassDTO | undefined;
  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService) {

  }
  giveNumToCap(num:number){
    this.cap= num;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.classDTOService.getClassDTOById(this.id).subscribe(data =>{
      this.classDTOobj = data;
      console.log(this.classDTOobj.courseName + " predat de" + this.classDTOobj.teacherFirstName + " " + this.classDTOobj.teacherLastName);
    },error => console.log(error));

    this.classDTOService.getClassroomsDetails().subscribe(data=>{
      this.clDetails = data;
      console.log("Nume sali:")
      for (let i of this.clDetails) {
        console.log(i.name + " | " + i.capacity + " locuri");
      }
      console.log("Inside get clDetails: " + this.classDTOobj.studentsNumber);
    });

    this.classDTOService.getCourseNames().subscribe(data =>{
      this.courseNames = data;
      console.log("Nume cursuri:")
      for (let i of this.courseNames) {
        console.log(i);
      }
    });

    this.giveNumToCap(8);

  }

  sendUpdates():void{
    // get element by ID pentru cele 2 selectoare
    let classroomName = (document.getElementById("selectClassroom")) as HTMLSelectElement;
    let courseName = (document.getElementById("selectCourse")) as HTMLSelectElement;

    // cu astea de dateTime nu am gasit inca cum sa le scot ca obiecte (vezi ca si mai sus se foloseste acel "as")
    // si aici probabil e ceva de ceva de genul ca sa obtinem valorile lor
    // dar oricum, poate folosim altceva inafara de date time local
    let startTime = (document.getElementById("startTime"));
    let endTime = document.getElementById("endTime");


    // pentru a obtine valorile selectate (adica alea din varf)
    let aux1 = classroomName.options[classroomName.selectedIndex];
    let val1 = (<HTMLSelectElement><unknown>aux1).value;

    let aux2 = courseName.options[courseName.selectedIndex];
    let val2 = (<HTMLSelectElement><unknown>aux2).value;

    // aici doar le afisez
    console.log("Nume clasa: " + val1);
    console.log("Nume curs: " + val2);
    //console.log(startTime.innerText);
    console.log("Planner id: " + this.classDTOobj.id);
  }


}
