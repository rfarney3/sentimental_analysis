import React from "react"
import { Bar } from "react-chartjs-2"

import { connect } from "react-redux"

class NYRegionChart extends React.Component {

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
        labels: ["N.Y. / Region"],
        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.getEmotionByCategory("anger", "N.Y. / Region")],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.getEmotionByCategory("joy", "N.Y. / Region")],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.getEmotionByCategory("fear", "N.Y. / Region")],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.getEmotionByCategory("surprise", "N.Y. / Region")],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.getEmotionByCategory("sadness", "N.Y. / Region")],
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
      <div>
        <Bar data={data}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles,
  }
}

export default connect(mapStateToProps)(NYRegionChart);
