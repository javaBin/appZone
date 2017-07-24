// @flow

export type Action = {
  type: string,
}

export type PayloadAction<V> = Action & {
  payload: V
}

export type ErrorAction = Action & {
  errorMsg: string
}