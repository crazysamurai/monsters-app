import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import Searchbox from "./components/searchbox/searchbox";

const randomNumber = () => {
  let num = Math.trunc(Math.random() * 100);
  console.log(num);
};

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    randomNumber();
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, search } = this.state;
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox
          placeholder="Type here to search"
          handleChange={(e) => this.setState({ search: e.target.value })}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
