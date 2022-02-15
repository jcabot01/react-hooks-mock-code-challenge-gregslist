import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ onDeleteClick, items }) { //initally, this was just a result of GETting the items from db.json and rendering.  
  //But since we are using a search feature (and that has an influence on which items are displayed), we pass down a filtered set of items based on search.
  //no search criteria results in a basic GET with all items, but the search can adjust what we see.
  
  return (
    <main>
      <ul className="cards">
        {items.map((item) => (
          <ListingCard 
            key = {item.id}
            item = {item}
            onDeleteClick={onDeleteClick}
          />
        ))}

      </ul>
    </main>
  );
}

export default ListingsContainer;
