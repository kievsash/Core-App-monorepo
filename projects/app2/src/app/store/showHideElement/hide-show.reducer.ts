import { Action } from '@ngrx/store';
import {HideShowActionTypes} from './hide-show.actions';


export interface ShowState {
  show: boolean;
}

export const initialState: ShowState = {
  show: true
};

export function showHideReducer(state = initialState, action: Action): ShowState {
  switch (action.type) {
    case HideShowActionTypes.invert:
      return {
        show: !state.show
      };
    default:
      return state;
  }
}
