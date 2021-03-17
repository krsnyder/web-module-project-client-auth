import React, {useState} from 'react'

const emptyCredentials = {
  username: "",
  password: ""
}

export default function Login() {
  const [credentials, setCredentials] = useState(emptyCredentials)

  const onChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
}

  const login = e => {
    e.preventDefault()
  }

  return (
    <div className="login-content">
      Login Page
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
