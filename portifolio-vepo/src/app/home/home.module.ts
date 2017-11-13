import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';
import { ExpProfissionaisComponent } from './exp-profissionais/exp-profissionais.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectComponent } from './project/project.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule, FormsModule
    ],
    declarations:[
        HomeComponent,
        ProjectListComponent,
        ContactComponent,
        ExpProfissionaisComponent,
        AboutMeComponent,
        ProjectComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule{ }