// @flow

import { AsyncStorage } from 'react-native'
import { UUID } from '../actions/uuid'
import type { GetUUIDAction, SetUUIDAction } from '../actions/uuid'

export type UUIDActions = GetUUIDAction | SetUUIDAction 
export type UUIDState = {
  uuid:string
}
const initUUID = { uuid: '' } 
const uuid = (state:UUIDState = initUUID, action: UUIDActions) => {
  switch(action.type) {
    case UUID.GET : {
      return { ...state }
    }
    case UUID.SET : {
      storeUUID(action.type, action.payload)
      return { ...state, uuid: action.payload }
    }
    default:
      return { ...state } 
  }
}

const STORE_UUID_KEY = 'UUIDKEY'

function storeUUID(type, uuidStr) {
  let uuid: string = ''

  AsyncStorage.getItem(STORE_UUID_KEY).then((uuidString) => {
    uuid = JSON.parse(uuidString)
    if (uuid !== null) {
      switch (type) {
        case UUID.SET:
          uuid = uuidStr
          break
        default:
          break
      }

      AsyncStorage.setItem(STORE_UUID_KEY, JSON.stringify(uuid), () => {
      })
    }
    else {
      switch (type) {
        case UUID.SET:
          uuid = uuidStr
          break
        default:
          break
      }

      AsyncStorage.setItem(STORE_UUID_KEY, JSON.stringify(uuid), () => {
      })
    }
  })
}



export default uuid