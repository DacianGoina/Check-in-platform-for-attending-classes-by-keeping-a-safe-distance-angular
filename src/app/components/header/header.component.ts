import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  user : string = 'GUEST';

  ngOnInit(): void {
  }

  userid: number= 0;

  studentfunction(){
    let foo = prompt('Te rugăm să îți introduci id-ul');
    let bar = confirm('Confirmi?');
   console.log(foo, bar);
    this.userid=Number(foo);
  }

}
