import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

    @Input() projectImage: string = '';
    @Input() projectTitle: string = '';
    @Input() projectText: string = '';

    ngOnInit(): void {
    }

  constructor() {

  }


}