import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/articleActions.js';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      fields: {
        email: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { email, password } } = this.state;
    this.props.loginUser(email, password, this.props.history);
  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        {this.state.error ? <h1>Try Again</h1> : null}
        <div className="ui form">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="email"
                placeholder="email"
                value={fields.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, actions)(Login));







// import React from "react"
// import { Redirect } from "react-router"
//
// class Login extends React.Component {
//
//   state = {
//     fireRedirect: false
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.setState({
//       fireRedirect: true
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         Welcome! Login in for garbage
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" placeholder="email"/>
//           <input type="password" placeholder="password"/>
//           <input type="submit"/>
//         </form>
//         {this.state.fireRedirect && (<Redirect to={"/Home"}/>)}
//       </div>
//     )
//   }
// }
//
// export default Login
