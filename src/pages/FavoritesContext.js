import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (coupon, type) => {
        setFavorites((prevFavorites) => [...prevFavorites, { ...coupon, type }]);
    };

    const removeFavorite = (code, type) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.code !== code || favorite.type !== type)
        );
    };

    const getFavoritesByType = (type) => {
        return favorites.filter((favorite) => favorite.type === type);
    };

    return (
        <FavoritesContext.Provider value={{ addFavorite, removeFavorite, getFavoritesByType }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);