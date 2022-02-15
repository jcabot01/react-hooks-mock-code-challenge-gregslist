import React from "react";

function Search({ setSearch, search }) { //pass down State of search and the setter
  

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(search) //send State of search bar up to App via callback
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
