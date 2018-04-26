import React from "react"
import NavBar from "./NavBar.js"
import NewsCard from "./NewsCard.js"

class Home extends React.Component {

  createCards = () => {
    return this.props.articles.map((article) => {
      return <NewsCard key={article.url} title={article.title} abstract={article.abstract} section={article.section} url={article.short_url} image={article.multimedia[0]} />
    })
  }

  render() {
    // console.log(this.props.articles);
    return (
      <div>
        <NavBar />
        {this.createCards()}
      </div>
    )
  }
}

export default Home
