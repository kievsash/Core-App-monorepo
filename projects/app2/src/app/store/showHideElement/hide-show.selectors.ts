import {ShowState} from './hide-show.reducer';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

const getShowValue = (state: ShowState): boolean => state.show;

const selectShowState: MemoizedSelector<
    object,
    ShowState
    > = createFeatureSelector<ShowState>('app2ShowHide');

const selectShowValue: MemoizedSelector<object, any> = createSelector(
    selectShowState,
    getShowValue
);

export {
    selectShowState,
    selectShowValue
};
