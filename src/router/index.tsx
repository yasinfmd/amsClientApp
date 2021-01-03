import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

//CustomRoute
import ApplicationRoute from '../components/ApplicationRouter'
import { DynamicRouter } from './routerConst'

const Routers = () => {
  return (
    <Router>
      <Switch>
        {DynamicRouter.map((routeItem, index) => {
          return (
            <ApplicationRoute
              key={index}
              path={routeItem.path}
              layout={routeItem.layout}
              lazyPath={routeItem.importPath}
              routeProtection={routeItem.routeProtection}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export default Routers
