export class ClassEntity {
   id:number;
   teacherId:number;
   name:string;
   year:number;
   department:string;

  constructor(id:number, teacherId:number, name:string, year:number, department:string){
    this.id = id;
    this.teacherId = teacherId;
    this.name = name;
    this.year = year;
    this.department = department;
  }

}
