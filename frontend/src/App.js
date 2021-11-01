import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home'
import Product from './Pages/Product'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
