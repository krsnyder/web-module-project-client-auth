import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {

  return (
    <div className="nav">
      <NavLink
        activeClassName="active"
        className="link"
        exact to="/"
      >
        Home
      </NavLink>
      
      <NavLink
        activeClassName="active"
        className="link"
        exact to="/login"
      >
        Log In
      </NavLink>
    </div>
  )
}
