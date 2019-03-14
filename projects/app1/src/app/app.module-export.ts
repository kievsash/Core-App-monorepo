import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App1Component } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';

const routes: Routes = [
  { path: '', component: FirstComponent }
];


@NgModule({
  declarations: [
    App1Component,
    FirstComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class App1Module { }
