import React, { useState } from "react";

function ListingCard({ item: { id, image, description, location }, onDeleteClick }) { //pass in keys to item array
  const [isLiked, setIsliked] = useState(false)

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, { //pull in key from click
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => onDeleteClick(id)) //send this up to App to update State via callback 
  }
  
  return (
    <li className="card" >
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button 
            onClick={() => setIsliked(false)} 
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button 
            onClick={() => setIsliked(true)} 
            className="emoji-button favorite"
          >
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
