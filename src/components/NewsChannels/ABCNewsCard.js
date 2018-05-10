import React from "react"
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
    }
    const options = {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
                  fontSize: 16
              }
          }],
      }
    }
    const image = this.props.image === null ? "https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e3/5b/08/e35b0864-bcae-517c-b2b0-d5481996818a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/1200x630bb.jpg" : this.props.image

    return (
      <div>
        <Col className="news-card" span={6}>
          <div className="card-floater">
            <a href={this.props.url} target="_blank"><img alt="ABC pic" style={{"width":"100px", "height":"70px", "marginTop":"5%", "borderRadius":"5%"}}src={image}/></a>
            <br/>
          </div>

          <div className="content">
            <img alt="sup" style={{"width":"30px", "borderRadius":"30%"}}src="https://is5-ssl.mzstatic.com/image/thumb/Purple128/v4/e3/5b/08/e35b0864-bcae-517c-b2b0-d5481996818a/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-4.png/1200x630bb.jpg"/>

            <span className="card-title">{this.props.title}</span> <br/>
            <a href={`https://twitter.com/intent/tweet?url=${this.props.url}&text=Yo%20This%20Ish%20Craaaazy`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"><i aria-label="Share on Twitter" class="SectionBarShare-shareIcon--2Rcfq SectionBarShare-twitter--1duan"></i>Tweet</a>
            <br/>
            <br/>
            <p style={{"fontStyle":"italic"}}>Abstract:</p>
            <p>{this.props.abstract}</p>
            <Bar data={data} options={options}/>
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

export default ABCNewsCard;
