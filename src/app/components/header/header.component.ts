import { Component, OnInit } from '@angular/core';
import {LoggedUserServiceService} from "../../logged-user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usertype: LoggedUserServiceService) {
    this.selectedUserType= this.usertype.getUserType();
    this.selectedUserId= this.usertype.getUserId();
  }

  selectedUserType= '';
  selectedUserId= 0;

  ngOnInit(): void {

  }


  change(type:string){
    this.usertype.changeUserType(type);
    this.selectedUserType=this.usertype.getUserType();
  }



  studentfunction(){
    let foo = prompt('Te rugăm să îți introduci id-ul');
   console.log(foo);
    this.usertype.changeUserId(Number(foo));
    this.selectedUserId=this.usertype.getUserId()
  }


}
