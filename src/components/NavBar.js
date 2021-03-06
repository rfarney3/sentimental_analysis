import React from "react"
import { Menu, Icon } from "antd"
const SubMenu = Menu.SubMenu

class NavBar extends React.Component {


  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="mail"><Icon type="user-add" />
            <span><a href="http://localhost:3001/login" rel="noopener noreferrer">Login</a></span>
          </Menu.Item>
          <Menu.Item key="app" ><Icon type="line-chart" />
            <span><a href="http://localhost:3001/Home" rel="noopener noreferrer">Home</a></span>
          </Menu.Item>
        <SubMenu title={<span><Icon type="down" />News Stations</span>}>
          <Menu.Item key="setting:1">
            <a href="http://localhost:3001/NewYorkTimes" rel="noopener noreferrer">New York Times</a>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <a href="http://localhost:3001/Fox" rel="noopener noreferrer">Fox</a>
          </Menu.Item>
          <Menu.Item key="setting:3">
            <a href="http://localhost:3001/ABC" rel="noopener noreferrer">ABC</a>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <a href="http://localhost:3001/CNN" rel="noopener noreferrer">CNN</a>
          </Menu.Item>
          <Menu.Item key="setting:5">
            <a href="http://localhost:3001/BBC" rel="noopener noreferrer">BBC</a>
          </Menu.Item>
        </SubMenu>
      </Menu>
      </div>
    )
  }
}

export default NavBar
