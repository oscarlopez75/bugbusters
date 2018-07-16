import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CountDown } from "ng2-date-countdown";



import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { ProductService } from './product.service';
import { PriorityService } from './priority.service';
import { TotalService } from './total.service';
import { FilterService } from './filter.service';

const Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts', component: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CountDown
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [
    PostsService,
    ProductService,
    PriorityService,
    TotalService,
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
