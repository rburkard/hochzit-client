import { fork, takeEvery, put } from "redux-saga/effects"
import { configureApiSaga } from "@foronered/util/lib/redux/frr/rest.saga"
import { click, ping } from "redux/actions"

const ApiSaga = configureApiSaga({
  baseUrl: "http://localhost:3001/api",
  debug: false,
})

export function* RootSaga() {
  yield fork(ApiSaga)

  yield takeEvery(
    [ping.types.success],
    function* (action: typeof ping.action.success) {
      yield put(click(10))
    }
  )
}
