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
  enrolledStudentsIDs:number[]  = [];

  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private router: Router,
               private currentUser: LoggedUserServiceService,
               private repartitionService: RepartitionDTOService) {

  }


  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log("Planner id: " + this.id + " User id:" + this.currentUser.getUserId());
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
        if(this.classDTOobj.capacity>this.classDTOobj.studentsNumber){
          enrollBtn.disabled= false;
        }else{
          enrollBtn.disabled=true;
        }
      }

    });


  }


  // Return true if id is ins enrolledStudentsIDs (if a student (received from id) is enrolled in actual schedule)
  public isEnrolled(user:LoggedUserServiceService) : boolean{
    let id = user.getUserId();
    for(let i of this.enrolledStudentsIDs)
      if(id == i)
        return true;
    return false;
  }


  // This method run when enrollBtn is clicked
  public enrollInClass(){

    let enrollBtn =  <HTMLButtonElement>document.getElementById("enrollBtn");

    // already enrolled, unenrolled now!
    if(this.isEnrolled(this.currentUser)){
      //let repartition:RepartitionDTO = new RepartitionDTO(this.currentUser.getUserId(),this.id);
      //let repartition:RepartitionDTO = new RepartitionDTO(12,12);
      this.repartitionService.deleteRepartition(this.id, this.currentUser.getUserId()).subscribe(data=>{
        this.classDTOobj.studentsNumber = this.classDTOobj.studentsNumber - 1;
        console.log(data);
      },error => {console.log(error)});
      //this.enrollBtn.innerText = "Unenroll from class";

      let indexInArray = this.enrolledStudentsIDs.indexOf(this.currentUser.getUserId());
      delete this.enrolledStudentsIDs[indexInArray];

      enrollBtn.innerText = "Enroll from class";
    }

    //if(!this.isEnrolled(this.currentUser)){
    else{

      if(this.classDTOobj.studentsNumber == this.classDTOobj.capacity)
        window.alert('Nu mai sunt locuri in clasa');

      else {
        let newRepartition = new RepartitionDTO(this.currentUser.getUserId(), this.id);
        this.repartitionService.createRepartition(this.id, this.currentUser.getUserId(), newRepartition).subscribe(data => {
          this.classDTOobj.studentsNumber = this.classDTOobj.studentsNumber + 1;
          console.log(data);
        }, error => {
          console.log(error)
        });
        this.enrolledStudentsIDs.push(this.currentUser.getUserId());
        enrollBtn.innerText = "Unenroll in class";
      }

    }




  }


}
