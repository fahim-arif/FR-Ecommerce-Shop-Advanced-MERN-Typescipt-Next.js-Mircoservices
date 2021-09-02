import axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
} from "../types/userTypes";

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = axios.post(
      "http://localhost:5000/user/register",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
