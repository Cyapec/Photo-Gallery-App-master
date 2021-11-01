import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { ActionPhotoType, photoReducer } from "./photoReducer";
import { ActionStatusApp, statusAppRedcer } from "./statusApp";

const reducers = combineReducers({
  photo: photoReducer,
  status: statusAppRedcer,
});

export const store = createStore(reducers, applyMiddleware(thunk));

export type AppStoreType = ReturnType<typeof reducers>;

export type AppActionType = ActionPhotoType | ActionStatusApp;
export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreType,
  unknown,
  AppActionType
>;