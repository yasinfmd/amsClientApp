import { Route } from 'react-router-dom'
import React from 'react'

const PublicRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />
      }}
    ></Route>
  )
}

export default React.memo(PublicRoute)
