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
    let lastActivateButtonId = this.desactivateButton();
    this.homeComponent.setContactPanel(lastActivateButtonId);
    document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
  }
  
  desactivateButton(): string{
    let elementList = document.getElementsByClassName("active");
    
    for(var i = 0; i <= elementList.length; i++){
      if(elementList[i]){
        switch(elementList[i].id) {
      case "home-button":
          document.getElementById("home-button").setAttribute("class", "navbar-brand");
          return "home-button";
      case "prof-exp-button":
          document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");
          return "prof-exp-button";
      case "about-me-button":
          document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
           return "about-me-button";
      case "contact-button":
          document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact");
          return "contact-button";
        }
      }
    }
  }

}
