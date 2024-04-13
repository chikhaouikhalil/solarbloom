import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { SERVER } from "../firebase";

export const setUserData = () => async (dispatch) => {
  const _id = await AsyncStorage.getItem("_id");
  axios.get(`${SERVER}/users/user-data?user=${_id}`).then(async (res) => {
    dispatch({
      type: "SET_USER_DATA",
      payload: res.data,
    });
  });
};

export const setPlantsData = (plants) => async (dispatch) => {
  dispatch({
    type: "SET_PLANTS_DATA",
    payload: plants,
  });
};
