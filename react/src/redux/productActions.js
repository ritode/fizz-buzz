export const fetchProductDataRequest = (productId) => ({
    type: "FETCH_PRODUCT_DATA_REQUEST",
    payload: productId,
  });
  
  export const fetchProductDataSuccess = (data) => ({
    type: "FETCH_PRODUCT_DATA_SUCCESS",
    payload: data,
  });
  
  export const fetchProductDataFailure = (error) => ({
    type: "FETCH_PRODUCT_DATA_FAILURE",
    payload: error,
  });
  