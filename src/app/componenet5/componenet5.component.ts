
import { ViewChild, Component, OnInit } from '@angular/core';
import {MatButtonToggleChange} from '@angular/material';


@Component({
  selector: 'app-componenet5',
  templateUrl: './componenet5.component.html',
  styleUrls: ['./componenet5.component.css']
})
export class Componenet5Component implements OnInit {
  toggle: number = 2;
  _name:string;
  _email:string;


get name2(): string{
    return this._name;
}
set name2(value: string){
  this._name=value;
}

get email2(): string{
  return this._email;
}
set email2(value: string){
this._email=value;
}

  constructor() { 
    this.name2="Full Name";
    this.email2="Address";
  }
  toggleView(change: MatButtonToggleChange){
    this.toggle = change.value;
  }

  texto : string = 'Atlanta,GA';
  lat: number = 33.7490;
  lng: number =  -84.3880;
  zoom: number = 13;

  ngOnInit() {

    
  }
  }

  


