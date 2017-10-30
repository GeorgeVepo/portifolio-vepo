import { Component, OnInit, HostListener } from '@angular/core';
import { Util } from '../../../../vepo-utils/utils';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homeComponent: HomeComponent;

  constructor() {
   }

  ngOnInit() {
    this.homeComponent = new HomeComponent();
  }
  
  setContactPanel(){
    this.desactiveAllButton();
    document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
    this.homeComponent.setContactPanel();
  }

  setHomePanel(){
    this.goHome();
    this.homeComponent.goHome();
  }

  goHome(){
    this.desactiveAllButton();
    document.getElementById("home-button").setAttribute("class", "navbar-brand active");
  }
  
  desactiveAllButton(){
          document.getElementById("home-button").setAttribute("class", "navbar-brand");
       
          document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");

          document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
  
          document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact");

  }

}
