import { useEffect, useState } from "react";
import { getPhoto, PhotoType } from "../../redux/photoReducer";
import { useSelector, useDispatch } from "react-redux";
import { AppStoreType } from "../../redux/store";
import { CircularProgress } from '@mui/material';
import CloseIcon from "@material-ui/icons/Close";
import "./Gallery.css";
import React from "react";

export const Gallery = ():JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [openedImg, setOpenedImg] = useState("");
  const data = useSelector<AppStoreType, PhotoType[]>((state) => state.photo);
  const dispatch = useDispatch();

  const isLoad = useSelector<AppStoreType, boolean>(
    (state) => state.status.isLoading
  );

  const getImage = (imgSrc: string) => {
    setOpenedImg(imgSrc);
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

 
  if (isLoad) {
    return <CircularProgress color="error"/>;
  }

  return (
    <>
      <div className={isOpen ? "model open" : "model"}>
        <img src={openedImg} alt="opened" />
        <CloseIcon onClick={() => setIsOpen(false)} />
      </div>
      <div className="gallery">
        {data.map((photo) => {
          return (
            <div
              className="pics"
              key={photo.id}
              onClick={() => getImage(photo.urls.regular)}
            >
              <img
                className="image"
                src={photo.urls.regular}
                style={{ width: "100%" }}
                alt="pic"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
