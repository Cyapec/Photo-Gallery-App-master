import { api } from "../api/api";
import { setStatus } from "./statusApp";
import { AppThunkType } from "./store";

export type PhotoType = {
  id: string;
  urls: { regular: string };
};

export type ActionPhotoType = ReturnType<typeof setPhoto>;

const initialState: PhotoType[] = [];

const setPhoto = (photo: PhotoType[]) =>
  ({ type: "SET-PHOTO", photo } as const);

export const photoReducer = (
  state = initialState,
  action: ActionPhotoType
): PhotoType[] => {
  switch (action.type) {
    case "SET-PHOTO":
      return [...action.photo];
    default:
      return state;
  }
};

export const getPhoto = (): AppThunkType => (dispatch) => {
  dispatch(setStatus(true));
  api.getSquarishPhotos().then((data) => {
    dispatch(setPhoto(data));
    dispatch(setStatus(false));
  });
};
