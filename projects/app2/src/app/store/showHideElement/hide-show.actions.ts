import { Action } from '@ngrx/store';

export enum HideShowActionTypes {
  invert = '[App2 HideShow] Invert show',
}

export class InvertHideShow implements Action {
  readonly type = HideShowActionTypes.invert;
}


export type HideShowActions = HideShowActionTypes;
