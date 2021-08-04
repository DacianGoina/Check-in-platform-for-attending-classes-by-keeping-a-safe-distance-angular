import { Component, OnInit } from '@angular/core';
import {ClassroomDetails} from "../../classroom-details";
import {ClassDTO} from "../../class-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {ClassDTOService} from "../../class-dto.service";

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  cap: ClassroomDetails["capacity"]=0;
  //newClassDTOobj:ClassDTO = new ClassDTO(0,0,0,'','',0,0,'','','','');
  starttime= new Date();
  endtime= new Date();
  courseNames:string[] | undefined;
  clDetails:ClassroomDetails[] | undefined;
  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private router: Router) {

  }


  ngOnInit(): void {


    this.classDTOService.getClassroomsDetails().subscribe(data=>{
      this.clDetails = data;
      console.log("Nume sali:")
      for (let i of this.clDetails) {
        console.log(i.name + " | " + i.capacity + " locuri");
      }
      this.cap=this.clDetails[1].capacity;
    });

    this.classDTOService.getCourseNames().subscribe(data =>{
      this.courseNames = data;
      console.log("Nume cursuri:")
      for (let i of this.courseNames) {
        console.log(i);
      }
    });

  }

  goToMainPage(){
    this.router.navigate(['/class']);
  }

  createSchedule(){

    let classroomName = (document.getElementById("selectClassroom")) as HTMLSelectElement;
    let courseName = (document.getElementById("selectCourse")) as HTMLSelectElement;

    // pentru a obtine valorile selectate (adica alea din varf)
    let aux1 = classroomName.options[classroomName.selectedIndex];
    let val1 = (<HTMLSelectElement><unknown>aux1).innerText;

    let aux2 = courseName.options[courseName.selectedIndex];
    let val2 = (<HTMLSelectElement><unknown>aux2).value;


    let startTimeVal = new Date(this.starttime).toISOString();
    let endTimeVal = new Date(this.endtime).toISOString();


    console.log("Start time:" + startTimeVal);
    console.log("End time: "+ endTimeVal);


    let newPlanner = new ClassDTO(0,0,0,startTimeVal,endTimeVal,0,0,'',val1,val2,'');

    this.classDTOService.createSchedule(newPlanner).subscribe(data =>{
      console.log(data);
      this.goToMainPage();
    },error => {console.log(error)});
  }

}
