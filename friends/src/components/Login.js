import React, {useState} from 'react'
import axios from 'axios'

const emptyCredentials = {
  username: "Lambda School",
  password: "i<3Lambd4"
}

export default function Login(props) {
  const [credentials, setCredentials] = useState(emptyCredentials)
  // const [isLoading, setIsLoading] = useState(false)

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
}

  const login = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
      })
      .then(() => {
        props.history.push('/private')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="login-content">
      <h1>Login Page</h1>
      <div className="login-form">
        <form onSubmit={login}>
          <label>
            Username:
             <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={onChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={onChange}
            />
          </label>
          <button type="submit">Log In</button>
        </form>
        
      </div>
    </div>
  )
}
