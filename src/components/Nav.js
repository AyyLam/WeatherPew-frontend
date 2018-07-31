import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Nav = (props) => {

    return (
      <div className="wrapper">
        {props.user.name ? <Link to='/user'>{props.user.name}'s Profile </Link> : <Link to='/login' > Log In </Link>}
        {props.user.name ? <Link to='/logout'> Log Out </Link> : null}
      </div>
    )

}

export default Nav;
