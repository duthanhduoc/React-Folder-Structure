import * as types from "./App.constants"
import { LOGIN_SUCCESS } from "src/pages/Login/Login.constants"
import produce from "immer"

const initialState = {
  isAuthenticated: false,
  closeSideNav: false
}

export const AppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.LOGOUT:
        localStorage.removeItem("token")
        draft.isAuthenticated = false
        break
      case LOGIN_SUCCESS:
        draft.isAuthenticated = true
        break
      case types.CLOSE_SIDE_NAV:
        draft.closeSideNav = !state.closeSideNav
        break
      default:
        return state
    }
  })
