import React from 'react'

class LoginForm extends React.Component {

  state = {
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  render () {
    return (
      <div className="loginform">
        <h3>Log In</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleChange}/>
          <br/>
          <label>Password</label>
          <input type="password"/>
          <br/>
          <input type="submit" value="Submit"/>
          </form>
      </div>
      )
  }
  handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleLogin(this.state.username)
    }


}

export default LoginForm
