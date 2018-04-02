import React, { Component } from 'react';
import './login.css';

class Login extends Component {

  constructor(){
    super();
  };

  checkDoubles(string){
    //checkt of password twee maal dubbele letters bevat
    //Mag toch alleen lowercase bevatten
    return /([a-z])\1.*([a-z])\2/.test(string);
  }

  checkForbidden(string){
    //checkt op verboden karakters i o en l
    return /(i|o|l)/.test(string);
  }

  checkLength(string){
    //check of password 32 karakters of kleiner is
    return string.length <= 32;
  }

  checkUpperCase(string){
    //check of er Uppercase karakters invoorkomen
    return (/[A-Z]/.test(string));
  }

  checkIncreaseChar(string){
    //check of er drie opeenvolgende karakters zijn
    //cijfers tellen niet mee. Wel a-x
    let checker = false;
    for(let i = 0; i < string.length-2; i++){
      if(
        string.charCodeAt(i) === (string.charCodeAt(i+1)-1) &&
        string.charCodeAt(i) === (string.charCodeAt(i+2)-2) &&
        string.charCodeAt(i) >= 'a'.charCodeAt(0) &&
        string.charCodeAt(i) <= 'x'.charCodeAt(0) ){
        checker = true;
      }
    }
    return checker;
  }

  checkAllRequirements(string){
    return checkDoubles(string) && checkLength(string) && checkIncreaseChar(string) && !checkForbidden(string) && !checkUpperCase(string);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Chuck Norris Case</h1>
        </header>
        <div className="Passwordbox">
          <input type='text' className="Passwordbox">Generate Chuck Jokes</button>
        </div>
      </div>
    );
  }
}

export default Login;
