import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componenet1',
  templateUrl: './componenet1.component.html',
  styleUrls: ['./componenet1.component.css']
})
export class Componenet1Component  {

  public show:boolean = false;

  Dotoggle():void {
    this.show = !this.show;
    }

  //constructor() { }

  ngOnInit() {  
  }

}
