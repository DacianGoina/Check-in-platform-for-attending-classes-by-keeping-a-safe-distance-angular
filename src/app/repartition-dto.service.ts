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

  createRepartition(plannerId: number, newRepartition:RepartitionDTO):Observable<Object>{
    //return this.httpClient.post(`${this.POSTRepartitionDTOURL}/${plannerId}/${"enroll"}`,newRepartition);
    return this.httpClient.post(`${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}`,newRepartition);
  }

  deleteRepartition(plannerId:number, repartition:RepartitionDTO):Observable<Object>{
    //return this.httpClient.delete(`${this.POSTRepartitionDTOURL}/${plannerId}/${"enroll"}`);
    //return this.httpClient.delete(`${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}`);

    return this.httpClient.request('DELETE', `${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}`, { body: repartition});
    /*
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: repartition,
    };


    this.httpClient
        .delete(`${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}`, options)
        .subscribe((s) => {
          console.log(s);
        });

    return new Observable<RepartitionDTO>();
    /*
    return this.httpClient.request('DELETE', `${this.POSTRepartitionDTOURL}/${plannerId}/${this.auxPath}`, { body: repartition,
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });

     */

  }

}
