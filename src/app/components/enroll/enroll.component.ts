import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,  Router} from '@angular/router';

import { ClassDTOService } from "../../class-dto.service";
import {ClassDTO} from "../../class-dto";
import {count} from "rxjs/operators";
import {ClassroomDetails} from "../../classroom-details";
import {LoggedUserServiceService} from "../../logged-user.service";
import {RepartitionDTO} from "../../repartition-dto";
import {RepartitionDTOService} from "../../repartition-dto.service";


@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  id:number =0;
  cap: ClassroomDetails["capacity"]=0;

  classDTOobj:ClassDTO = new ClassDTO(0,0,0,'','',0,0,'','','','');
  //courseNames:string[] | undefined;
  //clDetails:ClassroomDetails[] | undefined;
  enrolledStudentsIDs:number[]  = [];

  //private enrollBtn =  <HTMLButtonElement>document.getElementById("enrollBtn");

  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private router: Router,
               private currentUser: LoggedUserServiceService,
               private repartitionService: RepartitionDTOService) {

  }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.classDTOService.getClassDTOById(this.id).subscribe(data =>{
      this.classDTOobj = data; this.cap=this.classDTOobj.capacity;
      console.log(this.classDTOobj.courseName + " predat de" + this.classDTOobj.teacherFirstName + " " + this.classDTOobj.teacherLastName + " " + this.classDTOobj.studentsNumber);
    },error => console.log(error));


    // Array cu id-urile studentilor inscrisi in acest schedule
    this.repartitionService.getRepatitionDTO(this.id).subscribe(data=>{
      this.enrolledStudentsIDs = data;

      // set initial value for enrollBtn
      let enrollBtn =  <HTMLButtonElement>document.getElementById("enrollBtn");
      if(this.isEnrolled(this.currentUser)){
        enrollBtn.innerText = "Unenroll from class";

      }
      else{
        enrollBtn.innerText = "Enroll in class";
      }

    });


  }


  // Return true if id is ins enrolledStudentsIDs (if a student (received from id) is enrolled in actual schedule)
  isEnrolled(user:LoggedUserServiceService) : boolean{
    let id = user.getUserId();
    for(let i of this.enrolledStudentsIDs)
      if(id == i)
        return true;
    return false;
  }


  // This method run when enrollBtn is clicked
  enrollInClass(){

    let enrollBtn =  <HTMLButtonElement>document.getElementById("enrollBtn");

    // already enrolled, unenrolled now!
    if(this.isEnrolled(this.currentUser)){
      //let repartition:RepartitionDTO = new RepartitionDTO(this.currentUser.getUserId(),this.id);
      let repartition:RepartitionDTO = new RepartitionDTO(12,12);
      this.repartitionService.deleteRepartition(this.id, repartition).subscribe(data=>{
        console.log(data);
      },error => {console.log(error)});
      //this.enrollBtn.innerText = "Unenroll from class";

      let indexInArray = this.enrolledStudentsIDs.indexOf(this.currentUser.getUserId());
      delete this.enrolledStudentsIDs[indexInArray];

      //this.enrollBtn.innerText = "Enroll from class";
      enrollBtn.innerText = "Enroll from class";
    }

    //if(!this.isEnrolled(this.currentUser)){
    else{
      let newRepartition = new RepartitionDTO(this.currentUser.getUserId(),this.id);
      this.repartitionService.createRepartition(this.id, newRepartition).subscribe(data=>{
        console.log(data);
      },error => {console.log(error)});
      this.enrolledStudentsIDs.push(this.currentUser.getUserId());
      //this.enrollBtn.innerText = "Unenroll in class";
      enrollBtn.innerText = "Unenroll in class";

    }




  }


}
