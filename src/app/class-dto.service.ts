import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";
import {ClassDTO} from "./class-dto";

@Injectable({
  providedIn: 'root'
})
export class ClassDTOService {


  private baseURL:string = "http://localhost:8080/classdto";
  private courseNamesURL:string = "http://localhost:8080/course-names";
  private roomNamesURL:string = "http://localhost:8080/room-names";
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



}
