import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { App1Component } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { environment } from '../../../../src/environments/environment';

const routes: Routes = [
  { path: '', component: FirstComponent }
];


@NgModule({
  declarations: [
    App1Component,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class AppModule { }
