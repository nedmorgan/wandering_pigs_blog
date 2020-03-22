import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
