import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import './App.css';
// import { connect } from "react-redux"

//components
import Login from "./components/Login.js"
import NewYorkTimes from "./components/Home.js"
import BBC from "./components/BBC.js"

class App extends Component {
  render() {

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
        <Route exact path="/NewYorkTimes" render={(renderProps) => {
          return <NewYorkTimes/>}}/>
        <Route exact path="/BBC" render={(renderProps) => {
          return <BBC/>}}/>
      </div>
    );
  }
}

export default App
