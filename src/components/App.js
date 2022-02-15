import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

////can search for listings by "description", grab dataSearch from onSubmit in <Search/> => callback to ListingContainer; .filter(if listings.description === dataSearch) return ....

function App() {
  const [items, setItems] = useState([]); //State of listings
  const [search, setSearch] = useState(""); //State of search bar

  //GET
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((item) => setItems(item))
  }, [])//only render once thanks to dependencies array

  //callback to handle DELETE in ListingCard, take in Id from clicked item
  function onDeleteClick(id){ 
    const nonDeleted = items.filter((item) => item.id !== id);
    setItems(nonDeleted) 
  }

  //convert items description and search input to lowercase, and match the two, then send down to container
  const itemsToDisplay = items.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="app">
      <Header 
        setSearch={setSearch} 
        search={search} 
      />
      <ListingsContainer 
        onDeleteClick={onDeleteClick} 
        items={itemsToDisplay} 
      />
    </div>
  );
}

export default App;
