import React from 'react'
import './App.css'
import 'materialize-css'
import Header from './components/Header'

import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './scenes/Login'
import Orders from './scenes/Orders'
import Users from './scenes/Users'
import Products from './scenes/Products'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
        <Route path="/orders" component={Orders} />
        <Route path="/" component={Login} />
      </Switch>
      <Footer />
    </Router>
   
  )
}

export default App
