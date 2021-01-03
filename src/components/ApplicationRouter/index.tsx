import React, { lazy, Suspense } from 'react'

import { Route } from 'react-router-dom'
import ProtectedRouter from '../ProtectedRouter'
import PublicRoute from '../PublicRouter'
import BallLoading from '../BallLoader'

const ApplicationRouter = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  const lazyComponent = (path: string) => {
    return lazy(() => import(`../../views/${path}`))
  }
  return (
    <Route
      {...rest}
      exact
      render={(props) => {
        return (
          <>
            <Layout>
              <Suspense fallback={<BallLoading />}>
                {rest.routeProtection === false ? (
                  <PublicRoute component={lazyComponent(rest.lazyPath)} />
                ) : (
                  <ProtectedRouter component={lazyComponent(rest.lazyPath)} />
                )}
              </Suspense>
            </Layout>
          </>
        )
      }}
    ></Route>
  )
}

export default React.memo(ApplicationRouter)
