import { FilterActionTypes } from "../filter/types"

export const filterPostsWithSelect = (payload: string) => ({ type: FilterActionTypes.SELECT_SORT, payload })
export const filterPostsWithInput = (payload: string) => ({ type: FilterActionTypes.INPUT_SORT, payload })