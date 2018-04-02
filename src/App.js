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
    fetch("http://api.icndb.com/jokes/random/10")
    .then( (response) => {
      return response.json() })
    .then( (json) => {
      this.setState({data: json.value});
      console.log(this.state.data);
    })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chuck Norris Case</h1>
        </header>
        <div>
          <ul>
            {
              this.state.data.map(function(item) {
                return (
                  <div className="Employee">
                    <li> {item.joke} </li>
                  </div>
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
