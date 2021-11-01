import axios from "axios";
export type PhotoSquarishResponceType = {
  id: string;
  urls: { regular: string };
};

const instance = axios.create({
  baseURL:
    "https://api.unsplash.com//photos/random/?client_id=yKwjqwmQiy5FBBgQbqg6IR0FWdqMynCdUou6NKFAPlI&",
});

export const api =  {
  getSquarishPhotos():Promise<PhotoSquarishResponceType[]> {
    return instance
      .get(
        "&orientation=squarish&count=30"
      )
      .then((res) => {
        return res.data;
      });
  },
};
