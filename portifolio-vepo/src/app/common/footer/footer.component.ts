import { Component, OnInit, HostListener } from '@angular/core';
import { Util } from '../../../../vepo-utils/utils';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  homeComponent: HomeComponent;

  constructor() { }

  @HostListener('window:scroll') onscroll(){
     new Util().scrollResize('footer', 20, 0, 30);
     
  }


  ngOnInit() {
    this.homeComponent = new HomeComponent();
}

  setContactPanel(){
    this.desactiveAllButton();
    document.getElementById("contact-button").setAttribute("class", "navbar-brand navbar-brand-other contact active");
    this.homeComponent.setContactPanel();
  }

   desactiveAllButton(){
          document.getElementById("home-button").setAttribute("class", "navbar-brand");
       
          document.getElementById("prof-exp-button").setAttribute("class", "navbar-brand navbar-brand-other");

          document.getElementById("about-me-button").setAttribute("class", "navbar-brand navbar-brand-other");
   }

}
