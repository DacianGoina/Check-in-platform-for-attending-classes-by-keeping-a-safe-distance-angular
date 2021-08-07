import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {ClassDTO} from "./class-dto";
import {ClassroomDetails} from "./classroom-details";
import {RepartitionDTO} from "./repartition-dto";
import {TeacherDTO} from "./teacher-dto";
import {ClassEntity} from "./class-entity";
import {Classroom} from "./classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassDTOService {


  private baseURL:string = "http://localhost:8080/classdto";
  private courseNamesURL:string = "http://localhost:8080/course-names";
  private roomNamesURL:string = "http://localhost:8080/room-names";
  private classroomsDetailsURL:string = "http://localhost:8080/cldetails";
  private RESTclassDTOURL:string = "http://localhost:8080/class";
  private POSTclassDTOURL:string = "http://localhost:8080/addSchedule";
  private GETTeacherDTOURL:string = "http://localhost:8080/teacherDTO";
  private POSTClassEntityURL:string = "http://localhost:8080/createClass";
  private POSTClassroomURL:string = "http://localhost:8080/createClassroom";
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

  createSchedule(newPlanner:ClassDTO):Observable<Object>{
    return this.httpClient.post(`${this.POSTclassDTOURL}`,newPlanner);
  }

  getTeacherDTOList() : Observable<TeacherDTO[]>{
    return this.httpClient.get<TeacherDTO[]>(`${this.GETTeacherDTOURL}`);
  }

  createClassEntity(newClassEntity:ClassEntity):Observable<Object>{
    return this.httpClient.post(`${this.POSTClassEntityURL}`,newClassEntity);
  }

  createClassroom(newClassroom:Classroom):Observable<Object>{
    return this.httpClient.post(`${this.POSTClassroomURL}`,newClassroom);
  }

}
