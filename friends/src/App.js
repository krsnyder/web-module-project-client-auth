import './App.css';
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <div className="App">
    <Nav />

      <div className="content">

        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/private' component={PrivateRoute} />
          <Route exact path="/" component={Home} />
        </Switch>

      </div>

    </div>
  );
}

export default App;
