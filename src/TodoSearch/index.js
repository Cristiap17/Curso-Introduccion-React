import React from "react";
import "./TodoSearch.css"

function TodoSearch({searchValue, setsearchValue, loading}) {

    const onSearchValueChange = (event) =>{
        setsearchValue(event.target.value);
    }

    return ( 

        <input

        className="TodoSearch" 
        placeholder='Cebolla' 
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
        />
    ) ;
}

export{TodoSearch};