import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL:string = "http://localhost:8080/users";
  private GETstudentsByPlannerIdURL:string = "http://localhost:8080/students";
  constructor(private httpClient: HttpClient) { }
  getUsersList() : Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  getStudentsByPlannerId(plannerId:number):Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.GETstudentsByPlannerIdURL}/${plannerId}`);
  }


}
