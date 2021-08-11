import { Component, OnInit } from '@angular/core';
import {addDays} from "date-fns";
import * as XLSX from "xlsx";
import {ClassDTOService} from "../../class-dto.service";
import {ClassDTO} from "../../class-dto";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  startDate=new Date();
  endDate= addDays(new Date(), 6);
  tabel=true;
  classDTOlist:ClassDTO[] = [];
  classDTOcurrentList:ClassDTO[] = [];
  constructor(private classDTOService:ClassDTOService) { }

  ngOnInit(): void {
    this.classDTOService.getClassDTOList().subscribe(data =>{
      this.classDTOlist = data;
    });
  }

  generateTable(){
    let startDate = document.getElementById("startDate") as HTMLInputElement;
    let endDate = document.getElementById("endDate") as HTMLInputElement;


    let startDateValue = new Date(startDate.value);
    let endDateValue = new Date(endDate.value);

    let startDateValueISO = startDateValue.toISOString().split("T")[0];

    if(startDateValue > endDateValue) {
      window.alert("Intervalul calendaristic introdus este invalid");
    }
    else {
      this.tabel = false;
      this.classDTOcurrentList = [];
      for (let classDTO of this.classDTOlist) {
        if ((startDateValue <= (new Date(classDTO.startDate)) && (new Date(classDTO.endDate)) <= endDateValue)
        || (startDateValueISO == classDTO.startDate.split("T")[0]) )
          this.classDTOcurrentList.push(classDTO);
      }
    }
  }

  generateExcel(){

    let startDate = document.getElementById("startDate") as HTMLInputElement;
    let endDate = document.getElementById("endDate") as HTMLInputElement;

    let startDateValue = new Date(startDate.value);
    let endDateValue = new Date(endDate.value);

    let fileName = "Raport_" + startDateValue.toISOString().split("T")[0]
        + "_" + endDateValue.toISOString().split("T")[0]  +  ".xlsx";



    let element = document.getElementById('report-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);


    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');


    XLSX.writeFile(wb, fileName);
  }

}
