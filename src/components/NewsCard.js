import React from "react"
import { connect } from "react-redux"
import { Col } from 'antd';

class NewsCard extends React.Component {
  state = {
    clicked: false
  }

  showAbstract = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <Col className="news-card" span={6}>
          <div className="card-floater">
            <div>
              <p style={{"fontWeight":"400"}}>New York Times</p>
              <img alt="sup" style={{"width":"30px", "textAlign":"left"}}src="http://www.nytimes.com/services/mobile/img/ios-newsreader-icon.png"/>
            </div>
            <img alt="NYT pic" src={this.props.image}/>
            <br/>
          </div>

          <div className="content">
            <span className="card-title">{this.props.title}</span> <br/><br/>
            Category:<p style={{"fontStyle":"italic"}}>{this.props.section}</p>
            <div onClick={this.showAbstract}>
              <p>Click for abstract</p>
              {this.state.clicked ? <p>{this.props.abstract}</p> : null}
              <br/>
            </div>
          </div>
        </Col>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(NewsCard);
