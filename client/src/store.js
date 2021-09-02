import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "./reducers/usersReducer";
import {
  productListReducer,
  productDetailsReducer,
  productCreateReducer,
  productDeleteReducer,
} from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartsReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialValue = {
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
