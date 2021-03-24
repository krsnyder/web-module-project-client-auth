import axios from 'axios'
import React from 'react'

export default function FriendsList() {

  const getFriends = () => {
    axios.get('http://localhost:5000/api/friends', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  return (
    <div>
      <button onClick={getFriends}>Get Friends</button>
    </div>
  )
}
