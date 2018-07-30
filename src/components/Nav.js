import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
      <div>
      NAV BAR
      <Link to='/user' >
        Name: {props.user}
      </Link>
      </div>

    )

}

export default Nav;
