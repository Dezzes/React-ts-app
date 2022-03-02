import { PostFilter } from '../Post/types';

export interface FilterState {
    sort: keyof PostFilter | "",
    query: string
}

export enum FilterActionTypes {
    SELECT_SORT = "SELECT_SORT",
    INPUT_SORT = "INPUT_SORT"
}

interface selectSortAction {
    type: FilterActionTypes.SELECT_SORT,
    payload: ""
}

interface inputSortAction {
    type: FilterActionTypes.INPUT_SORT,
    payload: ""
}

export type FilterAction = selectSortAction | inputSortAction