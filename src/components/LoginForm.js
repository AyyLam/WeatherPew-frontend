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
      <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.username} onChange={this.handleChange}/>
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
