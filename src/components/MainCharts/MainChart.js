import React from "react"
import { Bar } from "react-chartjs-2"
import { connect } from "react-redux"

class MainChart extends React.Component {

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
        labels: ["Most Popular Stories Sentimental Analysis (from May 3, 2018)"],
        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.getEmotionByStation("anger", "New York Times")],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.getEmotionByStation("joy", "New York Times")],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.getEmotionByStation("fear", "New York Times")],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.getEmotionByStation("surprise", "New York Times")],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.getEmotionByStation("sadness", "New York Times")],
            }
        ],
    }
    const options = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  fontSize: 16
              }
          }],
          xAxes: [{
              ticks: {
                  beginAtZero: true,
                  fontSize: 23
              }
          }]
      }
    }
    return (
      <div className="nyt-charts">
        <Bar data={data} options={options}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(MainChart);
