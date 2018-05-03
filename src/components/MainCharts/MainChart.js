import React from "react"
import { Bar } from "react-chartjs-2"
import { connect } from "react-redux"

class MainChart extends React.Component {

  // getEmotionByCategory = (specificEmotion, station)  => {
  //   if(this.props.articles.loading === true) {
  //     let arrayOfData = this.props.articles.emotions.map((emotionObj) => {
  //       return parseInt(emotionObj[specificEmotion] * 100, 10)
  //     })
  //     return this.getAverage(arrayOfData)
  //   } else {
  //     return null
  //   }
  // }
  getEmotionForNYT = (emotion) => {
    if(this.props.articles.loading === true) {
      let filteredArticles = this.props.articles.articles.filter((article) => {
        return article.news_station === "New York Times"
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
    console.log(this.getEmotionForNYT("anger"))
    // const data = {
    //     labels: ["All Time Mood (from #AboutAWeekAgo)"],
    //     datasets: [
    //         {
    //             label: "Anger",
    //             backgroundColor: '#FF4136',
    //             borderWidth: 1,
    //             data: [this.getEmotionForNYT("anger")],
    //         },
    //         {
    //             label: "Joy",
    //             backgroundColor: '#A1E9F4',
    //             borderWidth: 1,
    //             data: [this.getEmotionForNYT("joy")],
    //         },
    //         {
    //             label: "Fear",
    //             backgroundColor: '#480710',
    //             borderWidth: 1,
    //             data: [this.getEmotionForNYT("fear")],
    //         },
    //         {
    //             label: "Surprise",
    //             backgroundColor: '#01FF70',
    //             borderWidth: 1,
    //             data: [this.getEmotionForNYT("surprise")],
    //         },
    //         {
    //             label: "Sadness",
    //             backgroundColor: '#001f3f',
    //             borderWidth: 1,
    //             data: [this.getEmotionForNYT("sadness")],
    //         }
    //     ],
    //     scaleBeginAtZero : true,
    //     options: {
    //       scales: {
    //         xAxes: [{
    //           stacked: true,
    //         }],
    //           yAxes: [{
    //             stacked: true,
    //             ticks: {
    //               beginAtZero: true
    //             },
    //           }]
    //       }
    //     }
    // }

    return (
      <div>

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
