import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProjectComponent } from './project-list/project/project.component';
import { HomeComponent } from './home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { ExpProfissionaisComponent } from './exp-profissionais/exp-profissionais.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:[
        ProjectComponent,
        HomeComponent,
        ProjectListComponent,
        ContactComponent,
        ExpProfissionaisComponent,
        AboutMeComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule{ }