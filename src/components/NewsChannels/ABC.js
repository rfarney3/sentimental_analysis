import React from "react"
import NavBar from "../NavBar.js"
import ABCNewsCard from "./ABCNewsCard.js"
import MainChart from "../MainCharts/MainChart.js"

import { Bar } from "react-chartjs-2"

import { connect } from "react-redux"
import { fetchArticles } from "../../actions/articleActions.js"
import { bindActionCreators } from "redux"


class ABC extends React.Component {

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

  createCards = () => {
    if (this.props.articles.loading === true) {
      return this.props.articles.articles.map((article, index) => {
        if (article.news_station === "American Broadcasting Corporation") {
          return <ABCNewsCard key={index} title={article.headline} abstract={article.abstract} url={article.url} image={article.image} anger={article.anger} fear={article.fear} joy={article.joy} sadness={article.sadness} surprise={article.surprise}/>
        }
      })
    }
  }


  render() {
    console.log("bb", this.props);
    this.createCards()
    return (
      <div className="home-page">
        <NavBar />
        <MainChart />
        {this.props.articles.loading === true ? this.createCards() : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(ABC);
