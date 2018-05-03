import React from "react"
import NavBar from "./NavBar.js"
import { Line } from "react-chartjs-2"

import { connect } from "react-redux"
import { fetchCNNArticles } from "../actions/articleActions.js"
import { fetchNYTArticles } from "../actions/articleActions.js"
import { fetchBBCArticles } from "../actions/articleActions.js"
import { fetchFoxArticles } from "../actions/articleActions.js"
import { fetchABCArticles } from "../actions/articleActions.js"

import { bindActionCreators } from "redux"


class Home extends React.Component {

  componentDidMount() {
    this.props.getCNNArticles()
    this.props.getNYTArticles()
    this.props.getABCArticles()
    this.props.getBBCArticles()
    this.props.getFoxArticles()
  }

  render() {
    console.log("home", this.props);
    const data = {
        labels: ["Anger", "Joy", "Fear", "Surprise", "Sadness"],

        datasets: [{
          label: "New York Times",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [420, 69, 42, 0, 6, 9]
        },
        {
          label: "CNN",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 9, 420, 0, 69, 9]
        },
        {
          label: "Fox",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [6, 69, 420, 9, 42, 0]
        },
        {
          label: "ABC",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [0, 30, 60, 90, 120, 69]
        },
        {
          label: "BBC",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [30, 50, , 0, 69, 9]
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
      <div>
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
    getCNNArticles: bindActionCreators(fetchCNNArticles, dispatch),
    getBBCArticles: bindActionCreators(fetchBBCArticles, dispatch),
    getNYTArticles: bindActionCreators(fetchNYTArticles, dispatch),
    getABCArticles: bindActionCreators(fetchABCArticles, dispatch),
    getFoxArticles: bindActionCreators(fetchFoxArticles, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
