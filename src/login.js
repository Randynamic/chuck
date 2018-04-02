import React, { Component } from 'react';
import './login.css';

class Login extends Component {

  constructor(){
    super();
    //voor directe password check
    this.state = {
      password: ''
    };
  };

  // updatePasswordCheck(e) {
  //   this.setState({password:e.target.value})
  //   console.log(e.target.value)
  // }

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
          <h1 className="App-title">Chuck Norris Case</h1>
        </header>
        <div className="Login-form">
          <input type='text' className="Password-box" placeholder="password.." />
        </div>
      </div>
    );
  }
}

export default Login;
