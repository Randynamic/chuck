import React, { Component } from 'react';
import './App.css';
// import './login';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  };

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    fetch("http://api.icndb.com/jokes/random/10")
    .then( (response) => {
      return response.json() })
    .then( (json) => {
      this.setState({data: json.value});
      console.log(this.state.data);
    })
  }


  //Wilt niet werken in <li> Uitzoeken en fixen
  favoriteItem = () => {
    for (let item in localStorage) {
      console.log(item, ' = ', localStorage[item]);
    }

    // if(!fav) {
    //   localStorage.setItem(id, joke);
    //   //+ set className fav
    // } else {
    //   localStorage.removeItem(id)
    // }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris Case</h1>
        </header>
        <div>
        <button onClick={this.fetchData}>Generate Chuck Jokes</button>
          <ul onClick={this.favoriteItem} className="Chuck-joke">
            {
              this.state.data.map(function(item) {
                return (
                    <li key={item.id}> {item.joke} </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
