import { createSelector } from "reselect"
import { ReduxState } from "redux/reducer"

export const appStateSelector = (state: ReduxState) => state.app

export const countSelector = createSelector(
  appStateSelector,
  state => state.count
)
