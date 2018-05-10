import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
import './App.css';
// import { connect } from "react-redux"
// import { Link } from "react-router-dom"
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
    return (
      <div>

        <Route exact path="/login" render={(renderProps) => {
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
