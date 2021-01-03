import React, { lazy, Suspense, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { useApplicationState } from '../../context/Application/store'
import BallLoader from '../../components/BallLoader'

const Builds = () => {
  let { path } = useRouteMatch()
  useEffect(() => {
    if (path === '/builds') {
      const redirect = () => <Redirect
        to={{
          pathname: '/list'
        }}
      />;
      redirect();
    }
  }, [])
  const lazyComponent = (path: string) => {
    return lazy(() => import(`./pages/${path}`))
  }
  return (
    <>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <Suspense fallback={<BallLoader />}>
          <Switch>
            <Route
              exact
              path={path + '/add'}
              component={lazyComponent('addBuilds')}
            />
            <Route
              exact
              path={path + '/list'}
              component={lazyComponent('buildsList')}
            />
            <Route render={() => <Redirect to={path + '/list'} />} />
          </Switch>
        </Suspense>
      </div>
    </>
  )
}

export default React.memo(Builds)
