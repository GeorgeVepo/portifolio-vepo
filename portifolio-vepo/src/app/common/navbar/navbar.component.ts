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

  goHome(){
    this.desactiveAllMobileButtons();
    this.desactiveAllNavbrandButton();
    document.getElementById("home-button").setAttribute("class", "navbar-brand active");
    document.getElementById("home-mobile-button").setAttribute("class", " active");
  }
  
  setContactPanel(){
    this.desactiveAllMobileButtons();
    this.desactiveAllNavbrandButton();
    document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
    document.getElementById("contact-mobile-button").setAttribute("class", "active");
    this.homeComponent.setContactPanel();
  }

  setHomePanel(){
    this.goHome();
    this.homeComponent.goHome();
  }

  setAboutMe(){
    this.desactiveAllMobileButtons();
    this.desactiveAllNavbrandButton();
    document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other active");
    document.getElementById("about-me-mobile-button").setAttribute("class", "active");
    this.homeComponent.setAboutMe();
  }

  setExpPanel(){
    this.desactiveAllMobileButtons();
    this.desactiveAllNavbrandButton();
    document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other active");
    document.getElementById("prof-exp-mobile-button").setAttribute("class", "active");
    this.homeComponent.setExpPanel();
  }

  desactiveAllMobileButtons(){
    var e = document.getElementsByClassName("active");
    console.log(e.length);
    if(e.length > 0){
      e[0].setAttribute("class", "");
    }
    
  }
  
  desactiveAllNavbrandButton(){
          document.getElementById("home-button").setAttribute("class", "navbar-brand");
       
          document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");

          document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
  
          document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact");

  }

}
