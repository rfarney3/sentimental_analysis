import React from "react"
import { Button } from "antd"
import WorldChart from "./MainCharts/World.js"
import BusinessChart from "./MainCharts/Business.js"
import NYRegionChart from "./MainCharts/NYRegion.js"
import OpinionChart from "./MainCharts/Opinion.js"
import USChart from "./MainCharts/US.js"
import MainChart from "./MainCharts/MainChart.js"


class Charts extends React.Component {
  state = {
    category: ""
  }

  handleClick = (event) => {
    this.setState({
      category: event.target.children["0"].innerText
    })
  }

  renderCharts = () => {
    if(this.state.category === "World") {
      return <WorldChart />
    } else if (this.state.category === "Business Day") {
      return <BusinessChart />
    } else if (this.state.category === "Opinion") {
      return <OpinionChart />
    } else if (this.state.category === "N.Y/Region") {
      return <NYRegionChart />
    } else if (this.state.category === "U.S.") {
      return <USChart />
    } else {
      return <MainChart />
    }
  }

  render() {
    return (
      <div>
        <div style={{"marginLeft":"10%", "marginRight":"10%"}}>
          {this.renderCharts()}
        </div>
        <br/>
        <div className="buttons-div">
          <Button onClick={this.handleClick} >All Articles</Button>
          <Button onClick={this.handleClick} >Business Day</Button>
          <Button onClick={this.handleClick} >Opinion</Button>
          <Button onClick={this.handleClick} >N.Y/Region</Button>
          <Button onClick={this.handleClick} >U.S.</Button>
          <Button onClick={this.handleClick} >World</Button>
        </div>
      </div>
    )
  }
}


export default Charts
