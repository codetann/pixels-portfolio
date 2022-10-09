// TODO: add support for localstorage

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { data } from "./test.data";

export const AppContext = createContext();

export default function Provider({ children }) {
  // LOCALSTORAGE FUNTIONS
  const checkFavorites = () => {
    if (localStorage.getItem("favorites")) {
      return JSON.parse(localStorage.getItem("favorites"));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
      return [];
    }
  };
  const saveFavorite = (id, height, url) => {
    const newArr = JSON.parse(localStorage.getItem("favorites"));
    if (newArr.includes(id)) return; // checks if ID already exitsts
    console.log(url);

    newArr.push({ id, height, url });
    localStorage.setItem("favorites", JSON.stringify(newArr));
    setFavorites(newArr);
  };
  const deleteFavorite = (id) => {
    const favoriteList = JSON.parse(localStorage.getItem("favorites"));
    const newArr = favoriteList.filter((fav) => fav.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newArr));
    setFavorites(newArr);
  };

  // HOOKS
  const [width, setWidth] = useState(window.innerWidth);
  const [toggled, setToggled] = useState(false);
  const [homePhotos, setHomePhotos] = useState([]);
  const [favorites, setFavorites] = useState(checkFavorites());
  const [query, setQuery] = useState("utah");

  // handles the change of width of the screen
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // fetches the images for the home screen of the application
  useEffect(() => {
    // const URL = "https://api.pexels.com/v1/curated?per_page=20";
    // const CONFIG = {
    //   headers: {
    //     Accept: "application/json",
    //     Authorization: process.env.REACT_APP_API_KEY,
    //   },
    // };
    // axios
    //   .get(URL, CONFIG)
    //   .then((res) => {
    //     setHomePhotos(res.data.photos);
    //   })
    //   .catch((error) => alert(error));

    setHomePhotos(data);
  }, []);

  return (
    <AppContext.Provider
      value={{
        width,
        toggled,
        setToggled,
        homePhotos,
        saveFavorite,
        favorites,
        deleteFavorite,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
