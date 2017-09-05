// @flow
import type { TypedAction, PayloadAction } from '../types/Actions'

export const UUID = {
  GET: 'uuid:get',
  SET: 'uuid:set'
}
export type GetUUIDAction = TypedAction<'uuid:get'>
export const getUUID = 
  (): GetUUIDAction => ({ type: UUID.GET })

export type SetUUIDAction = PayloadAction<'uuid:set', string>
export const setUUID =
  (uuid:string): SetUUIDAction => ({ type: UUID.SET, payload: uuid })