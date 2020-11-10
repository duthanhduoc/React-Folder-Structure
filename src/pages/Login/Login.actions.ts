import * as types from "./Login.constants"

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
})

export const loginSuccess = payload => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const loginFailed = payload => ({
  type: types.LOGIN_FAILED,
  payload
})
