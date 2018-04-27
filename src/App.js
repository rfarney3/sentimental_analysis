import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import './App.css';
// import { connect } from "react-redux"

//components
import Login from "./components/Login.js"
import Home from "./components/Home.js"

class App extends Component {
  render() {
    // console.log(this.state.headlines);
    // console.log(this.state.articles);

  // submitForm = (history) => {
  //   if (this.state.form.signingUp) {
  //     this.register(history)
  //   } else if (this.state.form.username !== '') {
  //     this.setState({
  //       form: {
  //         ...this.state.form,
  //         loggedIn: true
  //       }
  //       // currentUser: this.findUser()
  //     }, () => {
  //       history.push("/settings")
  //     })
  //   }
  // }
  
    return (
      <div>
        <Route exact path="/" render={(renderProps) => {
          return <Login/> }}/>
        <Route exact path="/home" render={(renderProps) => {
          return <Home/>}}/>
      </div>
    );
  }
}

export default App
