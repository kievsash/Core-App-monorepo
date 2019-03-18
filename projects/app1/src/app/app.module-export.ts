import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App1Component } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

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
    AdminLibModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('app1ShowHide', showHideReducer),
  ],
  providers: [],
  bootstrap: [App1Component]
})
export class App1Module { }
