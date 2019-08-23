import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: './first',
            index: 0
        }, {
            label: 'About Me',
            link: './second',
            index: 1
        }, {
            label: 'Experience',
            link: './third',
            index: 2
        }, {
            label: 'Photography',
            link: './fourth',
            index: 3
            }, 
            {
              label: 'Contact Me',
              link: './fifth',
              index: 4
              }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
