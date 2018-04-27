import React from "react"
import { Redirect } from "react-router"

class Login extends React.Component {

  state = {
    fireRedirect: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      fireRedirect: true
    })
  }

  render() {
    return (
      <div>
        Welcome! Login in for garbage
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="submit"/>
        </form>
        {this.state.fireRedirect && (<Redirect to={"/home"}/>)}
      </div>
    )
  }
}

export default Login
