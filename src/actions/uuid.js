// @flow
import type { TypedAction, PayloadAction, ErrorAction } from '../types/Actions'

export const UUID = {
  GET: 'uuid:get',
  GET_SUCCESS: 'uuid:getSuccess',
  GET_ERROR: 'uuid:getError',
  SET: 'uuid:set',
  SET_SUCCESS: 'uuid:setSuccess',
  SET_ERROR: 'uuid:setError'
}
export type GetUUIDAction = TypedAction<'uuid:get'>
export const getUUID = 
  (): GetUUIDAction => ({ type: UUID.GET })
  
    
export type GetUUIDSuccessAction = PayloadAction<'uuid:getSuccess', string>
export const getUUIDSuccess =
  (uuid: string): GetUUIDSuccessAction => {
  return { type: UUID.GET_SUCCESS, payload: uuid }}

export type GetUUIDErrorAction = ErrorAction<'uuid:getError', string>
export const getUUIDError =
  (message: string): GetUUIDErrorAction => {
  return { type: UUID.GET_SUCCESS, payload: message }}


export type SetUUIDAction = PayloadAction<'uuid:set', string>
export const setUUID =
  (uuid:string): SetUUIDAction => ({ type: UUID.SET, payload: uuid })

export type SetUUIDSuccessAction = PayloadAction<'uuid:setSuccess', string>
export const setUUIDSuccess =
  (uuid: string): SetUUIDSuccessAction => {
  return { type: UUID.SET_SUCCESS, payload: uuid }}

export type SetUUIDErrorAction = ErrorAction<'uuid:setError', string>
export const setUUIDError =
  (message: string): SetUUIDErrorAction => {
  return { type: UUID.SET_SUCCESS, payload: message }}
  