import { all, call } from "redux-saga/effects";
import authSaga from "./authSaga";
import productSaga from "./productSaga";

export default function* rootSaga() {
  yield all([call(authSaga), call(productSaga)]);
}
