import { Injectable } from "@angular/core";
import {UserType} from "./UserType";
import {setHours, setMinutes} from "date-fns";



@Injectable()
export class LoggedUserServiceService {
  userSaved:UserType={utype:'GUEST',
    uId:0,
    startDate: new Date
  };
  constructor() {}

  getStartDate(){
    return this.userSaved.startDate;
  }



  setStartDate(num:number, data: Date){
    this.userSaved.startDate= setMinutes(setHours(new Date(data), num), 0);
  }

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
