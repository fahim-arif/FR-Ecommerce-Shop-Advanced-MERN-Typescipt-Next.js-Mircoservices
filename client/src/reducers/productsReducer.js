import {
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCESS,
} from "../types/productTypes";

export const productListReducer = (state = { products: [], loading: false },action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { loading: true, products: [] };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true, ...state };
    case GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload };
    case GET_PRODUCT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };
    case PRODUCT_CREATE_SUCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

// export const productListReducer = (state = { products: [] }, action) => {
//   switch (action.type) {
//     case PRODUCT_LIST_REQUEST:
//       return { loading: true, products: [] };
//     case PRODUCT_LIST_SUCESS:
//       return {
//         loading: false,
//         products: action.payload.products,
//         pages: action.payload.pages,
//         page: action.payload.page,
//       };
//     case PRODUCT_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

export const productDeleteReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
