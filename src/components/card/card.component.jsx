import React from 'react';
import './card.styles.css';

function Card(props){
    console.log('card component', props)
    return (
        <div className='card-container'>
            <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}></img>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;