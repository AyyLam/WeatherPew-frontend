import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../index.css'

const Nav = (props) => {
  const handleClick = () => {
    return props.handleLogout()
  }

  const handleState = () => {
    props.resetFav()
  }


    return (
      <div className="wrapper">
        {props.user.name ? <Link to='/user' onClick={handleState}>{props.user.name}'s Profile </Link> : <Link to='/login'> Log In </Link>}
        {props.user.name ? <Link to='/login' onClick={handleClick}> Log Out </Link> : null}
      </div>
    )

}

export default Nav;
