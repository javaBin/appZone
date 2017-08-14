// @flow

/**
 * Action with a named type.
 */
export type TypedAction<T : string> = {
  type: T,
}

/**
 * Action with a named type and a payload.
 */
export type PayloadAction<T, P> = TypedAction<T> & {
  type: T,
  payload: P
}

/**
 * Error action with a named type and an error message.
 */
export type ErrorAction<T> = TypedAction<T> & {
  type: T,
  errorMsg: string
}

/**
 * The dispatch function from redux that takes typed actions.
 */
export type Dispatch = (action: TypedAction<*>) => void
