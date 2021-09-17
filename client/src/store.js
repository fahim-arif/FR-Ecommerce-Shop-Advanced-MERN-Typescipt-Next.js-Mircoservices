import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userListReducer,
  userDeleteReducer,
  userEditReducer,
  userFetchReducer,
} from "./reducers/usersReducer";

import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
  productEditReducer,
} from "./reducers/productsReducer";

import { marginReducer } from "./reducers/marginReducer";

import { cartReducer } from "./reducers/cartsReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productEdit: productEditReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  sideMargin: marginReducer,
  userList: userListReducer,
  userFetch: userFetchReducer,
  userDelete: userDeleteReducer,
  userEdit: userEditReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartInfoFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingInfoFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const initialValue = {
  cart: {
    cartItems: cartInfoFromStorage,
    shippingAddress: shippingInfoFromStorage,
  },
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const store = createStore(
  reducer,
  initialValue,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
