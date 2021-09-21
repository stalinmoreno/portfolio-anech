import React from 'react'
import { PageAbout } from '../About/PageAbout'
import { Navbar } from '../Navbar/Navbar'
import { PortfolioApp } from '../../PortfolioApp'
import {
  Redirect,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'

export const MainRoutes = () => {
  return (
    <>
      <div className="App">
        <div className="container">

          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/About" component={PageAbout} />
              <Route path="/" component={PortfolioApp} />
              <Redirect to="/" />
            </Switch>
          </Router>

        </div>
      </div>
    </>
  )
}
