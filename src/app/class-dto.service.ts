import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {ClassDTO} from "./class-dto";
import {ClassroomDetails} from "./classroom-details";

@Injectable({
  providedIn: 'root'
})
export class ClassDTOService {


  private baseURL:string = "http://localhost:8080/classdto";
  private courseNamesURL:string = "http://localhost:8080/course-names";
  private roomNamesURL:string = "http://localhost:8080/room-names";
  private classroomsDetailsURL:string = "http://localhost:8080/cldetails";
  private RESTclassDTOURL:string = "http://localhost:8080/class";
  constructor(private httpClient: HttpClient) { }
  getClassDTOList() : Observable<ClassDTO[]>{
    return this.httpClient.get<ClassDTO[]>(`${this.baseURL}`);
  }

  getClassDTOById(id:number):Observable<ClassDTO>{
    return this.httpClient.get<ClassDTO>(`${this.baseURL}/${id}`);
  }

  getCourseNames():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.courseNamesURL}`);
  }

  getroomNames():Observable<string[]>{
    return this.httpClient.get<string[]>(`${this.roomNamesURL}`);
  }

  getClassroomsDetails():Observable<ClassroomDetails[]>{
    return this.httpClient.get<ClassroomDetails[]>(`${this.classroomsDetailsURL}`);
  }

  updateSchedule(id:number, newPlanner:ClassDTO):Observable<Object>{
    return this.httpClient.put(`${this.RESTclassDTOURL}/${id}`,newPlanner);
  }

  deleteSchedule(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.RESTclassDTOURL}/${id}`);
  }

}
