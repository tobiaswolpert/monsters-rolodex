import './App.css';
import React, {Component} from 'react';
import CardList from './components/card-list/card-list.component';
import SearchField from './components/searchField/searchField.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  
  handleInput = (event) => this.setState({searchField: event.target.value}, () => console.log(this.state));

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
  }

  render() {

  const filteredArray = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()));

  return (
    <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchField onChange={this.handleInput}/>
        <CardList monsters={filteredArray}/>
    </div>
  );
}
}

export default App;
