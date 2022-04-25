import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"
import * as Actions from "./actions"

export type AppState = {
  count: number
  ping: boolean
}

const initialDataState: AppState = {
  count: 0,
  ping: false,
}

type Action = Actions.Click | typeof Actions.ping.action.success

export const appReducer = (
  state: AppState = initialDataState,
  action: Action
): AppState => {
  switch (action.type) {
    case Actions.ViewActionType.Click:
      return {
        ...state,
        count: state.count + 1,
      }
    case Actions.ping.types.success:
      return {
        ...state,
        ping: true,
      }
    default:
      return state
  }
}

export type ReduxState = {
  app: AppState
  router: any
}

export const createRootReducer = (history: any) =>
  combineReducers({
    app: appReducer,
    router: connectRouter(history),
  })
