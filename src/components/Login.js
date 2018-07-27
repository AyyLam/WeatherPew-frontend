import React from 'react'
import LoginForm from './LoginForm'

const Login = (props) => {

  return (
    <div>
      <LoginForm handleLogin={props.handleLogin} user={props.user}/>
    </div>
  )



}

export default Login
