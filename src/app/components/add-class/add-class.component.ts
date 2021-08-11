import { Component, OnInit } from '@angular/core';
import {ClassDTOService} from "../../class-dto.service";
import {TeacherDTO} from "../../teacher-dto";
import {Router} from "@angular/router";
import {Classroom} from "../../classroom";
import {ClassEntity} from "../../class-entity";

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  teacherDTOList:TeacherDTO[] = [];
  courseNamesList:string[] = [];
  constructor(private classDTOService:ClassDTOService,
              private router: Router) { }

  ngOnInit(): void {

    this.classDTOService.getCourseNames().subscribe(data =>{
      this.courseNamesList = data;
    });

    this.classDTOService.getTeacherDTOList().subscribe(data=>{
      this.teacherDTOList = data;

    });
  }

  // Check if a course already exists - return true if the course already exists
  public courseAlreadyExists(courseName:string):boolean{
    for(let cName of this.courseNamesList)
      if(courseName == cName)
        return true;
    return false;
  }

  public createClass(){
    let className = document.getElementById("className") as HTMLInputElement;
    let teacherId = document.getElementById("selectTeacher") as HTMLSelectElement;
    let year = document.getElementById("year") as HTMLInputElement;
    let section = document.getElementById("section") as HTMLInputElement;

    let aux = teacherId.options[teacherId.selectedIndex];
    let val = (<HTMLSelectElement><unknown>aux).value;

    console.log("class name:" + className.value);
    console.log("teacher id: " + val);
    console.log("year: " + year.value);
    console.log("section: " + section.value);


    if(className.value.length < 2)
      window.alert("Numele cursului este prea scurt");
    else if(isNaN(Number(year.value)) || Number(year.value) < 0)
      window.alert("Anul introdus este invalid");
    else if(section.value.length < 2)
      window.alert("Numele sectiunii este prea scurt");
    else if(this.courseAlreadyExists(className.value))
      window.alert("Exista deja un curs cu acest nume");
    else {
      let newClassEntity = new ClassEntity(0, Number(val), className.value, Number(year.value), section.value);
      this.classDTOService.createClassEntity(newClassEntity).subscribe(data => {
        window.alert("Curs creat cu succes!")
        this.goToMainPage();
      }, error => {console.log(error); window.alert("Cursul nu a fost creat")});

    }

  }

  public goToMainPage(){
    this.router.navigate(['/class']);
  }

}
