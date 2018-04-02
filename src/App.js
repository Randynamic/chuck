import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chuck Norris Case</h1>
        </header>
        <div>
        <button onClick={this.fetchData}>Generate Chuck Jokes</button>
          <ul>
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
