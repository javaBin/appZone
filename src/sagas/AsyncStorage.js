import { call, put, takeLatest } from 'redux-saga/effects'
import { AsyncStorage } from 'react-native'
import { UUID, getUUIDSuccess, getUUIDError, setUUIDSuccess, setUUIDError } from '../actions/uuid'

const STORE_UUID_KEY = 'UUIDKEY'

const getUUID: () => any =
  () => {
    return AsyncStorage.getItem(STORE_UUID_KEY).then(uuid => {
      return JSON.parse(uuid)
    })
} 


const setUUID: () => any = (payload) => {
  let uuid: string = ''

 return AsyncStorage.getItem(STORE_UUID_KEY).then((uuidString) => {
      uuid = JSON.parse(uuidString)
      if (uuid === null) {
        AsyncStorage.setItem(STORE_UUID_KEY, JSON.stringify(payload), () => {
          return payload
        })
      } else {
        return uuid
      }
    })
}

function* get(): Generator<*, void, *> {
  try {
    const uuid = yield call(() => getUUID())

    yield put(getUUIDSuccess(uuid))
  } catch (e) {
    yield put(getUUIDError())
  }
}

function* set(action): Generator<*, void, *> {
  try {
    const uuid = yield call(() => setUUID(action.payload))
    yield put(setUUIDSuccess(uuid))
  } catch (e) {
    yield put(setUUIDError())
  }
}

export function* getUUIDAsyncSaga(): Generator<*, void, *> {
  yield takeLatest(UUID.GET, get)
}

export function* setUUIDAsyncSaga(): Generator<*, void, *> {
  yield takeLatest(UUID.SET, set)
}

