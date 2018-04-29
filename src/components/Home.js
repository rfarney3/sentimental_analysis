import React from "react"
import NavBar from "./NavBar.js"

import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions.js"
import { bindActionCreators } from "redux"
import NewsCard from "./NewsCard.js"
import { Layout, Divider } from "antd"
// import { Card, Col, Row } from 'antd';

const { Header } = Layout

class Home extends React.Component {

  componentDidMount() {
    this.props.getArticles()
  }

  createCards = () => {
    return this.props.articles.articles.map((article, index) => {
      return <NewsCard key={index} title={article.headline} abstract={article.abstract} section={article.category} url={article.short_url} image={article.image} />
    })
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <NavBar />
        <Header style={{background: "white"}}>
        </Header>
        <Divider />
        {this.props.articles.loading === true ? this.createCards() : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
