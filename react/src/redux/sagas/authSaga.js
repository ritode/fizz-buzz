import { takeLatest, put, call } from "redux-saga/effects";
import { authApi } from "./apiService";

// Worker saga: handles login
function* loginSaga(action) {
  try {
    const response = yield call(authApi.login, action.payload);
    yield put({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    yield put({
      type: "LOGIN_FAILURE",
      payload: error.response?.data?.detail || error.message,
    });
  }
}

// Watcher saga: watches for LOGIN_REQUEST actions
function* authSaga() {
  yield takeLatest("LOGIN_REQUEST", loginSaga);
}

export default authSaga;
