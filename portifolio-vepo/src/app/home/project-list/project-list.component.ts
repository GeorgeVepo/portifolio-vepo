import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

    homeComponent: HomeComponent;

    constructor() { }

    ngOnInit() {
        this.homeComponent = new HomeComponent();
    }

    goToPortifolio() {
        this.homeComponent.goToPortifolio();
    }


    filtrarProjetos(id) {
        switch (id) {
            case "botao-todos":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
            case "botao-angular":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
            case "botao-jsf":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-android":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-java":
                document.getElementById("taskmanager").setAttribute("class", "show-project");
                document.getElementById("portifolio").setAttribute("class", "hide-project");
                break;
            case "botao-typescript":
                document.getElementById("taskmanager").setAttribute("class", "hide-project");
                document.getElementById("portifolio").setAttribute("class", "show-project");
                break;
        }

    }
}
