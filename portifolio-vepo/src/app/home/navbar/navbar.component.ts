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

  ngOnInit() {
    
  }
    @HostListener('window:scroll') onscroll(){
     this.parallax();
  }
  
 

parallax(){
        let docEl = document.documentElement;
         let sTop = (window.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);

        let $class = document.getElementById('background');
        $class.style.top =-(sTop*2.15)+'px';
}

}
