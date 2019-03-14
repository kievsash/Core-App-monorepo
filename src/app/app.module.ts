import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SomeCoreComponentComponent } from './some-core-component/some-core-component.component';
import {AdminLibModule} from 'admin-lib';

@NgModule({
  declarations: [
    AppComponent,
    SomeCoreComponentComponent,
    SomeCoreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AdminLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
