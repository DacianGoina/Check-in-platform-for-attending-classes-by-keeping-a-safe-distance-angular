import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RepartitionDTO} from "./repartition-dto";
import {ClassDTO} from "./class-dto";

@Injectable({
  providedIn: 'root'
})
export class RepartitionDTOService {


  private GETRepartitionDTOURL:string = "http://localhost:8080/enrolled";
  private POSTRepartitionDTOURL:string = "http://localhost:8080/class"; // folosit si pentru delete

  constructor(private httpClient: HttpClient) { }


  getRepatitionDTO(plannerId:number): Observable<RepartitionDTO[]>{
    return this.httpClient.get<RepartitionDTO[]>(`${this.GETRepartitionDTOURL}/${plannerId}`);
  }

  createRepartition(plannerId: number, newRepartition:RepartitionDTO):Observable<Object>{
    return this.httpClient.post(`${this.POSTRepartitionDTOURL}/${plannerId}`,newRepartition);
  }

  deleteRepartition(plannerId:number, studentId:number):Observable<Object>{
    return this.httpClient.delete(`${this.POSTRepartitionDTOURL}/${plannerId}`);
  }
}
