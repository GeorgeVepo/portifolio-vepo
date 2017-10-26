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


  todos(){
    this.recentPostComponent.todos();
  }

  angular(){
    this.recentPostComponent.angular();
  }

  jsf(){
    this.recentPostComponent.jsf();
  }

  android(){
    this.recentPostComponent.android();
  }

  java(){
    this.recentPostComponent.java();
  }

  typescript(){
    this.recentPostComponent.typescript();
  }

}
