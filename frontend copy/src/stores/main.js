import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./auth";
// import loaderReducer from "./loader";

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    storeData({
      auth: getState().auth,
    });
    return result;
  };
};

const reStore = async () => {
  const data = await getData();
  console.log(data);
  if (data !== null) {
    return { ...data };
  }
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  // preloadedState: reStore(),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
