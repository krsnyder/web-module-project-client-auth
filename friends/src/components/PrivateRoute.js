import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import FriendsList from './FriendsList'
import Login from './Login'
// import axios from 'axios'

export default function PrivateRoute(props) {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    token ? props.history.push('/friends') : props.history.push('/login')
  },[])


  return ( 
    <div>
      Private
    </div>
  )
}
