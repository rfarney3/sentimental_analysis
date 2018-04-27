import React from "react"
import { NavLink } from "react-router-dom"

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" className="normal" activeClassName="active" exact>Login</NavLink>
          </li>
          <li>
            <NavLink to="/home" className="normal" activeClassName="active" exact>Home</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
