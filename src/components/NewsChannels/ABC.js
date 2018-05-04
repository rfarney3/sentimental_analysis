import React from "react"
import NavBar from "../NavBar.js"
import ABCNewsCard from "./ABCNewsCard.js"

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
        } else {
          return null
        }
      })
    }
  }

  getEmotionByStation = (emotion, station) => {
    if(this.props.articles.loading === true) {
      let filteredArticles = this.props.articles.articles.filter((article) => {
        return article.news_station === station
      })
      let emotionObj = filteredArticles.map((article) => {
        return {anger: article.anger, joy: article.joy, fear: article.fear, surprise: article.surprise, sadness: article.sadness}
      })
      let arrayOfData = emotionObj.map((emotes) => {
        return parseInt(emotes[emotion] * 100, 10)
      })
      return this.getAverage(arrayOfData)
    } else {
      return null
    }
  }

  getAverage = (emotionData) => {
    let length = emotionData.length
    let sum = emotionData.reduce((a, b) => {
      return a + b
    }, 0)
    return (sum / length)
  }


  render() {
    const data = {
        labels: ["All Time ABC News Sentiment (from #AboutAWeekAgo)"],
        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.getEmotionByStation("anger", "American Broadcasting Corporation")],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.getEmotionByStation("joy", "American Broadcasting Corporation")],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.getEmotionByStation("fear", "American Broadcasting Corporation")],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.getEmotionByStation("surprise", "American Broadcasting Corporation")],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.getEmotionByStation("sadness", "American Broadcasting Corporation")],
            }
        ],
        scaleBeginAtZero : true,
        options: {
          scales: {
            xAxes: [{
              stacked: true,
            }],
              yAxes: [{
                stacked: true,
                ticks: {
                  beginAtZero: true
                },
              }]
          }
        }
    }

    return (
      <div className="home-page">
        <NavBar />
        <Bar data={data} />
        <h1 onClick={this.handleClick}>ABC News Stories</h1>
        <div>
          {this.state.clicked ? this.createCards() : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(ABC);
