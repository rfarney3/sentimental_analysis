import React from "react"
import { Col } from 'antd';
import { Bar } from "react-chartjs-2"


class NYTNewsCard extends React.Component {
  render() {
    const data = {

        datasets: [
            {
                label: "Anger",
                backgroundColor: '#FF4136',
                borderWidth: 1,
                data: [this.props.anger],
            },
            {
                label: "Joy",
                backgroundColor: '#A1E9F4',
                borderWidth: 1,
                data: [this.props.joy],
            },
            {
                label: "Fear",
                backgroundColor: '#480710',
                borderWidth: 1,
                data: [this.props.fear],
            },
            {
                label: "Surprise",
                backgroundColor: '#01FF70',
                borderWidth: 1,
                data: [this.props.surprise],
            },
            {
                label: "Sadness",
                backgroundColor: '#001f3f',
                borderWidth: 1,
                data: [this.props.sadness],
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
        <Col className="news-card" span={6}>
          <div className="card-floater">
            <a href={this.props.url} target="_blank"><img alt="NYT pic" style={{"width":"100px", "height":"70px", "marginTop":"5%", "borderRadius":"5%"}} src={this.props.image}/></a>
            <br/>
          </div>

          <div className="content">
            <img alt="sup" style={{"width":"30px", "borderRadius":"30%"}}src="http://www.nytimes.com/services/mobile/img/ios-newsreader-icon.png"/>

            <span className="card-title">{this.props.title}</span> <br/><br/>
            <p style={{"fontStyle":"italic"}}>Abstract:</p>
            <p>{this.props.abstract}</p>
            <Bar data={data}/>
          </div>
        </Col>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     articles: state.articles
//   }
// }

export default NYTNewsCard;
