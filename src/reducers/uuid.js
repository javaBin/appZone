// @flow

import { UUID } from '../actions/uuid'
import type { GetUUIDSuccessAction, SetUUIDSuccessAction } from '../actions/uuid'

export type UUIDActions = SetUUIDSuccessAction | GetUUIDSuccessAction
export type UUIDState = {
  uuid:string
}
const initUUID = { uuid: '' } 
const uuid = (state:UUIDState = initUUID, action: UUIDActions) => {
  switch(action.type) {
    case UUID.GET_SUCCESS : {
      return { ...state, uuid: action.payload }  
    }
    case UUID.SET_SUCCESS : {
      return { ...state, uuid: action.payload }
    }
    default:
      return { ...state } 
  }
}

export default uuid