import React from "react"
import NavBar from "../NavBar.js"
import Charts from "../Charts.js"
import Category from "./Category.js"

import { connect } from "react-redux"
import { fetchArticles } from "../../actions/articleActions.js"
import { bindActionCreators } from "redux"


class NewYorkTimes extends React.Component {

  state = {
    clicked: false,
  }

  componentDidMount() {
    this.props.getArticles()
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  getUniqueCategories = () => {
    let categoryObj = {}

    if (this.props.articles.loading === true) {
      this.props.articles.articles.forEach((article) => {
        if (article.news_station === "New York Times") {
          if(!categoryObj[article.category]) {
            categoryObj[article.category] = 1
          } else {
            categoryObj[article.category] += 1
          }
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


  printCategories = () => {
    let categories = this.getUniqueCategories()
    return categories.map((category, index) => {
      return <Category key={index} category={category} articles={this.props.articles} loading={this.props.articles.loading}/>
    })
  }


  render() {
    return (
      <div className="home-page">
        <NavBar />
          <Charts />
          <br/>
          <h1 onClick={this.handleClick}>New York Times News Categories</h1>
          <div>
            <h3>{this.state.clicked ? this.printCategories() : null}</h3>
          </div>
      </div>
    )
  }
}



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

export default connect(mapStateToProps, mapDispatchToProps)(NewYorkTimes);
