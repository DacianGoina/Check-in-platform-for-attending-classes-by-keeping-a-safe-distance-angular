import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ClassDTOService } from "../../class-dto.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  constructor( private route: ActivatedRoute,
               private classDTOService: ClassDTOService,
               private location: Location) {

  }

  ngOnInit(): void {

  }


}
