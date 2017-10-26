import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
todos(){
    document.getElementById("taskmanager").setAttribute("class", "show-project");
    document.getElementById("portifolio").setAttribute("class", "show-project");
  }

  angular(){
    document.getElementById("taskmanager").setAttribute("class", "hide-project");
    document.getElementById("portifolio").setAttribute("class", "show-project");
  }

  jsf(){
    document.getElementById("taskmanager").setAttribute("class", "show-project");
    document.getElementById("portifolio").setAttribute("class", "hide-project");
  }

  android(){
    document.getElementById("taskmanager").setAttribute("class", "hide-project");
    document.getElementById("portifolio").setAttribute("class", "hide-project");
  }

  java(){
    document.getElementById("taskmanager").setAttribute("class", "show-project");
    document.getElementById("portifolio").setAttribute("class", "hide-project");
  }

  typescript(){
    document.getElementById("taskmanager").setAttribute("class", "hide-project");
    document.getElementById("portifolio").setAttribute("class", "show-project");
  }


}
