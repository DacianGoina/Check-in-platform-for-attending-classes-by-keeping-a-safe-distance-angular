import { Component, OnInit } from '@angular/core';
import {addDays} from "date-fns";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  startDate=new Date();
  endDate= addDays(new Date(), 6);
  tabel=true;
  apareTabel(){
    this.tabel=false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
