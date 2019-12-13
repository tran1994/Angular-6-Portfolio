
import { ViewChild, Component, OnInit } from '@angular/core';
import {MatButtonToggleChange} from '@angular/material';


@Component({
  selector: 'app-componenet5',
  templateUrl: './componenet5.component.html',
  styleUrls: ['./componenet5.component.css']
})
export class Componenet5Component implements OnInit {
  toggle: number = 2;
  name: string;
  email: string;
  message: string;


 /* processForm() {
    const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    alert(allInfo); 
  }*/
  
  


  constructor() { 
    /**
   * Process the form we have. Send to whatever backend
   * Only alerting for now
   */
    
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

  


