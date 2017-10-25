import { Component, OnInit } from '@angular/core';
import { RecentPostComponent } from './home/recent-post/recent-post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  recentPostComponent: RecentPostComponent;

  constructor() {
   }

  ngOnInit() {
    this.recentPostComponent = new RecentPostComponent();
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
  title = 'app works!';
}
