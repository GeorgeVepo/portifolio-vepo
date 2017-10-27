import { Component, OnInit } from '@angular/core';
import { ProjectListComponent } from '../home/project-list/project-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

   recentPostComponent: ProjectListComponent;

  ngOnInit() {
    this.recentPostComponent = new ProjectListComponent();
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

  setContactPanel(idLastActive){

     this.desactiveLastPanel(idLastActive);
      
    document.getElementById("home-panel").style.top = "-200px";
    document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading active-panel");
    document.getElementsByTagName("app-contact").item(0).setAttribute("class", "active-panel");
  }

  goHome(idLastActive){

    this.desactiveLastPanel(idLastActive);

    document.getElementById("home-panel").style.top = "-40px";
    document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading active-panel");
    document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "active-panel");

  }

  desactiveLastPanel(idLastActive){
  switch(idLastActive) {
      case "home-button":
          document.getElementById("panel-heading-projects").setAttribute("class", "panel-heading home-painel-heading");
          document.getElementsByTagName("app-project-list").item(0).setAttribute("class", "");
         
          break;
      case "prof-exp-button":
          break;
      case "about-me-button":
          break;
      case "contact-button":
          document.getElementById("panel-heading-contact").setAttribute("class", "panel-heading");
          document.getElementsByTagName("app-contact").item(0).setAttribute("class", "");
          break; 
        }
  }

}
