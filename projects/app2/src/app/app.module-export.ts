import { NgModule } from '@angular/core';

import { App2Component } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from './second/second.component';

const routes: Routes = [
  { path: '', component: SecondComponent }
];

@NgModule({
  declarations: [
    App2Component,
    SecondComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class App2Module { }
