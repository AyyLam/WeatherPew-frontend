import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Nav = (props) => {

    return (
      <div class="wrapper">
        {props.user ? <Link to='/user'>{props.user}'s Profile </Link> : <Link to='/login' > Log In </Link>}
        {props.user ? <Link to='/logout' > Log Out </Link> : null}
      </div>


    )

}

export default Nav;
