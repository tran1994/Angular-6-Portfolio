import { Component, OnInit } from '@angular/core';
import {MatButtonToggleChange} from '@angular/material';
 

@Component({
  selector: 'app-componenet3',
  templateUrl: './componenet3.component.html',
  styleUrls: ['./componenet3.component.css']
})
export class Componenet3Component implements OnInit {

  constructor(   ) { }

  ngOnInit() {
  }
  toggle: boolean = true;
  

  toggleView(change: MatButtonToggleChange){
    this.toggle = change.value;
  }


}
