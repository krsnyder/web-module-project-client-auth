import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Home Screen</h1>
        <Link className="button" to="/login">Click here to Login</Link>
      </div>
    </div>
  )
}
