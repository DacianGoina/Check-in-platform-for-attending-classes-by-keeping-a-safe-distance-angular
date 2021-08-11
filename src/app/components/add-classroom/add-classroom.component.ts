import { Component, OnInit } from '@angular/core';
import {ClassDTOService} from "../../class-dto.service";
import {ClassEntity} from "../../class-entity";
import {Router} from "@angular/router";
import {Classroom} from "../../classroom";

@Component({
  selector: 'app-add-classroom',
  templateUrl: './add-classroom.component.html',
  styleUrls: ['./add-classroom.component.css']
})
export class AddClassroomComponent implements OnInit {

  roomNamesList: string[] = [];

  constructor(private classDTOService: ClassDTOService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.classDTOService.getroomNames().subscribe(data => {
      this.roomNamesList = data;
    })
  }

  // Return true if room name already exists
  public roomNameAlreadyExists(roomName: string): boolean {
    for (let rName of this.roomNamesList)
      if (roomName == rName)
        return true;
    return false;
  }

  public createClassroom() {
    let name = document.getElementById("classroomName") as HTMLInputElement;
    let location = document.getElementById("location") as HTMLInputElement;
    let capacity = document.getElementById("capacity") as HTMLInputElement;

    console.log("Classroom name: " + name.value);
    console.log("Location: " + location.value);
    console.log("Capacity: " + capacity.value);

    if (name.value.length < 2)
      window.alert("Numele salii este prea scurt");
    else if (location.value.length < 2)
      window.alert("Numele locatiei este prea scurt");
    else if (isNaN(Number(capacity.value)) || Number(capacity.value) <= 0)
      window.alert("Capacitatea introdusa este invalida");
    else if (this.roomNameAlreadyExists(name.value))
      window.alert("Exista deja o sala cu acest nume");
    else {
      let newClassroom = new Classroom(0,name.value,location.value,Number(capacity.value));
      this.classDTOService.createClassroom(newClassroom).subscribe(data => {
        window.alert("Sala creata cu succes!")
        this.goToMainPage();
      }, error => {
        console.log(error);
        window.alert("Sala nu a fost creata")
      });

    }

  }
  public goToMainPage(){
    this.router.navigate(['/class']);
  }
}
