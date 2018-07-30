import React from 'react'

class LoginForm extends React.Component {

  state = {
    username: ''
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }
  render () {
    console.log(this.state.username)
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Moon_rotating_full_220px.gif"/>
      </div>
      )
  }
  handleSubmit = (e) => {
      e.preventDefault()
      this.props.handleLogin(this.state.username)
    }


}

export default LoginForm
