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

    if(elementList.length > 0){
    for(var i = 0; i <= elementList.length; i++){
      if(!elementList[i]){
        document.getElementById("botao-todos").setAttribute("class", "");
      } else {
        elementList[i].setAttribute("class", "");
      }
    }
  }
    document.getElementById(id).setAttribute("class", "active");
  }

}
