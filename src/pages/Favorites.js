import React from 'react';
import { useFavorites } from './FavoritesContext';
import { useNavigate } from 'react-router-dom';
import './Favorites.css';

const Favorites = () => {
    const { getFavoritesByType, removeFavorite } = useFavorites();
    const navigate = useNavigate();

    const myntraFavorites = getFavoritesByType('Myntra') || [];
    const ajioFavorites = getFavoritesByType('Ajio') || [];
    const amazonFavorites = getFavoritesByType('Amazon') || [];
    const zomatoFavorites = getFavoritesByType('Zomato') || [];

    const handleRemove = (code, type) => {
        removeFavorite(code, type);
        navigate(`/${type.toLowerCase()}-coupons`); // Navigate back to the respective page
    };

    const renderFavorites = (favorites, type) => (
        favorites.length > 0 ? (
            <div className="favorites-list">
                {favorites.map((favorite, index) => (
                    <div key={index} className="favorite-card">
                        <img src={favorite.image} alt={favorite.title} className="favorite-image" />
                        <div className="favorite-content">
                            <h3>{favorite.title}</h3>
                            <p>Code: {favorite.code}</p>
                            <p>Type: {type}</p>
                            <button
                                className="remove-button"
                                onClick={() => handleRemove(favorite.code, type)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <p className="no-favorites">No {type} favorites yet!</p>
        )
    );

    return (
        <div className="favorites-container">
            <h2 className="favorites-heading">Favorites</h2>
            <div className="favorites-section">
                <h3 className="favorites-subheading">Myntra Favorites</h3>
                {renderFavorites(myntraFavorites, 'Myntra')}
            </div>
            <div className="favorites-section">
                <h3 className="favorites-subheading">Ajio Favorites</h3>
                {renderFavorites(ajioFavorites, 'Ajio')}
            </div>
            <div className="favorites-section">
                <h3 className="favorites-subheading">Amazon Favorites</h3>
                {renderFavorites(amazonFavorites, 'Amazon')}
            </div>
            <div className="favorites-section">
                <h3 className="favorites-subheading">Zomato Favorites</h3>
                {renderFavorites(zomatoFavorites, 'Zomato')}
            </div>
        </div>
    );
};

export default Favorites;
