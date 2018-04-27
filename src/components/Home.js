import React from "react"
import NavBar from "./NavBar.js"
import config from "../constants.js"

import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions.js"
import { bindActionCreators } from "redux"
import NewsCard from "./NewsCard.js"
import { Layout, Divider } from "antd"
// import { Card, Col, Row } from 'antd';

const { Header } = Layout
const INDICO_URL = "https://apiv2.indico.io/emotion/batch"


class Home extends React.Component {
  state = {
    headlines: []
  }
  componentDidMount() {
    this.props.getArticles()
  }

  componentDidUpdate(){
    // this.fetchSentiment()
  }

  fetchSentiment() {
    fetch(INDICO_URL, {
      method: "POST",
      body: JSON.stringify({
        'api_key': config.INDICO_API_KEY,
        'data': this.props.articles.headlines
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }


  createCards = () => {
    return this.props.articles.articles.results.map((article) => {
      const articleurl = article.multimedia[0] ? article.multimedia[0].url : "http://www.nytimes.com/services/mobile/img/ios-newsreader-icon.png"
      return <NewsCard key={article.url} title={article.title} abstract={article.abstract} section={article.section} url={article.short_url} image={articleurl} />
    })
  }


  render() {
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
    headlines: state.headlines
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: bindActionCreators(fetchArticles, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
