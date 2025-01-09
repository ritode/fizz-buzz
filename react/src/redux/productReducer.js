const initialState = {
    productId: null,
    cards: [],
    table: [],
    barChart: null,
    bubbleChart: null,
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_PRODUCT_DATA_REQUEST":
        return { ...state, loading: true, error: null, productId: action.payload };
      case "FETCH_PRODUCT_DATA_SUCCESS":
        return {
          ...state,
          loading: false,
          cards: action.payload.cards,
          table: action.payload.table,
          barChart: action.payload.bar_chart,
          bubbleChart: action.payload.bubble_chart,
        };
      case "FETCH_PRODUCT_DATA_FAILURE":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  