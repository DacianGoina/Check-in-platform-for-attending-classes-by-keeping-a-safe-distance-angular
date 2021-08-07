import { Component, OnInit } from '@angular/core';
import {ClassDTOService} from "../../class-dto.service";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  roomNamesList:string[] = [];
  constructor(private classDTOService:ClassDTOService) { }

  ngOnInit(): void {
    this.classDTOService.getroomNames().subscribe(data =>{
      this.roomNamesList = data;
    })
  }

}
