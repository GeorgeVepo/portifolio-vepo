import { Component, OnInit, HostListener } from '@angular/core';
import { Util } from '../../../../vepo-utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() {
   }

  @HostListener('window:scroll') onscroll() {
    new Util().scrollResize('navbar', 100, 100, 40);
  }


  ngOnInit() {
  }

}
