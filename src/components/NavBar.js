import React from "react"
import { NavLink } from "react-router-dom"

class NavBar extends React.Component {

  render() {
    return (
      <div className="nav">
        <NavLink to="/" className="normal" activeClassName="active" exact>Login</NavLink> <br/>
        <NavLink to="/Home" className="normal" activeClassName="active" exact>Home</NavLink><br/>
        <NavLink to="/NewYorkTimes" className="normal" activeClassName="active" exact>New York Times</NavLink><br/>
        <NavLink to="/BBC" className="normal" activeClassName="active" exact>BBC</NavLink><br/>
        <NavLink to="/Fox" className="normal" activeClassName="active" exact>Fox</NavLink><br/>
        <NavLink to="/CNN" className="normal" activeClassName="active" exact>CNN</NavLink><br/>
        <NavLink to="/ABC" className="normal" activeClassName="active" exact>ABC</NavLink>
      </div>
    )
  }
}

export default NavBar
