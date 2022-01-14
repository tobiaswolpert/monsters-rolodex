import './App.css';
import React, { useState, useEffect} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchField from './components/searchField/searchField.component';


const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  const handleInput = (event) => setSearchField(event.target.value);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {setMonsters(users)});
    }, [])

  const filteredArray = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchField onChange={handleInput}/>
        <CardList monsters={filteredArray}/>
    </div>
  );
}

export default App;
