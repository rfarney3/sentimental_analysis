import React from "react"
import NavBar from "./NavBar.js"
import { Line } from "react-chartjs-2"

import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions.js"

import { bindActionCreators } from "redux"


class Home extends React.Component {

  componentDidMount() {
    this.props.getArticles()
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
        labels: ["Anger", "Joy", "Fear", "Surprise", "Sadness"],

        datasets: [{
          label: "New York Times",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "black",
          borderColor: "black",
          data: [this.getEmotionByStation("anger", "New York Times"), this.getEmotionByStation("joy", "New York Times"), this.getEmotionByStation("fear", "New York Times"), this.getEmotionByStation("surprise", "New York Times"), this.getEmotionByStation("sadness", "New York Times")]
        },
        {
          label: "CNN",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "blue",
          borderColor: "blue",
          data: [this.getEmotionByStation("anger", "Cable News Network"), this.getEmotionByStation("joy", "Cable News Network"), this.getEmotionByStation("fear", "Cable News Network"), this.getEmotionByStation("surprise", "Cable News Network"), this.getEmotionByStation("sadness", "Cable News Network")]
        },
        {
          label: "Fox",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "red",
          borderColor: "red",
          data: [this.getEmotionByStation("anger", "Fox News"), this.getEmotionByStation("joy", "Fox News"), this.getEmotionByStation("fear", "Fox News"), this.getEmotionByStation("surprise", "Fox News"), this.getEmotionByStation("sadness", "Fox News")]
        },
        {
          label: "ABC",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "green",
          borderColor: "green",
          data: [this.getEmotionByStation("anger", "American Broadcasting Corporation"), this.getEmotionByStation("joy", "American Broadcasting Corporation"), this.getEmotionByStation("fear", "American Broadcasting Corporation"), this.getEmotionByStation("surprise", "American Broadcasting Corporation"), this.getEmotionByStation("sadness", "American Broadcasting Corporation")]
        },
        {
          label: "BBC",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "orange",
          borderColor: "orange",
          data: [this.getEmotionByStation("anger", "British Broadcasting Corporation"), this.getEmotionByStation("joy", "British Broadcasting Corporation"), this.getEmotionByStation("fear", "British Broadcasting Corporation"), this.getEmotionByStation("surprise", "British Broadcasting Corporation"), this.getEmotionByStation("sadness", "British Broadcasting Corporation")]
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
              }]
          }
        }
    }

    return (
      <div className="home-page">
        <NavBar />
        <Line data={data}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
