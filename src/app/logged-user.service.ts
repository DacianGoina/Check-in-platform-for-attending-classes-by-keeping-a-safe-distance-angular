import { Injectable } from "@angular/core";
import {UserType} from "./UserType";



@Injectable()
export class LoggedUserServiceService {
  userSaved:UserType={utype:'GUEST',
    uId:0};
  constructor() {}

  getUserType(){
    return this.userSaved.utype;
  }

  changeUserType(type:string){
    this.userSaved.utype=type;
  }

  changeUserId(id:number){
    this.userSaved.uId=id;
  }

  getUserId(){
    return this.userSaved.uId;
  }
}
