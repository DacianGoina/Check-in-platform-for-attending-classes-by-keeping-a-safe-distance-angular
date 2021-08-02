import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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
  id:number = 0;
  classDTOobj:ClassDTO = new ClassDTO(0,0,0,'','',0,'','','','');
  courseNames:string[] | undefined;
  clDetails:ClassroomDetails[] | undefined;
  //classDTOobj: ClassDTO | undefined;
  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private location: Location) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.classDTOService.getClassDTOById(this.id).subscribe(data =>{
      this.classDTOobj = data;
      console.log(this.classDTOobj.courseName + " predat de" + this.classDTOobj.teacherFirstName + " " + this.classDTOobj.teacherLastName)
    },error => console.log(error));

    this.classDTOService.getClassroomsDetails().subscribe(data=>{
      this.clDetails = data;
      console.log("Nume sali:")
      for (let i of this.clDetails) {
        console.log(i.name + " | " + i.capacity + " locuri");
      }
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
