import { Component, OnInit } from '@angular/core';
import {ClassDTOService} from "../../class-dto.service";
import {TeacherDTO} from "../../teacher-dto";

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  teacherDTOList:TeacherDTO[] = [];
  courseNamesList:string[] = [];
  constructor(private classDTOService:ClassDTOService) { }

  ngOnInit(): void {

    this.classDTOService.getCourseNames().subscribe(data =>{
      this.courseNamesList = data;
    });

    this.classDTOService.getTeacherDTOList().subscribe(data=>{
      this.teacherDTOList = data;
      for(let i of this.teacherDTOList)
        console.log(i.id);
    });
  }

}
