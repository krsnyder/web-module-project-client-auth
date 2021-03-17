import './App.css';
import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
    <Nav />

      <div className="content">

        <Switch>
          <Route path='/login' component={Login} />
          <Route component={Home} />
        </Switch>

      </div>

    </div>
  );
}

export default App;
