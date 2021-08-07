import { Component, OnInit } from '@angular/core';
import {LoggedUserServiceService} from "../../logged-user.service";
import {UserService} from "../../user.service";
import {User} from "../../user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users: User[] = [];

  constructor(private usertype: LoggedUserServiceService,
              private userService: UserService) {
    this.selectedUserType= this.usertype.getUserType();
    this.selectedUserId= this.usertype.getUserId();
    this.userService.getUsersList().subscribe(data =>{
      this.users = data;

      let str = JSON.stringify(data);
      str = JSON.stringify(data, null, 4); // pentru indentare
      console.log(str);
    });
  }

  selectedUserType= '';
  selectedUserId= 0;

  isAdmin(){
    return this.usertype.getUserType()!=='ADMIN';
  }

  ngOnInit(): void {

  }


  change(type:string){
    this.usertype.changeUserType(type);
    this.selectedUserType=this.usertype.getUserType();
  }



  studentfunction(){
    let foo = prompt('Te rugăm să îți introduci id-ul');
   console.log(foo);
    let num = Number(foo);
    let boo=false;
    for (let a of this.users){
      if(a.id==num && a.role=='STUDENT'){
        boo=true;
        this.usertype.changeUserId(num);
        this.usertype.changeUserType('STUDENT');
        this.selectedUserId=this.usertype.getUserId();
        this.selectedUserType=this.usertype.getUserType();
        window.alert('autentification succesful');
      }
    }
    if(!boo){ window.alert('autentification failed: wrong id or role')}


  }


}
