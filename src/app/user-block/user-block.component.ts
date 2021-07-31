import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.css']
})
export class UserBlockComponent implements OnInit {
  users:User[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
