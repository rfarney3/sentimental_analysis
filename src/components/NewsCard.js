import React from "react"
import { connect } from "react-redux"

const NewsCard = (props) => {
  // console.log("prrrroooop", props);
  return (
    <div className="column">
      <img src={props.image}/>
      <h3>{props.title}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProps)(NewsCard);
