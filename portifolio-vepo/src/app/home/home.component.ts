import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../home/project-list/project-list.component';
import { NavbarComponent } from '../common/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

   recentPostComponent: ProjectListComponent;
   navbarComponent: NavbarComponent;

  ngOnInit() {
    this.recentPostComponent = new ProjectListComponent();
    this.navbarComponent = new NavbarComponent();
  }


  filtrarProjetos(id){
    this.recentPostComponent.filtrarProjetos(id);
    this.setActive(id);

  }

  setActive(id){
    let elementList = document.getElementsByClassName("active");

 
    for(var i = 0; i <= elementList.length; i++){
      if (elementList[i].id != "home-button") {
        elementList[i].setAttribute("class", "");
      }
    }
  
    document.getElementById(id).setAttribute("class", "active");
  }

  setContactPanel(){

    this.desactiveAllPanel();
      
    document.getElementById("home-panel").style.top = "-200px";
    document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading active-panel");
    document.getElementsByTagName("app-contact").item(0).setAttribute("class", "active-panel");
  }

  setHomeNavbar(){
    this.navbarComponent.goHome();

  }

  goHome(){
    this.desactiveAllPanel();
        document.getElementById("home-panel").style.top = "-40px";
        document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading active-panel");
        document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "active-panel");

    this.setHomeNavbar();
    
  }

  setExpPanel(){
    this.desactiveAllPanel();
        document.getElementById("home-panel").style.top = "-200px";
        document.getElementById("panel-heading-exp").setAttribute("class", "panel-heading active-panel");
        document.getElementsByTagName("app-exp-profissionais").item(0).setAttribute("class", "active-panel");
    
  }

  desactiveAllPanel(){
      document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading");
      document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "");
      document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading");
      document.getElementsByTagName("app-contact").item(0).setAttribute("class", "");
      document.getElementById("panel-heading-exp").setAttribute("class", "panel-heading");
      document.getElementsByTagName("app-exp-profissionais").item(0).setAttribute("class", "");
        
  }

}
