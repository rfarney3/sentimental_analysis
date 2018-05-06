import React from "react"
import NavBar from "../NavBar.js"
import FoxNewsCard from "./FoxNewsCard.js"
import Filter from "../Filter.js"
import { Bar } from "react-chartjs-2"

import { connect } from "react-redux"
import { fetchArticles } from "../../actions/articleActions.js"
import { bindActionCreators } from "redux"


class Fox extends React.Component {

  state = {
    clicked: false,
    input: "",
    filtered: []
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
        if (article.news_station === "Fox News") {
          return <FoxNewsCard key={index} title={article.headline} abstract={article.abstract} url={article.url} image={article.image} anger={article.anger} fear={article.fear} joy={article.joy} sadness={article.sadness} surprise={article.surprise}/>
        } else {
          return null
        }
      })
    }
  }

  createFilteredCards = () => {
    if (this.props.articles.loading === true) {
      return this.state.filtered.map((article, index) => {
        return <FoxNewsCard key={index} title={article.headline} abstract={article.abstract} url={article.url} image={article.image} anger={article.anger} fear={article.fear} joy={article.joy} sadness={article.sadness} surprise={article.surprise}/>
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

  getArticleByStation = (station) => {
    if(this.props.articles.loading === true) {
      return this.props.articles.articles.filter((article) => {
        return article.news_station === station
      })
    }
  }

  onChange = (event) => {
    this.setState({
      input: event.target.value.toLowerCase()
    }, () => this.setState({
      filtered: this.getArticleByStation("Fox News").filter((article) => {
        return article.headline.toLowerCase().includes(this.state.input)
      })
    }))
  }

  render() {
    const data = {
        labels: ["All Time Fox News Sentiment (from #AboutAWeekAgo)"],
        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.getEmotionByStation("anger", "Fox News")],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.getEmotionByStation("joy", "Fox News")],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.getEmotionByStation("fear", "Fox News")],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.getEmotionByStation("surprise", "Fox News")],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.getEmotionByStation("sadness", "Fox News")],
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
        <h1 onClick={this.handleClick}>Fox News Stories</h1>
        <div>
          {this.state.clicked ? <Filter onChange={this.onChange}/> : null}
          {this.state.clicked ? this.state.filtered.length > 0 ? this.createFilteredCards() : this.createCards() : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Fox);
