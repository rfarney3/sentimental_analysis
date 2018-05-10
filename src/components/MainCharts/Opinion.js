import React from "react"
import { Bar } from "react-chartjs-2"
import { connect } from "react-redux"

class OpinionChart extends React.Component {

  getEmotionByCategory = (emotion, category)  => {
    if(this.props.articles.loading === true) {
      let categoryData = this.props.articles.articles.filter((article) => {
        return article.category === category
      })
      let categoryEmotionData = categoryData.map((emotionObj) => {
        return parseInt(emotionObj[emotion] * 100, 10)
      })
      return this.getAverage(categoryEmotionData)
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
        labels: ["'Opinion' Sentimental Analysis (from May 3, 2018)"],
        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.getEmotionByCategory("anger", "Opinion")],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.getEmotionByCategory("joy", "Opinion")],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.getEmotionByCategory("fear", "Opinion")],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.getEmotionByCategory("surprise", "Opinion")],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.getEmotionByCategory("sadness", "Opinion")],
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

export default connect(mapStateToProps)(OpinionChart);
