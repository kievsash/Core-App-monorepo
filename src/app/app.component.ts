import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {selectShowValue} from '../../projects/app1/src/app/store';
import {InvertHideShow as InvertHideShowApp1} from '../../projects/app1/src/app/store/showHideElement/hide-show.actions';
import {InvertHideShow as InvertHideShowApp2} from '../../projects/app2/src/app/store/showHideElement/hide-show.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Core-App';

  constructor(private store: Store<any>) {

  }

  toggleApp1() {
    this.store.dispatch(new InvertHideShowApp1());
  }

  toggleApp2() {
    this.store.dispatch(new InvertHideShowApp2());
  }
}
