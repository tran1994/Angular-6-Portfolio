import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenet4',
  templateUrl: './componenet4.component.html',
  styleUrls: ['./componenet4.component.css']
})
export class Componenet4Component implements OnInit {
  images = [  
    { img: "./assets/images/atl.png" },  
    { img: "./assets/images/bridge.png" },  
    { img: "./assets/images/chicago.png" },  
    { img: "./assets/images/city.jpg" },  
    { img: "./assets/images/couple.png" },  
    { img: "./assets/images/person2.png" },  
    { img: "./assets/images/person.png" },  
    { img: "./assets/images/person3.png" },  
    { img: "./assets/images/ponce.png" },  
  ]; 
  
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };  

  public show:boolean = false;
  public buttonName:any = 'View My Equipment';

 

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
   // if(this.show)  
    //  this.buttonName = "Hide";
   // else
    //  this.buttonName = "Show";
  }




  //constructor() { }

  ngOnInit() {
  }

}
