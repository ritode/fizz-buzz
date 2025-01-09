import { takeLatest, put, call } from "redux-saga/effects";
import { fetchProductDataSuccess, fetchProductDataFailure } from "../productActions";
import { productApi } from "./apiService";

// Worker saga: fetches product data
function* fetchProductDataSaga(action) {
  try {
    const response = yield call(productApi.fetchProductData, action.payload);
    yield put(fetchProductDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProductDataFailure(error.message));
  }
}

// Watcher saga: watches for FETCH_PRODUCT_DATA_REQUEST actions
function* productSaga() {
  yield takeLatest("FETCH_PRODUCT_DATA_REQUEST", fetchProductDataSaga);
}

export default productSaga;
