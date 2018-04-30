import React from "react"
import NewsCard from "./NewsCard.js"
import { Col } from 'antd';


class Category extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  createCards = (category) => {
    if (this.props.loading === true) {
    return this.props.articles.articles.map((article, index) => {
      if (article.category === category ) {
        return <NewsCard key={index} title={article.headline} abstract={article.abstract} section={article.category} url={article.url} image={article.image} anger={article.anger} fear={article.fear} joy={article.joy} sadness={article.sadness} surprise={article.surprise}/>
        }
      })
    }
  }


  render() {
    return (
      <div onClick={this.handleClick}>
        <Col className="news-card" span={6}>
        <h2>{this.props.category}</h2>
          <div className="card-floater">
            <div>
              {this.state.clicked ? this.createCards(this.props.category) : null}
            </div>
          </div>
        </Col>
      </div>
    )
  }
}


export default Category
