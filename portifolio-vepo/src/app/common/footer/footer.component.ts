import { Component, OnInit, HostListener } from '@angular/core';
import { Util } from '../../../../vepo-utils/utils';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @HostListener('window:scroll') onscroll(){
     new Util().scrollResize('footer', 100, 0, 30);
  }


  ngOnInit() {
  }

}
