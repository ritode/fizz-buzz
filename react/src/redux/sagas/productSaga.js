import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import { fetchProductDataSuccess, fetchProductDataFailure } from "../productActions";

// API call to fetch product data
function fetchProductDataApi(productId) {
  return axios.get(`http://127.0.0.1:8000/api/data/${productId}`);
}

// Worker saga
function* fetchProductDataSaga(action) {
  try {
    const response = yield call(fetchProductDataApi, action.payload);
    yield put(fetchProductDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProductDataFailure(error.message));
  }
}

// Watcher saga
function* productSaga() {
  yield takeLatest("FETCH_PRODUCT_DATA_REQUEST", fetchProductDataSaga);
}

export default productSaga;
