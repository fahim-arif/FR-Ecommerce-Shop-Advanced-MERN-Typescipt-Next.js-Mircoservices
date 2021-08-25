import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProducts, getProduct } from "./reducers/productsReducer";
import { cartReducer } from "./reducers/cartsReducer";

const reducer = combineReducers({
  products: getProducts,
  product: getProduct,
  cart: cartReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
