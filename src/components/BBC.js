import React from "react"
import NavBar from "./NavBar.js"
import BBCNewsCard from "./BBCNewsCard.js"
import MainChart from "./MainCharts/MainChart.js"

import { Bar } from "react-chartjs-2"

import { connect } from "react-redux"
import { fetchBBCArticles } from "../actions/articleActions.js"
import { bindActionCreators } from "redux"


class BBC extends React.Component {

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
      return <BBCNewsCard key={index} title={article.headline} abstract={article.abstract} url={article.url} image={article.image} anger={article.anger} fear={article.fear} joy={article.joy} sadness={article.sadness} surprise={article.surprise}/>
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
    defaultChart: state.defaultChart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: bindActionCreators(fetchBBCArticles, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BBC);
