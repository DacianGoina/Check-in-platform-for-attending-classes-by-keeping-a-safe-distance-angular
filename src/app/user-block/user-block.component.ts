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
      this.userService.getUsersList().subscribe(data =>{
      this.users = data;
      let str = JSON.stringify(data);
      str = JSON.stringify(data, null, 4); // (Optional) beautiful indented output.
      console.log(str);
    });

      this.classDTOService.getClassDTOList().subscribe(data=>{
          this.classDTOarray = data;
          let str = JSON.stringify(data);
          str = JSON.stringify(data, null, 4);
          console.log(str);
      })

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
