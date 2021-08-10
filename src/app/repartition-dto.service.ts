import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepartitionDTO} from "./repartition-dto";
import {ClassDTO} from "./class-dto";

@Injectable({
  providedIn: 'root'
})
export class RepartitionDTOService {


  private GETRepartitionDTOURL:string = "http://localhost:8080/enrolled";
  private POSTRepartitionDTOURL:string = "http://localhost:8080/class"; // folosit si pentru delete

  private auxPath:string = "enroll";
  constructor(private httpClient: HttpClient) { }


  getRepatitionDTO(plannerId:number): Observable<number[]>{
    return this.httpClient.get<number[]>(`${this.GETRepartitionDTOURL}/${plannerId}`);
  }

  createRepartition(plannerId: number, studentId:number, newRepartition:RepartitionDTO):Observable<Object>{
    return this.httpClient.post(`${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}/${studentId}`,newRepartition);
  }

  deleteRepartition(id:number, studentId:number):Observable<Object>{
    return this.httpClient.delete(`${this.POSTRepartitionDTOURL}/${id}/${this.auxPath}/${studentId}`);
  }

}
