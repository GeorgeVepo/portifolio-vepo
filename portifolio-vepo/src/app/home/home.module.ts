import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainPostComponent } from '../common/main-post/main-post.component';
import { HomeComponent } from './home.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { PopularPostComponent } from './popular-post/popular-post.component';
import { PostSelectionComponent } from './popular-post/post-selection/post-selection.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations:[
        MainPostComponent,
        HomeComponent,
        RecentPostComponent,
        PopularPostComponent,
        PostSelectionComponent
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule{ }