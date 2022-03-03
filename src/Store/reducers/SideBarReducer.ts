import { Reducer } from 'react';
import { SideBarState } from '../states/SideBarState';
import { SideBarAction } from '../actions/SideBarAction';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const SideBarReducer: Reducer<SideBarState, SideBarAction> = (
    state,
    { type, payload }
) => {
    switch (type) {
        case 'SET_SIDEBAR_STATUS':
            return { open: payload.open };
        default:
            return state;
    }
};
