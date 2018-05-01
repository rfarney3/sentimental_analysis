import React from "react"
import NavBar from "./NavBar.js"
import Chart from "./Chart.js"
import Category from "./Category.js"

import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions.js"
import { bindActionCreators } from "redux"
// // import { Button } from "antd"
// import { Card } from 'antd';
// import { Carousel } from 'antd';


class Home extends React.Component {

  componentDidMount() {
    this.props.getArticles()
  }

  getUniqueCategories = () => {
    let categoryObj = {}

    if (this.props.articles.loading === true) {
      this.props.articles.articles.forEach((article) => {
        if(!categoryObj[article.category]) {
          categoryObj[article.category] = 1
        } else {
          categoryObj[article.category] += 1
        }
      })
    }
    let uniques = []
    for (let key in categoryObj) {
      if(uniques.indexOf(key) === -1) {
        uniques.push(key)
      }
    }
    return uniques;
  }

  handleUniques = (categoryObj) => {
    let uniques = []
    for (let key in categoryObj) {
      if(uniques.indexOf(key) === -1) {
        uniques.push(key)
      }
    }
    return uniques;
  }

  printCategories = () => {
    let categories = this.getUniqueCategories()
    return categories.map((category, index) => {
      return <Category key={index} category={category} articles={this.props.articles} loading={this.props.articles.loading}/>
    })
  }

  render() {

    return (
      <div>
        <NavBar />
          <Chart allEmotions={this.props.articles}/>
          <h1>News Categories</h1>
          <div><h3>{this.printCategories()}</h3></div>
      </div>
    )
  }
}


// <div className="content">
//   <span className="card-title">{this.props.title}</span> <br/><br/>
//   <p style={{"fontStyle":"italic"}}>Abstract:</p>
//   <p>{this.props.abstract}</p>
//   <Bar data={data}/>


const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: bindActionCreators(fetchArticles, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
