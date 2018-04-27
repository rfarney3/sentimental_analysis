import React from "react"
import NavBar from "./NavBar.js"

import { connect } from "react-redux"
import { fetchArticles } from "../actions/articleActions.js"
import { bindActionCreators } from "redux"
import NewsCard from "./NewsCard.js"


class Home extends React.Component {

  componentDidMount() {
    this.props.getArticles()
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
        <div className="ui vertically divided grid">
          <div className="two column row">
            {this.props.articles.loading === true ? this.createCards() : null}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticles: bindActionCreators(fetchArticles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
