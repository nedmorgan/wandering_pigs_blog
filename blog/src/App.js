import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
        <div id='content-wrap'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
