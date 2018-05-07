import React from "react"

class Filter extends React.Component {
  render() {
    return (
      <div style={{"width":"15%"}}>
        <input placeholder="Search by Title" onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default Filter
