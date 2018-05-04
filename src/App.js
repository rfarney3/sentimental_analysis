import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import './App.css';
// import { connect } from "react-redux"

//components
import Login from "./components/Login.js"
import Home from "./components/Home.js"
import NewYorkTimes from "./components/NewsChannels/NewYorkTimes.js"
import BBC from "./components/NewsChannels/BBC.js"
import Fox from "./components/NewsChannels/Fox.js"
import CNN from "./components/NewsChannels/CNN.js"
import ABC from "./components/NewsChannels/ABC.js"


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
        <Route exact path="/Home" render={(renderProps) => {
          return <Home/> }}/>
        <Route exact path="/NewYorkTimes" render={(renderProps) => {
          return <NewYorkTimes/>}}/>
        <Route exact path="/BBC" render={(renderProps) => {
          return <BBC/>}}/>
        <Route exact path="/Fox" render={(renderProps) => {
          return <Fox/>}}/>
        <Route exact path="/CNN" render={(renderProps) => {
          return <CNN/>}}/>
        <Route exact path="/ABC" render={(renderProps) => {
          return <ABC/>}}/>
      </div>
    );
  }
}

export default App
