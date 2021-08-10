export class UserType{
  utype: string;
  uId: number;
  startDate: Date;
  constructor(utype:string, uId:number, startDate:Date ) {
    this.utype=utype;
    this.uId=uId;
    this.startDate=startDate;
  }
}
