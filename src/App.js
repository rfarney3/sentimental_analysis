import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom"
// import { connect } from "react-redux"
//components
import Login from "./components/Login.js"
import Home from "./components/Home.js"

//urls

class App extends Component {
  // state = {
  //   articles: [],
  //   headlines: []
  // }
  //
  // componentDidMount() {
  //   this.fetchArticles()
  // }
  //
  // fetchArticles() {
  //   return fetch(NYT_URL + API_KEY)
  //     .then(resp => resp.json())
  //     .then(json => this.setState({
  //       articles: json.results,
  //       headlines: this.grabHeadlines(json.results)
  //     }))
  // }
  // // , () => (this.postFeels(this.state.headlines))
  //
  // grabHeadlines(data) {
  //   let art = data.map((article) => article.title)
  //   return art
  // }
  //
  // postFeels(headline) {
  //   fetch(INDICO_URL, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       'api_key': INDICO_API_KEY,
  //       'data': headline,
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  // }


  render() {
    // console.log(this.state.headlines);
    // console.log(this.state.articles);
    return (
      <div>
        <Route exact path="/login" render={(renderProps) => {
          return <Login/> }}/>
        <Route exact path="/home" render={(renderProps) => {
          return <Home
          
          />
        }}/>
      </div>
    );
  }
}

// const mapStateToProps =  (state) => {
//   return { articles: this.state.articles }
// }

export default App
// connect(mapStateToProps)(App)
