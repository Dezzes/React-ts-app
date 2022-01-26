export interface PaginationState {
    posts: number
}

export enum PaginationActionType {
    FETCH_POST_COUNT = "FETCH_POST_COUNT"
}

interface fetchPostCountAction {
  type: PaginationActionType.FETCH_POST_COUNT,
  payload: number
}

export type PaginationAction = fetchPostCountAction