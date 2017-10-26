import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-selection',
  templateUrl: './post-selection.component.html',
  styleUrls: ['./post-selection.component.css']
})
export class PostSelectionComponent implements OnInit {

  @Input() popularPostImage: string = '';
  @Input() popularPostText: string = '';

  constructor() { }

  ngOnInit() {
  }

}
