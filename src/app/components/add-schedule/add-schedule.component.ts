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

}
