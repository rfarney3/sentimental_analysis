import React from "react"
import { connect } from "react-redux"
import { Col } from 'antd';
import { Bar } from "react-chartjs-2"


class ABCNewsCard extends React.Component {
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

    const mage = this.props.image === null ? "https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e3/5b/08/e35b0864-bcae-517c-b2b0-d5481996818a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/1200x630bb.jpg" : this.props.image

    return (
      <div>
        <Col className="news-card" span={6}>
          <div className="card-floater">
            <div>
              <p style={{"fontWeight":"400"}}>ABC</p>
              <img alt="sup" style={{"width":"30px", "textAlign":"left"}}src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e3/5b/08/e35b0864-bcae-517c-b2b0-d5481996818a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/1200x630bb.jpg"/>
            </div>
            <a href={this.props.url} target="_blank"><img alt="ABC pic" style={{"width":"100px", "height":"70px"}}src={mage}/></a>
            <br/>
          </div>

          <div className="content">
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
"https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e3/5b/08/e35b0864-bcae-517c-b2b0-d5481996818a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/1200x630bb.jpg"

// const mapStateToProps = state => {
//   return {
//     articles: state.articles
//   }
// }

export default ABCNewsCard;
