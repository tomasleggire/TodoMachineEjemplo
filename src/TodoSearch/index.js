import React from "react";
import "./TodoSearch.css";


function TodoSearch({searchValue, setSearchValue, loading}) {
  
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
          placeholder="Correr 3 kilometros" 
          className="TodoSearch"
          value={searchValue}
          onChange={onSearchValueChange}
          disabled={loading}
        />
    )
}

export {TodoSearch}