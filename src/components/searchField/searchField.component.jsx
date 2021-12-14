import React from "react";
import './search.style.css';

function SearchField(props){
    return (
        <input className='search' type='search' placeholder='Search Monsters' onChange={props.onChange}/>
    )
}

export default SearchField;