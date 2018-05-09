import React from "react"
import { Menu, Icon } from "antd"
const SubMenu = Menu.SubMenu

class NavBar extends React.Component {
  state = {
    current: "mail"
  }

  handleClick = (event) => {
    this.setState({
      current: event.key
    })
  }

  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail"><Icon type="mail" />
            <span><a href="http://localhost:3001/login" rel="noopener noreferrer">Login</a></span>
          </Menu.Item>
          <Menu.Item key="app" ><Icon type="appstore" />
            <span><a href="http://localhost:3001/Home" rel="noopener noreferrer">Home</a></span>
          </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />News Stations</span>}>
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

// <NavLink to="/" className="normal" activeClassName="active" exact>Login</NavLink> <br/>
// <NavLink to="/Home" className="normal" activeClassName="active" exact>Home</NavLink><br/>
// <NavLink to="/NewYorkTimes" className="normal" activeClassName="active" exact>New York Times</NavLink><br/>
// <NavLink to="/BBC" className="normal" activeClassName="active" exact>BBC</NavLink><br/>
// <NavLink to="/Fox" className="normal" activeClassName="active" exact>Fox</NavLink><br/>
// <NavLink to="/CNN" className="normal" activeClassName="active" exact>CNN</NavLink><br/>
// <NavLink to="/ABC" className="normal" activeClassName="active" exact>ABC</NavLink>
