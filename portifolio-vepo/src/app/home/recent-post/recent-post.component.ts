import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.css']
})
export class RecentPostComponent implements OnInit {

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
