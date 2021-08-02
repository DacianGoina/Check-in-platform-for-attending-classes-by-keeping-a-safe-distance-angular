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
  constructor(private httpClient: HttpClient) { }
  getClassDTOList() : Observable<ClassDTO[]>{
    return this.httpClient.get<ClassDTO[]>(`${this.baseURL}`);
  }




}
