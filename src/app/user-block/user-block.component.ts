import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Observable} from "rxjs";
import {ClassDTO} from "../class-dto";
import {ClassDTOService} from "../class-dto.service";

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {
  users:User[] | undefined;
  classDTOarray:ClassDTO[] | undefined;

  constructor(private userService: UserService, private classDTOService: ClassDTOService) { }

  ngOnInit(): void {
      /*this.userService.getUsersList().subscribe(data =>{
      this.users = data;
      let str = JSON.stringify(data);
      str = JSON.stringify(data, null, 4); // (Optional) beautiful indented output.

      console.log(str);
    });

      this.classDTOService.getClassDTOList().subscribe(data=>{
          this.classDTOarray = data;

          let str = JSON.stringify(data);
          str = JSON.stringify(data, null, 4);
          //console.log(data[0].id+ " " + data[0].classId + " " + data[0].classroomId + "" +  data[0].startDate +
          //" " + data[0].endDate + " " +data[0].courseName + " " + data[0].roomName + " " + data[0].capacity + " " +  data[0].teacherLastName) ;
          console.log(str);
      });

       */

    this.getUsers();


  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data =>{
      this.users = data;
    });
  }

  private getClassesDTO(){
      this.classDTOService.getClassDTOList().subscribe(data=>{
          this.classDTOarray = data;
      })
  }

}
